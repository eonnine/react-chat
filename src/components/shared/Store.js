import { createStore, applyMiddleware } from 'redux';
// import createSaga from 'redux-saga';
import Reducers from '../reducer';
import Middleware from './Middleware';

// const sagaMW = createSaga();
const store = createStore(Reducers, applyMiddleware(Middleware));

// sagaMW.run();

export default store;