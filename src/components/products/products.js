import React, { Component } from 'react';


export class Products extends Component {
  
  renderItems(){
    const Items = this.props.Products.map((product) =>{
      return(
      <div key={product.id}>
        <img src="../../img/img-1.jpg" alt=""/>
      </div>
      )
    });

    return Items;
  }
  render() {
    return (
      <section className="mainProducts">
        {this.renderItems()}
      </section>
    )
  }
}

export default Products;
