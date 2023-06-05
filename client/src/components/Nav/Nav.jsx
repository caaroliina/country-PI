import style from './Nav.module.css'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
    <div className={style.conteiner}>
        <NavLink className={style.link} to='/home'> Home </NavLink>
        <NavLink className={style.link} to='/form'> Form </NavLink>
        <select name="" id="">
            <option value=""></option>
        </select>

    </div>
    )
}

export default Nav;