import React, { Component } from 'react';
import Header from '../components/header';
import CreateForm from './CreateForm';
import CounterContainer from './CounterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CreateForm />
        <CounterContainer/>
        
      </div>
    );
  }
};

export default App;