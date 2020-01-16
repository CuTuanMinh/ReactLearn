// bai22 - combine React + Boostrap
// search 'reactstrap'

import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

class DemoReactstrap extends Component {
	render() {
		const { children } = this.props;
		return (
			<ListGroup>
			{
				children.map((item, index) => {
					return <ListGroupItem className="justify-content-between">{item} <Badge pill>{index}</Badge></ListGroupItem>  
				})	
			}
			</ListGroup>
		)
	};
}

export default DemoReactstrap;
