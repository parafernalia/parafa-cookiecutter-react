import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function globalReducer(state = initialState.global, action) {
	switch (action.type) {
		case types.BEGIN_AJAX_CALL: {
			const count = state.ajaxCallsInProgress
			return { ...state, ajaxCallsInProgress: count + 1 }
		}

		case types.END_AJAX_CALL: {
			const count = state.ajaxCallsInProgress
			return { ...state, ajaxCallsInProgress: count - 1 }
		}

		case types.SET_CURRENT_USER: {
			return { ...state, currentUser: action.user }
		}

		default:
			return state
	}
}
