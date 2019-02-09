import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  todos.length === 0 ? null : (
    <fieldset style={{ display:'inline'}}>
      <legend>List of tasks</legend>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </fieldset>
  )
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lifeTimeML: PropTypes.number.isRequired,
    completed:PropTypes.func.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
