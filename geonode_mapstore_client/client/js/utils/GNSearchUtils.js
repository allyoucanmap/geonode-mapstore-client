/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import url from 'url';
import castArray from 'lodash/castArray';

let defaultQueryKeys = [
    'page'
];

let defaultPageSize = 20;

export const getQueryKeys = () => defaultQueryKeys;
export const getPageSize = () => defaultPageSize;

export const hashLocationToHref = ({
    location,
    pathname,
    query,
    replaceQuery
}) => {
    const { search, ...loc } = location;
    const { query: locationQuery } = url.parse(search || '', true);

    const newQuery = query
        ? replaceQuery
            ? { ...locationQuery, ...query }
            : Object.keys(query).reduce((acc, key) => {
                const value = query[key];
                const currentQueryValues = castArray(acc[key]).filter(val => val);
                const queryValue = currentQueryValues.indexOf(value) === -1
                    ? [...currentQueryValues, value]
                    : currentQueryValues.filter(val => val !== value);
                return { ...acc, [key]: queryValue };
            }, locationQuery)
        : locationQuery;

    return `#${url.format({
        ...loc,
        ...(pathname && { pathname }),
        query: Object.keys(newQuery).reduce((acc, newQueryKey) =>
            !newQuery[newQueryKey] || newQuery[newQueryKey].length === 0
                ? acc
                : { ...acc,  [newQueryKey]: newQuery[newQueryKey]}, {})
    })}`;
};

export function getUserName(user) {
    if (user.first_name && user.last_name) {
        return `${user.first_name} ${user.last_name}`;
    }
    return user.username;
}

export const getResourceTypesInfo = () => ({
    'layer': {
        icon: 'layer-group',
        name: 'Layer'
    },
    'map': {
        icon: 'map-marked',
        embed: '/maps/{pk}/embed',
        name: 'Map'
    },
    'document': {
        icon: 'file',
        name: 'Document'
    },
    'geo story': {
        icon: 'book-open',
        embed: '/apps/{pk}/embed',
        name: 'GeoStory'
    },
    'image': {
        icon: 'file-image',
        name: 'Image'
    },
    'video': {
        icon: 'file-video',
        name: 'Video'
    }
});

export default {
    getQueryKeys,
    getPageSize,
    hashLocationToHref,
    getUserName,
    getResourceTypesInfo
};
