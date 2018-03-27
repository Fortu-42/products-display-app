import React, { Component } from 'react';
import '../styles/navbar.css';

class NavBar extends Component{
    render(){
        return(
            <nav className="grid-container">
                <div className="item">Inicio</div>
                <div className="item">Nosotros</div>
                <div className="item">Servicios</div>
                <div className="item">Trabajos</div>
                <div className="item">Blog</div>
                <div className="item">Tienda</div>
            </nav>
        );
    }
}

export default NavBar;