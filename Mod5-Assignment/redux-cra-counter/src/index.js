import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Calculator from './components/Calculator'
import calculator from './reducers'

const store = createStore(calculator)
const rootEl = document.getElementById('calculator')

//https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
const render = () => ReactDOM.render(
  <Calculator
    value={+store.getState().toFixed(2)}
    onSquare={() => store.dispatch({ type: 'SQUARE' })}
    onHalf={() => store.dispatch({ type: 'HALF' })}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onSquareRoot={() => store.dispatch({ type: 'SQUAREROOT' })}
    onDouble={() => store.dispatch({ type: 'DOUBLE' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)