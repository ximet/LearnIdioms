import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {Provider} from 'mobx-react';
import * as stores from './stores/index.js';
import AppView from './views/AppView';

ReactDOM.render(
  <Provider {...stores}>
    <AppView />
  </Provider>,
  document.getElementById('root')
);
