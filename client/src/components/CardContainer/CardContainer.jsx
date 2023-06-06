import style from './CardContainer.module.css';

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

import { setPage } from '../../redux/action';
import { useLocation } from 'react-router-dom';

import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar'



const CardContainer = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const countries =  useSelector(state => state.countries)

    // eslint-disable-next-line
    const [country, setCountry] = useState([])

    //paginado
    const { currentPage, totalPages, itemsPerPage } = useSelector((state) => state.pagination);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageCountries = countries.slice(startIndex, endIndex);

    useEffect(() => {
        setCountry(countries);
    }, [countries]);
    
    const handlePageChange = (page) => {
        dispatch(setPage(page));
    };

    return (
        <div className={style.container}>

            <SearchBar />

            <select className={style.selects}>
                <option value="" hidden> Continent </option>
                <option value="All"> All </option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>

            <select className={style.selects}>
                <option value="" hidden> Order </option>
                <option value="A">A - Z</option>
                <option value="D">Z - A</option>
            </select>

            <select className={style.selects}>
                <option value="" hidden> Population </option>
                <option value="Ascendente"> More population </option>
                <option value="Descendente"> Less population </option>
            </select>

            {   currentPageCountries?.map(country => {
                    return (
                        <Card 
                            key= { country.id }
                            id= { country.id }
                            name= { country.name }
                            flagImg= { country.flagImg }
                            capital= { country.capital }
                            subregion= { country.subregion }
                            population= { country.population }
                        /> 
                    )
                })
            }
            { 
                !pathname.includes('detail') &&
                <div className={ style.paginado }>
                    <Paginado
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            }

        </div>
    )
}

export default CardContainer;