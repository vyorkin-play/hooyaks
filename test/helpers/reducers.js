export default {
  counter: (state = 0, action) => action.type === 'inc' ? state + 1 : state,
  stack: (state = [], action) => action.type === 'push' ? [...state, action.value] : state
}
