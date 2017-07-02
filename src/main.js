import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {Provider} from 'mobx-react';
import store from './stores/index.js';
import AppView from './views/AppView';

ReactDOM.render(
  <Provider store={store}>
    <AppView />
  </Provider>,
  document.getElementById('root')
);
