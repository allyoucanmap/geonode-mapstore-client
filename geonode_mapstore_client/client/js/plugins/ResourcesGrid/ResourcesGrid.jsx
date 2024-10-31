/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';
import isEmpty from 'lodash/isEmpty';
import { matchPath } from 'react-router-dom';
import {
    createPlugin,
    getMonitoredState
} from '@mapstore/framework/utils/PluginsUtils';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';
import { connect } from 'react-redux';
import url from 'url';
import { createSelector } from 'reselect';
import {
    hashLocationToHref,
    clearQueryParams,
    getUserName
} from '@js/utils/SearchUtils';
import { withResizeDetector } from 'react-resize-detector';
import { userSelector } from '@mapstore/framework/selectors/security';
import { getTotalResources, getFacetsItems, getSearchResults } from '@js/selectors/search';
import {
    loadingResources,
    updateResources,
    updateResourcesMetadata,
    setSelectedResource
} from './actions/resources';
import {
    getResourcesLoading,
    getResourcesError,
    getIsFirstRequest,
    getShowFiltersForm,
    getShowDetails,
    getSelectedResource
} from './selectors/resources';
import resourcesReducer from './reducers/resources';

import { generalResourceDownload } from '@js/selectors/resourceservice';
import { getResourceStatus, getResourceTypesInfo } from '@js/utils/ResourceUtils';
import usePluginItems from '@mapstore/framework/hooks/usePluginItems';
import { push } from 'connected-react-router';
import { getResources } from '@js/api/geonode/v2';
import useQueryResourcesByLocation from './hooks/useQueryResourcesByLocation';
import { getCustomMenuFilters } from '@js/selectors/config';
import ResourcesGridComponent from './containers/ResourcesGrid';
import useParsePluginConfigExpressions from './hooks/useParsePluginConfigExpressions';
import useCardLayoutStyle from './hooks/useCardLayoutStyle';

const getCatalogPage = (pathname) => {
    const { params: {page} = {} } = matchPath(pathname, { path: "/:page", exact: true }) ?? {};
    return page;
};

const withPageConfig = (Component) => {
    return (props) => {
        const mergePropsWithPageConfigs = () => {
            const pageName = getCatalogPage(props.location.pathname, props);
            return {...props, ...props?.[`${pageName}Page`]};
        };
        return <Component {...mergePropsWithPageConfigs()} />;
    };
};

const getResourcesSelector = (state, props) => {
    const resources = getSearchResults(state, props);
    const downloading = generalResourceDownload(state, props);
    return resources.map((resource) => {
        const isDownloading = downloading.find((download) => download.pk === resource.pk) ? true : false;
        return {
            ...resource,
            ['@downloading']: isDownloading
        };
    });
};

/**
* @module ResourcesGrid
*/

/**
 * renders a grid of resource cards, providing the ability to create pages to show a filtered / curated list of resources. For example, a landing page showing only geostories, one page per category or group with a title, some text, etc.
  * @name ResourcesGrid.
  * @prop {string} defaultQuery The pre-set filter to be applied by default
  * @prop {object} order an object defining sort options for resource grid.
  * @prop {object} extent the extent used in filters side menu to limit search within set bounds.
  * @prop {array} menuItems contains menu for Add resources button.
  * @prop {array} filtersFormItems Provides config for various filter metrics.
  * @prop {string} pagePath provided page url path.
  * @prop {number} pageSize number of resources per page. Used in pagination.
  * @prop {string} targetSelector selector for parent node of resource
  * @prop {string} headerNodeSelector selector for rendered header.
  * @prop {string} navbarNodeSelector selector for rendered navbar.
  * @prop {string} footerNodeSelector selector for rendered footer.
  * @prop {string} containerSelector selector for rendered resource card grid container.
  * @prop {string} scrollContainerSelector selector for outer container of resource cards rendered. This is the parent on which scrolling takes place.
  * @prop {boolean} pagination Provides a config to allow for pagination
  * @prop {boolean} disableDetailPanel Provides a config to allow resource details to be viewed when selected.
  * @prop {boolean} disableFilters Provides a config to enable/disable filtering of resources
  * @prop {array} resourceCardActionsOrder order in which `cfg.items` will be rendered
  * @prop {boolean} enableGeoNodeCardsMenuItems Provides a config to allow for card menu items to be enabled/disabled.
  * @prop {boolean} panel when enabled, the component render the list of resources, filters and details preview inside a panel
  * @prop {string} cardLayoutStyle when specified, the card layout option is forced and the button to toggle card layout is hidden
  * @prop {string} defaultCardLayoutStyle default layout card style. One of 'list'|'grid'
  * @prop {array} detailsTabs array of tab object representing the structure of the displayed info properties (see tabs in {@link module:DetailViewer})
  * @example
  * {
  *   "name": "ResourcesGrid",
  *    "cfg": {
  *        targetSelector: '#custom-resources-grid',
  *        containerSelector: '.gn-container',
  *        menuItems: [],
  *        filtersFormItems: [],
  *        defaultQuery: {
  *          f: 'dataset'
  *        },
  *        pagePath: '/catalogue/',
  *        pagination: false,
  *        disableDetailPanel: true,
  *        disableFilters: true,
  *        enableGeoNodeCardsMenuItems: true
  *    }
  * }
  */
function ResourcesGrid({
    id,
    location,
    user,
    totalResources,
    loading,
    defaultQuery,
    order = {
        defaultLabelId: 'gnhome.orderBy',
        options: [
            {
                label: 'Most recent',
                labelId: 'gnhome.mostRecent',
                value: '-date'
            },
            {
                label: 'Less recent',
                labelId: 'gnhome.lessRecent',
                value: 'date'
            },
            {
                label: 'A Z',
                labelId: 'gnhome.aZ',
                value: 'title'
            },
            {
                label: 'Z A',
                labelId: 'gnhome.zA',
                value: '-title'
            },
            {
                label: 'Most popular',
                labelId: 'gnhome.mostPopular',
                value: 'popular_count'
            }
        ]
    },
    menuItems = [
        {
            labelId: 'gnhome.addResource',
            disableIf: "{(state('settings') && state('settings').isMobile) || !(state('user') && state('user').perms && state('user').perms.includes('add_resource'))}",
            type: 'dropdown',
            variant: 'primary',
            responsive: true,
            noCaret: true,
            items: [
                {
                    labelId: 'gnhome.uploadDataset',
                    value: 'layer',
                    type: 'link',
                    href: '{context.getCataloguePath("/catalogue/#/upload/dataset")}'
                },
                {
                    labelId: 'gnhome.uploadDocument',
                    value: 'document',
                    type: 'link',
                    href: '{context.getCataloguePath("/catalogue/#/upload/document")}'
                },
                {
                    labelId: 'gnhome.createDataset',
                    value: 'layer',
                    type: 'link',
                    href: '/createlayer/',
                    disableIf: "{(state('settings') && state('settings').createLayer) ? false : true}"
                },
                {
                    labelId: 'gnhome.createMap',
                    value: 'map',
                    type: 'link',
                    href: '{context.getCataloguePath("/catalogue/#/map/new")}'
                },
                {
                    labelId: 'gnhome.createGeostory',
                    value: 'geostory',
                    type: 'link',
                    href: '{context.getCataloguePath("/catalogue/#/geostory/new")}'
                },
                {
                    labelId: 'gnhome.createDashboard',
                    value: 'dashboard',
                    type: 'link',
                    href: '{context.getCataloguePath("/catalogue/#/dashboard/new")}'
                },
                {
                    labelId: 'gnhome.remoteServices',
                    value: 'remote',
                    type: 'link',
                    href: '/services/?limit=5'
                }
            ]
        },
        {
            type: 'divider'
        }
    ],
    pagePath = '',
    pageSize = 24,
    panel,
    cardLayoutStyle: cardLayoutStyleProp = null,
    defaultCardLayoutStyle: defaultCardLayoutStyleProp = 'grid',
    selectedResource,
    width,
    height,
    items,
    targetSelector = '',
    monitoredState,
    headerNodeSelector = '.gn-main-header',
    navbarNodeSelector = '#gn-topbar',
    footerNodeSelector = '.gn-footer',
    containerSelector = '',
    error,
    enableGeoNodeCardsMenuItems,
    detailsTabs = [],
    showFiltersForm,
    showDetails,
    onPush,
    setLoading,
    setResources,
    setResourcesMetadata,
    customFilters,
    resources,
    isFirstRequest,
    onSelect
}, context) {

    const customCardsMenuItems = enableGeoNodeCardsMenuItems ? getConfigProp('geoNodeCardsMenuItems') || [] : [];

    const {
        search: onSearch
    } = useQueryResourcesByLocation({
        id,
        request: getResources,
        location,
        onPush,
        setLoading,
        setResources,
        setResourcesMetadata,
        defaultQuery,
        pageSize,
        customFilters
    });

    const {
        cardLayoutStyle,
        setCardLayoutStyle,
        hideCardLayoutButton
    } = useCardLayoutStyle({
        cardLayoutStyle: cardLayoutStyleProp,
        defaultCardLayoutStyle: defaultCardLayoutStyleProp
    });

    const parsedConfig =  useParsePluginConfigExpressions(monitoredState, {
        menuItems: [...customCardsMenuItems, ...menuItems],
        order,
        detailsTabs
    });

    const { loadedPlugins } = context;
    const configuredItems = usePluginItems({ items, loadedPlugins }, []);

    const cardOptions = configuredItems
        .filter(item => item.target === 'cardOptions')
        .map(({ name, Component }) => ({
            type: 'plugin',
            Component,
            name
        }));

    const {
        Component: filtersComponent,
        ButtonComponent: filtersButtonComponent
    } = configuredItems.find((item) => item.target === 'filters' && item?.cfg?.resourcesGridId === id) || {};

    const {
        Component: detailsComponent
    } = configuredItems.find((item) => item.target === 'details' && item?.cfg?.resourcesGridId === id) || {};

    const updatedLocation = useRef();
    updatedLocation.current = location;
    function handleFormatHref(options) {
        return pagePath + hashLocationToHref({
            location: updatedLocation.current,
            excludeQueryKeys: ['page'],
            ...options
        });
    }

    function handleUpdate(newParams) {
        onSearch(newParams);
    }

    function handleClear() {
        const newParams = clearQueryParams(location);
        handleUpdate(newParams);
    }

    function handleSelect(data) {
        onSelect(data, id);
    }

    const { query } = url.parse(location.search, true);

    return (
        <ResourcesGridComponent
            id={id}
            showDetails={showDetails}
            showFiltersForm={showFiltersForm}
            filtersComponent={filtersComponent}
            filtersButtonComponent={filtersButtonComponent}
            detailsComponent={detailsComponent}
            targetSelector={targetSelector}
            selectedResource={selectedResource}
            panel={panel}
            user={user}
            totalResources={totalResources}
            loading={loading}
            menuItems={parsedConfig.menuItems}
            orderConfig={parsedConfig.order}
            pageSize={pageSize}
            cardLayoutStyle={cardLayoutStyle}
            setCardLayoutStyle={setCardLayoutStyle}
            hideCardLayoutButton={hideCardLayoutButton}
            error={error}
            query={query}
            cardOptions={cardOptions}
            width={width}
            height={height}
            headerNodeSelector={headerNodeSelector}
            navbarNodeSelector={navbarNodeSelector}
            footerNodeSelector={footerNodeSelector}
            containerSelector={containerSelector}
            isFirstRequest={isFirstRequest}
            resources={resources}
            onUpdate={handleUpdate}
            onClear={handleClear}
            onSelect={handleSelect}
            registry={{
                getResourceStatus,
                getUserName,
                formatHref: handleFormatHref,
                getResourceTypesInfo,
                getAuthor: (res) => {
                    return {
                        avatar: res?.owner?.avatar,
                        username: res?.owner ? getUserName(res?.owner) : undefined,
                        query: res?.owner?.pk ? {
                            'filter{owner.pk.in}': res.owner.pk
                        } : undefined
                    };
                }
            }}
        />
    );
}


const ResourcesGridPlugin = connect(
    createSelector([
        getResourcesSelector,
        userSelector,
        getTotalResources,
        getResourcesLoading,
        state => state?.router?.location,
        getSelectedResource,
        state => getMonitoredState(state, getConfigProp('monitorState')),
        getResourcesError,
        getFacetsItems,
        state => state?.gnsearch?.filters,
        getCustomMenuFilters,
        getIsFirstRequest,
        getShowFiltersForm,
        getShowDetails
    ], (resources, user, totalResources, loading, location, selectedResource, monitoredState, error, facets, filters, customFilters, isFirstRequest, showFiltersForm, showDetails) => ({
        resources,
        user,
        totalResources,
        loading,
        location,
        selectedResource,
        monitoredState,
        error,
        facets,
        filters,
        customFilters,
        isFirstRequest,
        showFiltersForm,
        showDetails
    })),
    {
        onPush: push,
        setLoading: loadingResources,
        setResources: updateResources,
        setResourcesMetadata: updateResourcesMetadata,
        onSelect: setSelectedResource
    }
)(withResizeDetector(withPageConfig(ResourcesGrid)));

export default createPlugin('ResourcesGrid', {
    component: ResourcesGridPlugin,
    containers: {},
    epics: {},
    reducers: {
        resources: resourcesReducer
    }
});
