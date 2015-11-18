import expect from 'expect';

import { default as reducers } from './helpers/reducers';
import * as actions from './helpers/actions';
import { thunk } from './helpers/middleware';

import {
  create,
  combine,
  bindActionCreator,
  bindActionCreators,
  applyMiddleware
} from '../src';

describe('bindActionCreators', () => {
  let store;
  beforeEach(() => { store = create(reducers.counter); });

  it('wraps the action creators with the dispatch function', () => {
    const creators = bindActionCreators(actions, store.dispatch);
    expect(Object.keys(creators)).toEqual(Object.keys(actions));

    const inc = creators.inc();
    const state = store.getState();

    expect(inc).toEqual({ type: 'inc' });
    expect(state).toEqual(1);
  });
});

describe('applyMiddleware', () => {
  it('wraps dispatch method with middleware', () => {
    const spy = expect.createSpy();
    const test = (methods) => {
      spy(methods);
      return dispatch => action => dispatch(action);
    };

    const store = create(reducers.counter);
    const wrappedStore = applyMiddleware(store, [test]);

    expect(spy.calls.length).toEqual(1);
    expect(Object.keys(spy.calls[0].arguments[0])).toEqual([
      'dispatch',
      'getState'
    ]);
  });
});
