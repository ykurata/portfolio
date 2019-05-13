import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation title="Yasuko Kurata"/>
        <Header title="Hi, I'm Yasuko Kurata" />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
