import style from './Nav.module.css'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
    <div className={style.conteiner}>
        <NavLink className={style.link} to='/home'> <h2> Home </h2> </NavLink>
        <NavLink className={style.link} to='/form'> <h2> Create Activity </h2> </NavLink>
    </div>
    )
}

export default Nav;