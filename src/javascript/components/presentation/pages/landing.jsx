import React from "react";
import algorithms from "./algorithms";

export default function Landing ({handleButtonClick}) {

  const about = <a className="landing-page-header-about-button header-button hover-pointer hover-underline"
                   href="/about">
    About
  </a>;

  const algorithms = <a className="landing-page-header-algorithms-button header-button hover-pointer hover-underline"
                        href="/algorithms">
    Algorithms
  </a>;

  const disclaimer = <a className="landing-page-header-disclaimer-button header-button hover-pointer hover-underline"
                        href="/disclaimer">
    Disclaimer
  </a>;

  const tips = <div className="landing-page-header-disclaimer-button header-button hover-pointer">
    Tips
  </div>;

  const mainscript = <div className="landing-page-intro-mainscript">
    Immigration Tips<br/>For Skilled Workers*
  </div>;

  const goToSurveyButton = <div className="go-to-survey-button hover-pointer"
                                onClick={() => handleButtonClick("survey")}>
    Explore My Options
  </div>;

  const explanation = <div className="landing-page-intro-astrix-explanation">
    *Bachelors Degree + 2 Years of Work Experience
  </div>;

  const scrollDownBlinker = <div>
    <i className="fas fa-chevron-down"></i>
  </div>

  return <div className="landing-page-cover">
    <div className="landing-page-header">
      {disclaimer} {algorithms} {about}
    </div>
    <div className="landing-page-intro-section">
      {mainscript}
      {goToSurveyButton}
      {explanation}
    </div>
    <div className="scroll-down-chevron chevron-icon-animation">
      {scrollDownBlinker}
    </div>
  </div>

}

