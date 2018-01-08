import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {

  // prepare the props for the component
  const testProps = {
    articles: {
      articleA: { id: 'articleA' },
      articleB: { id: 'articleB' }
    },
    store: {
      lookupAuthor: jest.fn(() => ({}))
    }
  }

  it('should render correctly', () => {
    // create a component tree
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();

    console.log(tree.children);

    // create a snapshot
    expect(tree).toMatchSnapshot();
  })
})