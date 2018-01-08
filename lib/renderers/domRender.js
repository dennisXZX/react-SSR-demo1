import React from 'react'
import ReactDOM from 'react-dom';

import App from '../components/App';

// get the initial data from window global object
// the initial data is attached to it in index.ejs
ReactDOM.hydrate(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
