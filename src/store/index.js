import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
//import logger from '../middlewares/logger'
import generateId from '../middlewares/generateId'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(generateId))

const store = createStore(reducer, {}, enhancer)

window.store = store
export default store