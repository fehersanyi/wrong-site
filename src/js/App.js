import React, { Component } from 'react';
import '../css/App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Header titles={["eze", "aza", "amaza"]} />
    );
  }
}

export default App;
