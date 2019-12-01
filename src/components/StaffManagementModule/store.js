import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import rootSaga from './saga';
import createSagaMiddleware from 'redux-saga';

const  moduleStore = () => {
  const state = {};
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, state, applyMiddleware(sagaMiddleware));
  return store;
};

export default moduleStore;
