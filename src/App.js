// import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import tick from './img/tick.svg';
import './App.css';

import TodoItem from './components/TodoItem';
import TrafficLight from './components/TrafficLight';
import Accordion from './components/Accordion';
import DemoCreateRef from './components/DemoCreateRef';
import Counter from './components/Counter';
import DemoReactstrap from './components/DemoReactstrap';
import CompFunc from './components/ComponentFunction';


// function App() {
//   return (
//     <div className="App">
//         <TodoItem content="Eat breakfast" />
//         {<TodoItem content="Eat breakfast" option={}/>}
//         {/*để truyền biến hay objetc,... thì cần {}*/}
//         <TodoItem content="Go to school"/>
//         <TodoItem content="Go home"/>
//     </div>
//   );
// }



class App extends Component {
	constructor() {
		super();
		// this.todoItems = [
		// 	{ content: 'Wake up', isComplete: true },
		// 	{ content: 'Go to school' },
		// 	{ content: 'Go home' }
		// ];
		this.state = {
			newItem: '',
			todoItems: [
				{ content: 'Wake up', isComplete: true },
				{ content: 'Go to school', isComplete: true },
				{ content: 'Go home', isComplete: false }
			],
			showCounter: true
		};
		this.onKeyUp = this.onKeyUp.bind(this);
		this.onChange = this.onChange.bind(this);
		// this.onItemClicked = this.onItemClicked.bind(this); gọi onItemClicked luôn nên ko cần bind
	}

	onKeyUp(event) {
		if (event.keyCode === 13) { // enter = 13
			let text = event.target.value;
			if (!text) {
				return;
			}

			text = text.trim(); // xóa dấu cách ở đầu, cuối
			if (!text) { return; }

			this.setState({
				newItem: '',
				todoItems: [
					{ content: text, isComplete: false },
					...this.state.todoItems
				]
			});
			// event.target.value = '';
		}
	}

	onChange(event) {
		this.setState({
			newItem: event.target.value
		});
	}

	onItemClicked(x) {
		return (event) => {
			console.log(x.isComplete);
			const isComplete = x.isComplete;
			const { todoItems } = this.state;
			const index = todoItems.indexOf(x);
			this.setState({
				todoItems: [
					...todoItems.slice(0, index),
					{
						...x,
						isComplete: !isComplete
					},
					...todoItems.slice(index + 1)
				]
			});
		}
	}	

	removeCounter() {
		this.setState({
			showCounter: !this.state.showCounter
		});
	}

	render() {
		console.log('App render');
		// bai11-render by conditional
		// way1
		if (this.state.todoItems.length > 0) { 
			return (
			    <div className="App">
			    	<div className="Header">
			    		<img src={tick} width={32} />
			    		<input type="text" 
			    			   placeholder="Add a action" 
			    			   onKeyUp={this.onKeyUp}
			    			   value={this.state.newItem}
			    			   onChange={this.onChange} />
			    			   {/*value phải đi vs onChange
			    			   onChange đc gọi khi value của input thay đổi*/}
			    	</div>
			    	{
			    		this.state.todoItems.map((x, index) => 
			    			<TodoItem 
			    				key={index} 
			    				item={x} 
			    				onClick={this.onItemClicked(x)} 
			    			/>)
			    	}

			    	{/*---------------------*/}

			    	<TrafficLight />
			    	<Accordion heading="Required Language" content="Japanese">
			    		Bất cứ gì(text, component,...) để vào giữa 2 thẻ Accordion như thế này
			    		thì sẽ đc lưu vào props.chidren
			    	</Accordion>	
			    	<DemoCreateRef />	


			    	{/*bai21 - component LifeCycles*/}
			    	<button onClick={() => this.removeCounter()}>Remove counter</button>
			    	{/*this.state.showCounter && <Counter />*/}
			    	<Counter />


			    	<DemoReactstrap>
			    	 	{['Vu Hai Ngan', 'Nguyen Thi Nga', 'Nguyen Thu Huyen']}
			    	</DemoReactstrap>

			    	<CompFunc img="https://picsum.photos/id/866/200/300">Demo Create Component by Function</CompFunc>

			    </div>
			);
		}
		else {
			return (
			    <div className="App">Nothing here</div>
			);
		}

		// way2 - bai11
		// return ( 
		// 	    <div className="App">
		// 	    	{
		// 	    		this.todoItems.length > 0 && this.todoItems.map((x, index) => <TodoItem key={index} item={x} />)
		// 	    	}
		// 	    	{this.todoItems.length === 0 && 'Nothing here'}			      
		// 		    {/*true && 6 => 6
		// 		    false && 6 => false*/}
		// 	    </div>
		// );

	}

	componentDidUpdate() {
		console.log('App updated');
	}
}

export default App;
