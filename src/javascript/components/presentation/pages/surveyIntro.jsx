import React from "react";

export  default function surveyIntro() {

  const surveyIntroMainCaption = <div className="survey-intro-main-caption">
    You have options
  </div>;

  const surveyIntroSubCaptionTop = <div className="survey-intro-sub-caption-top">
    We just need to get to know you a little better
  </div>;

  const goToSurveyButton = <div className="survey-section-gotosurvey-button hover-pointer">
    Show my options
  </div>;

  const surveyIntroSubCaptionBottom = <div className="survey-intro-subcaption-bottom">
    After 10 questions, our algorithms<br/>
    will match you to the best country.
  </div>;

  return <div className="survey-intro-cover">
    <div className="survey-intro-content-container">
      {surveyIntroMainCaption}
      {surveyIntroSubCaptionTop}
      {goToSurveyButton}
      {surveyIntroSubCaptionBottom}
    </div>

  </div>
}

