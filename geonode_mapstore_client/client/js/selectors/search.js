/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { excludeDeletedResources } from '@js/utils/ResourceUtils';
import {
    getResources,
    getTotalResources as getTotalResourcesSelector
} from '../plugins/ResourcesGrid/selectors/resources';

export const getSearchResults = (state, props) => {
    const resources = getResources(state, props);
    const processes = state?.resourceservice?.processes || [];
    const searchResources = resources.map((resource) => {
        const resourceProcesses = processes.filter((process) => process?.resource?.pk === resource?.pk);
        if (resourceProcesses.length > 0) {
            return { ...resource, processes: resourceProcesses };
        }
        return resource;
    });

    return excludeDeletedResources(searchResources);
};

export const getFeaturedResults = (state) => {
    const resources = state?.gnsearch?.featuredResources?.resources || [];
    const processes = state?.resourceservice?.processes || [];
    const featuredResults = resources.map((resource) => {
        const resourceProcesses = processes.filter((process) => process?.resource?.pk === resource?.pk);
        if (resourceProcesses.length > 0) {
            return { ...resource, processes: resourceProcesses };
        }
        return resource;
    });
    return excludeDeletedResources(featuredResults);
};

export const getTotalResources = (state, props) => {
    const resources = getSearchResults(state, props);
    const temporaryResourcesCount = resources.filter(resource => resource['@temporary']).length;
    return (getTotalResourcesSelector(state, props)) + temporaryResourcesCount;
};

export const getFacetsItems = state => state?.gnsearch?.facetItems;
export const getShowFilterForm = state => state?.gnsearch?.showFilterForm;
