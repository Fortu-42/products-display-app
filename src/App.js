import React, { Component } from 'react';
import NavBar from './components/navbar';
import Carousel from './components/carousel';
import About from './components/about';
import Services from './components/services';
import Jobs from './components/jobs';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Carousel/>
        <About/>
        <Services/>
        <Jobs/>
      </div>
    );
  }
}

export default App;
