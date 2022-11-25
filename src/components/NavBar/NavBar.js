import React from 'react';
import './NavBar.css';

import logo from '../../images/logo.png';
import CartWidget from "../CartWidget/CartWidget.js";

const NavBar = () => {
    return(
        <header>
                <img src={logo} alt="logo" className="logo"/>
                <nav>
                    <ul>
                        <li> 
                            <a href="#"> <b> Inicio </b> </a>
                        </li>
                        <li> 
                            <a href="#"> <b> Productos </b> </a>
                        </li>
                        <li> 
                            <a href="#"> <b> Contacto </b> </a>
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