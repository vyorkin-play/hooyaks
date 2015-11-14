import mapObj from 'map-obj';

export const bindActionCreator = (creator, dispatch) =>
  (...args) => dispatch(creator(...args));

export const bindActionCreators = (creators, dispatch) =>
  mapObj(creators, (key, creator) => [key, bindActionCreator(creator, dispatch)]);
