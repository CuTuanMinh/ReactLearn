//bai18- props.children

import React, { Component } from 'react';
import classNames from 'classnames';

class Accordion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCollapsed: true
			//collapse = close
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({
			isCollapsed: !this.state.isCollapsed
		});
	}

	render() {
		const { heading, content, children } = this.props;
		const { isCollapsed } = this.state;
		return (
			<div className="Accordion">
				<div className="Heading" onClick={this.onClick}><h2>{ heading }</h2></div>
				{ !isCollapsed && <div className="Content">{ children }</div> }
			</div>
		);
	}
}

export default Accordion;