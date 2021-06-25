/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */


import React from 'react';
import PropTypes from 'prop-types';
import castArray from 'lodash/castArray';
import Tag from '@js/components/home/Tag';
import Badge from '@js/components/Badge';
import NavLink from './NavLink';
import Message from '@mapstore/framework/components/I18N/Message';
import DropdownList from './DropdownList';
import {
    isValidBadgeValue
} from '@js/utils/MenuUtils';

/**
 * Menu item component
 * @name MenuItem
 * @memberof components.Menu.MenuItem
 * @prop {object} item the item menu
 * @prop {object} menuItemsProps contains pros to apply to items, to manage single permissions, build href and query url
 * @prop {node} containerNode the node to append the child element into a DOM
 * @prop {number} tabIndex define navigation order
 * @prop {boolean} draggable is element is draggable
 * @prop {function} classItem class to apply to the Item
 * @example
 *  <MenuItem
 *            tabIndex={tabindex}
 *            item={{ ...item, id: item.id || idx }}
 *            draggable={false}
 *            menuItemsProps={menuItemsProps}
 *            containerNode={containerNode.current}
 *  />
 *
 */

const MenuItem = ({ item, menuItemsProps, containerNode, tabIndex, draggable, classItem, size, alignRight, variant }) => {

    const { formatHref, query } = menuItemsProps;
    const { id, type, label, labelId = '', items = [], href, style, badge = '', image, subType, Component } = item;

    const badgeValue = badge;
    if (type === 'dropdown') {
        return (<DropdownList
            id={id}
            items={items}
            label={label}
            labelId={labelId}
            toogleStyle={style}
            toogleImage={image}
            dropdownClass={classItem}
            tabIndex={tabIndex}
            badgeValue={badgeValue}
            containerNode={containerNode}
            size={size}
            alignRight={alignRight}
            variant={variant}
        />);
    }

    if (type === 'custom' && Component) {
        return <Component />;
    }

    if (type === 'link') {
        if (subType === 'tag') {
            return (
                <Tag
                    tabIndex={tabIndex}
                    draggable={draggable}
                    href={href}
                    style={style}
                    variant={variant}
                >
                    {labelId && <Message msgId={labelId} /> || label}
                    {isValidBadgeValue(badgeValue) && <Badge>{badgeValue}</Badge>}
                </Tag>
            );
        }

        return (
            <NavLink href={href} className={`btn btn-${variant || 'default'}`}>{labelId && <Message msgId={labelId} /> || label}</NavLink>
        );

    }

    if (type === 'divider') {
        return <div className="gn-menu-index-divider" style={style}></div>;
    }
    if (type === 'filter') {
        const active = castArray(query.f || []).find(value => value === item.id);
        return (
            <Tag
                tabIndex={tabIndex}
                draggable={draggable}
                active={active}
                style={style}
                href={formatHref({
                    query: { f: item.id },
                    replaceQuery: active ? false : true
                })}
                variant={variant}
            >
                {labelId && <Message msgId={labelId} /> || label}
                {isValidBadgeValue(badgeValue) && <Badge>{badgeValue}</Badge>}
            </Tag>
        );
    }
    return null;


};

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    menuItemsProps: PropTypes.object.isRequired,
    containerNode: PropTypes.element,
    tabIndex: PropTypes.number,
    draggable: PropTypes.bool,
    classItem: PropTypes.string

};

export default MenuItem;
