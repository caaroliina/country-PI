import { GET_COUNTRIES, SET_TOTAL_PAGES, COUNTRY_BYID, SET_PAGE, SET_ITEMS_PER_PAGE, COUNTRY_BYNAME, GET_ACTIVITIES, FILTER, ORDER } from './action-type';

const initialState = {
    activities: [],
    countries: [],
    countriesOrder: [],
    country: [],
    pagination: {
        currentPage: 1,
        totalPages: 0,
        totalItems: 0,
        itemsPerPage: 9,
        currentPageItems: [],
    },
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_COUNTRIES:
            return {...state, countries: payload };
        case COUNTRY_BYNAME:
            return {...state, country: payload};
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
        case GET_ACTIVITIES:
            return {...state};
        case COUNTRY_BYID:
            return {...state, country: payload};
        case FILTER:
            let filter = [...state.countries]
            return {...state, countries: filter};
        case ORDER:
            const orders = [...state.countriesOrder]
            return {
                ...state,
                myFavorites:  payload === 'A' 
                ? orders.sort((a, b)=> a.id - b.id) 
                : orders.sort((a, b)=> b.id - a.id),
            }
        default:
            return {...state};
    }
}

export default reducer;