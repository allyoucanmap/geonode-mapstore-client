import { useRef, useEffect, useState } from 'react';

const useResourceGridLayout = ({
    headerNodeSelector,
    navbarNodeSelector,
    footerNodeSelector,
    containerSelector,
    showFiltersForm,
    showDetails,
    width,
    height,
    panel
}) => {
    const [stickyTop, setStickyTop] = useState(0);
    const [stickyBottom, setStickyBottom] = useState(0);
    useEffect(() => {
        if (!panel) {
            const header = headerNodeSelector ? document.querySelector(headerNodeSelector) : null;
            const navbar = navbarNodeSelector ? document.querySelector(navbarNodeSelector) : null;
            const footer = footerNodeSelector ? document.querySelector(footerNodeSelector) : null;
            const { height: headerHeight = 0 } = header?.getBoundingClientRect() || {};
            const { height: navbarHeight = 0 } = navbar?.getBoundingClientRect() || {};
            const { height: footerHeight = 0 } = footer?.getBoundingClientRect() || {};
            setStickyTop(headerHeight + navbarHeight);
            setStickyBottom(footerHeight);
        }
    }, [width, height, panel]);
    const detailNode = useRef();
    const filterFormNode = useRef();
    const { width: filterFormNodeWidth = 0 } = filterFormNode?.current?.getBoundingClientRect() || {};
    const { width: detailNodeWidth = 0 } = detailNode?.current?.getBoundingClientRect() || {};
    const filtersFormWidth = showFiltersForm ? filterFormNodeWidth : 0;
    const detailsWidth = showDetails ? detailNodeWidth : 0;
    const panelsWidth = filtersFormWidth + detailsWidth;
    const container = containerSelector ? document.querySelector(containerSelector) : null;
    useEffect(() => {
        if (container && !panel) {
            container.style.width = `calc(100% - ${panelsWidth}px)`;
            container.style.marginLeft = `${filtersFormWidth}px`;
        }
    }, [container, panelsWidth, filtersFormWidth, panel]);

    return {
        container,
        detailNode,
        filterFormNode,
        stickyTop,
        stickyBottom,
        panelsWidth,
        filtersFormWidth
    };
};

export default useResourceGridLayout;
