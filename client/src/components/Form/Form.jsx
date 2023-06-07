import style from './Form.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';
// import {countryByName} from '../../redux/action'


const Form = () => {

    const countries = useSelector((state) => state.countries)

    const [form, setForm] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })

    const [error, setError] = useState({
        name: '',
        country: ''
    })

    const validate = (form) => {
        if(!form.name) setError({...error, name: 'El nombre no puede estar vacio'})
        if (/^[a-zA-Z]{5,24}$/.test(form.name)) setError({...error, name: 'el nombre debe ser mayor a 4 caracteres y menor a 25 caracteres'})
        if(!form.country) setError({...error, country: 'El country no puede estar vacio'})
    }
    
    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:3001/activities`, form);
            alert('Activity Added');
        } catch (error) {
            alert('Error: Unable to submit activity');
        }
    }

    const handleChange = (event) => {

        validate({ ...form, [event.target.name]: event.target.value })
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const selectHandler = (event) => {
        const countryName = event.target.value;
        if (!form.countries.includes(countryName)) {
            setForm({ ...form, countries: [...form.countries, countryName] });
        }
    };

    return <div className={style.container}>
        <form className={style.form} onSubmit={submitHandler}>
            <label> Name Activity
                <input className={style.name} type="text" name='name' value={form.name} onChange={handleChange}/>
            </label>
            <label className={style.label} htmlFor="difficulty"> Difficulty 
                <select className={style.select} value={form.difficulty} name="difficulty" onChange={handleChange}>
                    <option value="1"> 1 - Easy </option>
                    <option value="3"> 2 - Moderate </option>
                    <option value="2"> 3 - Intermediate </option>
                    <option value="4"> 4 - Hard </option>
                    <option value="5"> 5 - Xtreme </option>
                </select>
            </label>

            <label className={style.label} htmlFor="duration"> Duration 
            <select className={style.select} value={form.duration} name="duration" onChange={handleChange}>
                <option value="1 a 3"> De 1 a 3 hs</option>
                <option value="hasta 5 hs">Hasta 5 hs</option>
                <option value="hasta 10 hs">Hasta 10 hs</option>
                <option value="mas de 10 hs"> Mas de 10 hs</option>
            </select>
            </label> 

            <label className={style.label} htmlFor="season"> Season  
                <select className={style.select} value={form.season} onChange={handleChange} name="season">
                    <option value="spring"> Spring </option>
                    <option value="summer"> Summer </option>
                    <option value="autumn"> Autumn </option>
                    <option value="winter"> Winter </option>
                </select>
            </label>

            <label className={style.label}>
                <select className={style.select} name="countries" onChange={(select) => selectHandler(select)}>
                    {
                        countries.map((country) => (
                            <option value={country.name} key={country.id}>
                                { country.name }
                            </option>
                        ))
                    }
                </select>
            </label>

            <div className={style.renderContainer}>
                {
                    (form.countries.length > 0 && form.countries.length < 2) &&
                    form.countries.map((countryName) => (
                        <div className={style.renderCountry}>
                            { countryName }
                        </div>
                    ))
                }
                {
                    form.countries.length > 1 &&
                    form.countries.map((countryName) => (
                        <div className={style.renderCountry}>
                            { countryName }
                        </div>
                    ))
                }
            </div>

            <button type='submit'> Add activity </button>

        </form>
    </div>
}

export default Form;