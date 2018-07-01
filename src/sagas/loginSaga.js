import { call, put, takeLatest } from 'redux-saga/effects'
import { beginAjaxCall, endAjaxCall } from '../actions/globalActions'
import { loginSuccess, loginFailure } from '../actions/loginActions'
import * as types from '../actions/actionTypes'
import Api from '../api'

function* authorize(username, password) {
	yield put(beginAjaxCall())
	try {
		const user = yield call(Api.fetchLogin, username, password)
		return user
	} catch (error) {
		yield put(loginFailure(error.message))
		return false
	} finally {
		yield put(endAjaxCall())
	}
}

function* loginRequestSaga(action) {
	const user = yield call(authorize, action.username, action.password)
	if (user) yield put(loginSuccess(user))
}

export default function* loginFlow() {
	yield takeLatest(types.LOGIN_REQUEST, loginRequestSaga)
}
