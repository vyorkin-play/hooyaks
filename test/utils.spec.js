import expect from 'expect';

import { default as reducers } from './helpers/reducers';
import * as actions from './helpers/actions';

import {
  create,
  combine,
  bindActionCreator,
  bindActionCreators
} from '../src';

describe('bindActionCreators', () => {
  let store;
  beforeEach(() => { store = create(reducers.counter); });

  it('wraps the action creators with the dispatch function', () => {
    const creators = bindActionCreators(actions, store.dispatch);
    expect(Object.keys(creators)).toEqual(Object.keys(actions));

    creators.inc();
  });
});
