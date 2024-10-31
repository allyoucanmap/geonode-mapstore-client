/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import FaIcon from './FaIcon';
import { Dropdown } from 'react-bootstrap';

function ActionButtons({
    options,
    resource
}) {

    const containerNode = useRef();
    const dropdownClassName = 'gn-card-dropdown';
    const dropdownNode = containerNode?.current?.querySelector(`.${dropdownClassName}`);
    const isDropdownEmpty = (dropdownNode?.children?.length || 0) === 0;

    return (
        <div
            ref={containerNode}
            className="gn-resource-action-buttons"
            onClick={event => event.stopPropagation()}
            style={isDropdownEmpty ? { display: 'none' } : {}}
        >
            <Dropdown className="gn-card-options" pullRight id={`gn-card-options-${resource.pk2 || resource.pk}`}>
                <Dropdown.Toggle
                    variant="default"
                    size="sm"
                    noCaret
                >
                    <FaIcon name="ellipsis-v" />
                </Dropdown.Toggle>
                <Dropdown.Menu className={dropdownClassName}>
                    {options.map((option) => {
                        if (option.type === 'plugin') {
                            const { Component } = option;
                            return <Component key={option.name} resource={resource} renderType="menuItem"/>;
                        }
                        return null;
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

ActionButtons.propTypes = {
    options: PropTypes.array,
    resource: PropTypes.object
};

ActionButtons.defaultProps = {
    options: [],
    resource: {}
};

export default ActionButtons;
