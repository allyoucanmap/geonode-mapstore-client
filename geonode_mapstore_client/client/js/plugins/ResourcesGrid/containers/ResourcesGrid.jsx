/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createPortal } from 'react-dom';
import CardGrid from '../components/CardGrid';
import FaIcon from '../components/FaIcon';
import Button from '../components/Button';
import MainLoader from '../components/MainLoader';
import useResourceGridLayout from '../hooks/useResourceGridLayout';
import TargetSelectorPortal from '../components/TargetSelectorPortal';
import PaginationCustom from '../components/PaginationCustom';
import ResourcesPanelWrapper from '../components/ResourcesPanelWrapper';
import ResourcesMenu from '../components/ResourcesMenu';

const defaultGetMainMessageId = ({ query, user, isFirstRequest, error, resources, loading }) => {
    const hasResources = resources?.length > 0;
    const hasFilter = Object.keys(query || {}).filter(key => key !== 'sort').length > 0;
    const isLoggedIn = !!user;
    const messageId = !hasResources && !isFirstRequest && !loading
        ? error && 'resourcesGrid.errorResourcePage'
            || hasFilter && 'resourcesGrid.noResultsWithFilter'
            || isLoggedIn && 'resourcesGrid.noContentYet'
            || 'resourcesGrid.noPublicContent'
        : undefined;
    return messageId;
};

function ResourcesGrid({
    id,
    user,
    totalResources,
    loading,
    menuItems: [],
    pageSize = 24,
    panel,
    cardLayoutStyle,
    setCardLayoutStyle,
    hideCardLayoutButton,
    selectedResource,
    targetSelector = '',
    showDetails,
    showFiltersForm,
    filtersComponent,
    filtersButtonComponent,
    detailsComponent,
    error,
    query,
    cardOptions,
    width,
    height,
    headerNodeSelector = '',
    navbarNodeSelector = '',
    footerNodeSelector = '',
    containerSelector = '',
    registry,
    onUpdate = () => {},
    onClear = () => {},
    onSelect = () => {},
    resources,
    isFirstRequest,
    getMainMessageId = defaultGetMainMessageId,
    menuItems,
    orderConfig
}) {

    const {
        container,
        detailNode,
        filterFormNode,
        stickyTop,
        stickyBottom,
        panelsWidth,
        filtersFormWidth
    } = useResourceGridLayout({
        headerNodeSelector,
        navbarNodeSelector,
        footerNodeSelector,
        containerSelector,
        showFiltersForm,
        showDetails,
        width,
        height,
        panel
    });


    const FiltersComponent = filtersComponent;

    const filterForm = (
        <ResourcesPanelWrapper
            className="gn-resources-filter"
            top={stickyTop}
            bottom={stickyBottom}
            show={showFiltersForm}
            enabled={!!FiltersComponent}
            ref={filterFormNode}
        >
            <FiltersComponent
                resourcesGridId={id}
                query={query}
                onClear={onClear}
                onChange={onUpdate}
            />
        </ResourcesPanelWrapper>
    );

    const DetailsComponent = detailsComponent;

    const detailPanel = (
        <ResourcesPanelWrapper
            className="gn-resource-detail"
            top={stickyTop}
            bottom={stickyBottom}
            show={showDetails}
            enabled={!!DetailsComponent}
            ref={detailNode}
        >
            <DetailsComponent />
        </ResourcesPanelWrapper>
    );

    return (
        <>
            <TargetSelectorPortal targetSelector={targetSelector}>
                <>
                    <div
                        className={`gn-resources-grid gn-${panel ? 'panel' : 'row'}`}
                        style={(container || panel) ? {} : {
                            width: `calc(100% - ${panelsWidth}px)`,
                            marginLeft: filtersFormWidth
                        }}
                    >
                        <div className="gn-grid-container">
                            <CardGrid
                                resources={resources}
                                isFirstRequest={isFirstRequest}
                                loading={loading}
                                error={error}
                                cardLayoutStyle={cardLayoutStyle}
                                header={
                                    <ResourcesMenu
                                        resourcesGridId={id}
                                        filtersButtonComponent={filtersButtonComponent}
                                        menuItems={menuItems}
                                        orderConfig={orderConfig}
                                        totalResources={totalResources}
                                        loading={loading}
                                        cardLayoutStyle={cardLayoutStyle}
                                        setCardLayoutStyle={setCardLayoutStyle}
                                        hideCardLayoutButton={hideCardLayoutButton}
                                        style={{
                                            position: 'sticky',
                                            top: stickyTop
                                        }}
                                        registry={registry}
                                        query={query}
                                    />
                                }
                                footer={
                                    <div
                                        className="gn-resources-pagination"
                                        style={{
                                            position: 'sticky',
                                            bottom: stickyBottom
                                        }}
                                    >
                                        {error
                                            ? <Button variant="primary" href="#/"><FaIcon name="refresh" /></Button>
                                            : (!loading || !!totalResources) && <PaginationCustom
                                                items={Math.ceil(totalResources / pageSize)}
                                                activePage={query.page ? parseFloat(query.page) : 1}
                                                onSelect={(value) => {
                                                    onUpdate({
                                                        page: value
                                                    });
                                                }}
                                            />}
                                    </div>
                                }
                                user={user}
                                query={query}
                                cardOptions={cardOptions}
                                page={query.page ? parseFloat(query.page) : 1}
                                isCardActive={res => res.pk === selectedResource?.pk}
                                getMainMessageId={getMainMessageId}
                                onSelect={!!DetailsComponent ? onSelect : undefined}
                                registry={registry}
                            />
                        </div>
                        {
                            panel && <>
                                {filterForm}
                                {detailPanel}
                            </>
                        }
                    </div>
                    {loading && (totalResources || 0) === 0 ? <MainLoader className="gn-main-grid-loader"/> : null}
                </>
            </TargetSelectorPortal>
            {!panel && <>
                {createPortal(filterForm, document.querySelector('body > div'))}
                {createPortal(detailPanel, document.querySelector('body > div'))}
            </>}
        </>
    );
}

export default ResourcesGrid;
