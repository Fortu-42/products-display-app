import React,{Component} from 'react';
import '../styles/services.css';
import * as FontAwesome from 'react-icons/lib/fa';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component{
    render(){
        return(
            <section>
            <h1 className="sHeading">Nuestros Servicios</h1>
                <div className="scontainer">
                    
                    <div className="sitem">

                    <ScrollAnimation animateIn='tada'>
                        <FontAwesome.FaBullhorn size={70} color="rgba(209, 0, 115,.5)"/>
                    </ScrollAnimation>

                        <h3>Campañas de Marketing</h3>
                        <p>Desde publicidad hasta gestión de redes sociales o medios web</p>
                    </div>
                    <div className="sitem">

                    <ScrollAnimation animateIn='tada'>
                        <FontAwesome.FaTrademark size={70} color=" rgba(209, 0, 115,.5) "/>
                    </ScrollAnimation>

                        <h3>Destaca tu marca personal</h3>
                        <p>Tenemos experiencia en el desarrollo de imagen y mentoría profesional</p>
                    </div>
                    <div className="sitem">

                    <ScrollAnimation animateIn='tada'>
                        <FontAwesome.FaShareAlt size={70} color="rgba(209, 0, 115,.5)"/>
                    </ScrollAnimation>

                        <h3>Aumentamos el tráfico de tus perfiles</h3>
                        <p>Nuestra especialidad es generar reacciones y aumentar la interacción con tus seguidores o clientes</p>
                    </div>
                    <div className="sitem">

                    <ScrollAnimation animateIn='tada'>
                        <FontAwesome.FaCalendar size={70} color="rgba(209, 0, 115,.5)"/>
                    </ScrollAnimation>

                        <h3>Organizamos Eventos Sociales</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolor debitis iusto</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;