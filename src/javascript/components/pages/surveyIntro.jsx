import React from "react";

export  default function surveyIntro() {

  const surveyIntroMainCaption = <div className="survey-intro-main-caption">
    You have options
  </div>;

  const surveyIntroSubCaptionTop = <div className="survey-intro-sub-caption-top">
    We just need to do a cost -benefit analysis
  </div>;

  const goToSurveyButton = <div className="survey-section-gotosurvey-button">
    Show my options
  </div>;

  const surveyIntroSubCaptionBottom = <div className="survey-intro-subcaption-bottom">
    After 10 questions, our alogrithims<br/>
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

