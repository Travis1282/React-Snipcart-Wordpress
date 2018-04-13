import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
    super(props);

    this.state = {
      products: [],
      dataRoute: 'https://realetravis.com/api/snipcart/wp-json/wp/v2/posts'
    }
}

componentDidMount(){
    fetch(this.state.dataRoute)
        .then(res => res.json())
        .then(products => this.setState((prevState, props) => {
            return { products: products.map(this.mapProduct)};
        }));
}

  mapProduct(product){
    console.log(product)
    console.log(product.id)
    console.log(product.price)
    console.log(product.better_featured_image.source_url)
    console.log(product.title.rendered)

    return {
      id: product.id,
      price: product.price,
      image: product.better_featured_image.source_url,
      name: product.title.rendered
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <div className="products">

          {this.state.products.map((product) => 
            <div className="product" key={`product-${product.id}}`}>

              <img src={ product.image } alt={ product.name } className="product-image"/>
              <p>{ product.name }</p>

              <button className="snipcart-add-item"
                data-item-name={ product.name }
                data-item-id={ product.id }
                data-item-image={ product.link }
                data-item-url= { `${this.state.dataRoute}/${product.id}`}
                data-item-price={ product.price }>
                Buy it for { product.price } $
              </button>

            </div>
          )}
          
        </div>
      </div>
    );
  }
}

export default App;
