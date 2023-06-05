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
                <input className={style.input} type="text" value={form.difficulty} name="difficulty" onChange={handleChange}></input>
            </label>

            <label className={style.label} htmlFor="duration"> Duration 
                <input className={style.input} type="text" value={form.duration} name="duration" onChange={handleChange}></input>
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