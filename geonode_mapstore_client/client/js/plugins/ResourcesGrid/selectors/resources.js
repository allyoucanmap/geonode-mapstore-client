import { getMonitoredState } from '@mapstore/framework/utils/PluginsUtils';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';

const getStatePart = (state, props) => {
    return state?.resources?.[props?.id] || state?.resources?.[props?.resourcesGridId]  || {};
};

const RESOURCES = [];
export const getResources = (state, props) => {
    const resources = getStatePart(state, props)?.resources || RESOURCES;
    return resources;
};

export const getResourcesLoading = (state, props) => getStatePart(state, props)?.loading;
export const getResourcesError = (state, props) => getStatePart(state, props)?.error;
export const getIsFirstRequest = (state, props) => getStatePart(state, props)?.isFirstRequest !== false;
export const getTotalResources = (state, props) => getStatePart(state, props)?.total || 0;
export const getShowFiltersForm = (state, props) => getStatePart(state, props)?.showFiltersForm;
export const getSelectedResource = (state, props) => getStatePart(state, props)?.selectedResource;
export const getShowDetails = (state, props) => !!getSelectedResource(state, props);

export const getMonitoredStateSelector =  state => getMonitoredState(state, getConfigProp('monitorState'));
