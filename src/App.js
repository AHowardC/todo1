import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: 'React Todo App!',
      newTodo: '',
      todos: [{
       title:'one',
       done: false
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
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }
  
  
  toggleTodoDone(event, index){
    const todos = [...this.state.todos]; //copy the array
    todos[index] = {...todos[index]}; // copy the todo
    todos[index].done = event.target.checked; // update done property on copied todo
    this.setState({
      todos
    });
  }
  
  removeTodo(index){
    const todos = [...this.state.todos]; //copy the array
    todos.splice(index, 1);
    
    this.setState({
      todos
    });
  }
  
  allDone(){
    const todos = this.state.todos.map(todo=>{
      return{
        ...todo,
        done:true
      };
    });
    
    this.setState({
      todos
    });
  }
  
  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
         <NewTodoForm
         newTodo={this.state.newTodo}
         formSubmitted={this.formSubmitted.bind(this)} 
         newTodoChanged={this.newTodoChanged.bind(this)}/>
        {/*<form onSubmit={(event)=>this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event)=>this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo}/>
          <button type="submit">Add Todo</button>
        </form>*/}
        <button onClick={()=>{this.allDone()}}>All Done</button>
        <TodoList
        todos={this.state.todos}
        toggleTodoDone={this.toggleTodoDone.bind(this)}
        removeTodo={this.removeTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;
