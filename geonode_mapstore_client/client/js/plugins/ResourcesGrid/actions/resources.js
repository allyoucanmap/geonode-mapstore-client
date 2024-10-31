/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const UPDATE_RESOURCES = 'RESOURCES:UPDATE_RESOURCES';
export const LOADING_RESOURCES = 'RESOURCES:LOADING_RESOURCES';
export const UPDATE_RESOURCES_METADATA = 'RESOURCES:UPDATE_RESOURCES_METADATA';
export const REDUCE_TOTAL_COUNT = 'RESOURCES:REDUCE_TOTAL_COUNT';
export const INCREASE_TOTAL_COUNT = 'RESOURCES:INCREASE_TOTAL_COUNT';
export const SET_SHOW_FILTERS_FORM = 'RESOURCES:SET_SHOW_FILTERS_FORM';
export const SET_SELECTED_RESOURCE = 'RESOURCES:SET_SELECTED_RESOURCE';

export function updateResources(resources, id) {
    return {
        type: UPDATE_RESOURCES,
        resources,
        id
    };
}

export function updateResourcesMetadata(metadata, id) {
    return {
        type: UPDATE_RESOURCES_METADATA,
        metadata,
        id
    };
}

export function loadingResources(loading, id) {
    return {
        type: LOADING_RESOURCES,
        loading,
        id
    };
}

export function reduceTotalCount(id) {
    return {
        type: REDUCE_TOTAL_COUNT,
        id
    };
}

export function increaseTotalCount(id) {
    return {
        type: INCREASE_TOTAL_COUNT,
        id
    };
}

export function setShowFiltersForm(show, id) {
    return {
        type: SET_SHOW_FILTERS_FORM,
        show,
        id
    };
}

export function setSelectedResource(selectedResource, id) {
    return {
        type: SET_SELECTED_RESOURCE,
        selectedResource,
        id
    };
}
