import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function homeReducer(state = initialState.home, action) {
	switch (action.type) {
		case types.DATA_REQUEST:
			return { ...state, error: null }

		case types.DATA_SUCCESS:
			return { ...state, data: action.data.splice(0, 10) }

		case types.DATA_FAILURE:
			return { ...state, error: action.error }

		default:
			return state
	}
}
