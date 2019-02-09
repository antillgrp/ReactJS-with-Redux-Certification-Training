import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterView from './components/CounterView';

class App extends Component {

  state = {counterOrNull:<CounterView className="App-header"/>};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Module 2 - Assignment. CounterView Component: <code>src/components/CounterView.js</code>.
          </p>
          <button  
            onClick={
              () => {
                setTimeout(() => {
                  this.setState({
                    counterOrNull: null
                  });
                }, 0);
                setTimeout(() => {
                  this.setState({
                    counterOrNull: <CounterView className="App-header"/>
                  });
                }, 0);
              }
            }
          >
            RESET COUNTER
          </button>
          {this.state.counterOrNull}
        </header>
      </div>
    );
  }
}

export default App;
