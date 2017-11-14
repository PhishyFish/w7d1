import React from 'react';
import { allTodos } from '../../reducers/selectors';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo }) => (
  <div>
    <ul>
      {
      todos.map((todo, i) => (
          <TodoListItem key={i} title={todo.title} />
        ))
      }
    </ul>
    <TodoForm receiveTodo={receiveTodo} />
  </div>
);

export default TodoList;
