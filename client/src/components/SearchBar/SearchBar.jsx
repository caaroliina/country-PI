import style from "./SearchBar.module.css";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import {countryByName, getCountries} from '../../redux/action'

function SearchBar() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setName(event.target.value);
        event.target.value.length 
        ? dispatch(countryByName(event.target.value)) 
        : dispatch(getCountries()) 
    };

    return (
        <div className={style.container}>
            <input
            className={style.input}
            placeholder="Search country"
            type="search"
            value={name}
            onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;