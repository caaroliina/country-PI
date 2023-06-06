import style from './Nav.module.css'
import { NavLink } from "react-router-dom";

const Nav = () => {
    // const { pathname } = useLocation()
    return (
    <div className={style.conteiner}>
        <NavLink className={style.link} to='/home'> Home </NavLink>
        <NavLink className={style.link} to='/form'> Form </NavLink>
        {/* { pathname.includes("home") &&
            <select >
                <option value="A"> Ascendente </option>
                <option value="D"> Descendente </option>
                <option value="MAY"> Mayor Poblacion </option>
                <option value="MEN"> Menor Poblacion </option>
            </select>
        }
        { pathname.includes("home") &&
            <select >
                <option value="All"> All </option>
                <option value="Continent"> Continent </option>
                <option value="Activity"> Activity </option>
            </select>
        } */}

    </div>
    )
}

export default Nav;