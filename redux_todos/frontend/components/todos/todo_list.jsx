import React from 'react';
import { allTodos } from '../../reducers/selectors';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos }) => (
  <ul>
    {
    todos.map((todo, i) => (
        <TodoListItem key={i} title={todo.title} />
      ))
    }
  </ul>
);

export default TodoList;
