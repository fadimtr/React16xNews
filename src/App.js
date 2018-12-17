import React, { Component } from 'react';
import './App.css';

// Memo
import Memo from './memo';
// Fragments
import Fragments from './fragments';
// Lazy & Suspense
import Lazy from './lazy';
// Context API
import Context from './context';
// Hooks
import Hooks from './hooks';
import HelloHook from './hooks/helloHook';
import HelloWindow from './hooks/helloWindow';
import HelloWindowHook from './hooks/helloWindowHook';

class App extends Component {
  render() {
    return (
      <Hooks/>
    );
  }
}

export default App;
