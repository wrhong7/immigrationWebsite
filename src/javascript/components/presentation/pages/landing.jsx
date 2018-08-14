import React from "react";

export default function Landing ({handleButtonClick}) {

  const about = <div className="landing-page-header-about-button header-button hover-pointer">
    About
  </div>;

  const disclaimer = <div className="landing-page-header-disclaimer-button header-button hover-pointer">
    Disclaimer
  </div>;

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

  return <div className="landing-page-cover">
    <div className="landing-page-header">
      {tips} {disclaimer} {about}
    </div>
    <div className="landing-page-intro-section">
      {mainscript}
      {goToSurveyButton}
      {explanation}
    </div>
  </div>

}

