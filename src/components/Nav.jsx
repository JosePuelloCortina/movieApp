import { NavLink } from 'react-router-dom'
import './Nav.css'
export default function Nav(){
    return(
        <div className="nav">
            <NavLink exact to='/' className="enlace">
                <h3>Home</h3>
            </NavLink>
            <NavLink exact to='/rutas' className="enlace">
                <h3>Movies</h3>
            </NavLink>
            <NavLink exact to='crear/rutas' className="enlace">
                <h3>Crear Movies </h3>
            </NavLink>

        </div>
    )
}