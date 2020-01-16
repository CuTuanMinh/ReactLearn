// bai29 - Higher-Order Components
// Hướng dẫn chia nhỏ ứng dụng sử dụng Higher-Order Components
// => component nằm trong component

// Higher-Order Components là khái niệm function có thể nhận vào component và trả về 1 component khác

import React from 'react';

// đây chưa phải là Higher Order Component
class HoverOpacity extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovered: false
		};
	}

	onMouseEnter() {
		this.setState({
			isHovered: true
		});
	}

	onMouseLeave() {
		this.setState({
			isHovered: false
		});	
	}

	render() {
		return (
			<div
				style={{
					opacity: this.state.isHovered ? 0.5 : 1
				}}
				onMouseEnter={this.onMouseEnter.bind(this)}
				onMouseLeave={this.onMouseLeave.bind(this)}
			>{this.props.chidren}
			</div>
		);
	}
}

export default HoverOpacity;

