## Server-side Rendering React App

Powered by React, Express, EJS

#### Steps
- run `yarn install` to install dependencies
- run `yarn dev` to run the app server
- default port: localhost:8080

#### PM2

PM2 is used for production process management.

- run `yarn pm2 logs` to see the logs

#### Webpack

- run `yarn webpack` to generate a production build

#### Install Babel on the server

Babel is needed on the server side since we are using server side rendering, so the server needs to understand JSX or other ES6 syntax. Babel and its presets are installed as dependencies instead of dev dependencies, this is because our goal is to push the source code onto production server and compile them on the server.

#### Server side rendering

`ReactDOMServer.renderToString(element)` enables you to render components to static markup.

```js
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/App';

const serverRender = () => {
  return ReactDOMServer.renderToString(
    <App />
  );
};

export default serverRender;
```

#### Jest

Run `yarn test` to run tests.

Unit testing to test API methods.

```js
import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
  it('should expose articles as an object', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('should expose authors as an object', () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});
```

Snapshot testing to test React component

```js
import React from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  let wrapper;

  // shallow render the component before testing
  beforeEach(() => {
    wrapper = shallow(<ArticleList {...testProps} />);
  });

  // prepare the props for the component
  const testProps = {
    articles: {
      articleA: { id: 'articleA' },
      articleB: { id: 'articleB' }
    }
  }

  Article.propTypes = {};

  it('should render correctly', () => {
    expect(wrapper.find(Article)).toHaveLength(2);

    // create a snapshot
    expect(wrapper).toMatchSnapshot();
  })
})
```