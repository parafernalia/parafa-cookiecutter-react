import { fork } from 'redux-saga/effects'
import globalFlow from './globalSaga'
import loginFlow from './loginSaga'
import homeFlow from './homeSaga'

export default function* rootSaga() {
	yield fork(globalFlow)
	yield fork(loginFlow)
	yield fork(homeFlow)
}
