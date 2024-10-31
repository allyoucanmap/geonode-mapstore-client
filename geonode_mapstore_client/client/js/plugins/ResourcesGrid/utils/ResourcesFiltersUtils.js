

let filters = {};

export const getFilterByField = (field, value) => {
    const filterValue = filters?.[field.key + value];
    if (field.style === 'facet' && filterValue?.facetName) {
        return field.name === filterValue.facetName ? filterValue : null;
    }
    return filterValue;
};

export const getFilters = () => filters;

export const addFilters = (newFilters) => {
    filters = {
        ...filters,
        ...newFilters
    };
};
