import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css';
import ButtonLink from './components/Button';


function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="BRFLIX"></img>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeos
            </ButtonLink>
            
        </nav>
    );
}

export default Menu;