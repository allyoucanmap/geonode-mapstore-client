import { useRef, useEffect } from 'react';
import isArray from 'lodash/isArray';
import omit from 'lodash/omit';
import isEqual from 'lodash/isEqual';
import url from 'url';
import axios from '@mapstore/framework/libs/ajax';

const cleanParams = (params, exclude = ['d']) => {
    return Object.keys(params)
        .filter((key) => !exclude.includes(key))
        .reduce((acc, key) =>
            (!params[key] || params[key].length === 0)
                ? acc : { ...acc, [key]: isArray(params[key])
                    ? params[key].map(value => value + '')
                    : `${params[key]}`
                }, {});
};

const getParams = (locationSearch = '', { defaultPage = 1, exclude } = {}) => {
    const { query: locationQuery } = url.parse(locationSearch || '', true);
    const { page, ...cleanedParams } = cleanParams(locationQuery, exclude);
    return [
        cleanedParams,
        page ? parseFloat(page) : defaultPage
    ];
};

const mergeParams = (params, defaultQuery) => {
    // let { resource, f, ...defaultQuery } = state?.gnsearch?.config?.defaultQuery ?? {};
    // f = castArray(params.f ?? []).concat([...castArray(resource ?? []), ...castArray(f ?? [])]);
    return { ...params, ...defaultQuery };
};

const useQueryResourcesByLocation = ({
    id,
    setLoading = () => {},
    setResources = () => {},
    setResourcesMetadata = () => {},
    request = () => Promise.resolve({}),
    defaultQuery,
    pageSize,
    customFilters,
    location,
    onPush = () => {}
}) => {

    const _prevLocation = useRef();
    const requestResources = useRef();
    const requestTimeout = useRef();

    const source = useRef();
    const createToken = () => {
        if (source.current) {
            source.current?.cancel();
            source.current = undefined;
        }
        const cancelToken = axios.CancelToken;
        source.current = cancelToken.source();
    };

    requestResources.current = (params) => {
        if (requestTimeout.current) {
            clearTimeout(requestTimeout.current);
            requestTimeout.current = undefined;
        }
        createToken();
        setLoading(true, id);
        requestTimeout.current = setTimeout(() => {
            const requestParams = cleanParams(mergeParams(params, defaultQuery));
            request({
                ...requestParams,
                customFilters,
                pageSize,
                config: {
                    cancelToken: source.current.token
                }
            })
                .then((response) => {
                    setResources(response.resources, id);
                    setResourcesMetadata({
                        isNextPageAvailable: response.isNextPageAvailable,
                        params,
                        locationSearch: location.search,
                        locationPathname: location.pathname,
                        total: response.total
                    }, id);
                })
                .catch((error) => {
                    if (!axios.isCancel(error)) {
                        setResources([], id);
                        setResourcesMetadata({
                            isNextPageAvailable: false,
                            params,
                            locationSearch: location.search,
                            locationPathname: location.pathname,
                            total: 0,
                            error: true
                        }, id);
                    }
                })
                .finally(() => {
                    setLoading(false, id);
                });
        }, 300);
    };

    useEffect(() => {
        const { query } = url.parse(location.search, true);
        requestResources.current(query);
    }, [pageSize, defaultQuery]);

    useEffect(() => {
        const prevLocation = _prevLocation.current;
        const [previousParams, previousPage] = getParams(prevLocation?.search);
        const [currentParams, currentPage] = getParams(location.search);
        const shouldUpdate = prevLocation === undefined
            || currentPage !== previousPage
            || !isEqual(currentParams, previousParams);
        if (shouldUpdate) {
            requestResources.current({
                ...currentParams,
                page: currentPage
            });
        }
        _prevLocation.current = location;
    }, [location]);

    return {
        search: (nextParams) => {
            const { query } = url.parse(location.search, true);
            const nextQuery = cleanParams({ ...omit(query, ['page']), ...nextParams }, []);
            const nextSearch = url.format({ query: nextQuery });
            if (location.search !== nextSearch) {
                onPush({
                    search: nextSearch
                });
            }
        }
    };
};

export default useQueryResourcesByLocation;
