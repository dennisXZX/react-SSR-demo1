import express from 'express';
import config from './config';
import serverRender from './renderers/serverRender';
import { data } from './testData';

const app = express();

// serve the static files
app.use(express.static('public'));
// config Express to use ejs template
app.set('view engine', 'ejs');

// routing
app.get('/', async (req, res) => {
  // get the initial markup and data
  const initialContent = await serverRender();

  // render the index.ejs template with the HTML markup generated
  res.render('index', { ...initialContent });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});