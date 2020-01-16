import React, { Component } from 'react';
import './TodoItem.css';
import successImg from '../img/success.svg';
import uncheckImg from '../img/uncheck.svg';

import classNames from 'classnames';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	// tên class và tên thẻ cha ngoài cùng giống tên file

	// bai13 - handling events
	// constructor(props) {
	// 	super(props);
	// 	this.onItemClick = this.onItemClick.bind(this);
	// }

	// onItemClick() {
	// 		console.log(this.props.item);
	// 	}

	render() {
		// các props như attibute của html
		// hoặc như tham số của function
		// các props đc lưu trong this.props

		// bài 10-Cách thêm nhiều class một cách linh hoạt cho Component
		const { item, onClick } = this.props; //destructuring
		let urlImg = uncheckImg;
		if (item.isComplete) {
			urlImg = successImg;
		}
		// let className = 'TodoItem';
		// if (item.isComplete) {
		// 	className += ' TodoItem-complete';
		// } 
		// return (
		// 	<div className={className}>
		// 		<p>{item.content}</p>
		// 	</div>
		// );

		// cách khác: search module 'classnames' của npm
		// bai13 - handling events
		return (
			// <div onClick={this.onItemClick} className={classNames('TodoItem', { 'TodoItem-complete': item.isComplete })}>
				// <p>{item.content}</p>
			// </div>
			
			
			<div className={classNames('TodoItem', { 'TodoItem-complete': item.isComplete })}>
				<img onClick={onClick} src={urlImg} width={32}/>
				<p>{item.content}</p>
			</div>
		);
	}
}

// bai19 - propTypes -> validate props
// need: npm install --save prop-types
TodoItem.propTypes = {
	item: PropTypes.shape({
		content: PropTypes.string.isRequired,
		isComplete: PropTypes.bool.isRequired
	}),
	onClick: PropTypes.func.isRequired
}

export default TodoItem;