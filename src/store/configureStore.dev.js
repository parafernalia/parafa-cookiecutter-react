import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore(initialState) {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(
		rootReducer,
		initialState,
		composeWithDevTools(
			applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant())
		)
	)
	sagaMiddleware.run(rootSaga)
	return store
}
