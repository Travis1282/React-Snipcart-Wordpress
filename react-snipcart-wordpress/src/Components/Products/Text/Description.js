import React from 'react';
import CardText from 'material-ui/Card';
import './Description.css'
 export default class Description extends React.Component {
	render(){
	 			const product = this.props.product;
	 			console.log(product)
	 	return(
			<CardText>
					<div className="description" dangerouslySetInnerHTML={{ __html: product.description }} />
			</CardText>
		)
 }
}

