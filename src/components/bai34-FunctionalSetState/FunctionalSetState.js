import React from 'react';

export default class FunctionalSetState extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
		this.increase = this.increase.bind(this);
	}

	increase() {
		// this.setState({ value: this.state.value + 1 });
		// this.setState({ value: this.state.value + 1 });
		// thực hiện 2 setState này liên tục nhưng kết quả chỉ tăng 1 lần => bất đồng bộ 

		// để thực hiện 2 setState liên tục và đồng bộ thì dùng setState vs tham số là function
		// cách này phổ biến hơn là truyền vào object 
		this.setState(state => {
			return {
				value: state.value + 1
			}
		});
		this.setState(state => {
			return {
				value: state.value + 1
			}
		});
		// => mỗi lần click button tăng lên 2 đơn vị 
	}

	render() {
		return (
			<div>
				<h2>{this.state.value}</h2>
				<button onClick={this.increase}>Increase</button>
			</div>
		)
	}
}