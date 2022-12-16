/*
 * Copyright 2022, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Button from '@js/components/Button';
import { Glyphicon } from 'react-bootstrap';
import { changeMapType } from '@mapstore/framework/actions/maptype';
import { mapTypeSelector } from '@mapstore/framework/selectors/maptype';
import { registerCustomSaveHandler } from '@mapstore/framework/selectors/mapsave';

registerCustomSaveHandler('mapType', (state) => ({
    lib: mapTypeSelector(state)
}));

function MapType({
    onClick,
    variant,
    size,
    mapType
}) {
    return (
        <Button
            variant={variant}
            size={size}
            active={mapType === 'cesium'}
            className={mapType === 'cesium' ? 'gn-success-changes-icon' : ''}
            onClick={() => onClick(mapType === 'cesium' ? 'openlayers' : 'cesium')}
        >
            <Glyphicon glyph="3d" />
        </Button>
    );
}

const MapTypePlugin = connect(
    createSelector([mapTypeSelector], (mapType) => ({ mapType })),
    {
        onClick: changeMapType
    }
)(MapType);


export default createPlugin('MapType', {
    component: () => null,
    containers: {
        ActionNavbar: {
            name: 'MapType',
            Component: MapTypePlugin
        }
    },
    epics: {},
    reducers: {}
});
