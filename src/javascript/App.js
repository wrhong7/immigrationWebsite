import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import '../styles/landingPage/webVersion.css'
import '../styles/shortIntroPage/webVersion.css'
import Landing from '../javascript/components/pages/landing'
import ShortIntro from '../javascript/components/pages/shotIntro'

class App extends Component {
  render() {
    return <div>
      <Landing/>
      <ShortIntro/>
    </div>
  }
}

export default App;
