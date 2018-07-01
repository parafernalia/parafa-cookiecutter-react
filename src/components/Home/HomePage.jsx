import React from 'react'
import { array, bool, object } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import * as homeActions from '../../actions/homeActions'

class HomePage extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.actions.dataRequest()
	}

	render() {
		return !this.props.loggedIn ? (
			<Redirect to="/" />
		) : !this.props.data.length ? (
			<h3>Loading…</h3>
		) : (
			<main role="main">
				<h1>Album example</h1>
				<p>
					Something short and leading about the collection below—its contents,
					the creator, etc. Make it short and sweet, but not too short so folks
					don’t simply skip over it entirely.
				</p>

				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
						gridGap: '10px',
					}}>
					{this.props.data.map(row => (
						<div key={row.id}>
							<a href={row.post_url}>
								<img
									alt={`Photo by ${row.author}`}
									style={{
										height: '225px',
										width: '100%',
										display: 'block',
										objectFit: 'cover',
									}}
									src={`https://picsum.photos/500/225?image=${row.id}`}
								/>
							</a>
							<p>{row.author}</p>
						</div>
					))}
				</div>
			</main>
		)
	}
}

HomePage.propTypes = {
	actions: object,
	data: array,
	loggedIn: bool,
}

function mapStateToProps(state) {
	return {
		data: state.home.data,
		loggedIn: state.login.loggedIn,
	}
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(homeActions, dispatch) }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage)
