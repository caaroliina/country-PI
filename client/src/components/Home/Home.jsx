import style from './Home.module.css';
import CardContainer from '../CardContainer/CardContainer';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/action';

const Home  = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
            dispatch(getCountries())
        // eslint-disable-next-line
    }, []) 

    return (
        
        <div className={style.container}>
            <div className={style.search}>
                
            </div>
            <div className={style.cards}>
                <CardContainer />
            </div>
        </div>
    )
}


export default Home;

