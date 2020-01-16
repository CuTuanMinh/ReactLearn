// bai25 - create Component by Function

import React, { Component } from 'react';

function CompFunc(props) {
	const { children, img } = props;
	return (
		<div className="CompFunc">
			<div 
				 style={{
				 	backgroundImage: `url(${img})`,
				 	width: "50px",
				 	height: "50px"
				 }} />
			<div>{children}</div>
		</div>
	);
}

export default CompFunc;

// Component Creating by Function doesn't have state and lifecycle'method(componentDidMount, componentDidUpdate,...) 