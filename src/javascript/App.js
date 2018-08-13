import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';

import Landing from '../javascript/components/pages/landing';
import ShortIntro from './components/pages/shortIntro';
import SurveyIntro from '../javascript/components/pages/surveyIntro';


class App extends Component {
  render() {
    return <div>
      <Landing/>
      <ShortIntro/>
      <SurveyIntro/>
    </div>
  }
}

export default App;
