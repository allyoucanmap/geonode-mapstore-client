/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Message from '@mapstore/framework/components/I18N/Message';
import PropTypes from 'prop-types';
import FaIcon from './FaIcon';
import tooltip from '@mapstore/framework/components/misc/enhancers/tooltip';

const Icon = ({ glyph, ...props }) => {
    return (<div {...props}><FaIcon name={glyph} /></div> );
};

const IconWithTooltip = tooltip(Icon);

const ResourceStatus = ({ statusItems = [] }) => {

    if (!statusItems?.length) {
        return null;
    }
    return (
        <div className="gn-resource-status">
            {statusItems.map((item, idx) => {
                if (item.type === 'text') {
                    return (
                        <div key={idx} className={`gn-resource-status-text gn-resource-status-${item.variant}`} >
                            <Message msgId={item.labelId} />
                        </div>
                    );
                }
                if (item.type === 'icon') {
                    return (
                        <IconWithTooltip
                            glyph={item.glyph}
                            tooltipId={item.tooltipId}
                            className={`gn-resource-status-icon gn-resource-status-${item.variant}`}
                        />
                    );
                }
                return null;
            })}
        </div>
    );
};

ResourceStatus.propTypes = {
    statusItems: PropTypes.array
};

ResourceStatus.defaultProps = {
    statusItems: []
};


export default ResourceStatus;
