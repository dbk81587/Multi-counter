import React, { Component } from 'react';
import Header from '../components/header';
import Button from '../components/Button';
import CounterContainer from './CounterContainer';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="App">
        <Header />
        <Button onCreate={onCreate} onRemove={onRemove}/>
        <CounterContainer />
        
      </div>
    );
  }
};

const mapToDispatch = (dispatch) => ({
  onCreate: () => dispatch(actions.create()),
  onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(App);