/*
 * Copyright 2022, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { connect } from 'react-redux';
import main from '@mapstore/framework/components/app/main';
import ComponentsRoute from '@js/routes/Components';
import MainLoader from '@js/components/MainLoader';
import Router, { withRoutes } from '@js/components/Router';
import security from '@mapstore/framework/reducers/security';
import {
    getEndpoints,
    getConfiguration,
    getAccountInfo
} from '@js/api/geonode/v2';
import {
    setupConfiguration,
    initializeApp,
    storeEpicsCache
} from '@js/utils/AppUtils';
import pluginsDefinition from '@js/plugins/index';
import url from 'url';

const requires = {};

initializeApp();

const DEFAULT_LOCALE = {};
const ConnectedRouter = connect((state) => ({
    locale: state?.locale || DEFAULT_LOCALE
}))(Router);


const routes = [{
    name: 'components',
    path: [
        '/'
    ],
    component: ComponentsRoute
}];

document.addEventListener('DOMContentLoaded', function() {
    getEndpoints().then(() => {
        Promise.all([
            getConfiguration(),
            getAccountInfo()
        ])
            .then(([localConfig, user]) => {
                const { query = {} } = url.parse(window.location.href, true);
                const { pluginsConfig } = query;
                let pConfig;

                try {
                    pConfig = JSON.parse(pluginsConfig);
                } catch (e) {
                    pConfig = [];
                }

                setupConfiguration({ localConfig, user })
                    .then(({
                        securityState,
                        geoNodeConfiguration,
                        configEpics,
                        onStoreInit
                    }) => {

                        const appEpics = {
                            ...configEpics
                        };

                        storeEpicsCache(appEpics);

                        main({
                            appComponent: withRoutes(routes)(ConnectedRouter),
                            pluginsConfig: pConfig,
                            /* [{ "name": "Portal", "cfg": { "targetId": ".gn-main-header", "background": "red" } },{ "name": "Portal", "cfg": { "targetId": ".gn-hero", "background": "yellow" } },{ "name": "Portal", "cfg": { "targetId": "\#square-test", "background": "green" } },{ "name": "FeaturedList", "cfg": { "targetId": "\#row-test" } },{ "name": "FeaturedList", "cfg": { "targetId": "\#row-test" } }],*/
                            loaderComponent: MainLoader,
                            lazyPlugins: pluginsDefinition.lazyPlugins,
                            pluginsDef: {
                                plugins: {
                                    ...pluginsDefinition.plugins
                                },
                                requires: {
                                    ...requires,
                                    ...pluginsDefinition.requires
                                }
                            },
                            initialState: {
                                defaultState: {
                                    ...securityState
                                }
                            },
                            themeCfg: null,
                            appReducers: {
                                security
                            },
                            appEpics,
                            onStoreInit,
                            geoNodeConfiguration,
                            initialActions: []
                        });
                    }, withExtensions(StandardApp));
            });
    });
});
