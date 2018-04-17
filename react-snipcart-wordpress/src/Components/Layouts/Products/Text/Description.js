import React from 'react';
import './Description.css'

 export default class Description extends React.Component {
	render(){
	 	return(
			<div className="description" dangerouslySetInnerHTML={{ __html: this.props.product.description }} />
		)
 }
}

