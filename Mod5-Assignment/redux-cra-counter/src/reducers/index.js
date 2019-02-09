export default (state = 0, action) => {
  switch (action.type) {
    case 'SQUARE':
      return state * state
    case 'HALF':
      return state / 2
    case 'INCREMENT':
      return state + 1
    case 'SQUAREROOT':
      return Math.sqrt(state)
    case 'DOUBLE':
      return state * 2
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}