/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import url from 'url';
import isArray from 'lodash/isArray';
import isEqual from 'lodash/isEqual';
import uniqBy from 'lodash/uniqBy';
import { getMonitoredState } from '@mapstore/framework/utils/PluginsUtils';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';
import PluginsContainer from '@mapstore/framework/components/plugins/PluginsContainer';
import { requestResourceConfig, requestNewResourceConfig } from '@js/actions/gnresource';
import MetaTags from '@js/components/MetaTags';
import MainEventView from '@js/components/MainEventView';
import ViewerLayout from '@js/components/ViewerLayout';
import { createShallowSelector } from '@mapstore/framework/utils/ReselectUtils';
import { getResourceImageSource } from '@js/utils/ResourceUtils';
import useModulePlugins from '@mapstore/framework/hooks/useModulePlugins';
import { getPlugins } from '@mapstore/framework/utils/ModulePluginsUtils';
import {
    contextMonitoredStateSelector,
    currentPluginsSelector,
    currentTitleSelector,
    contextThemeSelector,
    contextCustomVariablesEnabledSelector
} from '@mapstore/framework/selectors/context';
import { canEditResource } from '@js/selectors/resource';
import ContextTheme from '@mapstore/framework/components/theme/ContextTheme';
import defaultThemeVars from "!!raw-loader!../../themes/geonode/less/_variables.less";

const urlQuery = url.parse(window.location.href, true).query;

const ConnectedPluginsContainer = connect(
    createShallowSelector(
        state => urlQuery.mode || (urlQuery.mobile || state.browser && state.browser.mobile ? 'mobile' : 'desktop'),
        state => getMonitoredState(state, getConfigProp('monitorState')),
        state => state?.controls,
        (mode, monitoredState, controls) => ({
            mode,
            monitoredState,
            pluginsState: controls
        })
    )
)(PluginsContainer);

const DEFAULT_PLUGINS_CONFIG = [];

function getPluginsConfiguration(name, pluginsConfig) {
    if (!pluginsConfig) {
        return DEFAULT_PLUGINS_CONFIG;
    }
    if (isArray(pluginsConfig)) {
        return pluginsConfig;
    }
    const { isMobile } = getConfigProp('geoNodeSettings') || {};
    if (isMobile && pluginsConfig) {
        return pluginsConfig[`${name}_mobile`] || pluginsConfig[name] || DEFAULT_PLUGINS_CONFIG;
    }
    return pluginsConfig[name] || DEFAULT_PLUGINS_CONFIG;
}

function AppViewerRoute({
    name,
    pluginsConfig: propPluginsConfig,
    appPluginsConfig: propAppPluginsConfig,
    params,
    onUpdate,
    onCreate = () => {},
    loaderComponent,
    plugins,
    match,
    resource,
    siteName,
    resourceType,
    loadingConfig,
    configError,
    defaultPluginsConfigName,
    canEdit,
    theme,
    customVariablesEnabled,
    embedded
}) {

    const { pk, actionType } = match.params || {};
    const editing = canEdit && actionType === 'edit';
    const pluginsConfig = embedded ? getPluginsConfiguration('desktop', propAppPluginsConfig) : (resource?.pk === pk || pk === 'new') ? uniqBy([
        ...getPluginsConfiguration(name, propPluginsConfig),
        ...(editing ? getPluginsConfiguration(defaultPluginsConfigName, propPluginsConfig) : []),
        ...((propAppPluginsConfig && !editing) ? getPluginsConfiguration('desktop', propAppPluginsConfig) : [])
    ], 'name') : [];

    const { plugins: loadedPlugins, pending } = useModulePlugins({
        pluginsEntries: getPlugins(plugins, 'module'),
        pluginsConfig
    });

    const prevConfig = useRef();

    useEffect(() => {

        if (match?.params?.pk !== prevConfig?.current?.pk) {
            console.log('HERE', match.params, prevConfig.current);
        }

        prevConfig.current = {
            ...match.params
        };
    })

    useEffect(() => {
        if (!pending && pk !== undefined) {
            if (pk === 'new') {
                onCreate(resourceType, {
                    page: name,
                    params: match.params
                });
            } else {
                onUpdate(resourceType, pk, {
                    page: name,
                    params: match.params
                });
            }
        }
    }, [pending, match.params]);

    const loading = loadingConfig || pending;
    const parsedPlugins = useMemo(() => ({ ...loadedPlugins, ...getPlugins(plugins) }), [loadedPlugins]);
    const Loader = loaderComponent;
    const className = `page-${resourceType}-viewer`;

    useEffect(() => {
        // set the correct height of navbar
        const mainHeader = document.querySelector('.gn-main-header');
        const mainHeaderPlaceholder = document.querySelector('.gn-main-header-placeholder');
        const topbar = document.querySelector('#gn-topbar');
        function resize() {
            if (mainHeaderPlaceholder && mainHeader) {
                mainHeaderPlaceholder.style.height = mainHeader.clientHeight + 'px';
            }
            if (topbar && mainHeader) {
                topbar.style.top = mainHeader.clientHeight + 'px';
            }
        }
        // hide the navigation bar if a resource is being viewed
        document.getElementById('gn-topbar')?.classList.add('hide-navigation');
        document.getElementById('gn-brand-navbar-bottom')?.classList.add('hide-search-bar');
        resize();
        return () => {
            document.getElementById('gn-topbar')?.classList.remove('hide-navigation');
            document.getElementById('gn-brand-navbar-bottom')?.classList.remove('hide-search-bar');
            resize();
        };
    }, [loading]);

    return (
        <>
            {resource && <MetaTags
                logo={() => getResourceImageSource(resource?.thumbnail_url)}
                title={(resource?.title) ? `${resource?.title} - ${siteName}` : siteName }
                siteName={siteName}
                contentURL={resource?.detail_url}
                content={resource?.abstract}
            />}
            {!editing && <ContextTheme
                theme={{
                    ...theme,
                    variables: Object.keys(theme?.variables || {}).reduce((acc, key) => {
                        return {
                            ...acc,
                            [key.replace('ms-', 'gn-')]: theme.variables[key]
                        };
                    }, {})
                }}
                customVariablesEnabled={customVariablesEnabled}
                themeVars={defaultThemeVars + ".get-root-css-variables(@gn-theme-vars);"}
            />}
            <ConnectedPluginsContainer
                key={className}
                id={className}
                className={className}
                component={ViewerLayout}
                pluginsConfig={pluginsConfig}
                plugins={parsedPlugins}
                allPlugins={plugins}
                params={params}
            />
            {loading && Loader && <Loader style={{ opacity: 0.5 }}/>}
            {configError && <MainEventView msgId={configError}/>}
        </>
    );
}

AppViewerRoute.propTypes = {
    onUpdate: PropTypes.func
};

const ConnectedAppViewerRoute = connect(
    createSelector([
        state => state?.gnresource?.data,
        state => state?.gnsettings?.siteName || 'GeoNode',
        state => state?.gnresource?.loadingResourceConfig,
        state => state?.gnresource?.configError,
        currentPluginsSelector,
        contextMonitoredStateSelector,
        canEditResource,
        contextThemeSelector,
        contextCustomVariablesEnabledSelector
    ], (resource, siteName, loadingConfig, configError, appPluginsConfig, monitoredState, canEdit, theme, customVariablesEnabled) => ({
        resource,
        siteName,
        loadingConfig,
        configError,
        appPluginsConfig,
        monitoredState,
        canEdit,
        theme,
        customVariablesEnabled
    })),
    {
        onUpdate: requestResourceConfig,
        onCreate: requestNewResourceConfig

    }
)(AppViewerRoute);

ConnectedAppViewerRoute.displayName = 'ConnectedAppViewerRoute';

export default ConnectedAppViewerRoute;
