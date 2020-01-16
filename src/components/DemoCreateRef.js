// bai20 - React.createRef() - tham chiếu

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './DemoCreateRef.css';

class DemoCreateRef extends Component {
	constructor(props) {
		super(props);
		this.inputElement = React.createRef(); //tạo 1 object tham chiếu (ref-object)
		
		// debugger;//code sẽ thực hiện hết dòng dưới rồi dừng(1 cách khác đặt break point)
		
		// setTimeout(() => this.inputElement.current.focus(), 2000);
		// current là HTMLElement inputElement tham chiếu đến 
		// focus() là hành động trỏ chuột vào
		// => trỏ vào input sau 2s
	}

	componentDidMount() {
		this.inputElement.current.focus();
		// trỏ vào luôn input, no wait

		// componentDidMount() đc gọi sau khi các HTMLElement tương ứng vs component 
		// đc tạo ra trên browser 		
	}

	render() {
		return (
			<div className="DemoCreateRef">
				<input type="text" ref={this.inputElement} />
				{/*this.inputElement sẽ tham chiếu đến input*/}
				{/*reset() for reset form*/}
			</div>
		);
	}
}

export default DemoCreateRef;

