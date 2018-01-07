import React, { Component } from 'react'
import ArticleList from './ArticleList';

import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

class App extends Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  }

  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </div>
    )
  }
}

export default App
