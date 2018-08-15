import React from "react";

export default function takeSurvey() {

  const surveyQuestionOne = <div className="survey-content">
      <div className="survey-progress-indicator">
        Question 1/6
      </div>
      <div className="survey-questions">
        What would be your ideal life after 50 years old?
      </div>
      <div className="survey-responses">
        <div className="survey-response-item">
          <div className="response-icon">
            <i className="fas fa-umbrella-beach"></i>
          </div>
          <div className="response-topic">
            Retire with
          </div>
          <div className="response-details">
            Pension + <br/> Social Security <br/> Income
          </div>
        </div>

        <div className="survey-response-item">
          <div className="response-icon">
            <i className="fas fa-umbrella-beach"></i>
          </div>
          <div className="response-topic">
            Retire with
          </div>
          <div className="response-details">
            Passive<br/>Investments<br/> Income
          </div>
        </div>

        <div className="survey-response-item">
          <div className="response-icon">
            <i className="fas fa-store"></i>
          </div>
          <div className="response-topic">
            Own
          </div>
          <div className="response-details">
            Small or Medium<br/>Enterprises
          </div>
        </div>

        <div className="survey-response-item">
          <div className="response-icon">
            <i className="fas fa-user-tie"></i>
          </div>
          <div className="response-topic">
            Become a
          </div>
          <div className="response-details">
            Corporate<br/>C-Suite<br/>Executive
          </div>
        </div>

        <div className="survey-response-item">
          <div className="response-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="response-topic">
            Maintain
          </div>
          <div className="response-details">
            Middle Level<br/>Manager & <br/>Enjoy Life!
          </div>
        </div>



      </div>
    </div>;

  const surveyQuestionTwo = <div className="survey-content">
    <div className="survey-progress-indicator">
      Question 2/6
    </div>
    <div className="survey-questions">
      Select item(s) you believe a government should provide.
    </div>
    <div className="survey-responses">
      <div className="survey-response-item">
        <div className="response-icon">
          <i class="fas fa-balance-scale"></i>
        </div>
        <div className="response-topic">
          Law & <br/> Order
        </div>
        <div className="response-details">
          Enforcement
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-utensils"></i>
        </div>
        <div className="response-topic">
          Basic Security
        </div>
        <div className="response-details">
          Humanitarian <br/> Needs Only
        </div>
      </div>



      <div className="survey-response-item">
        <div className="response-icon">
          <i class="fas fa-hospital-alt"></i>
        </div>
        <div className="response-topic">
        </div>
        <div className="response-details">
          Free <br/> Universal <br/> Healthcare
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-child"></i>
        </div>
        <div className="response-topic">
          Free or <br/> Subsidized
        </div>
        <div className="response-details">
          Daycare
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i class="fas fa-book-reader"></i>
        </div>
        <div className="response-topic">
          Free
        </div>
        <div className="response-details">
          Basic <br/> Education
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="response-topic">
          Low Cost
        </div>
        <div className="response-details">
          Higher Education
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-wrench"></i>
        </div>
        <div className="response-topic">
          Low Cost
        </div>
        <div className="response-details">
          Workforce <br/> Retraining
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-home"></i>
        </div>
        <div className="response-topic">
          Subsidized
        </div>
        <div className="response-details">
          Government Housing
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-battery-quarter"></i>
        </div>
        <div className="response-topic">
          Universal
        </div>
        <div className="response-details">
          Basic <br/> Income
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-money-check-alt"></i>
        </div>
        <div className="response-topic">
          Mandatory
        </div>
        <div className="response-details">
          Pension<br/>Services
        </div>
      </div>









    </div>
  </div>;

  const surveyQuestionThree = <div className="survey-content">
    <div className="survey-progress-indicator">
      Question 3/6
    </div>
    <div className="survey-questions">
      How important is work-life balance to you?
    </div>
    <div className="survey-responses">
      <div className="work-hour-box">
        30-35
      </div>
      <div className="work-hour-box">
        35-40
      </div>
      <div className="work-hour-box">
        40-50
      </div>
      <div className="work-hour-box">
        50-60
      </div>
      <div className="work-hour-box">
        60+
      </div>
      <div className="work-hour-box-describer">
        hours per week
      </div>
    </div>
  </div>;

  const surveyQuestionFour = <div className="survey-content">
    <div className="survey-progress-indicator">
      Question 4/6
    </div>
    <div className="survey-questions">
      Select the climate and environment that you must have.
    </div>
    <div className="survey-responses">
      <div className="survey-response-item">
        <div className="response-icon-large">
          <i className="fas fa-sun"></i>
        </div>
        <div className="response-topic text-center-align">
          <br/> Sunshine
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon-large">
          <i className="fas fa-umbrella"></i>
        </div>
        <div className="response-topic text-center-align">
          <br/> No Rain
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon-large">
          <i className="fas fa-umbrella-beach"></i>
        </div>
        <div className="response-topic text-center-align">
          <br/> Nice Beach
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon-large">
          <i className="fas fa-thermometer-empty"></i>
        </div>
        <div className="response-topic text-center-align">
          <br/> Mild Climate
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon-large">
          <i className="fas fa-leaf"></i>
        </div>
        <div className="response-topic text-center-align">
          <br/> Beautiful Nature
        </div>
      </div>

    </div>
  </div>;

  const surveyQuestionFive = <div className="survey-content">
    <div className="survey-progress-indicator">
      Question 5/6
    </div>
    <div className="survey-questions">
      How important is your career and employer to you?
    </div>
    <div className="survey-responses">
      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-money-bill-alt"></i>
        </div>
        <div className="response-topic">
          Work is for
        </div>
        <div className="response-details">
          Paycheck <br/> That's it
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-user-clock"></i>
        </div>
        <div className="response-topic">
          I can work more hours for more money
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i class="fas fa-people-carry"></i>
        </div>
        <div className="response-topic">
          Colleagues<br/> are important to me
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-exchange-alt"></i>
        </div>
        <div className="response-topic">
          Need to<br/> change job when I want
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-gift"></i>
        </div>
        <div className="response-topic">
          Job nature<br/>& Products <br/> are important
        </div>
      </div>

    </div>
    <div className="survey-subscript">
      Please select two important conditions for you
    </div>
  </div>;

  const surveyQuestionSix = <div className="survey-content">
    <div className="survey-progress-indicator">
      Final Question
    </div>
    <div className="survey-questions">
      How important is your career and employer to you?
    </div>
    <div className="survey-responses">
      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-money-bill-alt"></i>
        </div>
        <div className="response-topic">
          Work is for
        </div>
        <div className="response-details">
          Paycheck <br/> That's it
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-user-clock"></i>
        </div>
        <div className="response-topic">
          I can work more hours for more money
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i class="fas fa-people-carry"></i>
        </div>
        <div className="response-topic">
          Colleagues<br/> are important to me
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-exchange-alt"></i>
        </div>
        <div className="response-topic">
          Need to<br/> change job when I want
        </div>
      </div>

      <div className="survey-response-item">
        <div className="response-icon">
          <i className="fas fa-gift"></i>
        </div>
        <div className="response-topic">
          Job nature<br/>& Products <br/> are important
        </div>
      </div>

    </div>
    <div className="survey-subscript">
      Please select two important conditions for you
    </div>
  </div>;

  return <div>

    <div className="take-survey-cover">
      {surveyQuestionOne}
      {surveyQuestionTwo}
      {surveyQuestionThree}
      {surveyQuestionFour}
      {surveyQuestionFive}
      {surveyQuestionSix}
    </div>

    <div className="take-survey-background-cover">

    </div>

    <div className="take-survey-background-cover-color">

    </div>

  </div>


}