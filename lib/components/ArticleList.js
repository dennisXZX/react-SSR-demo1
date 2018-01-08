import React, { Fragment } from 'react'
import Article from './Article';

const ArticleList = (props) => {
  return (
    <Fragment>
      {Object.values(props.articles).map((article) => (
        <Article
          key={article.id}
          article={article}
          actions={props.articleActions}
        />
      ))}
    </Fragment>
  )
}

export default ArticleList
