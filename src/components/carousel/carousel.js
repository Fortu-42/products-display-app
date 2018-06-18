import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styled from 'styled-components';

import First from '../carousel/first';
import Second from '../carousel/second'
import '../../styles/carousel.css';
import  Third  from './third';
// import Fourth from './fourth';

const Wrapper = styled.div`
height: 70vh;
margin-top: 8vh;
`
class Carousel extends Component{
    render(){
        return(
            <OwlCarousel 
                className="owl-theme"
                margin={0} 
                nav={false} 
                dots={false} 
                loop 
                autoplay={false} 
                items={1} 
                autoplayTimeout={7000}>
                
                <Wrapper>
                    <First/>
                </Wrapper>
                <Wrapper>
                    <Second/>
                </Wrapper>
                <Wrapper>
                    <Third/>
                </Wrapper>
                
                {/* <Fourth/> */}

            </OwlCarousel>
        )
    }
}

export default Carousel;
