import React, { Component } from 'react';

export default class RenderProps2 extends Component {
	constructor(props) {
		super(constructor);
		this.state = {
			count: 0
		}
	}

	componentDidMount() {
		this.timerID = setInterval(() => {
			this.setState({
				count: this.state.count + 1
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render() {
		return (
			<div>
				{
					// this.props.render(this.state.count)
					this.props.children(this.state)
				}
			</div>
		);
	}
}