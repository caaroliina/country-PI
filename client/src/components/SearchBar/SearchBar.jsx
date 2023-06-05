import style from './SearchBar.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countryByName } from '../../redux/action'
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const country = useSelector(state => state.countryByName)

    const handleChange = (event) => {
        setName(event.target.value)
    }
    
    const handleAlgo = () => {
        dispatch(countryByName(name))
    }

    return (
        <div className={style.conteiner}>
            <input className={style.input} 
            type='text' 
            value={ name }
            onChange={ handleChange }
            />
    <NavLink to={`/detail/${country.id}`}> 
            <button className={style.button} onClick={handleAlgo}> Search </button>
    </NavLink>

        </div>
    )
}

export default SearchBar;