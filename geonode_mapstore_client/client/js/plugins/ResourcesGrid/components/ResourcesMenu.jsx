/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import Message from '@mapstore/framework/components/I18N/Message';
import Menu from './Menu';

import Spinner from './Spinner';
import FaIcon from './FaIcon';
import Button from './Button';
import { Dropdown, MenuItem, Badge } from 'react-bootstrap';

const ResourcesMenu = forwardRef(({
    menuItems,
    style,
    filtersButtonComponent,
    resourcesGridId,
    totalResources,
    loading,
    hideCardLayoutButton,
    cardLayoutStyle,
    setCardLayoutStyle,
    orderConfig,
    query,
    registry
}, ref) => {

    const {
        defaultLabelId,
        options: orderOptions,
        variant: orderVariant,
        align: orderAlign = 'right'
    } = orderConfig || {};

    const {
        formatHref
    } = registry;

    const FiltersButtonComponent = filtersButtonComponent;

    const selectedSort = orderOptions.find(({ value }) => query?.sort === value);
    function handleToggleCardLayoutStyle() {
        setCardLayoutStyle(cardLayoutStyle === 'grid' ? 'list' : 'grid');
    }

    const orderButtonNode = orderOptions.length > 0 &&
        <Dropdown pullRight={orderAlign === 'right'} id="sort-dropdown">
            <Dropdown.Toggle
                bsStyle={orderVariant || 'default'}
                bsSize="sm"
                noCaret
            >
                <Message msgId={selectedSort?.labelId || defaultLabelId} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {orderOptions.map(({ labelId, value }) => {
                    return (
                        <MenuItem
                            key={value}
                            active={value === selectedSort?.value}
                            href={formatHref({
                                query: {
                                    sort: [value]
                                },
                                replaceQuery: true
                            })}
                        >
                            <Message msgId={labelId} />
                        </MenuItem>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>;

    return (
        <div
            className="gn-filters-menu gn-menu gn-default"
            style={style}
            ref={ref}
        >
            <div className="gn-menu-container">
                <div className="gn-menu-content">
                    <div className="gn-menu-fill">
                        {FiltersButtonComponent ? <FiltersButtonComponent query={query} resourcesGridId={resourcesGridId} /> : null}
                        {orderAlign === 'left' ? orderButtonNode : null}
                        {loading ? <span className="resources-count-loading"><Spinner /></span> : <Badge>
                            <span className="resources-count"> <Message msgId="gnhome.resourcesFound" msgParams={{ count: totalResources }}/> </span>
                        </Badge>}
                    </div>
                    <Menu
                        items={menuItems}
                        containerClass={`gn-menu-list`}
                        size="md"
                        alignRight
                    />
                    {!hideCardLayoutButton && <Button
                        variant="default"
                        onClick={handleToggleCardLayoutStyle}
                        size="sm"
                    >
                        <FaIcon name={cardLayoutStyle === 'grid' ? 'list' : 'th'} />
                    </Button>}
                    {orderAlign === 'right' ? orderButtonNode : null}
                </div>
            </div>
        </div>
    );
});

ResourcesMenu.defaultProps = {
    orderOptions: [
        {
            label: 'Most recent',
            labelId: 'gnhome.mostRecent',
            value: '-date'
        },
        {
            label: 'Less recent',
            labelId: 'gnhome.lessRecent',
            value: 'date'
        },
        {
            label: 'A Z',
            labelId: 'gnhome.aZ',
            value: 'title'
        },
        {
            label: 'Z A',
            labelId: 'gnhome.zA',
            value: '-title'
        },
        {
            label: 'Most popular',
            labelId: 'gnhome.mostPopular',
            value: 'popular_count'
        }
    ],
    defaultLabelId: 'gnhome.orderBy',
    formatHref: () => '#'
};

export default ResourcesMenu;
