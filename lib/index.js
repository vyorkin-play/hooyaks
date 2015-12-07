'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapObj = require('map-obj');

var _mapObj2 = _interopRequireDefault(_mapObj);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

exports['default'] = _extends({
  create: function create(reducer, initialState) {
    var state = initialState;

    var dispatch = function dispatch(action) {
      state = reducer(state, action);
      return action;
    };

    dispatch({ type: '.i./INIT' });

    return { dispatch: dispatch, getState: function getState() {
        return state;
      } };
  },

  combine: function combine(reducers) {
    return function (state, action) {
      if (state === undefined) state = {};
      return (0, _mapObj2['default'])(reducers, function (key, reducer) {
        return [key, reducer(state[key], action)];
      });
    };
  }

}, utils);
module.exports = exports['default'];