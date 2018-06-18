import React, { Component } from 'react';
import Products from './products';

export class ProductList extends Component {
  constructor(props){
    super(props);
    this.state = {
      Products: [
        {
          id: 1,
          name: "tdbEntero",
          sizes: ["s", "m" , "l"],
          imgSrc: "./img/img-1.jpg",
          collection : "Verano",
          collectionDate: "02/2018"
        },
        {
          id: 2,
          name: "tdbHilo",
          sizes: ["s", "m" , "l"],
          imgSrc: "./img/img-2.jpg",
          collection : "Verano2018",
          collectionDate: "03/2018"
        },
        {
          id: 3,
          name: "tdbSemi",
          sizes: ["s", "m" , "l"],
          imgSrc: "./img/img-3.jpg",
          collection : "Otoño2018",
          collectionDate: "06/2018"
        },
        {
          id: 4,
          name: "2Piezas",
          sizes: ["s", "m" , "l"],
          imgSrc: "./img/img",
          collection : "Otoño",
          collectionDate: "07/2018"
        }
      ]
    }
  }
  render() {
    return (
      <div id="productsContainer">
          <Products Products={this.state.Products}/>
      </div>
    )
  }
}

export default ProductList;
