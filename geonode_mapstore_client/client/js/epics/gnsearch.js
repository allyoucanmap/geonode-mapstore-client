/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Observable } from 'rxjs';
import isNil from 'lodash/isNil';
import {
    getResourceByTypeAndByPk
} from '@js/api/geonode/v2';
import {
    REQUEST_RESOURCE
} from '@js/actions/gnsearch';
import {
    resourceLoading,
    setResource,
    resourceError
} from '@js/actions/gnresource';


export const gnsSelectResourceEpic = (action$, store) =>
    action$.ofType(REQUEST_RESOURCE)
        .switchMap(action => {
            if (isNil(action.pk)) {
                return Observable.of(setResource(null));
            }
            const state = store.getState();
            const resources = state.gnsearch?.resources || [];
            const selectedResource = resources.find(({ pk, resource_type: resourceType}) =>
                pk === action.pk && action.ctype === resourceType);
            return Observable.defer(() => getResourceByTypeAndByPk(action.ctype, action.pk, action.subtype))
                .switchMap((resource) => {
                    return Observable.of(setResource({
                        ...resource,
                        /* store information related to detail */
                        '@ms-detail': true
                    }));
                })
                .catch((error) => {
                    return Observable.of(resourceError(error.data || error.message));
                })
                .startWith(
                    // preload the resource if available
                    ...(selectedResource
                        ? [ setResource({
                            ...selectedResource,
                            /* store information related to detail */
                            '@ms-detail': true
                        }, true) ]
                        : [ resourceLoading() ])
                );
        });

export default {
    gnsSelectResourceEpic
};
