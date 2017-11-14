import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      done: this.props.todo.done,
      detail: false
    };
    this.updateTodo = this.updateTodo.bind(this);
    this.updateDetail = this.updateDetail.bind(this);
  }

  updateTodo(event) {
    event.preventDefault();
    const newStatus = !this.state.done;
    this.setState({ done: newStatus });
    const { todo } = this.props;
    todo.done = newStatus;
    this.props.receiveTodo(todo);
  }

  updateDetail(event) {
    event.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  render() {
    const { todo, removeTodo } = this.props;
    let content;
    if (this.state.detail) {
      content = (
        <div>
          <li onClick={this.updateDetail}>{todo.title}</li>
          <button onClick={this.updateTodo}>{ this.state.done ? 'Undo' : 'Done' }</button>
          <TodoDetailView todo={todo} />
        </div>
      );
    } else {
      content = (
        <div>
          <li onClick={this.updateDetail}>{todo.title}</li>
          <button onClick={this.updateTodo}>{ this.state.done ? 'Undo' : 'Done' }</button>
        </div>
      );
    }

    return(content);
  }
}

export default TodoListItem;

// <button onClick={() => removeTodo(todo)}>Delete</button>
