import { put, take } from 'redux-saga/effects'
import { setCurrentUser } from '../actions/globalActions'
import * as types from '../actions/actionTypes'

export default function* globalFlow() {
	while (true) {
		const { user } = yield take(types.LOGIN_SUCCESS)
		yield put(setCurrentUser(user))
	}
}
