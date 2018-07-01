import { call, put, take } from 'redux-saga/effects'
import { beginAjaxCall, endAjaxCall } from '../actions/globalActions'
import { dataSuccess, dataFailure } from '../actions/homeActions'
import * as types from '../actions/actionTypes'
import Api from '../api'

function* fetch() {
	yield put(beginAjaxCall())
	try {
		const data = yield call(Api.fetchData)
		return data
	} catch (error) {
		yield put(dataFailure(error.message))
		return false
	} finally {
		yield put(endAjaxCall())
	}
}

export default function* homeFlow() {
	while (true) {
		yield take(types.DATA_REQUEST)
		const data = yield call(fetch)
		if (data) yield put(dataSuccess(data))
	}
}
