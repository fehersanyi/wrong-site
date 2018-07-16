import React, { Component } from 'react';
import '../css/header.css';
import '../css/welcome.css';
import '../css/news.css';
import '../css/insta.css';
import '../css/footer.css';
import Header from './components/Header';
import menu from '../sources/menu';
import Welcome from './components/Welcome';
import pic from '../sources/images/megjelent.jpg';
import News from '../js/components/News';
import articles from '../sources/articles';
import Dates from './components/Dates';
import dates from '../sources/dates';
import Insta from './components/Insta';
import insta from '../sources/insta';
import Footer from './components/Footer';
import links from '../sources/links';
import Section from './components/Section';



class App extends Component {
  render() {
    return (
      <div>
        {/* <Header titles={ menu } /> */}
        <Welcome src={pic} />
        {/* <News articles={articles} /> */}
        <Section title={ "Koncertek" } 
        sectionSrc={ links.fb }
        forwardSrc={ links.fb }
        subTitle={ "tovabbi koncertek" }
        url={ "/koncertek" }/>
        <Dates dates={dates} />
        {/* <Insta pictures={insta} /> */}
        <Footer src={links} />
      </div>
    );
  }
}

export default App;
