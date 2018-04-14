import React from 'react';
import CardActions from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

 export default class Purchase extends React.Component {
	render(){
	 			const product = this.props.product;
	 	return(
		    <CardActions>
	  		      <FlatButton
	      	      	label="Purchase"
			      	type="button"
			        className="snipcart-add-item"
	                data-item-name={ product.name }
	                data-item-id={ product.id }
	                data-item-image={ product.link }
	                data-item-url= { `${this.props.dataRoute}/${product.id}`}
	                data-item-price={ product.price }>
			      </FlatButton>
		    </CardActions>
		)
 }
}

