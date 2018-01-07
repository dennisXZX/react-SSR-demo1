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
    articleActions: {
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

    expect(tree.children.length).toBe(2);

    // create a snapshot
    expect(tree).toMatchSnapshot();
  })
})