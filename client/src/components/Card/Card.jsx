import style from './Card.module.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Card = ({id, name, flagImg, capital, subregion, population }) => {
    const {pathname } = useLocation();
    return (
        <div className={style.container}>
            <div className={style.card} > 
                <Link to={`/detail/${id}`}> 
                    <h3> { name } </h3> 
                </Link>
                <img className={style.image} src={flagImg} alt={ `imagen del pais ${name}` } />
                <h4> capital: { capital } </h4>
                {pathname.includes('detail') && <h4> subregion: { subregion } </h4>}
                {pathname.includes('detail') && <h4> population: { population } </h4>}
                <h4> Id pais: { id } </h4>
            </div>
        </div>
    )
}

export default Card;