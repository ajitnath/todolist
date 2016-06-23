// src/app.js

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { TodoApp } from './containers';


const store = createStore(reducer);

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
