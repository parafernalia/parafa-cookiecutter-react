import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
import LoginPage from './Login/LoginPage'
import HomePage from './Home/HomePage'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact component={LoginPage} />
					<Route path="/home" exact component={HomePage} />
					<Redirect to="/" />
				</Switch>
			</Router>
		)
	}
}

App.propTypes = {}

export default App
