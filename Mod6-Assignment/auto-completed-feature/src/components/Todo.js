import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, todo }) => (
  <fieldset>
    {
      todo.completed() || (
        <legend>
          <input
            type='checkbox'
            onChange={onClick}
          />
          Completed
        </legend>
      )
    }
    {
      todo.lifeTimeML === Infinity ? "(Manual complete) " :
      todo.completed() ||
        "Auto complete in: "
        +
        Math.floor((todo.lifeTimeML - ((new Date()).getTime() - todo.addedAt))*0.001)
        +
        "s "
    }
    <strong>Name:</strong>{todo.name}
  </fieldset>
)

//+ todo.lifeTimeML

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lifeTimeML: PropTypes.number.isRequired,
    completed:PropTypes.func.isRequired,
  }).isRequired,
}

export default Todo
