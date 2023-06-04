
import { useState } from 'react';
import style from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { countryByName } from '../../redux/action';

const SearchBar = () => {

    const [ search, setSearch ] = useState('');
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSearch = () => {
        dispatch(countryByName(search))
    }

    return (
        <div className={style.conteiner}>
            <input className={style.input} type='text'  onChange ={ handleChange } value={ search }/>
            <button className={style.button} onClick={ handleSearch }> Search </button>
        </div>
    )
}

export default SearchBar;