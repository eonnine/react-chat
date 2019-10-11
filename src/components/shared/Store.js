import { createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import Reducers from '../reducer';

const sagaMW = createSaga();
const store = createStore(Reducers, applyMiddleware(sagaMW));

// sagaMW.run();

export default store;