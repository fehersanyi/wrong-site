import React from 'react';

const News = ({articles}) => (
  <div id="news">
    <div id="nT">
      <h1 className="newsTitle">Hírek</h1>
    </div>
    <div className="feed">
      {articles.map((article) => (
        <div className="newsBlock">
          <a href={article.href} target="_blank"><p>{article.title}</p></a>
          <a target="_blank" href={article.href}>
            <img className="article"alt={article.title} src={article.src} />
          </a>
        </div>))}
    </div>
  </div>
);

export default News;