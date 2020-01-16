// bai26 - React Router -> display multi page
// need: npm install react-router-dom  =>   https://reacttraining.com

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

function App() {
	return (
		<Router>
			<div className="App">
				<Route path="/" exact component={Index} />
				<Route path="/about" component={About} />
				{/*vd path="/about/dfddf" => vẫn render ra component About 
				=> dùng exact thì khi gõ đúng path mới render*/} 

				<nav>
		          <ul>
		            <li>
		              <Link to="/">Home</Link>
		            </li>
		            <li>
		              <Link to="/about">About</Link>
		            </li>
		          </ul>
		        </nav>
		        {/*Link tương ứng tag a*/}
			</div>
		</Router>
	)
}

export default App;