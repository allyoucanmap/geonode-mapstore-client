/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import resourcesReducer from './reducers/resources';
import FiltersForm from './components/FiltersForm/FiltersForm';
import { getMonitoredStateSelector } from './selectors/resources';
import { setShowFiltersForm  } from './actions/resources';
import ResourcesFiltersFormButton from './containers/ResourcesFiltersFormButton';
import useParsePluginConfigExpressions from './hooks/useParsePluginConfigExpressions';
import useFilterFacets from './hooks/useFilterFacets';

import { initializeFacets } from '@js/api/geonode/v2/facets';
import { getCustomMenuFilters } from '@js/selectors/config';

function ResourcesFiltersForm({
    id = 'gn-filter-form',
    resourcesGridId,
    onClose,
    query,
    onChange,
    onClear,
    extent = {
        layers: [
            {
                type: 'osm',
                title: 'Open Street Map',
                name: 'mapnik',
                source: 'osm',
                group: 'background',
                visibility: true
            }
        ],
        style: {
            color: '#397AAB',
            opacity: 0.8,
            fillColor: '#397AAB',
            fillOpacity: 0.4,
            weight: 4
        }
    },
    fields: fieldsProp = [
        {
            type: 'search'
        },
        {
            type: 'group',
            labelId: 'gnhome.customFiltersTitle',
            items: [
                {
                    id: 'my-resources',
                    labelId: 'gnhome.myResources',
                    type: 'filter',
                    disableIf: '{!state("user")}'
                },
                {
                    id: 'favorite',
                    labelId: 'gnhome.favorites',
                    type: 'filter',
                    disableIf: '{!state("user")}'
                },
                {
                    id: 'featured',
                    labelId: 'gnhome.featuredList',
                    type: 'filter'
                },
                {
                    id: 'unpublished',
                    labelId: 'gnhome.unpublished',
                    type: 'filter',
                    disableIf: '{!state("user")}'
                },
                {
                    id: 'pending-approval',
                    labelId: 'gnhome.pendingApproval',
                    type: 'filter',
                    disableIf: '{!state("user")}'
                },
                {
                    id: 'remote',
                    labelId: 'gnhome.remote',
                    type: 'filter'
                },
                {
                    id: 'dataset',
                    labelId: 'gnhome.datasets',
                    type: 'filter',
                    items: [
                        {
                            id: 'store-vector',
                            labelId: 'gnhome.vector',
                            type: 'filter'
                        },
                        {
                            id: 'store-raster',
                            labelId: 'gnhome.raster',
                            type: 'filter'
                        },
                        {
                            id: 'store-time-series',
                            labelId: 'gnhome.timeSeries',
                            type: 'filter'
                        },
                        {
                            id: '3dtiles',
                            labelId: 'gnhome.3dtiles',
                            type: 'filter'
                        }
                    ]
                },
                {
                    id: 'document',
                    labelId: 'gnhome.documents',
                    type: 'filter'
                },
                {
                    id: 'map',
                    labelId: 'gnhome.maps',
                    type: 'filter'
                },
                {
                    id: 'mapviewer',
                    labelId: 'gnhome.mapviewers',
                    type: 'filter'
                },
                {
                    id: 'geostory',
                    labelId: 'gnhome.geostories',
                    type: 'filter'
                },
                {
                    id: 'dashboard',
                    labelId: 'gnhome.dashboards',
                    type: 'filter'
                }
            ]
        },
        {
            type: 'divider',
            disableIf: '{!state("user")}'
        },
        {
            type: 'select',
            facet: "category"
        },
        {
            type: 'select',
            facet: "keyword"
        },
        {
            type: 'select',
            facet: 'place'
        },
        {
            type: 'select',
            facet: 'user'
        },
        {
            type: 'select',
            facet: "group"
        },
        {
            type: 'select',
            facet: "thesaurus"
        },
        {
            type: 'date-range',
            filterKey: 'date',
            labelId: 'gnviewer.dateFilter'
        },
        {
            labelId: 'gnviewer.extent',
            type: 'extent'
        }
    ],
    monitoredState,
    facetsRequest,
    customFilters
}) {

    const parsedConfig = useParsePluginConfigExpressions(monitoredState, {
        extent,
        fields: fieldsProp
    });

    const {
        fields
    } = useFilterFacets({
        query,
        fields: parsedConfig.fields,
        request: facetsRequest,
        customFilters
    });

    return (
        <FiltersForm
            id={id}
            extentProps={parsedConfig.extent}
            fields={fields}
            query={query}
            onChange={onChange}
            onClear={onClear}
            onClose={() => onClose(resourcesGridId)}
        />
    );
}

const ResourcesGridPlugin = connect(
    createSelector([
        getMonitoredStateSelector,
        getCustomMenuFilters
    ], (monitoredState, customFilters) => ({
        monitoredState,
        facetsRequest: initializeFacets,
        customFilters
    })),
    {
        onClose: setShowFiltersForm.bind(null, false)
    }
)(ResourcesFiltersForm);

export default createPlugin('ResourcesFiltersForm', {
    component: ResourcesGridPlugin,
    containers: {
        ResourcesGrid: {
            target: 'filters',
            ButtonComponent: ResourcesFiltersFormButton,
            priority: 1
        }
    },
    epics: {},
    reducers: {
        resources: resourcesReducer
    }
});
