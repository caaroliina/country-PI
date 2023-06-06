import style from './Form.module.css';
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: ''
    })

    const [error, setError] = useState({
        name: ''
    })

    const validate = (form) => {
        if(!form.name) setError({...error, name: 'El nombre no puede estar vacio'})
        if (/^[a-zA-Z]{5,24}$/.test(form.name)) setError({...error, name: 'el nombre debe ser mayor a 4 caracteres y menor a 25 caracteres'})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/activities`, form)
        .then(res => alert(res))
        .catch(error => alert(error.message))
    }

    const handleChange = (event) => {

        validate({ ...form, [event.target.name]: event.target.value })
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    return <div className={style.container}>
        <form className={style.form} onSubmit={submitHandler}>
            <label className={style.label} htmlFor="difficulty"> Difficulty 
                <select className={style.select} value={form.difficulty} name="difficulty" onChange={handleChange}>
                    <option value="1"> 1 </option>
                    <option value="3"> 2 </option>
                    <option value="2"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
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
                    <option value="winter"> Winter </option>
                    <option value="autumn"> Autumn </option>
                </select>
            </label>

            <button type='submit'> Add activity </button>
        </form>
    </div>
}

export default Form;