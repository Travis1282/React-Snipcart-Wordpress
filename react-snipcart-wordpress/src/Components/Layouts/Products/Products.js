import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddtoCart from './Buttons/AddtoCart';
import Image from './Media/Image';
import Description from './Text/Description';
import './Products.css';


 export default class Products extends React.Component {

	render(){
		return(
			<div className="products">
		      {this.props.AllProductData.products.map((product) => 
	            <div className="product" key={` product-${product.id}}`}>
	              <Card>

					        <CardContent>
						        <CardMedia>
						        	<Image product={product} />
						        </CardMedia>
						        <Typography variant="headline" component="h2">
						        	{ product.name }
						        </Typography>					          
						        <Typography gutterBottom variant="subheading" component="h2">
						         	{ product.tagline } 
						        </Typography>
						        <Typography component="p">
						        	<Description product={product} />
						        </Typography>
					        </CardContent>
					        <CardActions>
					        	<AddtoCart product={product} />
					        </CardActions>
				  </Card>
				</div>
	          )}
			</div>
		)
	}
};


// <MuiThemeProvider>
// 							<Card>
// 								<CardMedia><Image product={product} /></CardMedia>
// 								<CardTitle title={ product.name } subtitle={ product.tagline } />
// 								<CardText><Description product={product} /></CardText>
// 								<CardActions><AddtoCart product={product} /></CardActions>
// 							</Card>
// 				  	</MuiThemeProvider>
