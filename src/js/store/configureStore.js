import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

// STORE CREATION
export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
    }),
    compose(applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f),
  );
  return store;
};
