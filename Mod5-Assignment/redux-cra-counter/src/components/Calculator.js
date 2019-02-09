import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Calculator extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onSquare: PropTypes.func.isRequired,
    onHalf: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onSquareRoot: PropTypes.func.isRequired,
    onDouble: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  }

  render() {
    const {
      value,
      onSquare,
      onHalf,
      onIncrement,
      onSquareRoot,
      onDouble,
      onDecrement,
    } = this.props
    return (
      <p>
        <button onClick={onSquareRoot}>
          Square Root
        </button>
        {' '}
        <button onClick={onHalf}>
          Half
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement by 1
        </button>
        {' '}
        Current Value: <strong>{value}</strong>
        {' '}
        <button onClick={onIncrement}>
          Increment by 1
        </button>
        {' '}
        <button onClick={onDouble}>
          Double
        </button>
        {' '}
        <button onClick={onSquare}>
          Square
        </button>
        {' '}
      </p>
    )
  }
}

export default Calculator