import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Products from './Components/Products/Products';



class App extends Component {
constructor(){
    super();

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
    // console.log(product)
    return {
      id: product.id,
      price: product.price,
      image: product.better_featured_image.source_url,
      name: product.title.rendered,
      tagline: product.description,
      description: product.content.rendered
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
              <Products AllProductData={ this.state }/> 
        </div>
    );
  }
}

export default App;
