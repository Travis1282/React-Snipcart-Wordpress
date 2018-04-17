import React from 'react';
import './image.css'

 export default class Image extends React.Component {
	render(){
	 	return(
	          <img src={ this.props.product.image } alt={ this.props.product.name } className="product-image"/>
		)
 }
}

