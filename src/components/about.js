import React, {Component} from 'react';
import '../styles/about.css';
import about from '../img/about.jpg';

class About extends Component{
    render(){
        return(
            <section className="aContainer">
                <div className="aitem">
                    <img className="aimg" src={about} alt=""/>
                </div>
                <div className="aitem">
                    <h3 className="atitle">About</h3>
                    <p className="alead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo eaque praesentium, odit nihil nam ut adipisci blanditiis cumque animi sequi aut reprehenderit reiciendis ipsa harum pariatur est itaque placeat quas?</p>
                    <button className="callToAction">Conozca Más</button>
                </div>
            </section>
        );
    }
}

export default About;