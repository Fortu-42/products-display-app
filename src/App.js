import React, { Component } from 'react';
import NavBar from './components/navbar';
import Carousel from './components/carousel/carousel';
import Services from './components/services';
import Jobs from './components/jobs';
import Scheduler from './components/schedule/scheduler';

import './App.css';
import  ProductList  from './components/products/productlist';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: ""
    }
  }
  isActive(text){
   this.setState({
     isActive: text
    });
  }
  render() {
    return (
     
        <div className="App">
          <NavBar isActive={this.isActive.bind(this)}/>
          <Carousel/>
          <ProductList/>
          <Services/>
          <Jobs/>
          <Scheduler/>
        </div>
  
    );
  }
}


export default App;
