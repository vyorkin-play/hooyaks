import expect from 'expect';

import { default as reducers } from './helpers/reducers';
import { inc, dec } from './helpers/actions';

import {
  create,
  combine,
  bindActionCreator,
  bindActionCreators
} from '../src';

describe('bindActionCreators', () => {
  let store;
  beforeEach(() => { store = create(counterReducer); });

  it('wraps the action creators with the dispatch function', () => {
    const bound = bindActionCreators({ inc, dec }, store.dispatch);
  });
});
