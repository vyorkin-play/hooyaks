export default {
  counter: (state = 0, action) => {
    switch (action.type) {
      case 'inc':
        return state + 1;
      case 'dec':
        return state - 1;
      default:
        return state;
    }
  },
  stack: (state = [], action) => action.type === 'push' ? [...state, action.value] : state
}
