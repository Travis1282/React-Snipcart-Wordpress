import React from 'react';
import CardMedia from 'material-ui/Card';
import './image.css'
 export default class Image extends React.Component {
	render(){
	 	return(
			<CardMedia>
	          <img src={ this.props.product.image } alt={ this.props.product.name } className="product-image"/>
		    </CardMedia>
		)
 }
}

