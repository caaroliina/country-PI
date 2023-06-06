import { 
    GET_COUNTRIES, 
    GET_ACTIVITIES, 

    COUNTRY_BYID, 
    COUNTRY_BYNAME, 
    
    SET_TOTAL_PAGES, 
    SET_ITEMS_PER_PAGE, 
    SET_PAGE, 
} from './action-type';
import axios from 'axios'

// GET ALL
export const getCountries = () => {
    return async (dispatch, getState) => {
        const response = await axios.get(`http://localhost:3001/countries/`);
        const countries = response.data;
    
        dispatch({ type: GET_COUNTRIES, payload: countries });
        const totalItems = countries.length;
        const itemsPerPage = getState().pagination.itemsPerPage;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        dispatch({ type: SET_TOTAL_PAGES, payload: totalPages });
    };
}
export const getActivities = () => {
    return async function(dispatch){
        const response = (await axios.get(`http://localhost:3001/activities`)).data
        return dispatch({
            type: GET_ACTIVITIES,
            payload: response,
        })
    }
}

//SEARCH BY
export const countryById = (id) => {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/countries/${id}`)
        const country = response.data
        return dispatch({ type: COUNTRY_BYID, payload: country })
    }
}

export const countryByName = (name) => {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/countries?name=${name}`)
        const country = response.data
        return dispatch({
            type: COUNTRY_BYNAME,
            payload: country,
        })
    }
}

//PAGINATE
export const setPage = (page) => ({
    type: SET_PAGE,
    payload: page,
});

export const setItemsPerPage = (itemsPerPage) => ({
    type: SET_ITEMS_PER_PAGE,
    payload: itemsPerPage,
});

