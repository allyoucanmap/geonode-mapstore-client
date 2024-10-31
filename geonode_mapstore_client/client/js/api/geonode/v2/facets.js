/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from '@mapstore/framework/libs/ajax';
import { paramsSerializer } from '@js/utils/APIUtils';
import pick from 'lodash/pick';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import castArray from 'lodash/castArray';
import { parseIcon } from '@js/utils/SearchUtils';
import {
    FACETS,
    getEndpointUrl,
    getQueryParams
} from './constants';
import uuid from 'uuid/v1';
import uniqBy from 'lodash/uniqBy';

import { addFilters, getFilters } from '@js/plugins/ResourcesGrid/utils/ResourcesFiltersUtils';

export const getFacetItemsByFacetName = ({ name: facetName, style, filterKey, config, params: paramsArg }, customFilters) => {
    const { q, ...otherParams } = paramsArg;
    const params = {
        ...otherParams,
        ...(q && { topic_contains: q })
    };
    const updatedParams = getQueryParams(params, customFilters);
    const filters = getFilters();
    return axios.get(getEndpointUrl(FACETS, `/${facetName}`), {
        ...config,
        params: updatedParams,
        ...paramsSerializer()
    }).then(({data}) => {
        const {page: _page = 0, items: _items = [], total, page_size: size} = data?.topics ?? {};
        const page = Number(_page);
        const isNextPageAvailable = (Math.ceil(Number(total) / Number(size)) - (page + 1)) !== 0;

        // Add filter values as item even when count is 0
        const filterKeys = Object.keys(updatedParams)
            // filter params value can be array
            ?.map(key => Array.isArray(updatedParams[key]) ? updatedParams[key].map(v => `${key}${v}`) : `${key}${updatedParams[key]}`)?.flat()
            ?.filter(param => param?.includes(data?.filter));
        const filtersPresent = Object.values(pick(filters, filterKeys))?.filter(f => f.facetName === data.name);

        const items = isEmpty(_items) && !isEmpty(filtersPresent)
            ? filtersPresent.map(item => ({
                ...(item.labelId ? {labelId: item.labelId} : {label: item.label}),
                type: "filter",
                count: 0,
                filterKey: item.filterKey ?? filterKey,
                filterValue: isNil(item.filterValue) ? String(item.key) : String(item.filterValue),
                style,
                icon: parseIcon(item),
                image: item.image
            }))
            : _items.map(({label, is_localized: isLocalized, key, count, fa_class: icon, image} = {})=> {
                return {
                    type: "filter",
                    ...(!isNil(isLocalized) && !isLocalized ? { labelId: label } : { label }), // TODO remove when api send isLocalized for all facets response
                    count,
                    filterKey,
                    filterValue: String(key),
                    style,
                    icon: parseIcon(icon),
                    image
                };
            });

        // Update filters
        addFilters(items.map((item) => ({[item.filterKey + item.filterValue]: {...item, facetName}})).reduce((f, c) => ({...f, ...c}), {}));

        return {
            page,
            isNextPageAvailable,
            items
        };
    });
};

export const getFacetsByKey = (facet, filterParams) => {
    return axios
        .get(getEndpointUrl(FACETS, `/${facet}`), {params: {...filterParams}, ...paramsSerializer()})
        .then(({ data } = {}) => ({
            ...data?.topics,
            items: data?.topics?.items?.map(item => ({...item, facetName: facet}))
        }));
};

const updateFieldsWithFacets = (fields, facets) => {
    return fields.reduce((acc, field) => {
        if (!!field.facet) {
            const filteredFacets = (facets || [])
                .filter(f => f.type === field.facet)
                .filter(f => field.include ? field.include?.includes(f.name) : field.exclude ? !field.exclude?.includes(f.name) : true)
                .sort((a, b) => a.order - b.order);
            return [
                ...acc,
                ...filteredFacets
                    .map(({
                        name,
                        config,
                        filter: filterKey,
                        label,
                        is_localized: isLocalized,
                        loadItems
                    } = {}) => {
                        const style = config.style || field.style;
                        const type = config.type || field.type;
                        return {
                            uuid: uuid(),
                            name,
                            key: filterKey,
                            id: name,
                            type,
                            style,
                            ...(isLocalized ? { labelId: label } : { label }),
                            loadItems: (options) => loadItems({
                                ...options,
                                name,
                                style,
                                filterKey
                            })
                        };
                    })
            ];
        }
        if (field?.items) {
            return [
                ...acc,
                {
                    ...field,
                    uuid: field.uuid || uuid(),
                    items: updateFieldsWithFacets(field.items, facets)
                }
            ];
        }
        return [
            ...acc,
            {
                ...field,
                uuid: field.uuid || uuid()
            }
        ];
    }, []);
};

export const getFacetItems = (customFilters) => {
    return axios
        .get(getEndpointUrl(FACETS),
            {
                params: {
                    include_config: true
                }
            }
        ).then(({ data } = {}) => {
            const facets = data?.facets?.map((facet) => ({
                ...facet,
                loadItems: (...args) => getFacetItemsByFacetName(...args, customFilters)
            })) || [];

            return facets;
        }).catch(() => []);
};

const filterFacets = ({ facet, queryFilters, topicQuery }) => {
    if (facet?.config?.type === 'accordion') {
        const filteredValues = JSON.parse(window.localStorage.getItem('accordionsExpanded'))?.map(f => f);
        return filteredValues.includes(facet.name);
    }
    const filteredValues = queryFilters
        ?.filter(qf => castArray(topicQuery?.[facet.filter] ?? [])
            ?.map(tf => isNaN(Number(tf)) ? tf : Number(tf))
            ?.includes(qf.key ?? (isNaN(Number(qf.filterValue)) ? qf.filterValue : Number(qf.filterValue)))
        )
        ?.map(f => f.facetName);
    return !isEmpty(queryFilters) ? filteredValues?.includes(facet.name) : true;
};

const isKeyPresent = (filterKey, filterValue) => {
    if (Array.isArray(filterValue)) {
        return filterValue.some(v => isKeyPresent(filterKey, v));
    }
    return filterKey === (typeof filterKey === "string" ? filterValue : Number(filterValue));
};

let facetsCache;

export const initializeFacets = ({
    fields,
    customFilters,
    query
}) => {

    if (facetsCache) {
        return Promise.resolve({
            facets: facetsCache,
            fields: updateFieldsWithFacets(fields, facetsCache)
        });
    }

    return getFacetItems(customFilters)
        .then((facets) => {
            const queryFilters = Object.values(getFilters() ?? []);
            const topicQuery = pick(query, Object.keys(query).filter(q => facets.map(f => f.filter).includes(q)));
            const facetNames = facets
                ?.filter(facet => !isEmpty(topicQuery[facet.filter]) && filterFacets({ facet, topicQuery, queryFilters }))
                ?.map(facet => ({facet: facet.name, key: topicQuery[facet.filter]})) ?? [];
            const queries = {
                ...getQueryParams(query, customFilters),
                include_topics: true
            };
            return Promise.all(facetNames.map(({ facet, key } = {}) => getFacetsByKey(facet, {...queries, key})))
                .then((topics) => {
                    let filters = {};
                    let updatedTopics = (topics ?? [])?.reduce((a, t) => t?.items?.concat(a), []);
                    if (!isEmpty(updatedTopics)) {
                        updatedTopics = uniqBy(updatedTopics, 'key');
                    }
                    const facetFilters = facets?.map((facet) => ({filter: facet.filter, value: query?.[facet.filter]}))?.filter(f => !isEmpty(f.value));
                    facetFilters.forEach(({filter, value} = {}) => {
                        updatedTopics?.forEach((item) => {
                            const itemObj = isKeyPresent(item.key, value) && item;
                            if (!isEmpty(itemObj)) {
                                filters[filter + itemObj.key] = {...itemObj, count: itemObj.count || 0};
                            }
                        });
                    });
                    addFilters(filters);
                    facetsCache = facets;
                    return {
                        facets,
                        fields: updateFieldsWithFacets(fields, facets)
                    };
                });
        });
};
