import React from "react";
import LandingContainer from '../containers/landingContainer'
import ShortIntro from './pages/shortIntro';
import SurveyIntro from './pages/surveyIntro';
import AustraliaInfo from './pages/infoPerCountry/australia';

export default class Main extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.activeSectionId !== newProps.activeSectionId) {
      var element = document.getElementById(`${newProps.activeSectionId}`);
      element.scrollIntoView();
    }
    // console.log("the received props are: ", newProps.activeSectionId);
    // console.log("Main just received props!");
  }

  render() {
    return <div>
      <LandingContainer/>
      <ShortIntro/>
      <SurveyIntro/>
      <AustraliaInfo/>
    </div>
  }

}