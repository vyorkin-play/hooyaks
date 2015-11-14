import mapObj from 'map-obj';
import * as utils from './utils';

export default {
  create: (reducer, initialState) => {
    let state = initialState;

    const dispatch = (action) => {
      state = reducer(state, action);
      return action;
    };

    dispatch({ type: '.i./INIT' });

    return { dispatch, getState: () => state };
  },

  combine: reducers => (state = {}, action) =>
    mapObj(reducers, (key, reducer) => [key, reducer(state[key], action)]),

  ...utils
};
