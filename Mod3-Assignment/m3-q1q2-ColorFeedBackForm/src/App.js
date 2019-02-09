import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterView from './components/CounterView';
import ColorFeedBackForm from './components/ColorFeedBackForm';

class App extends Component {

  state = {counterOrNull:<CounterView className="App-header"/>};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <hr style={{width:'100%'}} />
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
          <hr style={{width:'100%'}} />
          <p>
            Module 3 (Q1,Q2) - Assignment. ColorFeedBackForm Component: <code>src/components/ColorFeedBackForm.js</code>.
          </p>
          <ColorFeedBackForm />
        </header>
      </div>
    );
  }
}

export default App;
