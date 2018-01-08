import React, { Component } from 'react'
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';

class App extends Component {
  state = this.props.store.getState();

  /*
  By adding childContextTypes and getChildContext to App component (the context provider)
  React passes the 'store' property down automatically and
  any component in the subtree (in this case, Article) can access it by defining contextTypes
  */
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          store={this.props.store}
        />
      </div>
    )
  }
}

App.childContextTypes = {
  store: PropTypes.object,
}

export default App
