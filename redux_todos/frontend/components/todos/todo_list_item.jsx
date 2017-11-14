import React from 'react';

class TodoListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      done: this.props.todo.done
    };
    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo(event) {
    event.preventDefault();
    const newStatus = !this.state.done;
    this.setState({ done: newStatus });
    const { todo } = this.props;
    todo.done = newStatus;
    this.props.receiveTodo(todo);
  }

  render() {
    const { todo, removeTodo } = this.props;
    return (
      <div>
        <li>{todo.title}</li>
        <button onClick={() => removeTodo(todo)}>Delete</button>
        <button onClick={this.updateTodo}>{ this.state.done ? 'Undo' : 'Done' }</button>
      </div>
    );
  }
}

export default TodoListItem;
