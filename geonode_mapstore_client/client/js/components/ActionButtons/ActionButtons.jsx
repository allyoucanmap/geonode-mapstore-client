/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '@js/components/Dropdown';
import Message from '@mapstore/framework/components/I18N/Message';
import FaIcon from '@js/components/FaIcon';

function ActionButtons({
    options,
    actions,
    onAction,
    resource,
    buildHrefByTemplate,
    onDownload
}) {

    // do not render if the options only contain download or copy or both without meeting their requirements
    if (options?.every(({action}) => action !== 'delete')) {
        if (options?.every(({action}) => (action === 'download' && !resource.download_url) || (['copy'].includes(action) && !resource.is_copyable & !resource.download_url))) {
            return null;
        }
    }

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
            <Dropdown className="gn-card-options" pullRight>
                <Dropdown.Toggle
                    id={`gn-card-options-${resource.pk2 || resource.pk}`}
                    variant="default"
                    size="sm"
                    noCaret
                >
                    <FaIcon name="ellipsis-v" />
                </Dropdown.Toggle>
                <Dropdown.Menu className={dropdownClassName}>
                    {options.map((opt) => {
                        if (opt.type === 'plugin') {
                            const { Component } = opt;
                            return <Component key={opt.action} resource={resource}/>;
                        }
                        if ((opt.type === 'button' && actions[opt.action]) || opt.action === 'download') {
                            return (
                                ((opt.action === 'download' && resource.download_url) || (opt.action !== 'copy' && opt.action !== 'download') || (resource?.is_copyable && opt.action !== 'download')) && <Dropdown.Item
                                    key={opt.action}
                                    onClick={() =>
                                        opt.action !== 'download' ? onAction(actions[opt.action], [
                                            resource
                                        ]) : onDownload(resource)
                                    }
                                >
                                    <FaIcon name={opt.icon} />{' '}
                                    <Message msgId={opt.labelId} />
                                </Dropdown.Item>
                            );
                        }

                        return (
                            <Dropdown.Item
                                key={opt.href}
                                href={buildHrefByTemplate(resource, opt.href)}
                            >
                                <FaIcon name={opt.icon} />{' '}
                                <Message msgId={opt.labelId} />
                            </Dropdown.Item>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

ActionButtons.propTypes = {
    options: PropTypes.array,
    actions: PropTypes.object,
    onAction: PropTypes.func,
    resource: PropTypes.object,
    buildHrefByTemplate: PropTypes.func
};

ActionButtons.defaultProps = {
    options: [],
    actions: {},
    resource: {},
    onAction: () => {},
    buildHrefByTemplate: () => {}
};

export default ActionButtons;
