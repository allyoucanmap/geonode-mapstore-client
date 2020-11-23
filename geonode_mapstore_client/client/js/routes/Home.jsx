/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import url from 'url';
import { createSelector } from 'reselect';
import { Button } from 'react-bootstrap-v1';
import castArray from 'lodash/castArray';
import FaIcon from '@js/components/home/FaIcon';

import SearchBar from '@js/components/home/SearchBar';
import BrandNavbar from '@js/components/home/BrandNavbar';
import Hero from '@js/components/home/Hero';
import MenuIndex from '@js/components/home/MenuIndex';
import CardGrid from '@js/components/home/CardGrid';
import DetailsPanel from '@js/components/home/DetailsPanel';
import FiltersMenu from '@js/components/home/FiltersMenu';
import FilterForm from '@js/components/home/FilterForm';
import {
    fetchSuggestions,
    searchResources,
    requestResource,
    updateSuggestions
} from '@js/actions/gnsearch';
import { hashLocationToHref } from '@js/utils/GNSearchUtils';
import { withResizeDetector } from 'react-resize-detector';
import Footer from '@js/components/home/Footer';
import { useInView } from 'react-intersection-observer';

const DEFAULT_SUGGESTIONS = [];
const DEFAULT_RESOURCES = [];

const ConnectedSearchBar = connect(
    createSelector([
        state => state?.gnsearch?.suggestions || DEFAULT_SUGGESTIONS,
        state => state?.gnsearch?.loading || false
    ], (suggestions, loading) => ({
        suggestions,
        loading
    })),
    {
        onFetchSuggestions: fetchSuggestions,
        onClearSuggestions: updateSuggestions.bind(null, [])
    }
)(SearchBar);

const CardGridWithMessageId = ({ query, user, isFirstRequest, ...props }) => {
    const hasResources = props.resources?.length > 0;
    const hasFilter = Object.keys(query || {}).filter(key => key !== 'sort').length > 0;
    const isLoggedIn = !!user;
    const messageId = !hasResources && !isFirstRequest && !props.loading
        ? hasFilter && 'noResultsWithFilter'
            || isLoggedIn && 'noContentYet'
            || 'noPublicContent'
        : undefined;
    return <CardGrid { ...props } messageId={messageId}/>;
};

const ConnectedCardGrid = connect(
    createSelector([
        state => state?.gnsearch?.resources || DEFAULT_RESOURCES,
        state => state?.gnsearch?.loading || false,
        state => state?.gnsearch?.isNextPageAvailable || false,
        state => state?.gnsearch?.isFirstRequest
    ], (resources, loading, isNextPageAvailable, isFirstRequest) => ({
        resources,
        loading,
        isNextPageAvailable,
        isFirstRequest
    }))
)(CardGridWithMessageId);


const ConnectedDetailsPanel = connect(
    createSelector([
        state => state?.gnresource?.data || null,
        state => state?.gnresource?.loading || false
    ], (resource, loading) => ({
        resource,
        loading
    }))
)(DetailsPanel);

function Home({
    location,
    theme,
    params,
    onSearch,
    menu,
    navbar,
    footer,
    hideHero,
    onSelect,
    match,
    filters,
    user
}) {

    const brandNavbarNode = useRef();
    const menuIndexNode = useRef();
    const filtersMenuNode = useRef();
    const footerNode = useRef();
    const [inViewRef, inView] = useInView();

    const brandNavbarHeight = brandNavbarNode.current
        ? brandNavbarNode.current.getBoundingClientRect().height
        : 0;
    const menuIndexNodeHeight = menuIndexNode.current
        ? menuIndexNode.current.getBoundingClientRect().height
        : 0;
    const filtersMenuNodeHeight = filtersMenuNode.current
        ? filtersMenuNode.current.getBoundingClientRect().height
        : 0;
    const footerNodeHeight = footerNode.current
        ? footerNode.current.getBoundingClientRect().height
        : 0;

    const dimensions = {
        brandNavbarHeight,
        menuIndexNodeHeight,
        filtersMenuNodeHeight,
        footerNodeHeight
    };

    const [showFilterForm, setShowFilterForm] = useState(false);

    function handleUpdate(newParams, pathname) {
        const { query } = url.parse(location.search, true);
        onSearch({
            ...query,
            ...params,
            ...newParams
        }, pathname);
    }

    function handleClear() {
        const { query } = url.parse(location.search, true);
        const newParams = Object.keys(query)
            .reduce((acc, key) =>
                key.indexOf('filter') === 0
                    ? {
                        ...acc,
                        [key]: []
                    }
                    : acc, { extent: undefined });
        handleUpdate(newParams);
    }

    function handleFormatHref(options) {
        return hashLocationToHref({
            location,
            ...options
        });
    }

    const { query } = url.parse(location.search, true);

    const queryFilters = Object.keys(query).reduce((acc, key) => key.indexOf('filter') === 0
        ? [...acc, ...castArray(query[key]).map((value) => ({ key, value }))]
        : acc, []);

    const pk = match.params.pk;
    const ctype = match.params.ctype;

    useEffect(() => {
        onSelect(pk, ctype);
    }, [pk, ctype]);

    const search = (
        <ConnectedSearchBar
            key="search"
            value={params.q || ''}
            disableSuggestions={showFilterForm}
            style={{
                width: '100%',
                maxWidth: 716,
                margin: 'auto'
            }}
            onChange={(value) =>
                handleUpdate({
                    q: value
                }, '/search/')}
            append={
                <Button
                    variant="default"
                    onClick={() => setShowFilterForm(!showFilterForm)}
                >
                    <FaIcon name="filter"/>
                </Button>
            }
        >
            <FilterForm
                id="gn-filter-form"
                query={query}
                show={showFilterForm}
                onClose={() => setShowFilterForm(false)}
                fields={filters?.fields?.options}
                extentProps={filters?.extent}
                onChange={handleUpdate}
            />
        </ConnectedSearchBar>
    );

    const isHeroVisible = !hideHero && inView;

    return (
        <div className={`gn-home gn-theme-${theme?.variant || 'light'}`}>
            <BrandNavbar
                ref={brandNavbarNode}
                logo={navbar?.logo}
                navItems={navbar?.items}
                user={user}
                style={theme?.navbar?.style || {}}
            >
                {!isHeroVisible && search}
            </BrandNavbar>
            {!hideHero && <Hero
                style={{
                    marginTop: dimensions.brandNavbarHeight,
                    ...theme?.hero?.style
                }}
                jumbotronStyle={theme?.jumbotron?.style}
            >
                <div ref={inViewRef}>
                    {isHeroVisible && search}
                </div>
            </Hero>}
            <MenuIndex
                ref={menuIndexNode}
                style={{
                    top: dimensions.brandNavbarHeight
                }}
                user={user}
                query={query}
                menuItems={menu?.items}
                formatHref={handleFormatHref}
            />
            <ConnectedCardGrid
                user={user}
                query={query}
                containerStyle={!isHeroVisible
                    ? {
                        marginTop: dimensions.brandNavbarHeight,
                        minHeight: `calc(100vh - ${dimensions.brandNavbarHeight + dimensions.menuIndexNodeHeight + dimensions.footerNodeHeight}px )`
                    }
                    : undefined}
                column={
                    <ConnectedDetailsPanel
                        filters={queryFilters}
                        formatHref={handleFormatHref}
                        sectionStyle={{
                            width: 696,
                            ...(!isHeroVisible && {
                                position: 'fixed',
                                top: dimensions.brandNavbarHeight + dimensions.menuIndexNodeHeight,
                                bottom: dimensions.footerNodeHeight,
                                overflow: 'auto',
                                height: 'auto'
                            })
                        }}
                    />
                }
                isCardActive={resource => resource.pk === pk}
                page={params.page ? parseFloat(params.page) : 1}
                formatHref={handleFormatHref}
                onLoad={(value) => {
                    handleUpdate({
                        page: value
                    });
                }}
            >
                <FiltersMenu
                    ref={filtersMenuNode}
                    style={{
                        top: dimensions.brandNavbarHeight + dimensions.menuIndexNodeHeight
                    }}
                    formatHref={handleFormatHref}
                    order={query?.sort}
                    filters={queryFilters}
                    onClear={handleClear}
                    orderOptions={filters?.order?.options}
                    defaultLabelId={filters?.order?.defaultLabelId}
                />
            </ConnectedCardGrid>
            <Footer
                ref={footerNode}
                footerItems={footer.items}
            />
        </div>
    );
}

Home.propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    plugins: PropTypes.object,
    pluginsConfig: PropTypes.array,
    background: PropTypes.object,
    logo: PropTypes.array,
    jumbotron: PropTypes.object
};

Home.defaultProps = {
    background: {},
    logo: [],
    jumbotron: {}
};

const DEFAULT_PARAMS = {};

const ConnectedHome = connect(
    createSelector([
        state => state?.gnsearch?.params || DEFAULT_PARAMS,
        state => state?.security?.user || null
    ], (params, user) => ({
        params,
        user
    })),
    {
        onSearch: searchResources,
        onSelect: requestResource
    }
)(withResizeDetector(Home));

export default ConnectedHome;
