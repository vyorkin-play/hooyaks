import mapObj from 'map-obj';

export default {
  hoo: (reducer, initialState) => {
    let state = initialState;
    const dispatch = (action) => state = reducer(state, action)
    dispatch({ type: '.i.hooyaks/INIT' });
    return { dispatch, getState: () => state };
  },
  yaks: (reducers) => (state = {}, action) =>
    mapObj(reducers, (key, reducer) => [key, reducer(state[key], action)])
}
