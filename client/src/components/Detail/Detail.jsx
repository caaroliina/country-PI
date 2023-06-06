import { useEffect } from 'react';
import style from './Detail.module.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { countryById } from '../../redux/action'
import Card from '../Card/Card';

const Detail = () => {
    const { id } = useParams();
    const country = useSelector((state) => state.country);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(countryById(id))
    }, [dispatch, id])

    return (
        <div className={style.container}>
            <h1> pag del detail </h1>
            <Card 
                id= { country?.id }
                name= { country?.name }
                flagImg= { country?.flagImg }
                capital= { country?.capital }
                region={country?.region}
                subregion= { country?.subregion }
                population= { country?.population }
            />
        </div>
    )
}

export default Detail;