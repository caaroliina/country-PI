import style from './Card.module.css'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Card = ({id, name, flagImg, region, capital, subregion, population }) => {
    const {pathname } = useLocation();
    return (
        <div className={style.container}>
            <div className={style.card} > 
                <NavLink to={`/detail/${id}`} className={style.link}> 
                    <img className={style.image} src={flagImg} alt={ `imagen del pais ${name}` } />
                    <h3 className={style.name}> { name } </h3> 
                </NavLink>
                <h4 className={style.properties}> capital: { capital } </h4>
                {pathname.includes('detail') && <h4 className={style.properties}> region: { region } </h4>}
                {pathname.includes('detail') && <h4 className={style.properties}> subregion: { subregion } </h4>}
                {pathname.includes('detail') && <h4 className={style.properties}> population: { population } </h4>}
                {pathname.includes('detail') && <h4 className={style.properties}> Id pais: { id } </h4>}
            </div>
        </div>
    )
}

export default Card;