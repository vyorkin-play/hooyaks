import expect from 'expect';
import { create, compose } from '../src';

const counterReducer = (state = 0, action) => action.type === 'inc' ? state + 1 : state;
const stackReducer = (state = [], action) => action.type === 'push' ? [...state, action.value] : state;

describe('create', () => {
  it('exposes public API', () => {
    const store = create((state, _) => state);
    const methods = Object.keys(store);

    expect(methods).toContain('dispatch');
    expect(methods).toContain('getState');
  });

  it('returns an object with the given initial state', () => {
    const initialState = { yaytsa: 1 };
    const store = create((state, _) => state, initialState);
    expect(store.getState()).toEqual(initialState);
  });

  it('applies the reducer to the previous state', () => {
    const store = create(counterReducer);
    expect(store.getState()).toEqual(0);
    store.dispatch({ type: 'inc' });
    expect(store.getState()).toEqual(1);
  });
});

describe('compose', () => {
  it('combines reducers', () => {
    const reducer = compose({ counter: counterReducer, stack: stackReducer });

    const s1 = reducer({}, { type: 'inc' });
    expect(s1).toEqual({ counter: 1, stack: [] });

    const s2 = reducer(s1, { type: 'push', value: 'x' });
    expect(s2).toEqual({ counter: 1, stack: ['x'] });
  });
});
