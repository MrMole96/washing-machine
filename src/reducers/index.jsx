import { combineReducers } from 'redux'
import machine from './machine'
import users from './users'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  machine,
  users,
  form: formReducer,
})
