/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import url from 'url';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import FeaturedList from '@js/components/FeaturedList';
import { getParsedGeoNodeConfiguration } from "@js/selectors/config";
import { buildHrefByTemplate } from '@js/utils/MenuUtils';
import {
    loadFeaturedResources
} from '@js/actions/gnsearch';
import {
    hashLocationToHref
} from '@js/utils/SearchUtils';
import { getFeaturedResults } from '@js/selectors/search';
import { processResources, downloadResource } from '@js/actions/gnresource';
import { setControlProperty } from '@mapstore/framework/actions/controls';
import { featuredResourceDownload } from '@js/selectors/resourceservice';
import { withRouter } from 'react-router';
import gnsearch from '@js/reducers/gnsearch';
import epics from '@js/epics/gnsearch';

const ConnectedFeatureList = connect(
    createSelector([
        getFeaturedResults,
        state => state?.gnsearch?.featuredResources?.page || 1,
        state => state?.gnsearch?.featuredResources?.isNextPageAvailable || false,
        state => state?.gnsearch?.featuredResources?.isPreviousPageAvailable || false,
        state => state?.gnsearch?.featuredResources?.loading || false,
        getParsedGeoNodeConfiguration,
        featuredResourceDownload
    ], (resources, page, isNextPageAvailable, isPreviousPageAvailable, loading, { cardOptionsItemsAllowed }, downloading) => ({
        resources, page, isNextPageAvailable, isPreviousPageAvailable, loading, cardOptions: cardOptionsItemsAllowed, downloading})
    ), {
        loadFeaturedResources,
        onAction: processResources,
        onControl: setControlProperty,
        onDownload: downloadResource
    }
)(FeaturedList);

function Portal({
    targetId = '',
    location,
    fetchFeaturedResources
}) {

    const targetNode = document.querySelector(targetId);
    const cataloguePage = '/catalogue/';

    function handleFormatHref(options) {
        return cataloguePage + hashLocationToHref({
            location,
            ...options
        });
    }

    const { query } = url.parse(location.search, true);

    if (targetNode) {
        return createPortal(
            <ConnectedFeatureList
                query={query}
                formatHref={handleFormatHref}
                buildHrefByTemplate={buildHrefByTemplate}
                onLoad={fetchFeaturedResources}
                containerStyle={{
                    minHeight: 'auto'
                }}/>, targetNode);
    }
    return null;
}

export const ConnectedPortal = connect(
    createSelector(
        [],
        () => ({})
    ),
    {
        fetchFeaturedResources: loadFeaturedResources
    })(withRouter(Portal));

export default createPlugin('FeaturedList', {
    component: ConnectedPortal,
    containers: {},
    epics,
    reducers: {
        gnsearch
    }
});
