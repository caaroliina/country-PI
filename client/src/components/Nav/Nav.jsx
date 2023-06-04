import style from './Nav.module.css'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
    <div className={style.conteiner}>
        <NavLink className={style.link} to='/home'> Home </NavLink>
        <NavLink className={style.link} to='/form'> Form </NavLink>

    </div>
    )
}

export default Nav;