import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from '../components/App';
import DataApi from '../DataApi'
import config from '../config';

const serverRender = async () => {
  // call the API endpoint to retrieve data
  const response = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(response.data);

  // initialize the data object
  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  }

  // return an HTML string representing the component
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ),
    initialData: initialData
  };
};

export default serverRender;