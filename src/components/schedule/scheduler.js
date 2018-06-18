import React, { Component} from 'react';
import '../../styles/scheduler.css';
import Datetime from 'react-datetime'
require('react-datetime');


class Scheduler extends Component{
    render(){
        return(
           <section id="scheduler">
           <h3 className="sText">Agenda tu Cita</h3>
                <div className="sgrid">
                    <div>
                        <p className="sText">Ahora puedes agendar una cita con nuestros profesionales en marketing para que gestionemos tu caso de manera personalizada</p>
                    </div>
                    <form>
                        <Datetime placeholder="Fecha y Hora"/>
                        <input type="text" placeholder="Nombre..."/>
                        <input type="text" placeholder="Email..."/>
                        <textarea type="text" placeholder="Mensaje..."/>
                        <button>Enviar Mensaje</button>
                    </form>
                </div>
           </section>
        );
    }
}

export default Scheduler;