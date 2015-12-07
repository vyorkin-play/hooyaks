'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapObj = require('map-obj');

var _mapObj2 = _interopRequireDefault(_mapObj);

var bindActionCreator = function bindActionCreator(creator, dispatch) {
  return function () {
    return dispatch(creator.apply(undefined, arguments));
  };
};

exports.bindActionCreator = bindActionCreator;
var bindActionCreators = function bindActionCreators(creators, dispatch) {
  return (0, _mapObj2['default'])(creators, function (key, creator) {
    return [key, bindActionCreator(creator, dispatch)];
  });
};
exports.bindActionCreators = bindActionCreators;