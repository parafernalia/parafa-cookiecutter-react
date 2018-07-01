import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function loginReducer(state = initialState.login, action) {
	switch (action.type) {
		case types.LOGIN_REQUEST:
			return { ...state, error: null }

		case types.LOGIN_SUCCESS:
			return { ...state, loggedIn: true }

		case types.LOGIN_FAILURE:
			return { ...state, error: action.error }

		default:
			return state
	}
}
