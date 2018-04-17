import React, { Component } from 'react';
import { Header, Footer } from "./Components/Layouts";
// import Products from "./Components/Layouts";
import Products from './Components/Layouts/Products/Products';

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
        <div>
          <Header />
          <Products AllProductData={ this.state }/> 
          <Footer />        
        </div>
    );
  }
}

export default App;



