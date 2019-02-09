let nextTodoId = 0
export const addTodo = (name,lifeTime) => ({
  type: 'ADD_TODO',
  todoData:{
    id: nextTodoId++,
    name: name,
    addedAt: (new Date()).getTime(),
    lifeTimeML: lifeTime === Infinity ? Infinity : lifeTime * 60 * 1000,
    //when complete lifeTimeML = 0
    completed: function () {     
      return (new Date()).getTime() - this.addedAt >= this.lifeTimeML
    }
  }
})
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  todoData:{
    id: id
  }
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})


