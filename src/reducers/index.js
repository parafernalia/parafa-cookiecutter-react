import { combineReducers } from 'redux'
import global from './globalReducer'
import login from './loginReducer'
import home from './homeReducer'

const rootReducer = combineReducers({ global, login, home })

export default rootReducer
