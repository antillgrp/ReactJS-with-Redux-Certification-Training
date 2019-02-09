import React, { Component } from 'react';

export default class CounterView extends Component {
    
    constructor(props) {
      super(props);
    
      this.state = {
         counter:0,
         timerID:-1,
      }
    }

    componentDidMount(){    
        let timerID = setInterval(() => {
            this.setState({counter:this.state.counter+1});
        }, 5000);
        this.setState({timerID:timerID});
    }

    componentWillUnmount(){
        clearInterval(this.state.timerID);
    }
    
    render() {
        const {counter} = this.state;

        return (
            <h1>COUNTER:{counter}</h1>
        );
    }
}
