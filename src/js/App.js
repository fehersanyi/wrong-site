import React, { Component } from 'react';
import '../css/header.css';
import '../css/welcome.css';
import '../css/csillag.css';
import '../css/news.css';
import '../css/dates.css';
import Header from './components/Header';
import menu from '../sources/menu';
import Welcome from './components/Welcome';
import pic from '../sources/images/megjelent.jpg';
import News from '../js/components/News';
import articles from '../sources/articles';
import Dates from './components/Dates';
import dates from '../sources/dates';

class App extends Component {
  render() {
    console.log(articles)
    return (
      <div>
        <Header titles={ menu } />
        <Welcome src={pic} />
        <News articles={articles} />
        <Dates dates={dates} />
      </div>
    );
  }
}

export default App;
