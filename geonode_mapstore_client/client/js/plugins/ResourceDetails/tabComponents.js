/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { connect } from 'react-redux';
import DetailsLocations from './containers/DetailsLocations';
import DetailsAssets from './containers/DetailsAssets';
import DetailsAttributeTable from './containers/DetailsAttributeTable';
import DetailsLinkedResources from './containers/DetailsLinkedResources';
import DetailsSettings from './containers/DetailsSettings';
import { setResourceExtent, updateResourceProperties } from '@js/actions/gnresource';

const tabComponents = {
    'attribute-table': DetailsAttributeTable,
    'linked-resources': DetailsLinkedResources,
    'locations': connect(() => ({}), { onSetExtent: setResourceExtent })(DetailsLocations),
    'assets': DetailsAssets,
    'settings': connect(() => ({}), { onChange: updateResourceProperties })(DetailsSettings)
};

export default tabComponents;
