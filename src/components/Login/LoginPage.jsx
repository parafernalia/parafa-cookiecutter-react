import React from 'react'
import { bool, object, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import InputText from '../shared/InputText'
import * as loginActions from '../../actions/loginActions'

class LoginPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			username: 'root',
			password: 'root',
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange({ target }) {
		this.setState({ [target.name]: target.value })
	}

	onSubmit(event) {
		event.preventDefault()
		const { username, password } = this.state
		this.props.actions.loginRequest(username, password)
	}

	render() {
		return this.props.loggedIn ? (
			<Redirect to="/home" />
		) : (
			<form action="" method="get" onSubmit={this.onSubmit}>
				<h1>Please sign in</h1>
				<InputText
					label="Username"
					name="username"
					value={this.state.username}
					autoFocus
					disabled={!!this.props.working}
					onChange={this.onChange}
				/>
				<InputText
					label="Password"
					name="password"
					type="password"
					value={this.state.password}
					disabled={!!this.props.working}
					onChange={this.onChange}
				/>
				<button type="submit" disabled={!!this.props.working}>
					Sign in
				</button>
				{this.props.error && <p>{this.props.error}</p>}
			</form>
		)
	}
}

LoginPage.propTypes = {
	actions: object,
	error: string,
	loggedIn: bool,
	working: bool,
}

function mapStateToProps(state) {
	return {
		error: state.login.error,
		loggedIn: state.login.loggedIn,
		working: state.global.ajaxCallsInProgress > 0,
	}
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(loginActions, dispatch) }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPage)
