import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // debugger
    const todo = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      done: false
    };
    this.props.receiveTodo(todo);
    this.setState({
      id: uniqueId(),
      title: "",
      body: ""
    });
  }

  updateTitle(event) {
    this.setState({ title: event.target.value });
  }

  updateBody(event) {
    this.setState({ body: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.updateTitle}
            type="text"
            value={this.state.title}
          />
          <input
            onChange={this.updateBody}
            type="text"
            value={this.state.body}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
