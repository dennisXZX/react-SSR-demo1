import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from '../components/App';
import StateApi from '../StateApi'
import config from '../config';

const serverRender = async () => {
  // call the API endpoint to retrieve data
  const response = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(response.data);

  // initialMarkup is an HTML string representing the component
  // initialData is an object containing the initial article and author data
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: response.data
  };
};

export default serverRender;