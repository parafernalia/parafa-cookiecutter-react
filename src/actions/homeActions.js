import * as types from './actionTypes'

export function dataRequest() {
	return { type: types.DATA_REQUEST }
}

export function dataSuccess(data) {
	return { type: types.DATA_SUCCESS, data }
}

export function dataFailure(error) {
	return { type: types.DATA_FAILURE, error }
}
