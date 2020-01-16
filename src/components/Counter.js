// bai21 - component lifecycles

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
	constructor(props) {
		console.log('Counter constructor');
		super(props);
		this.state = {
			count: 0
		};
		this.decrease = this.decrease.bind(this);
	}

	// component có 2 lại DOM: DOM thật + DOM ảo
	// từ DOM ảo browser tính toán để render ra DOM thật 

	// mount: gắn vào - tạo ra DOM
	// unmout: gỡ ra - xóa DOM 

	increase() {
		this.setState({
			count: this.state.count + 1
		});
	}

	decrease() {
		this.setState({
			count: this.state.count - 1
		});
	}

	render() {
		console.log('Counter render');
		return (
			<div className="Counter">
				<button className="decrease" onClick={this.decrease}>-</button>
				<p>{this.state.count}</p>
				<button className="increase" onClick={() => this.increase()}>+</button>
			</div>
		)
	}

	componentDidMount() {
		console.log('Counter did mount');
	}
	//đc gọi ngay sau khi component đc tạo(chỉ đc gọi 1 lần duy nhất)

	componentDidUpdate() {
		console.log('Counter did update');
		console.log(this.state.count);
	}
	// đc gọi ngay sau khi render() thực thi
	// vd: ấn '+' => render lại kết quả=> componentDidUpdate() đc gọi 
	// trừ lần render() đầu tiên ko đc gọi, khi đó chỉ có componentDidMount() đc gọi  

	componentWillUnmount() {
		console.log('Counter will unmount');	
	}
	//gọi ngay trc khi component bị xóa 

	shouldComponentUpdate(nextProps, nextState) {
		//đc gọi sau khi nhận props và trc khi render 
		// luôn nhận 2 tham số theo thứ tự này, có thể viết or ko
		// nextProps, nextState là các giá trị preview  
		//vd: ấn '+' => tự tính đc nextState.count  = this.state.count + 1
		console.log('this.state.count', this.state.count);
		console.log('nextState', nextState);
		if (this.state.count === nextState.count) {
			return false;
		}
		// khi ấn Remove Counter => showCounter thay đổi => App render lại => Counter render lại(vì Counter nằm trong App), 
		// nhưng ko tính đc nextState( nextState giữ nguyên )
		// =>  this.state.count === nextState.count

		return true;
	}
	// để điều khiển lúc nào cần render hay không 


	// shouldComponentUpdate() {
	// 	// method có sẵn này mặc định return true
	// 	// có thể override
	// 	// nếu return false thì component ko dc render 
		
	// 	return false;//=> Counter ko dc render 
	// }

	
}

export default Counter;