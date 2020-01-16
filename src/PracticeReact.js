import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import tick from './img/tick.svg';

import TopMenu from './components/componentPracticeReact/TopMenu';
import Products from './components/componentPracticeReact/pages/Products';
import HoverOpacity from './components/higherOrderComponent/HoverOpacity';
import AwesomeImage from './components/higherOrderComponent/AwesomeImage';
import withHoverOpacity from './components/higherOrderComponent/withHoverOpacity';
import RenderProps1 from './components/renderProps/RenderProps1';
import RenderProps2 from './components/renderProps/RenderProps2';

import { CartProvider } from './components/componentPracticeReact/cart/CartProvider';

import FunctionalSetState from './components/bai34-FunctionalSetState/FunctionalSetState';

const data = ['A', 'B', 'C'];

const TestHigherOrderComp = withHoverOpacity(AwesomeImage, 0.5);

const Index = () => <h2>Home</h2>;

// bai32 - contextAPI
const NumberContext = React.createContext(); //khai báo 1 context
// 1  context sẽ có provider và consumer tương ứng 
// consumer nằm trong provider 

function PracticeReact() {
	return (
		<CartProvider>
			<Router>
				<div className="PracticeReact">
					<TopMenu />

					{/*bai29 - Higher-Order Components*/}
					
					{/*<HoverOpacity>
						<AwesomeImage src={tick} />
					</HoverOpacity>*/}
					<TestHigherOrderComp src={tick} />
					{/*src sẽ đc truyền vào props của withHoverOpacity*/}

					{/*--------------------*/}

					<Route path="/" exact component={Index} />
					<Route path="/products" component={Products} />
					{/*vd path="/about/dfddf" => vẫn render ra component About 
					=> dùng exact thì khi gõ đúng path mới render*/} 

					<RenderProps1 data={data} render={item => <div>{item}</div>} />
					{/*<RenderProps2 render={value => <div>{value}</div>} />*/}
					<RenderProps2>
						{
							({ count }) => <div>{count}</div>
							// value => <div>{value.count}</div>
							
						}
					</RenderProps2>


					{/*bai32 - contextAPI*/}
					<NumberContext.Provider value={10}>
						<NumberContext.Consumer>
							{
								(context) => <h2>{context}</h2>
							}
						</NumberContext.Consumer>
					</NumberContext.Provider>

					{/*bai34 - Functional setState*/}
					<FunctionalSetState />
				</div>
			</Router>
		</CartProvider>
	)
}	

export default PracticeReact;

// provider -> component cung cấp dữ liệu 
// consumer -> component sử dụng dữ liệu
