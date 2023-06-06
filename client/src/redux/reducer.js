import { 
    GET_COUNTRIES,  
    SET_TOTAL_PAGES, 
    GET_ACTIVITIES, 
    COUNTRY_BYID, 
    COUNTRY_BYNAME, 
    SET_PAGE, 
    SET_ITEMS_PER_PAGE,
} from './action-type';

const initialState = {
    activities: [],
    countries: [],
    filteredCountries: [],
    country: {},
    countryByName: {},
    pagination: {
        currentPage: 1,
        totalPages: 0,
        totalItems: 0,
        itemsPerPage: 12,
        currentPageItems: [],
    },
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        //GET ALL
        case GET_COUNTRIES:
            return {...state, countries: payload };
        case GET_ACTIVITIES:
            return {...state};

        //SEARCH BY
        case COUNTRY_BYNAME:
            return {...state, countryByName: payload};
        case COUNTRY_BYID:
            return {...state, country: payload};

        //PAGINADO
        case SET_PAGE:
            return {
                ...state,
                pagination: {
                ...state.pagination,
                currentPage: payload,
                },
            };
        case SET_ITEMS_PER_PAGE:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    itemsPerPage: payload,
                },
            };
        case SET_TOTAL_PAGES:
            return {
                ...state,
                pagination: {
                ...state.pagination,
                totalPages: payload,
                },
            }
        
        default:
            return {...state};
    }
}

export default reducer;