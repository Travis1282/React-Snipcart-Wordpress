import React from 'react';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddtoCart from './Buttons/AddtoCart'
import Image from './Media/Image'
import Description from './Text/Description'

import './Products.css'


 export default class Products extends React.Component {

	render(){
		return(
			<div className="products">
          {this.props.AllProductData.products.map((product) => 
            <div className="product" key={` product-${product.id}}`}>

			  <MuiThemeProvider>
				  <Card>
				  	<Image product={product} />
				    <CardTitle title={ product.name } subtitle={ product.tagline } />
				    <Description product={product} />
				    <CardActions><AddtoCart product={product} /></CardActions>
				  </Card>
	  		  </MuiThemeProvider>
		  </div>

		  		            )}
		</div>
		)
	}
};

