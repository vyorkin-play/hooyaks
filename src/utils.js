import mapObj from 'map-obj';

const bindActionCreator = (creator, dispatch) =>
  (...args) => dispatch(creator(...args));

const bindActionCreators = (creators, dispatch) =>
  mapObj(creators, (key, creator) => [key, bindActionCreator(creator, dispatch)]);

export default { bindActionCreator, bindActionCreators }
