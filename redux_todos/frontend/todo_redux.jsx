import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { receiveTodos, receiveTodo } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // remove before production
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
