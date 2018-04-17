import React from 'react';
import Button from 'material-ui/Button';

// import FlatButton from 'material-ui/FlatButton';


 export default class AddtoCart extends React.Component {
	render(){
 			const product = this.props.product;
	 	return(
	  		      <Button
	      	      	label="Add to Cart"
			      	type="button"
			        className="snipcart-add-item"
	                data-item-name={ product.name }
	                data-item-id={ product.id }
	                data-item-image={ product.link }
	                data-item-url= { `${this.props.dataRoute}/${product.id}`}
	                data-item-price={ product.price }>
	                Add to Cart
			      </Button>
		)
 }
}

