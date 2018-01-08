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