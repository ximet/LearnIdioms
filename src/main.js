import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import AppViewState from './states/AppViewState';
import AppView from './views/AppView';

const appState = new AppState();

ReactDOM.render( <App appState={appState} />, document.getElementById('root'));
