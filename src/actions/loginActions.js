import * as types from './actionTypes'

export function loginRequest(username, password) {
	return { type: types.LOGIN_REQUEST, username, password }
}

export function loginSuccess(user) {
	return { type: types.LOGIN_SUCCESS, user }
}

export function loginFailure(error) {
	return { type: types.LOGIN_FAILURE, error }
}
