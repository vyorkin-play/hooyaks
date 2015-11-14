import expect from 'expect';

import { default as reducers } from './helpers/reducers';
import { inc, dec } from './helpers/actions';

import {
  create,
  combine,
  bindActionCreator,
  bindActionCreators
} from '../src';

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
    const store = create(reducers.counter);
    expect(store.getState()).toEqual(0);
    store.dispatch({ type: 'inc' });
    expect(store.getState()).toEqual(1);
  });
});

describe('combine', () => {
  it('combines reducers', () => {
    const reducer = combine(reducers);

    const s1 = reducer({}, { type: 'inc' });
    expect(s1).toEqual({ counter: 1, stack: [] });

    const s2 = reducer(s1, { type: 'push', value: 'x' });
    expect(s2).toEqual({ counter: 1, stack: ['x'] });
  });
});
