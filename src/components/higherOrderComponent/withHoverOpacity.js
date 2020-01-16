import React from 'react';

// đây là Higher-Order Component
export default function(WrappedComponent, option = 0.5) {
	return class extends React.Component {
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
						opacity: this.state.isHovered ? option : 1
					}}
					onMouseEnter={this.onMouseEnter.bind(this)}
					onMouseLeave={this.onMouseLeave.bind(this)}
				><WrappedComponent {...this.props} />
				{/*truyền hết props của th cha cho th con*/}
				</div>
			);
		}
	}
}

// trả về 1 class ko tên 