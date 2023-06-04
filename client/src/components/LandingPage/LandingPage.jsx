import style from './LandingPage.module.css'
import { NavLink } from 'react-router-dom';

const LandingPage = () => {

    return (
    <div className={style.background}>
        <div className={style.container}>
            <h1 className={style.title}> ¿ Ready to see the world ? </h1>
            <NavLink to='/home'> 
                <button className={style.button}> Let's go to trip </button> 
            </NavLink>
        </div>
    </div>
    )
}

export default LandingPage;