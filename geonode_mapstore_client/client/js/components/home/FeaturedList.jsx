/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Spinner } from 'react-bootstrap-v1';
import HTML from '@mapstore/framework/components/I18N/HTML';
import ResourceCard from '@js/components/home/ResourceCard';
import { withResizeDetector } from 'react-resize-detector';

const Cards = withResizeDetector(({
    resources,
    formatHref,
    isCardActive,
    containerWidth,
    width: detectedWidth,
    buildHrefByTemplate,
    options
}) => {
    const width = containerWidth || detectedWidth;
    const margin = 24;
    const size = 320;
    const count = Math.floor(width / (size + margin));
    const cardWidth = width >= size + margin * 2
        ? Math.floor((width - margin * count) / count)
        : '100%';

    const ulPadding = Math.floor(margin / 2);
    const isSingleCard = count === 0 || count === 1;

    const gridLayoutSpace = (idx) => {

        const gridSpace = isSingleCard
            ? {
                width: width - margin,
                margin: ulPadding
            }
            : {
                width: cardWidth,
                marginRight: (idx + 1) % count === 0 ? 0 : margin,
                marginTop: margin
            };

        return gridSpace;
    };

    const containerStyle = isSingleCard
        ? {
            paddingBottom: margin
        }
        : {
            paddingLeft: ulPadding,
            paddingBottom: margin
        };
    return (
        <ul
            style={containerStyle}
        >
            {resources.map((resource, idx) => {
                return (
                    <li
                        key={resource?.pk}
                        style={(gridLayoutSpace(idx))}
                    >
                        <ResourceCard
                            active={isCardActive(resource)}
                            data={resource}
                            formatHref={formatHref}
                            options={options}
                            buildHrefByTemplate={buildHrefByTemplate}
                            layoutCardsStyle="grid"
                        />
                    </li>
                );
            })}
        </ul>
    );
});

const FeaturedList = withResizeDetector(({
    resources,
    loading,
    isNextPageAvailable,
    formatHref,
    isCardActive,
    containerStyle,
    header,
    cardOptions,
    pageSize,
    buildHrefByTemplate,
    isPreviousPageAvailable,
    loadFeaturedResources
}) => {

    const hasResources = resources?.length > 0;

    const nextIconStyles = {
        fontSize: '2rem',
        ...(!isNextPageAvailable || loading ? {color: 'grey', cursor: 'not-allowed'} : {cursor: 'pointer'})
    };

    const previousIconStyles = {
        fontSize: '2rem',
        marginRight: '1rem',
        ...(!isPreviousPageAvailable || loading ? {color: 'grey', cursor: 'not-allowed'} : {cursor: 'pointer'})};
    return (
        <>
            {hasResources && <div className="gn-card-grid">
                {header}
                <div style={{
                    display: 'flex',
                    ...(pageSize === 'sm' && {
                        flexDirection: 'column'
                    })
                }}>
                    <div style={{ flex: 1 }}>
                        <div className="gn-card-grid-container" style={containerStyle}>
                            <h3><HTML msgId={`gnhome.featuredList`}/></h3>
                            <Cards
                                resources={resources}
                                formatHref={formatHref}
                                isCardActive={isCardActive}
                                options={cardOptions}
                                buildHrefByTemplate={buildHrefByTemplate}
                            />
                            <div className="gn-card-grid-pagination">
                                <div>
                                    { loading && <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>}
                                </div>
                                <i onClick={() => loadFeaturedResources("previous")} disabled={!isPreviousPageAvailable || loading} className="fa fa-caret-left"
                                    style={previousIconStyles} aria-hidden="true"></i>
                                <i onClick={() => loadFeaturedResources("next")} disabled={!isNextPageAvailable || loading} className="fa fa-caret-right"
                                    style={nextIconStyles} aria-hidden="true"></i>

                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
});

FeaturedList.defaultProps = {
    page: 1,
    resources: [],
    isNextPageAvailable: false,
    loading: false,
    formatHref: () => '#',
    isCardActive: () => false,
    isPreviousPageAvailable: false,
    loadFeaturedResources: () => {}
};

export default FeaturedList;
