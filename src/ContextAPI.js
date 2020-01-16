import React from 'react';
import ReactDOM from 'react-dom';

import NumberContext from './components/context/NumberContext';
import NumberProvider from './components/context/NumberProvider';

function App() {
	return (
		<NumberProvider>
			<div className="App">
				<NumberContext.Consumer>
					{ ({ number, updateNumber }) => <div>
						<h2>{number}</h2> 
						<button onClick={updateNumber}>UpdateNumber</button>
					</div> }
				</NumberContext.Consumer>
			</div>
		</NumberProvider>
	);
}

export default App;