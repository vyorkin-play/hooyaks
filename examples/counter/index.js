import React from 'react';
import { render } from 'react-dom';

import { create } from 'hooyaks';
import { Provider } from 'hooyaks-react';

import reducer from './reducers';
import App from './containers/App';

const store = create(reducer);

// TODO: play with module.hot

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
