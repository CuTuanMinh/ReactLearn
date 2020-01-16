import React, { Component } from 'react';
import classNames from 'classnames';
import './TrafficLight.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
	constructor() {
		super();
		// this.currentColor = RED;
		// currentColor là thuộc tính trạng thái thay đổi liên tục => state
		this.state = {
			currentColor: GREEN
		};
		setInterval(() => {
			// cách thay đổi state
			this.setState({
				currentColor: this.getNextColor(this.state.currentColor)
			});
		}, 1000);
	}

	getNextColor(color) {
		switch (color) {
			case RED:
				return ORANGE;
				break;
		 	case ORANGE:
		 		return GREEN;
		 		break;
			default:
				return RED;
				break;
		}
	}

	render() {
		const { currentColor } = this.state;
		return (
			<div className="TrafficLight">
				<div className={classNames('bulb', 'red', { active: currentColor === RED })} />
				<div className={classNames('bulb', 'orange', { active: currentColor === GREEN })} />
				<div className={classNames('bulb', 'green', { active: currentColor === ORANGE })} />
			</div>
		)
	}
}

export default TrafficLight;