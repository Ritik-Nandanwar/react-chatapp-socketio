import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './Component/Chat'
import Join from './Component/Join'

function App() {

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Join} ></Route>
					<Route exact path="/chat" component={Chat} ></Route>
				</Switch>

			</Router>
		</>
	);
}

export default App;
