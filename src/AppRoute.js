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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
	constructor() {
		super();
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
				<Router>
				    <div className="App">
				    	<Route path="/" exact>
				    		{
					    		this.state.todoItems.map((x, index) => 
					    			<TodoItem 
					    				key={index} 
					    				item={x} 
					    				onClick={this.onItemClicked(x)} 
					    			/>)
				    		}
				    	</Route>
				    	
				    	<Route path="/trafficLight" exact component={TrafficLight} />
				    </div>
			    </Router>
			);
		}
		else {
			return (
				<Router>
			    	<div className="App">Nothing here</div>
			    </Router>
			);
		}

	}

	componentDidUpdate() {
		console.log('App updated');
	}
}

export default App;
