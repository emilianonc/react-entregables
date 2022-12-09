import './NavBar.css';
import {Link} from 'react-router-dom';

import navbar_logo from '../../images/navbar_logo.png';
import CartWidget from "../CartWidget/CartWidget.js";

const NavBar = () => {
    return(
        <header>
                <img src={navbar_logo} alt="logo" className="logo"/>
                <nav>
                    <ul>
                        <li> 
                            <Link to={"/"}> <b> INICIO </b> </Link>
                        </li>
                        <li> 
                            <Link to={"/productos"}> <b> PRODUCTOS </b> </Link>
                        </li>
                        <li> 
                            <Link to={"/contacto"}> <b> CONTACTO </b> </Link>
                        </li>
                        <li> 
                            <CartWidget items={2} />
                        </li>
                    </ul>
                </nav>
        </header>
    );
};

export default NavBar;