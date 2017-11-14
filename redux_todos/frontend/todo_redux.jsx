import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import { receiveSteps, receiveStep } from './actions/step_actions';
import { allTodos, stepsByTodoId } from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // remove before production
  window.store = store;
  window.receiveSteps = receiveSteps;
  window.receiveStep = receiveStep;
  window.stepsByTodoId = stepsByTodoId;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
