import React from 'react';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


 export default class AddtoCart extends React.Component {
	render(){
 			const product = this.props.product;
	 	return(
	 			<div>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Add to Cart"
        		type="button"
		        className="snipcart-add-item"
                data-item-name={ product.name }
                data-item-id={ product.id }
                data-item-image={ product.link }
                data-item-url= { `${this.props.dataRoute}/${product.id}`}
                data-item-price={ product.price }>
              <AddShoppingCart />
            </IconButton>
        
      </div>
    );
  }
}

