import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import '../scss/style.scss';
import { firebase } from './firebase/firebase';
import {
  login,
  logout,
} from './actions/auth';

const store = configureStore();

const jsx = (
  <Provider store={store}><AppRouter /></Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
