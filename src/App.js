import React, { Component } from 'react';
import './App.css';
import TodoList from './todoList/todoList';
import TodoListHook from './todoList/todoListHook';
import Hello from './hello/hello';
import HelloHook from './hello/helloHook';
import HelloWindow from './hello/helloWindow';
import HelloWindowHook from './hello/helloWindowHook';
import HelloMemo from './memo/hello';
import Fragments from './fragments/hello';
import Lazy from './lazy/index';
import TryContext from './context/index';

class App extends Component {
  render() {
    return (
      <TryContext/>
    );
  }
}

export default App;
