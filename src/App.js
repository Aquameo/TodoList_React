import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is a simple memo tool.</h1>
        </header>
        <div className="App-intro">
            <span>You can input your task, and click the 'Add' Button.</span>
            <TodoList/>
        </div>
      </div>
    );
  }
}

export default App;
