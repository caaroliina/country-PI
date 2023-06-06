import style from './SearchBar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { countryByName } from '../../redux/action'

const SearchBar = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            setName(name);
            setName("")
        }
    }
    
    const handleClick = () => {
        dispatch(countryByName(name))
    }

    return (
                <div className={style.conteiner}>
                    <input className={style.input} 
                    type='text' 
                    value={ name }
                    onChange={ handleChange }
                    />
                    <button className={style.button} onClick={handleClick}> Search </button>

            </div>
        
    )
}

export default SearchBar;