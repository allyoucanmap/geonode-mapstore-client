/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef, useState } from 'react';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import {
    editThumbnailResource,
    setMapThumbnail,
    setResourceThumbnail,
    enableMapThumbnailViewer,
    requestResource
} from '@js/actions/gnresource';
import controls from '@mapstore/framework/reducers/controls';
import gnresource from '@js/reducers/gnresource';
import {
    getResourceId,
    isThumbnailChanged,
    updatingThumbnailResource,
    getResourceData,
    getResourceLoading,
    getResourceDirtyState,
    canEditPermissions
} from '@js/selectors/resource';

import { hashLocationToHref } from '@js/utils/SearchUtils';
import Message from '@mapstore/framework/components/I18N/Message';
import { mapSelector } from '@mapstore/framework/selectors/map';
import usePluginItems from '@mapstore/framework/hooks/usePluginItems';
import { parseCatalogResource } from '@js/utils/ResourceUtils';
import tabComponents from './tabComponents';
import ResourcesPanelWrapper from '@mapstore/framework/plugins/ResourcesCatalog/components/ResourcesPanelWrapper';
import TargetSelectorPortal from '@mapstore/framework/plugins/ResourcesCatalog/components/TargetSelectorPortal';
import useParsePluginConfigExpressions from '@mapstore/framework/plugins/ResourcesCatalog/hooks/useParsePluginConfigExpressions';
import useResourcePanelWrapper from '@mapstore/framework/plugins/ResourcesCatalog/hooks/useResourcePanelWrapper';
import DetailsInfo from '@mapstore/framework/plugins/ResourcesCatalog/components/DetailsInfo';
import {
    getMonitoredStateSelector,
    getRouterLocation,
    getShowDetails
} from '@mapstore/framework/plugins/ResourcesCatalog/selectors/resources';
import { replaceResourcePaths } from '@mapstore/framework/plugins/ResourcesCatalog/utils/ResourcesUtils';
import { setShowDetails } from '@mapstore/framework/plugins/ResourcesCatalog/actions/resources';

import url from 'url';
import Text from '@mapstore/framework/components/layout/Text';
import Spinner from '@mapstore/framework/components/layout/Spinner';
import FlexBox from '@mapstore/framework/components/layout/FlexBox';
import DetailsPreview from './containers/DetailsPreview';
import DetailsHeader from '@mapstore/framework/plugins/ResourcesCatalog/components/DetailsHeader';
import DetailsToolbar from './components/DetailsToolbar';
import moment from 'moment';
import DetailsThumbnail from './components/DetailsThumbnail';
import PendingStatePrompt from '@mapstore/framework/plugins/ResourcesCatalog/containers/PendingStatePrompt';

const ConnectedDetailsThumbnail = connect(
    createSelector([
        state => state?.gnresource?.showMapThumbnail || false,
        mapSelector,
        state => state?.gnsave?.savingThumbnailMap || false,
        isThumbnailChanged,
        updatingThumbnailResource,
        getResourceData
    ], (showMapThumbnail, map, savingThumbnailMap, thumbnailChanged, resourceThumbnailUpdating, resource) => ({
        enableMapViewer: showMapThumbnail,
        initialBbox: map?.bbox,
        savingThumbnailMap,
        isThumbnailChanged: thumbnailChanged,
        resourceThumbnailUpdating,
        resource
    })),
    {
        onEnableMapThumbnailViewer: enableMapThumbnailViewer,
        onMapThumbnail: setMapThumbnail,
        onChange: editThumbnailResource,
        onResourceThumbnail: setResourceThumbnail
    }
)(DetailsThumbnail);

/**
* @module DetailViewer
*/

/**
 * render a panel for detail information about a resource inside the viewer pages
 * @name DetailViewer
 * @prop {array} tabs array of tab object representing the structure of the displayed info properties
 * @example
 * {
 *  "name": "DetailViewer",
 *  "cfg": {
 *      "tabs": [
 *          {
 *              "type": "tab",
 *              "id": "info",
 *              "labelId": "gnviewer.info",
 *              "items": [
 *                  {
 *                      "type": "text",
 *                      "labelId": "gnviewer.title",
 *                      "value": "{context.get(state('gnResourceData'), 'title')}"
 *                  },
 *                  {
 *                      "type": "link",
 *                      "labelId": "gnviewer.owner",
 *                      "href": "{'/people/profile/' + context.get(state('gnResourceData'), 'owner.username')}",
 *                      "value": "{context.getUserResourceName(context.get(state('gnResourceData'), 'owner'))}",
 *                      "disableIf": "{!context.get(state('gnResourceData'), 'owner.username')}"
 *                  },
 *                  {
 *                      "type": "date",
 *                      "format": "MMMM Do YYYY",
 *                      "labelId": "gnviewer.published",
 *                      "value": "{context.get(state('gnResourceData'), 'date')}"
 *                  },
 *                  {
 *                      "type": "query",
 *                      "labelId": "gnviewer.resourceType",
 *                      "value": "{context.get(state('gnResourceData'), 'resource_type')}",
 *                      "pathname": "/",
 *                      "query": {
 *                          "f": "{context.get(state('gnResourceData'), 'resource_type')}"
 *                      }
 *                  },
 *                  {
 *                      "type": "html",
 *                      "labelId": "gnviewer.supplementalInformation",
 *                      "value": "{context.get(state('gnResourceData'), 'supplemental_information')}"
 *                  }
 *              ]
 *          }
 *      ]
 *  }
 * }
 */
function DetailViewerPanel({
    tabs = [
        {
            "type": "tab",
            "id": "info",
            "labelId": "gnviewer.info",
            "items": [
                {
                    "type": "text",
                    "labelId": "gnviewer.title",
                    "value": "{context.get(state('gnResourceData'), 'title')}"
                },
                {
                    "type": "link",
                    "labelId": "gnviewer.owner",
                    "href": "{'/people/profile/' + context.get(state('gnResourceData'), 'owner.username')}",
                    "value": "{context.getUserResourceName(context.get(state('gnResourceData'), 'owner'))}",
                    "disableIf": "{!context.get(state('gnResourceData'), 'owner.username')}"
                },
                {
                    "type": "date",
                    "format": "YYYY-MM-DD HH:mm",
                    "labelId": "{'gnviewer.'+context.get(state('gnResourceData'), 'date_type')}",
                    "value": "{context.get(state('gnResourceData'), 'date')}"
                },
                {
                    "type": "date",
                    "format": "YYYY-MM-DD HH:mm",
                    "labelId": "gnviewer.created",
                    "value": "{context.get(state('gnResourceData'), 'created')}"
                },
                {
                    "type": "date",
                    "format": "YYYY-MM-DD HH:mm",
                    "labelId": "gnviewer.lastModified",
                    "value": "{context.get(state('gnResourceData'), 'last_updated')}"
                },
                {
                    "type": "query",
                    "labelId": "gnviewer.resourceType",
                    "value": "{context.get(state('gnResourceData'), 'resource_type')}",
                    "pathname": "/",
                    "query": {
                        "f": "{context.get(state('gnResourceData'), 'resource_type')}"
                    }
                },
                {
                    "type": "{context.isDocumentExternalSource(state('gnResourceData')) ? 'link' : 'text'}",
                    "labelId": "gnviewer.sourceType",
                    "value": "{context.get(state('gnResourceData'), 'sourcetype', '').toLowerCase()}",
                    "href": "{context.get(state('gnResourceData'), 'href')}"
                },
                {
                    "type": "query",
                    "labelId": "gnviewer.category",
                    "value": "{context.get(state('gnResourceData'), 'category.gn_description')}",
                    "pathname": "/",
                    "query": {
                        "filter{category.identifier}": "{context.get(state('gnResourceData'), 'category.identifier')}"
                    }
                },
                {
                    "type": "link",
                    "labelId": "gnviewer.pointOfContact",
                    "value": "{context.getUserResourceNames(context.get(state('gnResourceData'), 'poc'))}",
                    "disableIf": "{!context.get(state('gnResourceData'), 'poc')}"
                },
                {
                    "type": "query",
                    "labelId": "gnviewer.keywords",
                    "value": "{context.get(state('gnResourceData'), 'keywords')}",
                    "valueKey": "name",
                    "pathname": "/",
                    "queryTemplate": {
                        "filter{keywords.slug.in}": "${slug}"
                    }
                },
                {
                    "type": "query",
                    "labelId": "gnviewer.regions",
                    "value": "{context.get(state('gnResourceData'), 'regions')}",
                    "valueKey": "name",
                    "pathname": "/",
                    "queryTemplate": {
                        "filter{regions.code.in}": "${code}"
                    }
                },
                {
                    "type": "text",
                    "labelId": "gnviewer.attribution",
                    "value": "{context.get(state('gnResourceData'), 'attribution')}"
                },
                {
                    "type": "text",
                    "labelId": "gnviewer.language",
                    "value": "{context.get(state('gnResourceData'), 'language')}"
                },
                {
                    "type": "html",
                    "labelId": "gnviewer.supplementalInformation",
                    "value": "{context.get(state('gnResourceData'), 'supplemental_information')}"
                },
                {
                    "type": "date",
                    "format": "YYYY-MM-DD HH:mm",
                    "labelId": "gnviewer.temporalExtent",
                    "value": {
                        "start": "{context.get(state('gnResourceData'), 'temporal_extent_start')}",
                        "end": "{context.get(state('gnResourceData'), 'temporal_extent_end')}"
                    }
                },
                {
                    "type": "link",
                    "style": "label",
                    "labelId": "gnviewer.viewFullMetadata",
                    "href": "{context.getMetadataDetailUrl(state('gnResourceData'))}",
                    "disableIf": "{!context.getMetadataDetailUrl(state('gnResourceData'))}"
                }
            ]
        },
        {
            "type": "locations",
            "id": "locations",
            "labelId": "gnviewer.locations",
            "items": "{({extent: context.get(state('gnResourceData'), 'extent')})}"
        },
        {
            "type": "attribute-table",
            "id": "attributes",
            "labelId": "gnviewer.attributes",
            "disableIf": "{context.get(state('gnResourceData'), 'resource_type') !== 'dataset'}",
            "items": "{context.get(state('gnResourceData'), 'attribute_set')}"
        },
        {
            "type": "linked-resources",
            "id": "related",
            "labelId": "gnviewer.linkedResources.label",
            "items": "{context.get(state('gnResourceData'), 'linkedResources')}"
        },
        {
            "type": "assets",
            "id": "assets",
            "labelId": "gnviewer.assets",
            "items": "{context.get(state('gnResourceData'), 'assets')}"
        },
        {
            "type": "settings",
            "id": "settings",
            "labelId": "gnviewer.management",
            "disableIf": "{!context.canManageResourceSettings(state('gnResourceData'))}",
            "items": [
                true
            ]
        }
    ],
    location,
    monitoredState,
    items,
    editable = true,
    canEdit,
    targetSelector,
    headerNodeSelector = '#gn-brand-navbar',
    navbarNodeSelector = '#ms-action-navbar',
    footerNodeSelector = '.gn-footer',
    width,
    height,
    show,
    onShow,
    enableFilters,
    resource: resourceProp,
    resourcesGridId,
    loading,
    pendingChanges,
    enablePreview,
    editingOverlay
}, context) {

    const [confirmModal, setConfirmModal] = useState(false);
    const resource = parseCatalogResource(resourceProp);
    const editing = canEdit && editable;
    const parsedConfig = useParsePluginConfigExpressions(monitoredState, { tabs }, context?.plugins?.requires);

    const {
        stickyTop,
        stickyBottom
    } = useResourcePanelWrapper({
        headerNodeSelector,
        navbarNodeSelector,
        footerNodeSelector,
        width,
        height,
        active: true
    });

    function handleConfirm() {
        onShow(false);
    }

    function handleClose() {
        if (pendingChanges) {
            setConfirmModal(true);
        } else {
            handleConfirm();
        }
    }

    useEffect(() => {
        return () => {
            // close when unmount
            handleClose();
        };
    }, []);

    /*
    const node = useDetectClickOut({
        disabled: !enabled,
        onClickOut: () => {
            onClose();
        }
    });
    */

    const { query } = url.parse(location.search, true);
    const updatedLocation = useRef();
    updatedLocation.current = location;
    function handleFormatHref(options) {
        return hashLocationToHref({
            location: updatedLocation.current,
            excludeQueryKeys: ['page'],
            ...options
        });
    }
    const { loadedPlugins } = context;
    const configuredItems = usePluginItems({ items, loadedPlugins }, [resource?.id]);
    const toolbarItems = [
        ...configuredItems.filter(item => item.target === "toolbar")
    ].sort((a, b) => a.position - b.position);

    return (
        <TargetSelectorPortal targetSelector={targetSelector}>
            <ResourcesPanelWrapper
                className="ms-resource-detail shadow-md"
                top={stickyTop}
                bottom={stickyBottom}
                show={show}
                enabled={show}
                editing={editingOverlay && pendingChanges}
            >
                <div className="ms-details-panel">
                    <DetailsHeader
                        resource={resource}
                        loading={loading}
                        tools={<DetailsToolbar
                            resource={resource}
                            items={toolbarItems}
                        />}
                        onClose={handleClose}
                        thumbnailComponent={ConnectedDetailsThumbnail}
                        editing={editing}
                    >
                        <Text classNames={['_padding-lr-md', '_padding-b-md']} fontSize="sm">
                            <Message msgId="gnviewer.resourceOrigin.a" />
                            {' '}
                            <Text component="span" strong>{resource.resource_type}</Text>
                            {' '}
                            <Message msgId="gnviewer.resourceOrigin.from" />
                            {' '}
                            {resource?.owner?.avatar
                                ? <img src={resource?.owner.avatar} alt={resource?.owner?.username} className="ms-resource-icon-logo"/>
                                : null}
                            {' '}
                            <Text component="span" strong>{resource?.owner?.username}</Text>
                            {(resource?.date_type && resource?.date) ? <>{' '}/{' '}{moment(resource.date).format('MMMM Do YYYY')}</> : null}
                        </Text>
                        {resource?.abstract
                            ? <Text classNames={['_padding-sm']} dangerouslySetInnerHTML={{ __html: resource?.abstract }} />
                            : null}
                        {enablePreview ? <DetailsPreview
                            resource={resource}
                        /> : null}
                    </DetailsHeader>
                    {!loading ? <DetailsInfo
                        className="_padding-lr-md"
                        key={getResourceId(resource)}
                        tabs={replaceResourcePaths(parsedConfig.tabs, resource, [])}
                        tabComponents={tabComponents}
                        query={query}
                        formatHref={handleFormatHref}
                        resourcesGridId={resourcesGridId}
                        resource={resource || {}}
                        enableFilters={enableFilters}
                        editing={editing}
                    /> : null}
                    {(loading) ? <FlexBox centerChildren classNames={['_absolute', '_fill', '_overlay', '_corner-tl']}>
                        <Text fontSize="xxl">
                            <Spinner />
                        </Text>
                    </FlexBox> : null}
                </div>
            </ResourcesPanelWrapper>
            <PendingStatePrompt
                show={!!confirmModal}
                onCancel={() => setConfirmModal(false)}
                onConfirm={handleConfirm}
                pendingState={!!pendingChanges}
                titleId="resourcesCatalog.detailsPendingChangesTitle"
                descriptionId="resourcesCatalog.detailsPendingChangesDescription"
                cancelId="resourcesCatalog.detailsPendingChangesCancel"
                confirmId="resourcesCatalog.detailsPendingChangesConfirm"
                variant="danger"
            />
        </TargetSelectorPortal>
    );
}

DetailViewerPanel.contextTypes = {
    loadedPlugins: PropTypes.object,
    plugins: PropTypes.object
};

const DetailViewer = ({ defaultOpen, ...props }) => {
    useEffect(() => {
        if (props?.resource?.pk && defaultOpen) {
            props.onShow(true);
        }
    }, [props?.resource?.pk, defaultOpen]);
    return props?.resource?.pk && props.show ? <DetailViewerPanel {...props}/> : null;
};

const DetailViewerPlugin = connect(
    createStructuredSelector({
        monitoredState: getMonitoredStateSelector,
        resource: getResourceData,
        location: getRouterLocation,
        show: getShowDetails,
        loading: getResourceLoading,
        canEdit: canEditPermissions,
        pendingChanges: getResourceDirtyState
    }),
    {
        onShow: setShowDetails
    }
)(DetailViewer);

export default createPlugin('ResourceDetails', {
    component: DetailViewerPlugin,
    containers: {
        ActionNavbar: {
            name: 'DetailViewerButton',
            Component: connect(() => ({}), { onShow: setShowDetails })(({ component, resourcesGridId, onShow }) => {
                const Component = component;
                function handleClick() {
                    onShow(true, resourcesGridId);
                }
                return Component ? (
                    <Component
                        onClick={handleClick}
                        glyph="details"
                        iconType="glyphicon"
                        square
                        labelId="resourcesCatalog.viewResourceProperties"
                    />
                ) : null;
            }),
            priority: 1,
            doNotHide: true
        },
        ResourcesGrid: {
            priority: 2,
            target: 'card-buttons',
            position: 2,
            Component: connect(
                createStructuredSelector({
                    selectedResource: getResourceData
                }),
                {
                    onSelect: requestResource,
                    onShow: setShowDetails
                }
            )(({ resourcesGridId, resource, onSelect, component, selectedResource, onShow }) => {
                const Component = component;
                function handleClick() {
                    if (!selectedResource['@ms-detail'] || selectedResource?.pk !== resource?.pk) {
                        onSelect(resource, resourcesGridId);
                    }
                    onShow(true, resourcesGridId);
                }
                return (
                    <Component
                        onClick={handleClick}
                        glyph="details"
                        iconType="glyphicon"
                        square
                        labelId="resourcesCatalog.viewResourceProperties"
                    />
                );
            }),
            doNotHide: true
        }
    },
    reducers: {
        gnresource,
        controls
    }
});
