import { applyMiddleware, createStore } from 'redux';
import rootReducer from './root-reducer'
import logger from "redux-logger"
import thunk from "redux-thunk"


const middlewares = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store