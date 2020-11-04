/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import expect from 'expect';
import { extendPluginsDefinition } from '../plugins';

describe('example with plugins', () => {
    it('should show an example of test', () => {
        const plugins = {};
        const requires = {};
        const extendedPlugins = extendPluginsDefinition({ plugins, requires });
        expect(extendedPlugins.plugins).toEqual({});
    });
});
