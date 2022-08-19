/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';

function Portal({
    targetId = '.gn-main-header',
    background
}) {
    const targetNode = document.querySelector(targetId);
    if (targetNode) {
        return createPortal(<div style={{ background, position: 'relative', height: '100%', width: '100%' }}>
            
        </div>, targetNode);
    }
    return null;
}

export const ConnectedPortal = connect(
    createSelector(
        [],
        () => ({})
    ),
    {})(Portal);

export default createPlugin('Portal', {
    component: ConnectedPortal,
    containers: {},
    epics: {},
    reducers: {}
});
