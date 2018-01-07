import express from 'express';
import config from './config';
import serverRender from './serverRender';

const app = express();

// serve the static files
app.use(express.static('public'));
// config Express to use ejs template
app.set('view engine', 'ejs');

// routing
app.get('/', (req, res) => {
  // get the HTML string
  const initialContent = serverRender();

  res.render('index', { initialContent });
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});