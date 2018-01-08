import React from 'react'
import ReactDOM from 'react-dom';

import App from '../components/App';
import StateApi from '../StateApi'

const store = new StateApi(window.initialData)

// get the initial data from window global object
// the initial data is attached to it in index.ejs
ReactDOM.hydrate(
  <App store={store} />,
  document.getElementById('root')
);
