import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../styles/carousel.css';
import computer from '../img/computer.svg';


class Carousel extends Component{
    render(){
        return(
            <OwlCarousel 
                className="owl-theme"
                margin={10} 
                nav={false} 
                dots={false} 
                loop 
                autoplay={false} 
                items={1} 
                autoplayTimeout={7000}>
                <div class="citem item1">
                    <h1 className="headline">Gestiona tus redes sociales con nosotros</h1>
                    <img src={computer} alt="ico1" className="svg"/>
                    <p className="lead">tenemos excelentes paquetes para todo tipo de empresas</p>
                    <button className="callToAction">solicita una cita hoy</button>
                </div>
                <div className="citem"><h4>2</h4></div>
                <div className="citem"><h4>3</h4></div>
                <div className="citem"><h4>4</h4></div>
            </OwlCarousel>
        )
    }
}

export default Carousel;
