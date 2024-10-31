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
import {
    getMonitoredStateSelector,
    getSelectedResource
} from './selectors/resources';
import useParsePluginConfigExpressions from './hooks/useParsePluginConfigExpressions';
import useRequestResource from './hooks/useRequestResource';

import {
    getResourceByTypeAndByPk
} from '@js/api/geonode/v2';

const geoNodeResourceRequest = ({ resource, config }) => {
    return getResourceByTypeAndByPk(resource.resource_type, resource.pk, resource.subtype, config);
};

function ResourceDetails({
    monitoredState,
    tabs = [],
    resource: resourceProp,
    resourceRequest
}) {

    const {
        resource,
        loading
    } = useRequestResource({
        resource: resourceProp,
        request: resourceRequest
    });
    /* const parsedConfig = */ useParsePluginConfigExpressions(monitoredState, { tabs });

    // const detailsToolbarItems = configuredItems.filter(item => (item.target === "cardOptions" && item.detailsToolbar) || item.target === "detailsToolbar");

    return (
        <div>
            {resource.pk}{' '}{resource.title}{loading ? 'loading...' : ''}
            {
                /*
                    key={`${resource.pk}:${resource.resource_type}`}
                    enableFavorite={!!user}
                    resource={resource}
                    linkHref={closeDetailPanelHref}
                    formatHref={handleFormatHref}
                    tabs={parsedConfig.detailsTabs}
                    toolbarItems={detailsToolbarItems}
                */
            }
        </div>
    );
}

const ResourceDetailsPlugin = connect(
    createSelector([
        getMonitoredStateSelector,
        getSelectedResource
    ], (monitoredState, resource) => ({
        monitoredState,
        resource,
        resourceRequest: geoNodeResourceRequest
    })),
    {}
)(ResourceDetails);

export default createPlugin('ResourceDetails', {
    component: ResourceDetailsPlugin,
    containers: {
        ResourcesGrid: {
            target: 'details',
            priority: 1
        }
    },
    epics: {},
    reducers: {
        resources: resourcesReducer
    }
});
