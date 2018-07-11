import React from 'react';

const News = ({articles}) => (
  <div id="news">
    <h1 className="newsTitle">Hírek</h1>
    <div className="feed">
      {articles.map((article) => (<a target="_blank" href={article.href}><img className="article"alt={article.title} src={article.src} /></a>))}
    </div>
  </div>
);

export default News;