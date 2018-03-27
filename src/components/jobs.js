import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../styles/jobs.css';

class Jobs extends Component{
    render(){
        return(
            <section id="jobs">
                <h1 className="jHeading">Clientes Satisfechos</h1>
                <OwlCarousel 
                    margin={0} 
                    nav={false} 
                    dots={false} 
                    loop 
                    autoplay={false} 
                    items={3} 
                    autoplayTimeout={7000}>
                    <div>
                    <a><img src="http://via.placeholder.com/350x150"/></a>
                    </div>
                    <div><a><img src="http://via.placeholder.com/350x150"/></a></div>
                    <div><a><img src="http://via.placeholder.com/350x150"/></a></div>
                    <div><a><img src="http://via.placeholder.com/350x150"/></a></div>
                </OwlCarousel>
            </section>
        );
    }
}

export default Jobs;