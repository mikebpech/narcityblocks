import React, { Component } from 'react';

import Header from './components/Header';
import Stories from './components/Stories';
import './components/styles/styles.scss'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="site__wrapper">
          <Stories />
        </div>
      </div>
    );
  }
}

export default App;
