import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'

// reducers
import products from './products'
import auth from './auth'

export default history =>
  combineReducers({
    router: connectRouter(history),
    form,
    products,
    auth
  })
