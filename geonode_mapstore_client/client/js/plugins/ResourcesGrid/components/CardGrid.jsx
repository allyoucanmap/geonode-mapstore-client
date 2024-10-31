/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import HTML from '@mapstore/framework/components/I18N/HTML';
import ResourceCard from './ResourceCard';
import MainLoader from './MainLoader';

const CardGrid = (props) => {
    const {
        resources,
        isCardActive,
        containerStyle,
        header,
        cardOptions,
        children,
        footer,
        cardLayoutStyle,
        loading,
        getMainMessageId,
        registry,
        onSelect
    } = props;
    const {
        getResourceStatus
    } = registry;
    const messageId = getMainMessageId(props);
    return (
        <div className="gn-card-grid">
            <div className="gn-card-grid-container" style={containerStyle}>
                {header}
                {children}
                {messageId ? <div className="gn-card-grid-message">
                    <h1><HTML msgId={`${messageId}Title`}/></h1>
                    <p>
                        <HTML msgId={`${messageId}Content`}/>
                    </p>
                </div> : null}
                <ul
                    className={`gn-card-list gn-cards-type-${cardLayoutStyle}`}
                >
                    {resources.map((resource, idx) => {
                        const {
                            isProcessing,
                            isDownloading,
                            items: statusItems
                        } = getResourceStatus(resource);
                        // enable allowedOptions (menu cards)
                        const allowedOptions =  !isProcessing ? cardOptions : [];
                        return (
                            <li
                                key={`${idx}:${resource.pk}`}
                            >
                                <ResourceCard
                                    active={isCardActive(resource)}
                                    data={resource}
                                    options={allowedOptions}
                                    layoutCardsStyle={cardLayoutStyle}
                                    loading={isProcessing}
                                    readOnly={isProcessing}
                                    downloading={isDownloading}
                                    statusItems={statusItems}
                                    registry={registry}
                                    onClick={onSelect}
                                />
                            </li>
                        );
                    })}
                    {loading && resources.length > 0 ? <MainLoader className="gn-cards-loader"/> : null}
                </ul>
                {footer}
            </div>
        </div>
    );
};

CardGrid.defaultProps = {
    page: 1,
    resources: [],
    loading: false,
    formatHref: () => '#',
    isCardActive: () => false,
    getMessageId: () => undefined,
    getResourceStatus: () => ({})
};

export default CardGrid;
