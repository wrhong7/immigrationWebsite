import React from "react";
import Landing from './pages/landing';
import ShortIntro from './pages/shortIntro';
import SurveyIntro from './pages/surveyIntro';
import AustraliaInfo from './pages/infoPerCountry/australia';

export default class Main extends React.Component {

  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  render() {
    return <div>
      <Landing/>
      <ShortIntro/>
      <SurveyIntro/>
      <AustraliaInfo/>
    </div>
  }

}