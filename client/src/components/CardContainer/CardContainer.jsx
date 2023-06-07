import style from './CardContainer.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { setPage } from '../../redux/action';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar';

const CardContainer = () => {
    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries);
    // eslint-disable-next-line
    const [filter, setFilter] = useState("");
    const [country, setCountry] = useState("");
    const [countriesCopy, setCountriesCopy] = useState([]);
    const [regionFilter, setRegionFilter] = useState("");

  // paginado
    const { currentPage, totalPages, itemsPerPage } = useSelector((state) => state.pagination);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageCountries = countriesCopy.slice(startIndex, endIndex);

    //Ordenamiento
    const handlePageChange = (page) => {
    dispatch(setPage(page));
    };
    // eslint-disable-next-line
    const handleFilter = (event) => {
    setFilter(event.target.value);
    };

    const handleOrder = (event) => {
    setCountry(event.target.value);
    };

    const handleRegionFilter = (event) => {
        setRegionFilter(event.target.value);
    };

    useEffect(() => {
        let filteredCountries = countries;
        if (regionFilter && regionFilter !== "All") {
            filteredCountries = countries.filter((country) => country.region === regionFilter);
        }
        setCountriesCopy(filteredCountries);
    }, [regionFilter, countries]);

    useEffect(() => {
        let sortedCountries = [...countries];
        switch (country) {
            case "A":
                sortedCountries = sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "D":
                sortedCountries = sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "Ascendente":
                sortedCountries = sortedCountries.sort((a, b) => a.population - b.population);
                break;
            case "Descendente":
                sortedCountries = sortedCountries.sort((a, b) => b.population - a.population);
                break;
            default:
                break;
        }
        setCountriesCopy(sortedCountries);
    }, [country, countries]);

    useEffect(() => {
    setCountriesCopy(countries);
    }, [countries]);

    return (
    <div className={style.container}>
        <div className={style.order}>
            <SearchBar/>
            <div className={style.selects}>
                <select className={style.select} value={regionFilter} onChange={handleRegionFilter}>
                    <option value="" hidden>Region</option>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Polar">Polar</option>
                </select>

                <select className={style.select} value={country} onChange={handleOrder}>
                    <option value="" hidden>Order</option>
                    <option value="A">A - Z</option>
                    <option value="D">Z - A</option>
                    <option value="Ascendente">More population</option>
                    <option value="Descendente">Less population</option>
                </select>
            </div>
        </div>

        {
        currentPageCountries?.map(country => (
            <Card
                key={country.id}
                id={country.id}
                name={country.name}
                flagImg={country.flagImg}
                region={country.region}
                capital={country.capital}
                subregion={country.subregion}
                population={country.population}
            />
        ))
        }
        <div className={style.paginado}>
            <Paginado
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    </div>
    );
}

export default CardContainer;