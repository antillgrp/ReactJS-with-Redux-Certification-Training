const todo = (todo, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return action.todoData
    case 'TOGGLE_TODO':
      if (todo.id === action.todoData.id) {
        return {
          ...todo,
          lifeTimeML: 0 //pure functional overwrite
        }
      }
      return todo
    default:
      return todo
  }
}

const todos = (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        todo(undefined, action)
        //new todo comes in action.todoData
      ]
    case 'TOGGLE_TODO':
      return todos.map(t =>
        todo(t, action)
      )
    default:
      return todos
  }
}

export default todos
