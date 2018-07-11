import React, { Component } from 'react';
import '../css/header.css';
import '../css/welcome.css';
import '../css/csillag.css'
import Header from './components/Header';
import menu from '../sources/menu';
import Welcome from './components/Welcome';
import pic from '../sources/images/megjelent.jpg'

class App extends Component {
  render() {
    console.log(pic)
    return (
      <div>
        <Header titles={ menu } />
        <Welcome src={pic} />
      </div>
    );
  }
}

export default App;
