import React from 'react';
import { hydrate } from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';

hydrate(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.querySelector('#app')
);