import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: 'Hello Coding World!',
      newTodo: '',
      todos: [{
        title: 'Project 1',
        done: false
      },{
        title:'Project 2',
        done:false
      }]
    };
  }
  
  newTodoChanged(event){  
    this.setState({
      newTodo: event.target.value
    });
  }
  
  formSubmitted(event){
    event.preventDefault();
    console.log(this.state.newTodo);
    this.setState({
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }
  
  
  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={(event)=>this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event)=>this.newTodoChanged(event)} id="newTodo" name="newTodo"/>
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {this.state.todos.map(todo=>{
            return <li key={todo.title}>{todo.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
