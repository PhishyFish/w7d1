import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import { merge } from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
      case RECEIVE_TODOS:
        const newState = {};

        action.todos.forEach(todo => {
          newState[todo.id] = todo;
        });

        return newState;
      case RECEIVE_TODO:
        const todo = {[action.todo.id]: action.todo};
        return merge({}, state, todo);
      case REMOVE_TODO:
        const nextState = merge({}, state);
        delete nextState[action.todo.id];
        return nextState;
      default:
        return state;
    }
};

export default todosReducer;
