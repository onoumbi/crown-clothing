import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//logger: catches the action, console log it for us and moves it along

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;