import React from "react";

export default function takeSurvey() {

  const surveyQuestionOne = <div className="survey-content">
      <div className="survey-progress-indicator">
        Question 1/7
      </div>
      <div className="survey-questions">
        What would be your ideal life after 50 years old?
      </div>
      <div className="survey-responses">
        <div className="survey-response-item survey-response-hover-color-change">
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

        <div className="survey-response-item survey-response-hover-color-change">
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

        <div className="survey-response-item survey-response-hover-color-change">
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

        <div className="survey-response-item survey-response-hover-color-change">
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

        <div className="survey-response-item survey-response-hover-color-change">
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
      Question 2/7
    </div>
    <div className="survey-questions">
      Select item(s) you believe a government should provide.
    </div>
    <div className="survey-responses">
      <div className="survey-response-item survey-response-hover-color-change">
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

      <div className="survey-response-item survey-response-hover-color-change">
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



      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon">
          <i class="fas fa-hospital-alt"></i>
        </div>
        <div className="response-topic">
        </div>
        <div className="response-details">
          Free <br/> Universal <br/> Healthcare
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
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

      <div className="survey-response-item survey-response-hover-color-change">
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

      <div className="survey-response-item survey-response-hover-color-change">
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

      <div className="survey-response-item survey-response-hover-color-change">
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

      <div className="survey-response-item survey-response-hover-color-change">
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

      <div className="survey-response-item survey-response-hover-color-change">
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

      <div className="survey-response-item survey-response-hover-color-change">
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
      Question 3/7
    </div>
    <div className="survey-questions">
      How important is work-life balance to you?
    </div>
    <div className="survey-responses hover-pointer">
      <div className="work-hour-box survey-response-hover-color-change">
        30-35
      </div>
      <div className="work-hour-box survey-response-hover-color-change">
        35-40
      </div>
      <div className="work-hour-box survey-response-hover-color-change">
        40-50
      </div>
      <div className="work-hour-box survey-response-hover-color-change">
        50-60
      </div>
      <div className="work-hour-box survey-response-hover-color-change">
        60+
      </div>
      <div className="work-hour-box-describer survey-response-hover-color-change">
        hours per week
      </div>
    </div>
  </div>;

  const surveyQuestionFour = <div className="survey-content">
    <div className="survey-progress-indicator">
      Question 4/7
    </div>
    <div className="survey-questions">
      Select the climate and environment that you must have.
    </div>
    <div className="survey-responses">
      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon-large">
          <i className="fas fa-sun"></i>
        </div>
        <div className="response-topic text-center-align">
          <br/> Sunshine
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon-large">
          <i className="fas fa-umbrella"></i>
        </div>
        <div className="response-topic text-center-align">
          <br/> No Rain
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon-large">
          <i className="fas fa-umbrella-beach"></i>
        </div>
        <div className="response-topic text-center-align">
          <br/> Nice Beach
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon-large">
          <i className="fas fa-thermometer-empty"></i>
        </div>
        <div className="response-topic text-center-align">
          <br/> Mild Climate
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
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
      Question 5/7
    </div>
    <div className="survey-questions">
      How important is your career and employer to you?
    </div>
    <div className="survey-responses">
      <div className="survey-response-item survey-response-hover-color-change">
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

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon">
          <i className="fas fa-user-clock"></i>
        </div>
        <div className="response-topic">
          I can work more hours for more money
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon">
          <i class="fas fa-people-carry"></i>
        </div>
        <div className="response-topic">
          Colleagues<br/> are important to me
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon">
          <i className="fas fa-exchange-alt"></i>
        </div>
        <div className="response-topic">
          Need to<br/> change job when I want
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
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
      Question 6/7
    </div>
    <div className="survey-questions">
      How important is your career and employer to you?
    </div>
    <div className="survey-responses">
      <div className="survey-response-item survey-response-hover-color-change">
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

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon">
          <i className="fas fa-user-clock"></i>
        </div>
        <div className="response-topic">
          I can work more hours for more money
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon">
          <i class="fas fa-people-carry"></i>
        </div>
        <div className="response-topic">
          Colleagues<br/> are important to me
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon">
          <i className="fas fa-exchange-alt"></i>
        </div>
        <div className="response-topic">
          Need to<br/> change job when I want
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
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

  const surveyQuestionSeven = <div className="survey-content">
    <div className="survey-progress-indicator">
      Final Question
    </div>
    <div className="survey-questions">
      Any of below apply to you?
    </div>
    <div className="survey-responses">

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon">
          <i className="fas fa-piggy-bank"></i>
        </div>
        <div className="response-topic">
          Financial Services Professional
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon">
          <i className="fas fa-building"></i>
        </div>
        <div className="response-topic">
          Corporate Services Professional
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon">
          <i className="fas fa-medkit"></i>
        </div>
        <div className="response-topic">
          Healthcare Professional Services
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon">
          <i className="fas fa-desktop"></i>
        </div>
        <div className="response-topic">
          Software Engineer / <br/> Data Scientist
        </div>
      </div>

      <div className="survey-response-item survey-response-hover-color-change">
        <div className="response-icon">
          <i className="fas fa-store"></i>
        </div>
        <div className="response-topic">
          SME Entrepreneur / Self-Employed
        </div>
      </div>

    </div>
    <div className="survey-subscript">
      Please select multiple if necessary
    </div>
    <div className="survey-questions insert-gap-between-questions">
      Select top three favorite cities
    </div>
    <div className="survey-responses">

      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMzExLjEyOSwxOTUuOTAyYy0wLjAwMS0wLjAwNC0wLjAwMS0wLjAwNy0wLjAwMS0wLjAxMUMzMTEuMTIsMTk1Ljg0NywzMTEuMTI2LDE5NS44ODUsMzExLjEyOSwxOTUuOTAyeiIgZmlsbD0iI0ZGRkZGRiIvPgoJCQk8cGF0aCBkPSJNNDg5LjUsNDUyLjQ5OWgtNzYuNGwxMi4wMTgtMjguNjMxYzQuNTY4LTEwLjg5NiwwLjIzNy0yMy40NjQtMTAuMDc1LTI5LjIzNWMtMC4wMzgtMC4wMjEtMC4wNzUtMC4wNDItMC4xMTMtMC4wNjIgICAgIGwtNzEuNTc0LTM4LjQ1NGMtMC4wNjgtMC4wNDYtMC4xMTgtMC4xMTEtMC4xMzgtMC4xNzZsLTkuNzcxLTMyLjIzN2M1Ni42MDEtMy4zMTIsMTI1LjIzNS0xMy4xNzYsMTU4LjQ2My00MC4yNzkgICAgIGMxMy4zMy0xMC44NzMsMjAuMDktMjMuNzg0LDIwLjA5LTM4LjM3YzAtMzMuMDEtMzMuODgzLTU2LjMzNi0xMDAuNzA4LTY5LjMyOWMtNC4wNzEtMC43ODgtOC4wMDMsMS44NjUtOC43OTQsNS45MzEgICAgIGMtMC43OTEsNC4wNjYsMS44NjUsOC4wMDMsNS45MzEsOC43OTRDNDQ4LjgzNSwxOTguMzA2LDQ5NywyMTQuMTU3LDQ5NywyNDUuMDU1YzAsOS45OTktNC43NjcsMTguNzQ4LTE0LjU3MiwyNi43NDcgICAgIGMtMjUuNjIsMjAuODk4LTgzLjc0MSwzNC4yNTgtMTYzLjY1NiwzNy42MjJjLTEuMjY1LDAuMDUzLTIuNTI2LDAuMDk3LTMuNzg5LDAuMTQ1bDI4LjExNi02MS4zOSAgICAgYzAuOTA4LTEuOTgyLDAuOTA4LTQuMjYyLDAtNi4yNDVsLTE3LjcxNi0zOC43MDFjMC44NTktMy4xNDcsMS4wNjgtNi40NywwLjU1Ni05LjcyM2MtMC4wMDYtMC4wMzgtMC4wMTItMC4wNzYtMC4wMTktMC4xMTMgICAgIGwtMi4xODgtMTIuNjI2YzE4Ljg3NCwxLjAwOCwzNi43MjksMi41NzQsNTMuMTc5LDQuNjczYzAuMzIyLDAuMDQxLDAuNjQzLDAuMDYyLDAuOTU5LDAuMDYyYzMuNzE5LDAsNi45NDctMi43NjUsNy40My02LjU1MSAgICAgYzAuNTI1LTQuMTA5LTIuMzgxLTcuODY1LTYuNDktOC4zOWMtMTcuODA2LTIuMjczLTM3LjE5OC0zLjkyOS01Ny43MDMtNC45NDZsLTguODQtNTEuMDIyICAgICBjLTIuMDIxLTEyLjYwMi0xMy44OTgtMjEuMjMxLTI2LjUxNC0xOS4yNTNjLTYuMTIyLDAuOTYyLTExLjUwMiw0LjI1LTE1LjE0OSw5LjI1OWMtMC4xNzMsMC4yMzgtMC4zMzcsMC40ODEtMC41MDEsMC43MjUgICAgIGMtMy40ODQsNC4xODktNS40NTksOS43MzItNS4yODksMTUuMDAzbDEuNTE0LDQ0LjEyNmMtMC4wOTEsMC4wMDEtMC4xODMsMC4wMDItMC4yNzQsMC4wMDMgICAgIGMtMi41MDcsMC4wMTYtNS4wMDcsMC4wNDEtNy40OTcsMC4wNzVjLTAuMzk5LDAuMDA1LTAuNzk2LDAuMDExLTEuMTk1LDAuMDE3Yy0yLjIxMywwLjAzMi00LjQxOCwwLjA3Mi02LjYxMiwwLjExOCAgICAgYy0wLjMzMSwwLjAwNy0wLjY2NSwwLjAxLTAuOTk2LDAuMDE4Yy0wLjAyNiwwLTAuMDUxLDAuMDA2LTAuMDc2LDAuMDA2Yy0yNC4yOTQsMC41MzktNDcuMTUyLDEuOTE0LTY1LjA3MywzLjk3ICAgICBjLTAuMzM4LDAuMDM5LTAuNjcyLDAuMDc3LTEuMDA1LDAuMTE2Yy0wLjI5NiwwLjAzNS0wLjU5MywwLjA2OS0wLjg4NiwwLjEwNGMtMC43NjIsMC4wOTEtMS41MTUsMC4xODItMi4yNSwwLjI3NSAgICAgYy0wLjM0MywwLjA0Mi0wLjY5NSwwLjA4OS0xLjA0MSwwLjEzMmMtMC44NiwwLjEwNy0xLjcyMiwwLjIxNS0yLjU5NCwwLjMyOWMtMC40ODksMC4wNjQtMC45ODQsMC4xMzItMS40NzYsMC4xOTggICAgIGMtMC43NzYsMC4xMDQtMS41NTQsMC4yMS0yLjMzNywwLjMyYy0wLjUyNywwLjA3NC0xLjA1NiwwLjE0OS0xLjU4NywwLjIyNmMtMC43NjMsMC4xMS0xLjUyOSwwLjIyMi0yLjI5OSwwLjMzNyAgICAgYy0wLjU0MywwLjA4MS0xLjA4NSwwLjE2Mi0xLjYzMSwwLjI0NWMtMC44MjMsMC4xMjYtMS42NTEsMC4yNTYtMi40ODEsMC4zODhjLTAuNDg2LDAuMDc3LTAuOTY5LDAuMTUxLTEuNDU4LDAuMjMgICAgIGMtMS4yMzQsMC4xOTktMi40NzUsMC40MDUtMy43MjEsMC42MTVjLTAuNTk5LDAuMTAxLTEuMjA0LDAuMjA4LTEuODA3LDAuMzEyYy0wLjcyNiwwLjEyNS0xLjQ1MSwwLjI1MS0yLjE4LDAuMzggICAgIGMtMC42NjMsMC4xMTctMS4zMjksMC4yMzctMS45OTcsMC4zNThjLTAuNjg3LDAuMTI0LTEuMzc1LDAuMjUtMi4wNjQsMC4zNzdjLTAuNjg0LDAuMTI2LTEuMzY4LDAuMjUzLTIuMDU1LDAuMzgzICAgICBjLTAuNjc3LDAuMTI3LTEuMzU1LDAuMjU4LTIuMDM0LDAuMzg5Yy0wLjU3MSwwLjExLTEuMTM3LDAuMjE1LTEuNzEsMC4zMjdjLTAuMDE1LDAuMDAzLTAuMDI5LDAuMDA4LTAuMDQzLDAuMDExICAgICBjLTI2Ljc2MSw1LjIyOC01NS4wMzcsMTIuNjg0LTc4LjI0NSwyMC44MjZDMjIuMTQ2LDIxMS41MjUsMCwyMjcuNzIxLDAsMjQ1LjA1NWMwLDEyLjI0NCwxMy40MDgsMjUuMDMsMzkuODUxLDM4LjAwMSAgICAgYzI0Ljc2NCwxMi4xNDgsNTguNTQsMjIuOTYxLDk1LjEwMiwzMC40NDhjMy4zNzcsMC42OTMsNy4wNDQsMS4zNzQsMTAuOTQ4LDIuMDM5YzAuMDcsMC4wMTQsMC4xMzgsMC4wMzYsMC4yMDksMC4wNDggICAgIGMxNC43NjMsMi41MTYsMzEuOTU0LDQuNjE1LDUxLjA5Niw2LjIzOWMwLjAzOSwwLjAwMywwLjA3NywwLjAwMiwwLjExNiwwLjAwNWM4LjE0MSwwLjY5NSwxNi42NywxLjMwMywyNS41MDksMS44MDYgICAgIGwtMS4zMTUsMi4wODRjLTAuMDMsMC4wNDktMC4wNjEsMC4wOTgtMC4wOSwwLjE0NmMtMi41MTcsNC4yLTMuNjI3LDguOTgzLTMuMjIyLDEzLjg2MWwtMS4wODUsNzkuOTAybC0xMy41NTksMS42MjggICAgIGMtMTIuNzAzLDEuNTM1LTIxLjc5LDEzLjExMi0yMC4yNTYsMjUuODA2YzAuMjMsMS45MDMsMC43MDcsMy43MTMsMS4zNTgsNS40MzFIMjIuNUMxMC4wOTMsNDUyLjQ5OSwwLDQ2Mi41OTMsMCw0NzUgICAgIGMwLDEyLjQwNywxMC4wOTMsMjIuNSwyMi41LDIyLjVoNDY3YzEyLjQwNywwLDIyLjUtMTAuMDk0LDIyLjUtMjIuNVM1MDEuOTA3LDQ1Mi40OTksNDg5LjUsNDUyLjQ5OXogTTMxOC4wMDEsMzI0LjQ2MSAgICAgbDEwLjg2NywzNS44NDljMS4xNTksMy43OTIsMy43LDYuOTUsNy4xNTUsOC44OTVjMC4wNDIsMC4wMjMsMC4wODUsMC4wNDcsMC4xMjgsMC4wNjlsNzEuNjE0LDM4LjQ3NiAgICAgYzMuNjE1LDIuMDU0LDUuMTI3LDYuNDgsMy41MiwxMC4zMTZsLTEyLjMzOSwyOS4zOThjLTEuMTQsMi43MTMtMy41NjMsNC41NjgtNi40NzIsNC45NjJjLTAuMzY4LDAuMDUtMC43MzQsMC4wNzMtMS4wOTgsMC4wNzMgICAgIGgtMC4wNDFjLTEuMTA3LTAuMDA1LTIuMTk0LTAuMjM4LTMuMjM5LTAuNjkxYy00LjA3NS0xLjc4My01LjkxNC02Ljc2NS00LjEtMTEuMDk5bDYuNzQtMTYuMDcgICAgIGMxLjQ5Ni0zLjU2NSwwLjAzNS03LjY4NC0zLjM3My05LjUxMWwtNjcuNjM2LTM2LjI1N2MtMS44MzYtMS4wMzktMy4xNzktMi43MTktMy43OTEtNC43NWwtMTQuODk2LTQ5LjEzICAgICBjMC42NzctMC4wMTUsMS4zNTgtMC4wMzYsMi4wMzctMC4wNTJjMC4wNzgtMC4wMDIsMC4xNTgtMC4wMDIsMC4yMzctMC4wMDRjMC4wMDgsMCwwLjAxNi0wLjAwMiwwLjAyNS0wLjAwMiAgICAgQzMwOC4yMDYsMzI0LjgxMiwzMTMuMDkzLDMyNC42NiwzMTguMDAxLDMyNC40NjF6IE0zMTYuMjYzLDIxOS4zNDVsMTEuNzY5LDI1LjcwOWwtMjkuNzY1LDY0Ljk4OSAgICAgYy0xMi4wNzYsMC4yMzYtMjQuNDEsMC4yNC0zNi44MjksMC4wMTdsMTEuODQ5LTI3LjczMmMxLTAuNjQ5LDEuOTY4LTEuMzYxLDIuODc1LTIuMTc4YzAuMDAxLTAuMDAxLDAuMDAyLTAuMDAyLDAuMDAzLTAuMDAzICAgICBjMS4xNTctMS4wNDMsMi4yMTUtMi4yMTEsMy4xNDUtMy40N2MwLjA5NC0wLjEyOCwwLjE4NS0wLjI1OSwwLjI3MS0wLjM5M0wzMTYuMjYzLDIxOS4zNDV6IE0yODIuNzMsMTEzLjQzMSAgICAgYzEuMjg5LTEuNzY4LDMuMTg4LTIuOTI5LDUuMzUxLTMuMjY5YzQuNDcxLTAuNjk3LDguNjc1LDIuMzYyLDkuMzc4LDYuODMxYzAuMDA2LDAuMDM4LDAuMDEyLDAuMDc2LDAuMDE5LDAuMTEzbDEzLjY1LDc4Ljc4NSAgICAgYzAuMDA0LDAuMDI1LDAuMDAzLDAuMDIsMC4wMDEsMC4wMTFjMC4zMiwyLjEzNC0wLjIyOCw0LjM0OS0xLjUxLDYuMDg1Yy0wLjA5NCwwLjEyOC0wLjE4NSwwLjI1OS0wLjI3MSwwLjM5M2wtNDIuMjI5LDY1LjU0OSAgICAgYy0wLjMwMiwwLjM4OS0wLjYzNywwLjc1MS0xLDEuMDc3Yy0yLjg3MywyLjU4My03LjIyMiwyLjc4OC0xMC4zNDMsMC40ODFjLTMuNjM5LTIuNjg4LTQuNDE1LTcuODMyLTEuNzMtMTEuNDY5ICAgICBjMC4xMDMtMC4xNCwwLjIwMS0wLjI4MiwwLjI5NC0wLjQyOWwzOC40OC02MC41MDJjMS4wMDMtMS41NzgsMS4zODEtMy40NzQsMS4wNi01LjMxNmwtMTIuNjI3LTcyLjI5MyAgICAgQzI4MC45MjgsMTE3LjMzMSwyODEuNDUyLDExNS4xODYsMjgyLjczLDExMy40MzF6IE0yNzYuNTAzLDE3OS40NTZsMi4xMDIsMTIuMDM0bC03LjM0OCwxMS41NTNMMjYxLjIsMTc5LjUgICAgIEMyNjYuMzAzLDE3OS40NDIsMjcxLjQwOSwxNzkuNDM3LDI3Ni41MDMsMTc5LjQ1NnogTTE5My4yMjQsMzA2LjQyYy00LjY0NC0wLjQyNS05LjE5My0wLjg4NC0xMy42MjMtMS4zNzIgICAgIGMtMC4yNy0wLjAzLTAuNTM4LTAuMDYtMC44MDctMC4wOWMtMS4xNzgtMC4xMzEtMi4zNDgtMC4yNjQtMy41MDctMC4zOTljLTAuNzMtMC4wODUtMS40NDktMC4xNzItMi4xNjktMC4yNTkgICAgIGMtMC43MjQtMC4wODctMS40NTEtMC4xNzMtMi4xNjctMC4yNjJjLTQuNTA5LTAuNTU5LTguODE0LTEuMTQ0LTEyLjkwMy0xLjc0OWw2Ljg5OS0xNi4xNTJjMS42MjctMy44MS0wLjE0Mi04LjIxNy0zLjk1MS05Ljg0NCAgICAgYy0zLjgwOS0xLjYyNS04LjIxNywwLjE0My05Ljg0MywzLjk1MWwtOC4zMzQsMTkuNTExYy0xLjY3LTAuMzEzLTMuMzA0LTAuNjI4LTQuODU2LTAuOTQ3ICAgICBjLTM1LjM1NC03LjIzOC02Ny44NTItMTcuNjE2LTkxLjUwNi0yOS4yMTlDMjAuNjUxLDI1Ni45MywxNSwyNDcuNTg3LDE1LDI0NS4wNTVjMC02Ljk3OCwxNS4xMDQtMjAuNDI1LDU3LjY3LTM1LjM2ICAgICBjMjAuODg5LTcuMzI5LDQ1Ljk5Ny0xNC4wODMsNzAuMjU3LTE5LjA3OWwyMy4yNTYsNTQuNDRsLTIuNDYzLDUuNzY3Yy0xLjYyNywzLjgxLDAuMTQyLDguMjE3LDMuOTUxLDkuODQ0ICAgICBjMy44MSwxLjYyNSw4LjIxNi0wLjE0Myw5Ljg0My0zLjk1MWwzLjcyMi04LjcxM2MwLjgwNC0xLjg4MiwwLjgwNC00LjAxMSwwLTUuODkzbC0yMy4yMzUtNTQuMzg5ICAgICBjMi4wNjEtMC4zNjYsNC4wOTctMC43MTUsNi4xMTEtMS4wNDhjMC4xMy0wLjAyMSwwLjI2MS0wLjA0MywwLjM5MS0wLjA2NGMxLjkyOS0wLjMxNywzLjgzNC0wLjYxOCw1LjcxNy0wLjkwNCAgICAgYzAuMjAxLTAuMDMsMC40LTAuMDYsMC42LTAuMDljMS44NTQtMC4yNzksMy42ODctMC41NDQsNS40OTMtMC43OTJjMC4xNy0wLjAyMywwLjMzNy0wLjA0NSwwLjUwNy0wLjA2OCAgICAgYzEuODI1LTAuMjQ4LDMuNjI4LTAuNDgyLDUuNDAxLTAuNjk4YzAuMDI5LTAuMDA0LDAuMDU5LTAuMDA4LDAuMDg4LTAuMDExYzAuMTEtMC4wMTQsMC4yMjgtMC4wMjgsMC4zMzktMC4wNDIgICAgIGMwLjU5Ni0wLjA3NCwxLjIwMS0wLjE0OCwxLjgxNC0wLjIyMWMwLjM5MS0wLjA0NywwLjc5My0wLjA5MywxLjE5Ni0wLjE0YzAuMjg0LTAuMDMzLDAuNTcxLTAuMDY2LDAuODU4LTAuMDk5ICAgICBjMS45ODQtMC4yMjQsNC4wOTctMC40NDcsNi4zNC0wLjY2NmwyOC40NzMsNjIuMTc4TDE5My4yMjQsMzA2LjQyeiBNMjA5LjEyLDMwNy43MzdsMjcuMjc4LTU5LjU1OCAgICAgYzAuOTA4LTEuOTgyLDAuOTA4LTQuMjYzLDAtNi4yNDZsLTI3LjY0OC02MC4zNzZjMTAuNTgxLTAuNzQ2LDIyLjgxLTEuMzY4LDM2LjI3My0xLjc0MmwxNi40NzYsMzguNTdsLTE5LjY4OCwzMC45NTYgICAgIGMtNy4zOTUsMTAuMjc2LTUuMTU4LDI0LjY2OSw1LjA1NSwzMi4yMTJjMi42NjcsMS45NzEsNS42NTQsMy4yOCw4Ljc0NiwzLjk2MmwtMTAuMzE4LDI0LjE1MSAgICAgYy0yLjgxMS0wLjA5Ni01LjU5MS0wLjIwNy04LjM1My0wLjMyNmMtMC40MDUtMC4wNS0wLjgxMi0wLjA3MS0xLjIxNy0wLjA1NEMyMjYuNTM4LDMwOC44OCwyMTcuNjQsMzA4LjM1OSwyMDkuMTIsMzA3LjczN3ogICAgICBNMjA1LjM1NCw0MzYuMTU2bDIwLjA3LTIuNDFjMy43MzEtMC40NDgsNi41NTQtMy41ODcsNi42MDUtNy4zNDVsMS4xOC04Ni44NjFjMC4wMDQtMC4yOTEtMC4wMDktMC41ODItMC4wMzktMC44NzIgICAgIGMtMC4xODMtMS43NjgsMC4xOTMtMy41MDIsMS4wODUtNS4wMjJsNS43ODktOS4xNzZjNi4xOTUsMC4yNDMsMTIuNTEsMC40MzIsMTguOTIzLDAuNTYzbC03LjgyNiwxMi4zNjQgICAgIGMtMC43NTgsMS4xOTctMS4xNjEsMi41ODUtMS4xNjMsNC4wMDFsLTAuMDUzLDQyLjU5MWMtMC4wMDUsNC4xNDMsMy4zNDksNy41MDUsNy40OTEsNy41MWMwLjAwMywwLDAuMDA2LDAsMC4wMDksMCAgICAgYzQuMTM4LDAsNy40OTUtMy4zNTIsNy41LTcuNDlsMC4wNS00MC40MjJsMTEuNjE0LTE4LjM1MmMwLjg5NSwwLjAwMiwxLjc4NywwLjAwOCwyLjY4NSwwLjAwOGMyLjA0MSwwLDQuMTAyLTAuMDE4LDYuMTU3LTAuMDMxICAgICBsMTYuMTQ0LDUzLjI0N2MxLjc0LDUuNzg1LDUuNjA3LDEwLjU5NCwxMC44ODksMTMuNTRjMC4wMzcsMC4wMjEsMC4wNzQsMC4wNDEsMC4xMSwwLjA2MWw2MS42ODksMzMuMDY5bC00LjEwNCw5Ljc4NSAgICAgYy0yLjQzNyw1LjgyNC0yLjM3OSwxMi4xMDQtMC4zMjMsMTcuNTg2SDI2MS4zM2MyLjcxMS00LjI0MiwzLjk3My05LjI2MSwzLjUzLTE0LjQyN2wwLjAyNy0yMi4wNjQgICAgIGMwLjAwNS00LjE0My0zLjM0OS03LjUwNS03LjQ5MS03LjUxYy0wLjAwMywwLTAuMDA2LDAtMC4wMDksMGMtNC4xMzgsMC03LjQ5NSwzLjM1Mi03LjUsNy40OWwtMC4wMjgsMjIuNDIgICAgIGMwLDAuMjYyLDAuMDEzLDAuNTIzLDAuMDQsMC43ODRjMC4yNywyLjU5OC0wLjY3Miw1LjEwNi0yLjU2OCw2Ljg2NWMtMS4yNzksMS4xODItMi44NjksMS45MTYtNC41OTgsMi4xMjRsLTM1LjQwNSw0LjI1OSAgICAgYy0wLjI3NiwwLjAzMy0wLjU1MSwwLjA1Mi0wLjgyNCwwLjA1OGgtMC4wMzljLTQuMTM5LDAuMDY0LTcuNzYxLTMuMDI1LTguMjY5LTcuMjI5ICAgICBDMTk3LjY1NCw0NDAuNzg3LDIwMC44NjgsNDM2LjY5OCwyMDUuMzU0LDQzNi4xNTZ6IE00ODkuNSw0ODIuNWgtNDY3Yy00LjEzNiwwLTcuNS0zLjM2NC03LjUtNy41czMuMzY0LTcuNSw3LjUtNy41aDQ2NyAgICAgYzQuMTM2LDAsNy41LDMuMzY0LDcuNSw3LjVDNDk3LDQ3OS4xMzUsNDkzLjYzNiw0ODIuNSw0ODkuNSw0ODIuNXoiIGZpbGw9IiNGRkZGRkYiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjg0Ljk4LDE4LjE1NGMtMTguNjU5LTguOTA1LTQxLjA4Mi0wLjk2OC00OS45ODUsMTcuNjkzYy00LjMxMyw5LjAzOC00Ljg0NywxOS4yMTYtMS41MDUsMjguNjU3ICAgIGMzLjM0MSw5LjQ0LDEwLjE1OSwxNy4wMTUsMTkuMTk3LDIxLjMyN2M1LjEyMiwyLjQ0NCwxMC42MDgsMy42NzUsMTYuMTIsMy42NzVjNC4yMTUsMCw4LjQ0Ni0wLjcyMSwxMi41MzctMi4xNjggICAgYzkuNDQxLTMuMzQyLDE3LjAxNS0xMC4xNiwyMS4zMjgtMTkuMkMzMTEuNTc0LDQ5LjQ3OSwzMDMuNjM4LDI3LjA1NiwyODQuOTgsMTguMTU0eiBNMjg5LjEzNCw2MS42NzggICAgYy0yLjU4Nyw1LjQyMi03LjEzMSw5LjUxMy0xMi43OTUsMTEuNTE4Yy01LjY2NCwyLjAwNi0xMS43NjksMS42ODQtMTcuMTkyLTAuOTAzYy01LjQyMi0yLjU4OC05LjUxMi03LjEzMi0xMS41MTctMTIuNzk1ICAgIGMtMi4wMDUtNS42NjQtMS42ODUtMTEuNzcsMC45MDMtMTcuMTkzYzMuODU0LTguMDc3LDExLjkzMS0xMi44MDUsMjAuMzM2LTEyLjgwNWMzLjI0MiwwLDYuNTM1LDAuNzA0LDkuNjUxLDIuMTkgICAgQzI4OS43MTQsMzcuMDMyLDI5NC40NzUsNTAuNDg0LDI4OS4xMzQsNjEuNjc4eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
        </div>
        <div className="response-topic-small">
          Adelaide
        </div>
      </div>
      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIxNS4wNCAyMTUuMDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIxNS4wNCAyMTUuMDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xMjcuNjg5LDg4LjY0NGMtMC4wNTYtMS44NDMtMS41NjctMy4zMDktMy40MTItMy4zMDlIOTAuNzY0Yy0xLjg0NSwwLTMuMzU1LDEuNDY0LTMuNDEyLDMuMzA5bC0zLjcyNCwxMjIuODggICAgYy0wLjAyOSwwLjkyMiwwLjMxOSwxLjgxOCwwLjk2MSwyLjQ4YzAuNjQzLDAuNjYyLDEuNTI3LDEuMDM2LDIuNDUxLDEuMDM2SDEyOGMwLjkyMywwLDEuODA3LTAuMzc0LDIuNDUyLTEuMDM2ICAgIGMwLjY0Mi0wLjY2MiwwLjk5LTEuNTU2LDAuOTYxLTIuNDhMMTI3LjY4OSw4OC42NDR6IE05MC41NTksMjA4LjIxM0w5NC4wNzUsOTIuMTZoMjYuODlsMy41MTcsMTE2LjA1M0g5MC41NTl6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTE0LjM0NywxOTQuNTZoLTEzLjY1M2MtMS44ODQsMC0zLjQxMywxLjUyOS0zLjQxMywzLjQxM3YxMy42NTNjMCwxLjg4NCwxLjUyOSwzLjQxMywzLjQxMywzLjQxM2gxMy42NTMgICAgYzEuODg0LDAsMy40MTMtMS41MjksMy40MTMtMy40MTN2LTEzLjY1M0MxMTcuNzYsMTk2LjA4OSwxMTYuMjMxLDE5NC41NiwxMTQuMzQ3LDE5NC41NnogTTExMC45MzMsMjA4LjIxM2gtNi44Mjd2LTYuODI3aDYuODI3ICAgIFYyMDguMjEzeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE0OC40OCw2MS40NEg4MC41MzJjLTExLjQ2OSwwLTIwLjc5OSw5LjMzLTIwLjc5OSwyMC43OTl2Ni41MDhjMCwxLjg4NCwxLjUyOSwzLjQxMywzLjQxMywzLjQxM2g2Ny45NDggICAgYzExLjQ2OSwwLDIwLjc5OS05LjMzLDIwLjc5OS0yMC43OTl2LTYuNTA4QzE1MS44OTMsNjIuOTY5LDE1MC4zNjQsNjEuNDQsMTQ4LjQ4LDYxLjQ0eiBNMTQ1LjA2Nyw3MS4zNjEgICAgYzAsNy43MDQtNi4yNjksMTMuOTcyLTEzLjk3MiwxMy45NzJINjYuNTZ2LTMuMDk0YzAtNy43MDQsNi4yNjktMTMuOTcyLDEzLjk3Mi0xMy45NzJoNjQuNTM0VjcxLjM2MXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xMjQuNTUzLDY0LjM3MmwtMy40MTMtMjMuODkzYy0wLjI0MS0xLjY4MS0xLjY4MS0yLjkzLTMuMzc5LTIuOTNIOTcuMjhjLTEuNjk4LDAtMy4xMzksMS4yNDktMy4zNzksMi45M2wtMy40MTMsMjMuODkzICAgIGMtMC4xNCwwLjk3OCwwLjE1MiwxLjk3MSwwLjgsMi43MTljMC42NDksMC43NDcsMS41ODksMS4xNzYsMi41NzksMS4xNzZoMjcuMzA3YzAuOTksMCwxLjkzLTAuNDI4LDIuNTc5LTEuMTc2ICAgIEMxMjQuNDAxLDY2LjM0MywxMjQuNjkzLDY1LjM1MiwxMjQuNTUzLDY0LjM3MnogTTk3LjgwMiw2MS40NGwyLjQzOS0xNy4wNjdoMTQuNTZsMi40MzcsMTcuMDY3SDk3LjgwMnoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xMDcuNTIsMTcuMDY3Yy03LjUyOCwwLTEzLjY1Myw2LjEyNS0xMy42NTMsMTMuNjUzdjEwLjI0YzAsMS44ODQsMS41MjksMy40MTMsMy40MTMsMy40MTNoMjAuNDggICAgYzEuODg0LDAsMy40MTMtMS41MjksMy40MTMtMy40MTNWMzAuNzJDMTIxLjE3MywyMy4xOTIsMTE1LjA0OCwxNy4wNjcsMTA3LjUyLDE3LjA2N3ogTTExNC4zNDcsMzcuNTQ3aC0xMy42NTNWMzAuNzIgICAgYzAtMy43NjUsMy4wNjItNi44MjcsNi44MjctNi44MjdzNi44MjcsMy4wNjIsNi44MjcsNi44MjdWMzcuNTQ3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTEwNy41MiwwYy0xLjg4NCwwLTMuNDEzLDEuNTI5LTMuNDEzLDMuNDEzVjIwLjQ4YzAsMS44ODQsMS41MjksMy40MTMsMy40MTMsMy40MTNzMy40MTMtMS41MjksMy40MTMtMy40MTNWMy40MTMgICAgQzExMC45MzMsMS41MjksMTA5LjQwNCwwLDEwNy41MiwweiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE3NS43ODcsMjA4LjIxM0gzOS4yNTNjLTEuODg0LDAtMy40MTMsMS41MjktMy40MTMsMy40MTNzMS41MjksMy40MTMsMy40MTMsMy40MTNoMTM2LjUzMyAgICBjMS44ODQsMCwzLjQxMy0xLjUyOSwzLjQxMy0zLjQxM1MxNzcuNjcxLDIwOC4yMTMsMTc1Ljc4NywyMDguMjEzeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE0NS4wNjcsNzEuNjhINjYuNTZjLTEuODg0LDAtMy40MTMsMS41MjktMy40MTMsMy40MTNjMCwxLjg4NCwxLjUyOSwzLjQxMywzLjQxMywzLjQxM2g3OC41MDcgICAgYzEuODg0LDAsMy40MTMtMS41MjksMy40MTMtMy40MTNDMTQ4LjQ4LDczLjIwOSwxNDYuOTUxLDcxLjY4LDE0NS4wNjcsNzEuNjh6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
        <div className="response-topic-small">
          Auckland
        </div>
      </div>
      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyODkuMTA5IDI4OS4xMDkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4OS4xMDkgMjg5LjEwOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyNTZweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxyZWN0IHg9IjY2LjA5MyIgeT0iMjY2LjAzMSIgd2lkdGg9IjkuMjMxIiBoZWlnaHQ9IjkuMjMxIiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxyZWN0IHg9IjQ3LjYzMiIgeT0iMjY2LjAzMSIgd2lkdGg9IjkuMjMxIiBoZWlnaHQ9IjkuMjMxIiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxyZWN0IHg9IjI5LjE3IiB5PSIyNjYuMDMxIiB3aWR0aD0iOS4yMzEiIGhlaWdodD0iOS4yMzEiIGZpbGw9IiNGRkZGRkYiLz4KCQkJPHJlY3QgeD0iMTAuNzA5IiB5PSIyNjYuMDMxIiB3aWR0aD0iOS4yMzEiIGhlaWdodD0iOS4yMzEiIGZpbGw9IiNGRkZGRkYiLz4KCQkJPHBhdGggZD0iTTE0NC41NTUsMTA0LjQ5MmM3LjYzNCwwLDEzLjg0Ni02LjIxMiwxMy44NDYtMTMuODQ2YzAtNy42MzQtNi4yMTItMTMuODQ2LTEzLjg0Ni0xMy44NDYgICAgIGMtNy42MzQsMC0xMy44NDYsNi4yMTItMTMuODQ2LDEzLjg0NkMxMzAuNzA5LDk4LjI4LDEzNi45MjEsMTA0LjQ5MiwxNDQuNTU1LDEwNC40OTJ6IE0xNDQuNTU1LDg2LjAzMSAgICAgYzIuNTQzLDAsNC42MTUsMi4wNzIsNC42MTUsNC42MTVjMCwyLjU0My0yLjA3Miw0LjYxNS00LjYxNSw0LjYxNWMtMi41NDMsMC00LjYxNS0yLjA3Mi00LjYxNS00LjYxNSAgICAgQzEzOS45MzksODguMTAzLDE0Mi4wMTIsODYuMDMxLDE0NC41NTUsODYuMDMxeiIgZmlsbD0iI0ZGRkZGRiIvPgoJCQk8cGF0aCBkPSJNMjA0LjU1NSwxNzguMzM5TDIwNC41NTUsMTc4LjMzOXYtOS4yMzJoNC42MTV2LTQuNjE1bDEuNTUxLTQuMzQ4bC0zOC40NzQtMTMuNzR2LTIzLjQ1MWgtNC42MTV2LTYwaC05LjIzMVY0OS4xMDggICAgIGwtOS4yMzEtMzIuNzM3VjIuOTU0aC0zLjc4NUwxNDQuNTU1LDBsLTAuODQ1LDIuOTU0aC0zLjc3MXYxMy4ybC05LjA1MSwzMS42ODVsLTAuMTExLDE1LjExNWgtOS4zdjYwaC00LjYxNXYyMy40NTEgICAgIGwtMzguNDc0LDEzLjc0bDEuNTUxLDQuMzQ4djQuNjE1aDQuNjE1djkuMjMxSDEuNDc4djkuMjMxaDgzLjA3N3Y0LjYxNUgxOS45Mzl2OS4yMzFoNjQuNjE1djQuNjE1SDEuNDc4djkuMjMxaDkuMjMxdjM2LjkyMyAgICAgSDEuNDc4djkuMjMxaDgzLjA3N3YxOC40NjJIMS40Nzh2OS4yMzFoMTAxLjUzOGgzNi45MjNoOS4yMzFoMzYuOTIzaDEwMS41Mzh2LTkuMjMxaC04My4wNzd2LTE4LjQ2Mmg4My4wNzd2LTkuMjMxaC05LjIzICAgICB2LTM2LjkyM2g5LjIzMXYtOS4yMzFoLTgzLjA3N3YtNC42MTVoNjQuNjE1di05LjIzMWgtNjQuNjE1di00LjYxNWg4My4wNzd2LTkuMjMxSDIwNC41NTV6IE0yOS4xNywyNTIuMTg1aC05LjIzMXYtMzYuOTIzaDkuMjMxICAgICBWMjUyLjE4NXogTTQ3LjYzMiwyNTIuMTg1aC05LjIzMXYtMzYuOTIzaDkuMjMxVjI1Mi4xODV6IE02Ni4wOTQsMjUyLjE4NWgtOS4yMzF2LTM2LjkyM2g5LjIzMVYyNTIuMTg1eiBNODQuNTU1LDI1Mi4xODVoLTkuMjMxICAgICB2LTM2LjkyM2g5LjIzMVYyNTIuMTg1eiBNMTQ0LjU1NSwzMy42bDMuMTExLDEwLjg5MmgtNi4yMjZMMTQ0LjU1NSwzMy42eiBNMTM5LjkzOSw1My43MjNoOS4yMzF2OS4yMzFoLTkuMjMxVjUzLjcyM3ogICAgICBNMTMwLjcwOSw5MC42NDZWNzIuMTg1aDI3LjY5MnYxOC40NjF2MC4wMDF2MzIuMzA4aC0yNy42OTJWOTAuNjQ2eiBNMTI2LjA5MiwxMzIuMTg1TDEyNi4wOTIsMTMyLjE4NWgzNi45MjR2MTAuOTI1ICAgICBsLTE4LjQ2Mi02LjU5NWwtMTguNDYyLDYuNTk1VjEzMi4xODV6IE0xNDQuNTU1LDE0Ni4zMTdsMzcuOTY2LDEzLjU2aC03NS45MzJMMTQ0LjU1NSwxNDYuMzE3eiBNOTMuNzg2LDE5Ni44aDkuMjMxdjkuMjMxICAgICBoLTkuMjMxVjE5Ni44eiBNOTMuNzg2LDIxNS4yNjJoOS4yMzF2MzYuOTIzaC05LjIzMVYyMTUuMjYyeiBNMTMwLjcwOSwyNzkuODc3aC0xOC40NjJ2LTQuNjE1aDE4LjQ2MlYyNzkuODc3eiBNMTc2Ljg2MywyNzkuODc3ICAgICBoLTE4LjQ2MnYtNC42MTVoMTguNDYyVjI3OS44Nzd6IE0xOTUuMzIzLDI3OS44NzdoLTkuMjN2LTEzLjg0NkgxNDkuMTd2MTMuODQ2aC05LjIzMXYtMTMuODQ2aC0zNi45MjN2MTMuODQ2aC05LjIzMXYtMTguNDYyICAgICBoMTAxLjUzOFYyNzkuODc3eiBNMTEyLjI0NiwyMDYuMDMxVjE5Ni44aDkuMjMxdjkuMjMxSDExMi4yNDZ6IE0xMjEuNDc4LDIxNS4yNjJ2MzYuOTIzaC05LjIzMXYtMzYuOTIzSDEyMS40Nzh6ICAgICAgTTEzOS45MzksMjA2LjAzMWgtOS4yMzFWMTk2LjhoOS4yMzFWMjA2LjAzMXogTTEzOS45NCwyMTUuMjYydjM2LjkyM2gtOS4yMzF2LTM2LjkyM0gxMzkuOTR6IE0xNTguNDAxLDIxNS4yNjJ2MzYuOTIzaC05LjIzMSAgICAgdi0zNi45MjNIMTU4LjQwMXogTTE0OS4xNywyMDYuMDMxVjE5Ni44aDkuMjMxdjkuMjMxSDE0OS4xN3ogTTE3Ni44NjMsMjE1LjI2MnYzNi45MjNoLTkuMjMxdi0zNi45MjNIMTc2Ljg2M3ogTTE2Ny42MzIsMjA2LjAzMSAgICAgVjE5Ni44aDkuMjMxdjkuMjMxSDE2Ny42MzJ6IE0xOTUuMzI0LDI1Mi4xODVoLTkuMjMxdi0zNi45MjNoOS4yMzFWMjUyLjE4NXogTTE5NS4zMjQsMjA2LjAzMWgtOS4yMzFWMTk2LjhoOS4yMzFWMjA2LjAzMXogICAgICBNMTk1LjMyNCwxODcuNTdIOTMuNzg2di0xOC40NjJoMTAxLjUzOFYxODcuNTd6IE0yNTkuOTM5LDIxNS4yNjJoOS4yMzF2MzYuOTIzaC05LjIzMVYyMTUuMjYyeiBNMjQxLjQ3OCwyMTUuMjYyaDkuMjMxdjM2LjkyMyAgICAgaC05LjIzMVYyMTUuMjYyeiBNMjIzLjAxNiwyMTUuMjYyaDkuMjMxdjM2LjkyM2gtOS4yMzFWMjE1LjI2MnogTTIxMy43ODYsMjE1LjI2MnYzNi45MjNoLTkuMjMxdi0zNi45MjNIMjEzLjc4NnoiIGZpbGw9IiNGRkZGRkYiLz4KCQkJPHJlY3QgeD0iMjc4LjQwMSIgeT0iMTkyLjE4NSIgd2lkdGg9IjkuMjMxIiBoZWlnaHQ9IjkuMjMxIiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxyZWN0IHg9IjIxMy43ODYiIHk9IjI2Ni4wMzEiIHdpZHRoPSI5LjIzMSIgaGVpZ2h0PSI5LjIzMSIgZmlsbD0iI0ZGRkZGRiIvPgoJCQk8cmVjdCB4PSIyMzIuMjQ3IiB5PSIyNjYuMDMxIiB3aWR0aD0iOS4yMzEiIGhlaWdodD0iOS4yMzEiIGZpbGw9IiNGRkZGRkYiLz4KCQkJPHJlY3QgeD0iMjUwLjcwOSIgeT0iMjY2LjAzMSIgd2lkdGg9IjkuMjMxIiBoZWlnaHQ9IjkuMjMxIiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxyZWN0IHg9IjI2OS4xNyIgeT0iMjY2LjAzMSIgd2lkdGg9IjkuMjMxIiBoZWlnaHQ9IjkuMjMxIiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxyZWN0IHg9IjEuNDc4IiB5PSIxOTIuMTg1IiB3aWR0aD0iOS4yMzEiIGhlaWdodD0iOS4yMzEiIGZpbGw9IiNGRkZGRkYiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
        <div className="response-topic-small">
          Brisbane
        </div>
      </div>
      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDMxIDUxMi4wMzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMzEgNTEyLjAzMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyNTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ2MC40NTQsMTk1Ljg3NGMwLDAsNTguMDQ3LTkzLjg1OS0yOC4xODgtMTIxLjQzOGMtNS42ODgtMS44MTMtMTEuMzU5LTIuNjU2LTE3LTIuNjU2ICAgIGMtMTguMTcyLDAtMzUuOTg0LDguODEzLTUyLjY1NiwyMi40MzhjNi4zMTMtMjcuNDg0LDQuMzc1LTUzLjA3OC0xMy4xNTYtNzEuMTg4Yy0xNi4yMTktMTYuNzgxLTMyLjE1Ny0yMy4wMTUtNDYuODYtMjMuMDE1ICAgIGMtNDIuMzEzLDAtNzQuNDg0LDUxLjU3OC03NC40ODQsNTEuNTc4cy0zMC45MDYtMTkuMDk0LTYyLjQ1My0xOS4xMDljLTIzLjQzOCwwLTQ3LjIzNCwxMC41NDctNTguOTY5LDQ3LjMxMyAgICBjLTcuNjg4LDI0LDEuOTIyLDQ3Ljc5NywxOS43NjYsNjkuNjQxYy05LjE1Ni0yLjA5NC0xOC4wOTQtMy4yODEtMjYuNjI1LTMuMjgxYy0xNy4wNzgsMC0zMi40ODQsNC43NS00NC41NjMsMTYuNDM4ICAgIGMtNjUuMDc4LDYyLjk1MywyOC41NjMsMTIxLjM0NCwyOC41NjMsMTIxLjM0NHMtNTguMDMxLDkzLjg3NSwyOC4yMDMsMTIxLjQzOGM1LjY4OCwxLjgxMywxMS4zNTksMi42NzIsMTYuOTg0LDIuNjcyICAgIGM4LjYyNSwwLDE3LjE1Ni0yLDI1LjUxNi01LjUzMWMtNy4yNSw3LTE0LjczNCwxMy43MDMtMjIuNDY5LDIwLjA3OEM5NS41LDQ1Mi43MzQsNTMuNTE2LDQ3NS44MjgsNy4yOTcsNDkxLjIzNCAgICBDMy4wNjMsNDkyLjY1NiwwLDQ5Ni42NCwwLDUwMS4zNTljMCw1Ljg5MSw0Ljc4MSwxMC42NTYsMTAuNjU2LDEwLjY1NmMxLjE4OCwwLDIuMzEzLTAuMTg4LDMuMzc1LTAuNTQ3ICAgIGM0OC45MDYtMTYuMjk3LDkzLjMyOC00MC43ODEsMTMyLjAzMS03Mi43NjZjMTEuMjgxLTkuMzQ0LDIyLjA5NC0xOS4zMjgsMzIuMzkxLTI5LjkwNmMtMC42NzIsMTguNDM4LDMuOTA2LDM1LjEwOSwxNi4zNzUsNDggICAgYzE2LjIzNCwxNi43ODEsMzIuMTU2LDIzLDQ2Ljg1OSwyM2M0Mi4zMjgsMCw3NC40ODQtNTEuNTc4LDc0LjQ4NC01MS41NzhzMzAuOTA2LDE5LjEwOSw2Mi40NTMsMTkuMTA5ICAgIGMyMy40MzgsMCw0Ny4yMzQtMTAuNTQ3LDU4Ljk4NC00Ny4yOTdjNy42NzItMjQuMDE2LTEuOTIyLTQ3LjgxMy0xOS43NjYtNjkuNjU2YzkuMTQxLDIuMTA5LDE4LjA5NCwzLjI5NywyNi42MDksMy4yOTcgICAgYzE3LjA3OCwwLDMyLjQ4NC00Ljc2Niw0NC41NzgtMTYuNDUzQzU1NC4wOTQsMjU0LjI4MSw0NjAuNDU0LDE5NS44NzQsNDYwLjQ1NCwxOTUuODc0eiBNMTI3LDg2LjI4MSAgICBjMy45NjktMTIuNDM4LDkuNzAzLTIxLjMyOCwxNy0yNi40MzhjNS43OTctNC4wNDcsMTIuODc1LTYuMDE2LDIxLjY1Ni02LjAxNmMyNC41NjMsMCw1MC4zNDQsMTUuMzc1LDUxLjI2NiwxNS45MzhsMTcuOTg1LDExLjI1ICAgIEwyNDYuMjIsNjIuODljMC4wNjMtMC4xMDksNi45NjktMTAuOTY5LDE4LjA5NC0yMS43NWM5LjM0NC05LjAzMSwyMy41NDctMTkuNzgxLDM4LjI4MS0xOS43ODFjMTAuNDY5LDAsMjAuNzgxLDUuMzkxLDMxLjUzMSwxNi41ICAgIGM5LjQ4NCw5Ljc5NywxMi40NjksMjQuMjgxLDkuMTU2LDQ0LjI1Yy0zLjE1NiwxOS4wNDctMTEuOTY5LDQxLjg1OS0yNi4xNzIsNjcuODEzYy0xNi43MDMsMzAuNTMxLTM2Ljk4NCw1OC4wNjMtNDguODc1LDczLjI5NyAgICBjLTE3LjI4MS04LjMxMy00Ny4zNzUtMjMuODU5LTc1LjgyOC00My43MDNjLTI0LjM3NS0xNy4wMTYtNDIuNS0zMy42MDktNTMuODU5LTQ5LjMxM0MxMjYuNjEsMTEzLjY4NywxMjIuODI5LDk5LjMyOCwxMjcsODYuMjgxeiAgICAgTTEyOS4wMTUsMzg2LjcwMmMtMy41NzcsMC4wMDEtNy4wMTUtMC41MzEtMTAuNDk5LTEuNjRjLTE2LjE0MS01LjE3Mi0yNS45ODQtMTMtMzAuMDQ3LTIzLjkzOCAgICBjLTQuOTA2LTEzLjE3Mi0xLjQwNi0yOS42ODgsMi40MDYtNDEuMjE5YzQuNTYzLTEzLjc5NywxMC43NS0yNC4xNDEsMTEuMTI1LTI0Ljc2NmwxMS40MDYtMTguMDMxbC0xOC4yNjYtMTEuMjUgICAgYy0wLjU3OC0wLjM3NS0xMC43MTktNi45MjItMjAuOTM4LTE3LjI4MWMtOC41MzEtOC42NDEtMTktMjEuODkxLTIwLjQ1My0zNS44NzVjLTEuMTg4LTExLjYwOSw0LjE1Ni0yMi45ODQsMTYuMzQ0LTM0Ljc2NiAgICBjNy4yNjYtNy4wMzEsMTctMTAuNDUzLDI5LjczNC0xMC40NTNjMTcuNjg4LDAsNDAuMTA5LDYuNTE2LDY2LjA0NywxOS4wNDdjMjYuNDIyLDIwLjI5Nyw1Ni4wNjMsMzcuMTA5LDc3LjcwMyw0OC4yMzQgICAgYzQuNSwzLjM0NCw4LjQ4NCw2LjQwNiwxMS44NzUsOS4wNDdjLTEuODU5LDMuODU5LTQuMDc4LDguMzU5LTYuNjI1LDEzLjM0NGMtMTQuNDM4LDE5LjU2My0zMy41NjMsNDcuNzY2LTQ4LjIzNCw3Ny42NTYgICAgQzE3NC4zOSwzNjguNDgzLDE0OS40NTIsMzg2LjcwMiwxMjkuMDE1LDM4Ni43MDJ6IE00MTcuMjgxLDM5My41M2MtMy45NjksMTIuNDM4LTkuNjg4LDIxLjM0NC0xNywyNi40MzggICAgYy01Ljc5Nyw0LjA2My0xMi44NzUsNi4wMzEtMjEuNjU2LDYuMDMxYy0yNC41MzEsMC01MC4yODEtMTUuMzU5LTUxLjI1LTE1LjkzOGwtMTgtMTEuMjY2bC0xMS4yOTcsMTguMTQxICAgIGMtMC4wNzgsMC4wOTQtNi45NjksMTAuOTY5LTE4LjEwOSwyMS43MzRjLTkuMzI4LDkuMDMxLTIzLjU0NywxOS43OTctMzguMjgxLDE5Ljc5N2MtMTAuNDY5LDAtMjAuNzgxLTUuNDA2LTMxLjUxNi0xNi41ICAgIGMtOS40ODQtOS44MTMtMTIuNDg0LTI0LjI4MS05LjE3Mi00NC4yNjZjMy4xNzItMTkuMDQ3LDExLjk4NC00MS44NTksMjYuMTg4LTY3LjgxM2MxNi43MDMtMzAuNTE2LDM2Ljk2OS01OC4wNjMsNDguODU5LTczLjI5NyAgICBjMy44NzUsMS44NTksOC4zNzUsNC4wNzgsMTMuMzU5LDYuNjI1YzE5LjU2MywxNC40NTMsNDcuNzY2LDMzLjU3OCw3Ny42NTYsNDguMjVjMTYuODQ1LDEzLjExMiwyOS44MTMsMjUuODkzLDM4LjY4OCwzOC4xNTggICAgQzQxNy42ODgsMzY2LjEyNCw0MjEuNDUzLDM4MC40ODMsNDE3LjI4MSwzOTMuNTN6IE00NzQuMTg4LDMwMS44OWMtNy4yNjYsNy4wMzEtMTYuOTg0LDEwLjQ1My0yOS43MzQsMTAuNDUzICAgIGMtMjYuNDY5LDAtNjMuNTQ3LTE0LjU3OC0xMDcuMTg4LTQyLjE1NmMtMjAuMTcyLTEyLjc1LTM3LjQ4NC0yNS42MjUtNDguNDIyLTM0LjE3MmMxLjg1OS0zLjg3NSw0LjA5NC04LjQwNiw2LjY0MS0xMy4zOTEgICAgYzE0LjQzOC0xOS41NjMsMzMuNTQ3LTQ3Ljc1LDQ4LjIxOS03Ny42MjVjMjYuMjAzLTMzLjY3Miw1MS4xNDEtNTEuODkxLDcxLjU2My01MS44OTFjMy41NzgsMCw3LjAxNiwwLjU0NywxMC41LDEuNjU2ICAgIGMxNi4xNTYsNS4xNTYsMjUuOTg0LDEyLjk4NCwzMC4wNjMsMjMuOTIyYzQuOTA2LDEzLjE3MiwxLjM5MSwyOS43MDMtMi40MjIsNDEuMjM0Yy00LjU2MywxMy44MTMtMTAuNzUsMjQuMTU2LTExLjEwOSwyNC43NjYgICAgbC0xMS4yNjYsMTcuOTg0bDE4LjE0MSwxMS4zMTNjMC4wOTQsMC4wNjMsOS45ODQsNi4zNDQsMjAuMjgxLDE2LjYwOWM4Ljc4MSw4Ljc4MSwxOS41NjMsMjIuMjE5LDIxLjA2MywzNi40MzggICAgQzQ5MS43NSwyNzguNjcxLDQ4Ni40MDcsMjkwLjA2Miw0NzQuMTg4LDMwMS44OXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        </div>
        <div className="response-topic-small">
          Dublin
        </div>
      </div>

      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE5LjY5OSAxOS42OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE5LjY5OSAxOS42OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiPgo8Zz4KCTxwYXRoIGQ9Ik0xMy41MTgsOC4yNGwtMC4xMDcsMC4xMXYxLjE2N2wwLjE3OSwwLjEzOWwwLjIyNiwwLjAxNWwwLjE2Ni0wLjExMVY4LjM2NUwxMy43OTksOC4yNEgxMy41MTh6ICAgIE0xNS45MDQsOC4zMzZjLTAuMDk4LDAtMC4yNjQsMC4xMDEtMC4yNjQsMC4xMDFsMC4wNTUsMS4yMDVsMC4xNTIsMC4xMjRsMC4yMjMsMC4wMTVsMC4xODMtMC4xMDlWOC41MDRsLTAuMDk5LTAuMTExICAgQzE2LjE1NCw4LjM5MiwxNi4wMDIsOC4zMzYsMTUuOTA0LDguMzM2eiBNMy41NjcsNy42NTdMMy40MTQsNy43OTR2MS4xODJsMC4xNjgsMC4xMWgwLjI2M2wwLjE2Ny0wLjA5N1Y3Ljc5NEwzLjg0NSw3LjY1N0gzLjU2N3ogICAgTTE4LjQ4Niw2LjM0OWMtMC42MDksMC0wLjksMC4wMjYtMS43NTIsMC4xMDFjLTAuODQ4LDAuMDc2LTIuMDM5LDAuMDc2LTMuMDg0LDAuMDc2cy0yLjI2LDAuMTUyLTIuNzIxLDAuMDc3ICAgYy0wLjQ2My0wLjA3Ny0xLjIxNSwwLjEtMS42NTEtMC4zMDJDOC44NDIsNS44OTUsOC45ODcsNi4yMjQsOC42MjIsNi4wNzNDOC4yNTksNS45Miw4LjA4OSw2LjAyMiw3LjYyNyw1Ljc3ICAgQzcuMTY2LDUuNTE5LDYuODQ5LDUuNjQ0LDYuMjY4LDUuNzJDNS42ODMsNS43OTUsNS4xMDIsNS43OTUsNC44ODMsNS43OTVjLTAuMjIsMC0wLjUzNS0wLjAyNC0wLjY1NywwICAgQzQuMTA0LDUuODIsMy45MTEsNS45MiwzLjgxNCw1Ljkycy0wLjM0LDAuMTI4LTAuNDM3LDAuMTc4Yy0wLjA5OSwwLjA1LTAuMzY2LDAuMTI2LTAuNDg2LDAuMjVjLTAuMTIyLDAuMTI3LDAsMC0wLjEyMiwwLjE3NiAgIGMtMC4xMjMsMC4xNzctMC4xNjgsMC0wLjI2OSwwLjAyNEMyLjQwNCw2LjU3NSwyLjIzNCw2LjYwMSwyLjExMyw2LjYyNUMxLjk5Myw2LjY1LDIuMDQsNi42NSwxLjg5NSw2LjY1ICAgYy0wLjE0NiwwLTAuMjQzLDAuMDUtMC40ODYtMC4wNDlDMS4xNjUsNi40OTksMS4xNDIsNi42MjUsMS4wNDUsNi42NzdjLTAuMDk5LDAuMDUtMC4wMjUsMC4wNzUtMC4yMiwwLjEgICBjLTAuMTkzLDAuMDI1LTAuNTEsMC0wLjUxLDBMMCw2Ljc1MnY3LjMyNmgxOS42OTlWNi4zNzRDMTkuNjk5LDYuMzc0LDE5LjA5Myw2LjM0OSwxOC40ODYsNi4zNDl6IE0yLjMxOSw5Ljc1NEgxLjY5M1Y4Ljg1aC0wLjYxICAgdjAuOTAzSDAuNDZWNy4zOGgwLjYyM3YwLjg4N2gwLjYxVjcuMzhoMC42MjZWOS43NTR6IE00LjYyMSw5LjIyNUw0LjAyMiw5LjYwMUgzLjMzNmwtMC41Ni0wLjMzNlY3LjU1MmwwLjUzLTAuMzUzaDAuNzcyICAgTDQuNjIsNy41NjFMNC42MjEsOS4yMjVMNC42MjEsOS4yMjV6IE02Ljc3OSw5LjYwMUw1LjI2MSw5LjU1OVY3LjIyN2wwLjU2OCwwLjAyN2wwLjAxNSwxLjgzMUw2Ljc4LDkuMTQyTDYuNzc5LDkuNjAxTDYuNzc5LDkuNjAxICAgeiBNOC41OTksOS43MTJsLTEuNTQ4LTAuMTFMNy4wNjQsNy4zMWwwLjU5OCwwLjAyOXYxLjc3NUw4LjYsOS4xODRMOC41OTksOS43MTJMOC41OTksOS43MTJ6IE05LjYwNCw5LjAwM1Y5Ljc4TDguOTExLDkuNzY2ICAgTDguODk4LDguOTYxTDguMzEyLDcuMzY1bDAuNiwwLjAyOGwwLjMzNCwwLjlsMC4zMzEtMC44ODhsMC41OTUsMC4wNDFMOS42MDQsOS4wMDN6IE0xMS45NjMsMTAuMDQyaC0wLjI5MmwtMC4zMTctMC44NDYgICBsLTAuMzE4LDAuODA2aC0wLjMxOWwtMC40MDItMi4zM0wxMC44NzMsNy43bDAuMTY0LDAuNzlMMTEuMiw3LjcwMWgwLjMwNWwwLjI2NSwwLjg3MmwwLjE4MS0wLjgzM2gwLjQ3NEwxMS45NjMsMTAuMDQyeiAgICBNMTQuNTcyLDkuNzhsLTAuNTI2LDAuMzMzaC0wLjcwOUwxMi43Nyw5Ljc4VjguMDg2bDAuNTI1LTAuMjkyaDAuNzA5bDAuNTY4LDAuMzM1VjkuNzh6IE0xNi44MzMsOS44OTJsLTAuNDI5LDAuMzMzbC0wLjc3OCwwLjAxMyAgIGwtMC40OTktMC4zNTlMMTUuMSw4LjE5OGwwLjQ4Ni0wLjI5MmwwLjcyMywwLjAxNWwwLjUyNCwwLjMzM1Y5Ljg5MnogTTE5LjIzMiw5LjYxNmwtMC41NTgsMC4zMzNoLTEuMzAzbC0wLjAyOC0yLjMzMmwxLjI3Ny0wLjA0ICAgbDAuNjEsMC4zMDR2MS43MzVIMTkuMjMyeiBNMTguNCw4LjA2MWwtMC40MTYsMC4wMTVsMC4wMTMsMS4zNzRjMCwwLDAuMzc1LDAuMDQxLDAuNDQ0LDAuMDEzYzAuMDY3LTAuMDI2LDAuMTM5LTAuMTM4LDAuMTM5LTAuMTM4ICAgczAuMDE2LTEuMDY5LDAtMS4xNTFDMTguNTY2LDguMDksMTguNCw4LjA2MSwxOC40LDguMDYxeiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
        </div>
        <div className="response-topic-small">
          LA
        </div>
      </div>
      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE5LjY3NCAxOS42NzQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE5LjY3NCAxOS42NzQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIGQ9Ik0xMC44MDQsNy4yNzhMOS44NDMsOC4yMzdMOS44MzYsOC4yMzZjLTAuMDA1LDAtMC4wMDcsMC4wMDUtMC4wMTMsMC4wMDVMOS4xMjEsNy41MzVsLTAuMTksMC4xOTNMOS42NCw4LjQzNSAgIGMwLDAuMTExLDAuMDg5LDAuMiwwLjE5NywwLjJjMC4xMSwwLDAuMTk5LTAuMDg5LDAuMTk5LTAuMmMwLTAuMDAxLTAuMDAyLTAuMDAzLTAuMDAyLTAuMDA1bDAuOTYxLTAuOTZMMTAuODA0LDcuMjc4eiAgICBNMTIuMDE3LDE4LjY2di04LjQ0MmgwLjE2M1Y2Ljc3NGgwLjA1N1Y2LjUwOGgtMC4zNzl2LTAuNGwwLDBMMTAuOTcsNC40NDdoMC4wMDRWMy4yOTJoLTAuMDE3QzEwLjg4OCwzLjEzMiw5Ljk1LDAuNDE2LDkuODgzLDAgICBIOS43OUM5LjcyNCwwLjQxNiw4Ljc4MywzLjEzMiw4LjcxOCwzLjI5MmgtMC4wMnYxLjE1NGwwLDBsLTAuODgsMS42NjJINy44MTZ2MC40aC0wLjM4djAuMjY2aDAuMDZ2My40NDNoMC4xNjJ2OC40NDNoLTAuNjl2MS4wMTQgICBoNS43MzhWMTguNjZIMTIuMDE3eiBNOS44MzYsMTAuMTM4Yy0wLjkzOSwwLTEuNzAxLTAuNzYzLTEuNzAxLTEuNzAzYzAtMC45MzksMC43NjItMS43MDIsMS43MDEtMS43MDJzMS43MDIsMC43NjIsMS43MDIsMS43MDIgICBTMTAuNzc3LDEwLjEzOCw5LjgzNiwxMC4xMzh6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
        <div className="response-topic-small">
          London
        </div>
      </div>
      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgNDA1LjUzMSA0MDUuNTMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDUuNTMxIDQwNS41MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMzY3LjY4MiwxNjkuNTY1SDMyOS43OXYtNDYuNTA0YzAtMS40MjctMS4xNTctMi41ODMtMi41ODQtMi41ODNoLTMxLjAwMlY4MC4wMDFjMC0wLjAxNy0wLjAwNi0wLjAzMy0wLjAwNi0wLjA0OSAgIGMtMC4wMDQtMC4xNTYtMC4wMTctMC4zMTEtMC4wNDctMC40NjJjLTAuMDA0LTAuMDE5LTAuMDEyLTAuMDM4LTAuMDE2LTAuMDU2Yy0wLjAyOC0wLjEyOS0wLjA2OC0wLjI1NS0wLjExNy0wLjM3OCAgIGMtMC4wMTktMC4wNDctMC4wMzktMC4wOTEtMC4wNjEtMC4xMzdjLTAuMDQ0LTAuMDk2LTAuMDk2LTAuMTg5LTAuMTUxLTAuMjhjLTAuMDI1LTAuMDQtMC4wNDgtMC4wODEtMC4wNzUtMC4xMTkgICBjLTAuMDgyLTAuMTE3LTAuMTcyLTAuMjI5LTAuMjczLTAuMzMzYy0wLjAwNS0wLjAwNC0wLjAxLTAuMDA5LTAuMDE1LTAuMDE1bC00OS45NDUtNDkuOTQ2Yy0wLjQ4NC0wLjQ4NS0xLjE0My0wLjc1Ny0xLjgyNy0wLjc1NyAgIGgtMzguMzIyVjIuNTg0YzAtMS40MjctMS4xNTctMi41ODQtMi41ODQtMi41ODRjLTEuNDI3LDAtMi41ODMsMS4xNTctMi41ODMsMi41ODR2MjQuODg0aC0zOC4zMjMgICBjLTAuNjg1LDAtMS4zNDIsMC4yNzEtMS44MjcsMC43NTdsLTQ5Ljk0Nyw0OS45NDdjLTAuMDAzLDAuMDAyLTAuMDA2LDAuMDA3LTAuMDA5LDAuMDA5Yy0wLjEwNCwwLjEwNS0wLjE5NiwwLjIxOS0wLjI3OCwwLjMzOCAgIGMtMC4wMjcsMC4wMzgtMC4wNSwwLjA3OS0wLjA3NSwwLjExOWMtMC4wNTcsMC4wOTEtMC4xMDcsMC4xODQtMC4xNTIsMC4yOGMtMC4wMjEsMC4wNDUtMC4wNDIsMC4wOS0wLjA2MSwwLjEzNyAgIGMtMC4wNDgsMC4xMjItMC4wODcsMC4yNDgtMC4xMTYsMC4zNzVjLTAuMDA1LDAuMDIxLTAuMDEzLDAuMDQtMC4wMTcsMC4wNjFjLTAuMDMsMC4xNS0wLjA0MywwLjMwNC0wLjA0NiwwLjQ1OSAgIGMwLDAuMDE4LTAuMDA1LDAuMDMzLTAuMDA1LDAuMDUxdjQwLjQ3N0g3OC4zMjNjLTEuNDI3LDAtMi41ODMsMS4xNTYtMi41ODMsMi41ODN2NDYuNTA0SDM3Ljg0N2MtMS40MjcsMC0yLjU4MywxLjE1Ni0yLjU4MywyLjU4MyAgIHY1MS4zMjF2OC4xMDN2MTcxLjM3NmMwLDEuNDMsMS4xNTcsMi41ODQsMi41ODMsMi41ODRoNDAuNDc2aDI4LjMyOWgzMS4wMDFoMjIuNzQxaDMxLjAwMWgyMi43NDFoMzEuMDAyaDIyLjc0aDMxLjAwMmgyOC4zMjggICBoNDAuNDc2YzEuNDI4LDAsMi41ODQtMS4xNTQsMi41ODQtMi41ODRWMjMxLjU3MXYtOC4xMDN2LTUxLjMyMUMzNzAuMjY2LDE3MC43MjEsMzY5LjEwOSwxNjkuNTY1LDM2Ny42ODIsMTY5LjU2NXogICAgTTQwLjQyOSwyMjYuMDUzaDQ0LjMybC02Ljk1LDIuOTM1aC0zNy4zN1YyMjYuMDUzeiBNMzE0LjQ0MiwyMjguOTg3SDkxLjA4NGwxMTEuNjc5LTQ3LjE0NUwzMTQuNDQyLDIyOC45ODd6IE0zMjcuNzI5LDIyOC45ODcgICBsLTYuOTUtMi45MzVoNDQuMzE5djIuOTM1SDMyNy43Mjl6IE0xNjIuOTI4LDMyLjYzNWg3OS42NzNsNDQuNzgyLDQ0Ljc4MkgxMTguMTQ2TDE2Mi45MjgsMzIuNjM1eiBNMTE0LjQ5Miw4Mi41ODRoMTc2LjU0NXYzNy44OTMgICBIMTE0LjQ5MlY4Mi41ODR6IE04MC45MDUsMTI1LjY0NGgzMS4wMDNoMTgxLjcxMWgzMS4wMDN2NDMuOTIxSDgwLjkwNVYxMjUuNjQ0eiBNNDAuNDI5LDE3NC43MzJoMzcuODkzaDI0OC44ODVIMzY1LjF2NDYuMTUzICAgaC01Ni41NmwtMTA0Ljc3MS00NC4yMjhjLTAuNjQzLTAuMjcxLTEuMzY4LTAuMjcxLTIuMDA5LDBMOTYuOTksMjIwLjg4NUg0MC40MjlWMTc0LjczMkw0MC40MjksMTc0LjczMnogTTQwLjQyOSwyMzQuMTU0aDM1LjMwOSAgIHYxNjYuMjExSDQwLjQyOVYyMzQuMTU0TDQwLjQyOSwyMzQuMTU0eiBNMTA5LjIzNCw0MDAuMzY1VjI2Mi4yMjFoMjUuODM0djEzOC4xNDVIMTA5LjIzNHogTTE2Mi45NzYsNDAwLjM2NVYyNjIuMjIxaDI1LjgzNCAgIHYxMzguMTQ1SDE2Mi45NzZ6IE0yMTYuNzE4LDQwMC4zNjVWMjYyLjIyMWgyNS44MzR2MTM4LjE0NUgyMTYuNzE4eiBNMjcwLjQ2MSw0MDAuMzY1VjI2Mi4yMjFoMjUuODM0djEzOC4xNDVIMjcwLjQ2MXogICAgTTMwMS40NjIsNDAwLjM2NVYyNTkuNjM3YzAtMS40MjctMS4xNTYtMi41ODQtMi41ODMtMi41ODRoLTMxLjAwMmMtMS40MjgsMC0yLjU4MywxLjE1Ny0yLjU4MywyLjU4NHYxNDAuNzI5SDI0Ny43MlYyNTkuNjM3ICAgYzAtMS40MjctMS4xNTYtMi41ODQtMi41ODMtMi41ODRoLTMxLjAwM2MtMS40MjcsMC0yLjU4MywxLjE1Ny0yLjU4MywyLjU4NHYxNDAuNzI5aC0xNy41NzRWMjU5LjYzNyAgIGMwLTEuNDI3LTEuMTU3LTIuNTg0LTIuNTgzLTIuNTg0aC0zMS4wMDFjLTEuNDI3LDAtMi41ODMsMS4xNTctMi41ODMsMi41ODR2MTQwLjcyOWgtMTcuNTc0VjI1OS42MzcgICBjMC0xLjQyNy0xLjE1Ny0yLjU4NC0yLjU4NC0yLjU4NEgxMDYuNjVjLTEuNDI3LDAtMi41ODMsMS4xNTctMi41ODMsMi41ODR2MTQwLjcyOUg4MC45MDZWMjM0LjE1NGgyNDMuNzE3djE2Ni4yMTFIMzAxLjQ2MnogICAgTTM2NS4wOTksNDAwLjM2NUgzMjkuNzlWMjM0LjE1NGgzNS4zMDlWNDAwLjM2NXoiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        </div>
        <div className="response-topic-small">
          Melbourne
        </div>
      </div>
      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTg1LjYzNiw2Ny4yNWMtMjYuNzU0LDAtNDguNTIyLDIxLjc2Ny00OC41MjIsNDguNTIyYzAsMjYuNzU2LDIxLjc2Nyw0OC41MjIsNDguNTIyLDQ4LjUyMiAgICBjMjYuNzU2LDAsNDguNTIzLTIxLjc2Nyw0OC41MjMtNDguNTIyQzEzNC4xNTksODkuMDE3LDExMi4zOTIsNjcuMjUsODUuNjM2LDY3LjI1eiBNODUuNjM3LDE0OS4yNDMgICAgYy0xOC40NTYsMC0zMy40NzItMTUuMDE0LTMzLjQ3Mi0zMy40NzFjMC0xOC40NTcsMTUuMDE1LTMzLjQ3MSwzMy40NzItMzMuNDcxczMzLjQ3MiwxNS4wMTUsMzMuNDcyLDMzLjQ3MSAgICBDMTE5LjEwOSwxMzQuMjI4LDEwNC4wOTMsMTQ5LjI0Myw4NS42MzcsMTQ5LjI0M3oiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik04NS42MzcsMzAuMTM1Yy00LjE1NywwLTcuNTI1LDMuMzY5LTcuNTI1LDcuNTI1djE1LjEzOGMwLDQuMTU2LDMuMzY4LDcuNTI1LDcuNTI1LDcuNTI1czcuNTI1LTMuMzY5LDcuNTI1LTcuNTI1VjM3LjY2ICAgIEM5My4xNjIsMzMuNTA0LDg5Ljc5NCwzMC4xMzUsODUuNjM3LDMwLjEzNXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNDYuMTkzLDU1LjIxN2MtMi45NC0yLjkzOC03LjcwNC0yLjkzOS0xMC42NDQsMGwtMTAuNzA0LDEwLjcwNGMtMi45MzksMi45MzktMi45MzksNy43MDQsMCwxMC42NDIgICAgYzEuNDcsMS40NywzLjM5NSwyLjIwNCw1LjMyMiwyLjIwNGMxLjkyNSwwLDMuODUyLTAuNzM0LDUuMzIyLTIuMjAzbDEwLjcwNC0xMC43MDRDMTQ5LjEzMiw2Mi45MjEsMTQ5LjEzMiw1OC4xNTYsMTQ2LjE5Myw1NS4yMTcgICAgeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE2My43NDksMTA4LjI0N2gtMTUuMTM3Yy00LjE1NywwLTcuNTI1LDMuMzY5LTcuNTI1LDcuNTI1YzAsNC4xNTYsMy4zNjgsNy41MjUsNy41MjUsNy41MjVoMTUuMTM3ICAgIGM0LjE1NywwLDcuNTI1LTMuMzY5LDcuNTI1LTcuNTI1QzE3MS4yNzQsMTExLjYxNiwxNjcuOTA2LDEwOC4yNDcsMTYzLjc0OSwxMDguMjQ3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE0Ni4xOTMsMTY1LjY4NGwtMTAuNzA0LTEwLjcwM2MtMi45NDEtMi45MzktNy43MDUtMi45MzktMTAuNjQ0LDBzLTIuOTM5LDcuNzA0LDAsMTAuNjQybDEwLjcwNCwxMC43MDQgICAgYzEuNDcsMS40NjksMy4zOTYsMi4yMDQsNS4zMjIsMi4yMDRzMy44NTItMC43MzQsNS4zMjItMi4yMDRDMTQ5LjEzMiwxNzMuMzg4LDE0OS4xMzIsMTY4LjYyMywxNDYuMTkzLDE2NS42ODR6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNODUuNjM3LDE3MS4yMjJjLTQuMTU3LDAtNy41MjUsMy4zNjktNy41MjUsNy41MjV2MTUuMTM4YzAsNC4xNTYsMy4zNjgsNy41MjUsNy41MjUsNy41MjVzNy41MjUtMy4zNjksNy41MjUtNy41MjUgICAgdi0xNS4xMzhDOTMuMTYyLDE3NC41OTEsODkuNzk0LDE3MS4yMjIsODUuNjM3LDE3MS4yMjJ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDYuNDMsMTU0Ljk4MWMtMi45MzktMi45MzktNy43MDMtMi45MzktMTAuNjQzLDBsLTEwLjcwNCwxMC43MDNjLTIuOTQsMi45MzktMi45NCw3LjcwNC0wLjAwMSwxMC42NDMgICAgYzEuNDcsMS40NjksMy4zOTUsMi4yMDQsNS4zMjIsMi4yMDRjMS45MjUsMCwzLjg1Mi0wLjczNCw1LjMyMi0yLjIwNGwxMC43MDQtMTAuNzA0QzQ5LjM2OCwxNjIuNjg0LDQ5LjM2OCwxNTcuOTE5LDQ2LjQzLDE1NC45ODEgICAgeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTIyLjY2MiwxMDguMjQ3SDcuNTI1Yy00LjE1NywwLTcuNTI1LDMuMzY5LTcuNTI1LDcuNTI1YzAsNC4xNTYsMy4zNjgsNy41MjUsNy41MjUsNy41MjVoMTUuMTM3ICAgIGM0LjE1NywwLDcuNTI1LTMuMzY5LDcuNTI1LTcuNTI1QzMwLjE4NywxMTEuNjE2LDI2LjgxOSwxMDguMjQ3LDIyLjY2MiwxMDguMjQ3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ2LjQzLDY1LjkyMUwzNS43MjUsNTUuMjE3Yy0yLjk0LTIuOTM5LTcuNzA0LTIuOTM5LTEwLjY0MywwYy0yLjkzOSwyLjkzOS0yLjkzOSw3LjcwNCwwLDEwLjY0M2wxMC43MDQsMTAuNzA0ICAgIGMxLjQ3LDEuNDY5LDMuMzk2LDIuMjAzLDUuMzIyLDIuMjAzYzEuOTI1LDAsMy44NTItMC43MzQsNS4zMjItMi4yMDRDNDkuMzY4LDczLjYyNCw0OS4zNjgsNjguODU5LDQ2LjQzLDY1LjkyMXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik01MDguMzU2LDQ1Ny4xOGMtMTMuMTE2LTguODk2LTI4LjMyNC0xMi45MjUtNDMuMzQtMTIuMTEzYy0xMy44NjEtMTkuMDkzLTQwLjAwOC0zNS40NjEtNzYuMDMyLTQ3LjUyNSAgICBjLTIyLjM2MS03LjQ4OC00Ny4zMTYtMTIuODkzLTczLjg0OS0xNi4xMDJsNTMuOTE1LTEzNS4yNzFjOC4xMzUsNS44NzUsMTUuMjM1LDEyLjg1MywyMS4wMzgsMjAuNzQ3ICAgIGMxLjkxOCwyLjYxLDQuODc3LDQuMDg3LDguMTQxLDMuMjkyYzE3LjgwNy0zLjIyOSwzNi42OS0xLjE2LDU0LjYyOCw1Ljk4OWMxOC4wNzMsNy4yMDMsMzMuMjkxLDE4LjgwNyw0NC4wMDgsMzMuNTU3ICAgIGMxLjQzNywxLjk3NywzLjcxNCwzLjEwMSw2LjA4NywzLjEwMWMwLjYwMiwwLDEuMjEtMC4wNzIsMS44MTItMC4yMjJjMi45NzQtMC43MzcsNS4yMDQtMy4yMDUsNS42MzgtNi4yMzggICAgYzAuMjg0LTEuOTkxLDYuNzk5LTQ5LjM2LTguNzIzLTEwMC45NjVjLTEuMTk2LTMuOTgtNS40MDItNi4yMzUtOS4zNzMtNS4wMzljLTMuOTgsMS4xOTctNi4yMzYsNS4zOTQtNS4wMzgsOS4zNzMgICAgYzkuMDYsMzAuMTI0LDEwLjA0OSw1OS4yNTEsOS40OTMsNzcuMDE5Yy0xMC43NC0xMC4zOTQtMjMuNzM5LTE4Ljc1Mi0zOC4zMzItMjQuNTY4Yy0xNi41OS02LjYxMi0zMy45NDctOS40MjMtNTAuODQzLTguMyAgICBjMC4xMjgtMC4zODksMC4yNDQtMC43NjksMC4zNy0xLjE1NmM1Ljg4LTE3Ljk2NCwxMC4yNjUtMzYuNDc3LDEyLjQyMi01NS4yN2MxLjk3My0xNy4xOTcsMi4xNTctMzQuNTY4LTAuMDA4LTUxLjc1NiAgICBjLTEuMjU0LTkuOTU0LTMuMzg4LTE5Ljc5OS02LjQ1LTI5LjM1NWMtMC4wMjItMC4wNjktMC4wNDQtMC4xNDMtMC4wNjctMC4yMTJjMjcuMDAyLDE0LjYyOSw0Ny43NTgsMzYuMTg1LDYxLjg0Niw2NC4yODQgICAgYzEuODYyLDMuNzE1LDYuMzg0LDUuMjE2LDEwLjA5OSwzLjM1NGMzLjcxNS0xLjg2Miw1LjIxNi02LjM4NCwzLjM1NC0xMC4xYy0xOC42NzQtMzcuMjQ2LTQ3Ljk3NC02NC4wMzctODcuMTExLTc5LjYzOCAgICBjLTUzLjgyOC0yMS40NTEtMTA5Ljg1Mi0xNC4zOTUtMTYyLjAwNiwyMC40MDZjLTM4LjkzMiwyNS45NzctNjEuNzI5LDU3LjgzOS02Mi42ODEsNTkuMTgyYy0xLjc3MSwyLjUtMS44NDgsNS44MjQtMC4xOTcsOC40MDQgICAgYzEuNjUxLDIuNTgsNC42OTcsMy45MDMsNy43MTQsMy4zNDJjMTcuOTI3LTMuMzMzLDM2Ljk1NS0xLjI4OCw1NS4wMjcsNS45MTVjMTcuODEsNy4wOTksMzIuODQ5LDE4LjQ3MSw0My41NDEsMzIuOTE3ICAgIGMyLjA4LDIuODEsNS4xMTQsNC41MzgsOC42NzUsMy40OGM5LjU1Ny0xLjY5NCwxOS40MTgtMS44NjIsMjkuMjc0LTAuNTQ0bC02MC4xMjMsMTUwLjg1NWMtMS41MTctMC4wMTMtMy4wMjktMC4wNC00LjU1MS0wLjA0ICAgIGMtMzQuNjg0LDAtNjcuODMxLDMuNDU1LTk4LjUyLDEwLjI2OWMtNC4wNTcsMC45MDEtNi42MTYsNC45Mi01LjcxNCw4Ljk3OGMwLjkwMSw0LjA1Nyw0LjkxMyw2LjYxNyw4Ljk3Nyw1LjcxNSAgICBjMjkuMjAyLTYuNDg0LDYyLjE0Mi05LjkxMSw5NS4yNTctOS45MTFjMTUuNjk2LDAsMzEuNDAyLDAuNzQ2LDQ3LjAyMiwyLjI5OGMwLjA1NiwwLjAwNSwwLjExMSwwLjAwNCwwLjE2OCwwLjAwOCAgICBjMjkuMDQ3LDIuODgsNTYuMjcsOC40MjMsODAuMjk5LDE2LjQ3MWMyOC42ODYsOS42MDcsNTAuODMzLDIyLjI2Nyw2My44MzEsMzYuMjk4Yy02LjU1OCwyLjAzNy0xMi45MDEsNS4wNTctMTguODE4LDkuMDY5ICAgIGMtMTguOTA1LDEyLjgyMS00My4zMzYsMTIuODIxLTYyLjI0MiwwYy0yNC4wMzktMTYuMzAzLTU1LjEwMy0xNi4zMDItNzkuMTM5LDBjLTE4LjkwNSwxMi44MjEtNDMuMzM2LDEyLjgyMS02Mi4yNDIsMCAgICBjLTI0LjAzOC0xNi4zMDMtNTUuMTAyLTE2LjMwMi03OS4xMzksMGMtMTguOTA1LDEyLjgyMS00My4zMzYsMTIuODIxLTYyLjI0MiwwYy01LjkxNi00LjAxMi0xMi4yNTktNy4wMzMtMTguODE3LTkuMDY5ICAgIGMxMi45ODEtMTQuMDExLDM1LjA4OC0yNi42NTcsNjMuNzE3LTM2LjI1OWMzLjk0LTEuMzIxLDYuMDYzLTUuNTg3LDQuNzQyLTkuNTI4Yy0xLjMyMS0zLjk0LTUuNTg1LTYuMDY0LTkuNTI3LTQuNzQyICAgIGMtMzUuOTYxLDEyLjA2LTYyLjA2OCwyOC40MTUtNzUuOTEzLDQ3LjQ4NWMtMTUuMDE3LTAuODEyLTMwLjIyNCwzLjIxOS00My4zNCwxMi4xMTNjLTMuNDQsMi4zMzMtNC4zMzcsNy4wMTItMi4wMDQsMTAuNDUyICAgIGMyLjMzMiwzLjQ0LDcuMDA4LDQuMzM4LDEwLjQ1MiwyLjAwNWMxMS4xNy03LjU3NSwyNC4yNy0xMC42NzIsMzcuMDE5LTkuMjk1YzAuNDU4LDAuMDk5LDAuOTIsMC4xNjIsMS4zODQsMC4xNzMgICAgYzguMzQ4LDEuMTE2LDE2LjUxLDQuMTUxLDIzLjg0MSw5LjEyM2MyNC4wMzYsMTYuMzAxLDU1LjA5OSwxNi4zMDMsNzkuMTM4LDBjMTguOTA3LTEyLjgyMiw0My4zMzktMTIuODIxLDYyLjI0MywwICAgIGMyNC4wMzcsMTYuMzAxLDU1LjEsMTYuMzAzLDc5LjEzOCwwYzE4LjkwNi0xMi44MjIsNDMuMzM4LTEyLjgyMSw2Mi4yNDMsMGMxMi4wMTksOC4xNTEsMjUuNzk0LDEyLjIyNywzOS41NywxMi4yMjcgICAgYzEzLjc3NSwwLDI3LjU1LTQuMDc2LDM5LjU3LTEyLjIyN2M3LjMxNC00Ljk2LDE1LjQ1Ni03Ljk5MywyMy43ODUtOS4xMTVjMC40OTMtMC4wMDksMC45ODQtMC4wNzYsMS40NzItMC4xODQgICAgYzEyLjczOS0xLjM2OCwyNS44MjYsMS43MjksMzYuOTg2LDkuMjk4YzMuNDQsMi4zMzMsOC4xMiwxLjQzNiwxMC40NTItMi4wMDVDNTEyLjY5Miw0NjQuMTkzLDUxMS43OTUsNDU5LjUxMyw1MDguMzU2LDQ1Ny4xOHogICAgIE0zMDIuMzI1LDIxMS40MDNjMC4wOC0wLjE3LDAuMTYzLTAuMzM4LDAuMjQ0LTAuNTA4YzcuMDEtMTQuNjc0LDE1LjE4Ny0yOC44NTgsMjQuNzI2LTQyLjA0ICAgIGMyLjMzMi0zLjIyMiwxLjY2NC04LjA4NS0xLjY4NC0xMC41MDhjLTMuMjc1LTIuMzcxLTguMTQ0LTEuNTg0LTEwLjUwOSwxLjY4NWMtNy42NTksMTAuNTgzLTE0LjQ2NCwyMS43ODQtMjAuNTcxLDMzLjMyOSAgICBjLTIuMjA2LDQuMTcyLTQuNDQ3LDguMzk0LTYuMzM5LDEyLjcyMWMtMC4wMzMsMC4wNy0wLjA2OCwwLjE0LTAuMTAxLDAuMjFjLTExLjQ5Ni0xMi40NDEtMjYuMDI1LTIyLjM0LTQyLjYyLTI4Ljk1MiAgICBjLTE0LjU5Ny01LjgxOC0yOS43ODktOC42OTEtNDQuNzM1LTguNTM1YzEwLjA0Ny0xMS4yOTksMjYuNTUxLTI3Ljc5Myw0OC4wMzUtNDIuMDYzYzIxLjMwMi0xNC4xNSw0My4yOS0yMy4zODcsNjUuMzUtMjcuNDU0ICAgIGMyMS4zNDMtMy45MzQsNDIuODc5LTMuMDExLDY0LjI0OSwyLjczYy0wLjA4NiwwLjA0Ny0wLjE3OCwwLjA5OS0wLjI2NCwwLjE0NmMtMTEuNTYxLDYuMzQ1LTIyLjI4LDE0LjE3NC0zMi4wMTIsMjMuMDYzICAgIGMtMy43OTYsMy40NjctNy40OTksNy4wMzEtMTEuMDQ3LDEwLjc1Yy0yLjg2OCwzLjAwOC0yLjc1NSw3Ljc3MiwwLjI1MywxMC42NGMzLjAwOCwyLjg2OCw3Ljc3MSwyLjc1NSwxMC42NC0wLjI1MyAgICBjOS42NDYtMTAuMTE4LDIwLjUzOC0xOS4zNzEsMzIuNDI4LTI2Ljg1MmM1LjQ4LTMuNDQ5LDExLjItNi41NjUsMTcuMTczLTkuMDc3YzEuNTY5LDMuNTU5LDMuNjEsOC44MjgsNS41MjcsMTUuNzI5ICAgIGM5LjA3NCwzMi42ODksNi42MjIsNjcuOTY1LTEuMzMyLDEwMC42MDhjLTEuNzExLDcuMDItMy42ODgsMTMuOTc5LTUuOTMsMjAuODQ3Yy0wLjAyMywwLjA3MS0wLjA0OCwwLjE0NC0wLjA3MSwwLjIxNiAgICBjLTEwLjI0LTEwLjgzNC0yMi44MTUtMTkuNjgtMzcuMDUyLTI2LjA0N2MtMC4xOTUtMC4wODctMC4zOS0wLjE3NC0wLjU4NS0wLjI2QzMzOS4yNiwyMTQuMDk2LDMyMC43MywyMTAuMzg3LDMwMi4zMjUsMjExLjQwM3ogICAgIE0yOTkuNTc2LDM3OS44MmMtMy40ODktMC4zMDItNy4wMDItMC41Ni0xMC41MzUtMC43ODhjLTMuOTA1LTAuMjY4LTcuODE3LTAuNDY1LTExLjcyOC0wLjYyNGw1OS4wMi0xNDguMDc5ICAgIGMzLjU3MiwxLjAyMyw3LjA4OCwyLjI0LDEwLjUzMSwzLjYzM2MwLjU1OSwwLjIyNyw5LjE4Miw0LjE3Nyw5LjE2Niw0LjIxN0wyOTkuNTc2LDM3OS44MnoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        </div>
        <div className="response-topic-small">
          Miami
        </div>
      </div>
      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyMTcuNzcyIDIxNy43NzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIxNy43NzIgMjE3Ljc3MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyNTZweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0xNTUuODAxLDg0LjM0NGgtMTcuMzQ0VjU0LjM1NmMwLTEuNjk2LTEuMzgtMy4wNzYtMy4wNzYtMy4wNzZIMjguNDIxYy0wLjkzMiwwLTEuNzQsMC42NTItMS45MzYsMS41NjQgICAgIGMtMC4yLDAuOTE2LDAuMjY0LDEuODQsMS4xMTYsMi4yMjhjMC4xMzYsMC4wNjQsOS4yNjgsNC4zMjgsMTUuMzgsMTEuNXYxMjMuMDE2YzAsMTIuNDcyLDguOTYsMjIuODA0LDIwLjc2LDI1LjEyNHYxLjkyNCAgICAgYzAsMC42MjgsMC41MDgsMS4xMzYsMS4xMzIsMS4xMzZoMTEuOTEyYzAuNjI0LDAsMS4xMzItMC41MDgsMS4xMzItMS4xMzZ2LTEuMzQ4aDIyLjUwOHYxLjM0OGMwLDAuNjI4LDAuNTA4LDEuMTM2LDEuMTMyLDEuMTM2ICAgICBoMTEuOTEyYzAuNjI0LDAsMS4xMzItMC41MDgsMS4xMzItMS4xMzZ2LTEuNDQ0YzEzLjMwOC0wLjk1MiwyMy44NTYtMTIuMDYsMjMuODU2LTI1LjYwOHYtMjYuNTU2aDE3LjM0NCAgICAgYzIwLjI1MiwwLDM1LjUzMi0xOC41NTIsMzUuNTMyLTQzLjE1NkMxOTEuMzMzLDEwMC4yODgsMTc1LjM5Myw4NC4zNDQsMTU1LjgwMSw4NC4zNDR6IE02My43NDksMjEwLjY4OGgtMC4wMDQgICAgIGMtOS42LTIuMjUyLTE2Ljc5Mi0xMC44MjQtMTYuNzkyLTIxLjFsMC4wMDQtMTYuMTMyYzMuNjk2LDEuMzI0LDkuOTgsMi4xNjgsMTYuNzkyLDIuNzA0VjIxMC42ODh6IE00Ni45OTMsMTcwLjY2OCAgICAgYzIuMDkyLTAuOTA0LDcuOTEyLTEuOSwxNi43NTItMi42MTJ2NS4yMjRDNTQuOTAxLDE3Mi41NjQsNDkuMDgxLDE3MS41NjgsNDYuOTkzLDE3MC42Njh6IE03NS42NTMsMjE1LjUwNGgtOS42NDRWNjQuNjU2aDkuNjQ0ICAgICBWMjE1LjUwNHogTTEwMC40MjUsMjExLjMySDc3LjkxN3YtMzQuNDRjNS4yMzYsMC4xNiw5LjkwOCwwLjIwOCwxMi44LDAuMjA4YzIuMzEyLDAsNS43NjQtMC4wMjQsOS43MDgtMC4xMTJWMjExLjMyeiAgICAgIE0xMDAuNDI1LDE2NC4zNmMtMS43LTAuMDM2LTYuMiwwLjAwNC0xMC4xODQsMC4wMTZ2Mi45MTZjNC4xOTItMC4wMTYsOC44NDQtMC4xMjQsMTAuMTg0LTAuMDkydjYuOTMyICAgICBjLTMuMDcyLDAuMDcyLTYuMjg0LDAuMTE2LTkuNzA4LDAuMTE2Yy00LjY1NiwwLTguODQ0LDAuMTM2LTEyLjgsMHYtNi45MzZjMS4zMTYtMC4wNDQsNS41NTItMC4wODgsOS42Mi0wLjExNnYtMi45MTYgICAgIGMtMy45MTIsMC4wMjQtOC4wMzIsMC4xMjgtOS42MiwwLjE3NnYtOTkuOGgyMi41MDhWMTY0LjM2eiBNMTEyLjMzNywyMTUuNTA0aC05LjY0NFY2NC42NTZoOS42NDRWMjE1LjUwNHogTTUwLjM2MSw2MS44MnYyLjgzNiAgICAgaDEzLjM4NHYxMDAuNTJjLTYuODA4LDAuNTM2LTEzLjA5NiwxLjM4LTE2Ljc4OCwyLjcwNGwwLjAwNC0zMC40NTZoNy4yMzJ2LTIuMjY4aC03LjIzNnYtMy42ODRoNy4yMjh2LTIuMjY4aC03LjIyOHYtMy42ODQgICAgIGg3LjIyOHYtMi4yOGgtNy4yMjh2LTQuMDg0aDEzLjE5NnYtMi4yNjhINDYuOTU3di02LjE0OGg3LjE3MnYtMi4yNjhoLTcuMTcydi0zLjY4NGg3LjE3MnYtMi4yNjhoLTcuMTcydi0zLjY4NGg3LjE3MnYtMi4yNjggICAgIGgtNy4xNzJ2LTQuMDg0aDEzLjE0di0yLjI2OEg0Ni45NjFsMC4wMDQtMTcuMzA0YzAuODYsMi4wNDQsMS40MDgsNC4yMTIsMS40MDgsNi41MjhoMy45NjhjMC0xMS4zNi05LjU4LTE5LjY4OC0xNi40MDgtMjQuMTg0ICAgICBoNy4wNDhjMCwwLjAwOC0wLjAwNCwwLjAxMi0wLjAwNCwwLjAybDkxLjUwOC0wLjAydjYuNTY0SDUwLjM2MXogTTExNC42MDEsMTY3Ljg2OGMxMC41MTYsMC43MTIsMTcuNTQsMS44LDE5Ljg0OCwyLjc5NiAgICAgYy0yLjMwOCwxLTkuMzMyLDIuMDg4LTE5Ljg0OCwyLjhWMTY3Ljg2OHogTTEzNC40ODksMTg5LjU4OGMwLDExLjM0OC04Ljc4LDIwLjU4OC0xOS44ODgsMjEuNTR2LTM0Ljc1MiAgICAgYzcuOTQ4LTAuNTEyLDE1LjYzNi0xLjM5MiwxOS44ODgtMi45MTZWMTg5LjU4OHogTTEzNC40ODksMTY3Ljg2OGMtNC4yNTItMS41Mi0xMS45NC0yLjQtMTkuODg4LTIuOTEydi0xMDAuM2gxOS44ODhWMTY3Ljg2OHogICAgICBNMTM4LjQ1NywxMDguOWMzLjA4OC0wLjA2OCw1LjU4NC0yLjU5Miw1LjU4NC01LjY5MnYtNi41aDEwLjA4NGMxMi43NzIsMCwyMy4xNjgsMTAuMzkyLDIzLjE2OCwyMy4xNjggICAgIGMwLDE2Ljk4LTEwLjM5NiwzMC43OTItMjMuMTY4LDMwLjc5MmgtMTUuNjY4TDEzOC40NTcsMTA4LjlMMTM4LjQ1NywxMDguOXogTTE1NS44MDEsMTYwLjJoLTE3LjM0NHYtNi42OTJoMTUuNjY4ICAgICBjMTQuNTg0LDAsMjYuMDA0LTE0Ljc3MiwyNi4wMDQtMzMuNjI4YzAtMTQuMzM2LTExLjY2NC0yNi4wMDQtMjYuMDA0LTI2LjAwNGgtMTIuOTJ2OS4zMzJjMCwxLjUzNi0xLjIyNCwyLjc3Ni0yLjc0OCwyLjg0NCAgICAgVjg3LjE4aDE3LjM0NGMxOC4wMjgsMCwzMi42OTYsMTQuNjY4LDMyLjY5NiwzMi42OTZDMTg4LjQ5NywxNDIuODY0LDE3NC40NDEsMTYwLjIsMTU1LjgwMSwxNjAuMnoiIGZpbGw9IiNGRkZGRkYiLz4KCQkJPHBhdGggZD0iTTQyLjkxMyw0Ny44NzZoOTIuNTI0YzEuMDk2LDAsMS45ODQtMC44ODgsMS45ODQtMS45ODRjMC0xMC45NDQtOC4zOTItMTkuODQ4LTE4LjcwOC0xOS44NDhoLTI4LjEydi02LjczNiAgICAgYzQuNjg4LTAuNjkyLDguMzA4LTQuNzA0LDguMzA4LTkuNThDOTguOTAxLDQuMzY0LDk0LjUzNywwLDg5LjE3MywwYy01LjM2NCwwLTkuNzI4LDQuMzY0LTkuNzI4LDkuNzI4ICAgICBjMCw0Ljg3NiwzLjYyLDguODg4LDguMzA4LDkuNTh2Ni43MzZoLTI4LjEyYy0xMC4zMTYsMC0xOC43MDgsOC45MDQtMTguNzA4LDE5Ljg0OEM0MC45MjUsNDYuOTg4LDQxLjgxMyw0Ny44NzYsNDIuOTEzLDQ3Ljg3NnogICAgICBNODMuNDE3LDkuNzI4YzAtMy4xNzYsMi41ODQtNS43NTYsNS43NTYtNS43NTZjMy4xNzYsMCw1Ljc1NiwyLjU4NCw1Ljc1Niw1Ljc1NnMtMi41ODQsNS43NTYtNS43NTYsNS43NTYgICAgIEM4NS45OTcsMTUuNDgsODMuNDE3LDEyLjksODMuNDE3LDkuNzI4eiBNNTkuNjMzLDMwLjAxMmg1OS4wOGM3LjUwNCwwLDEzLjcxNiw2LjA3MiwxNC42MjQsMTMuODk2SDQ1LjAwOSAgICAgQzQ1LjkxNywzNi4wODQsNTIuMTI5LDMwLjAxMiw1OS42MzMsMzAuMDEyeiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        </div>
        <div className="response-topic-small">
          Montreal
        </div>
      </div>
      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMS45NSA1MTEuOTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45NSA1MTEuOTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTkuOTc0LDg3Ljk5MmMtMjAuODU4LDAtMzUuOTk3LDE1LjcyMS0zNS45OTcsMzcuMzc5YzAsMjEuNTQ1LDIwLjYxNiw0Mi42MTMsMzUuOTk3LDQyLjYxMyAgICBjMTUuMzgyLDAsMzUuOTk3LTIxLjA2OSwzNS45OTctNDIuNjEzQzI5NS45NzEsMTAzLjcxMywyODAuODMxLDg3Ljk5MiwyNTkuOTc0LDg3Ljk5MnogTTI1OS45NzQsMTU5Ljk4NSAgICBjLTkuMjE5LDAtMjcuOTk4LTE2LjAyMi0yNy45OTgtMzQuNjE0YzAtMTcuMDI2LDExLjc3My0yOS4zOCwyNy45OTgtMjkuMzhjMTYuMjI2LDAsMjcuOTk3LDEyLjM1NCwyNy45OTcsMjkuMzggICAgQzI4Ny45NzEsMTQzLjk2MywyNjkuMTkyLDE1OS45ODUsMjU5Ljk3NCwxNTkuOTg1eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE2Ny45ODIsMGMtOS43NjUsMC0xNS45OTgsMTUuNzU2LTE1Ljk5OCwyMy45OTdjMCw4LjgyNCw3LjE3OSwxNS45OTksMTUuOTk4LDE1Ljk5OWM4LjgyLDAsMTUuOTk5LTcuMTc1LDE1Ljk5OS0xNS45OTkgICAgQzE4My45ODEsMTUuNzU2LDE3Ny43NDcsMCwxNjcuOTgyLDB6IE0xNjcuOTgyLDMxLjk5N2MtNC40MTMsMC03Ljk5OS0zLjU5LTcuOTk5LThjMC01Ljk3OSw1LjAwOC0xNS45OTgsNy45OTktMTUuOTk4ICAgIGMyLjk5MywwLDgsMTAuMDE5LDgsMTUuOTk4QzE3NS45ODIsMjguNDA4LDE3Mi4zOTYsMzEuOTk3LDE2Ny45ODIsMzEuOTk3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE4Ny45OCwzOS45OTdoLTM5Ljk5NmMtMi4yMSwwLTMuOTk5LDEuNzg5LTMuOTk5LDMuOTk5YzAsMi4yMTEsMS43ODksNCwzLjk5OSw0aDM5Ljk5NmMyLjIxMSwwLDQtMS43OSw0LTQgICAgUzE5MC4xOTEsMzkuOTk3LDE4Ny45OCwzOS45OTd6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTU5LjU2Miw1OC4yMDdsLTcuOTk5LTE1Ljk5OWMtMC45OTItMS45NzctMy4zODMtMi43NjYtNS4zNjctMS43ODljLTEuOTc3LDAuOTg4LTIuNzczLDMuMzg5LTEuNzg5LDUuMzY2bDcuOTk5LDE1Ljk5OSAgICBjMC43MDMsMS40MDIsMi4xMTgsMi4yMSwzLjU3OCwyLjIxYzAuNjAxLDAsMS4yMTEtMC4xMzcsMS43ODktMC40MjFDMTU5Ljc1LDYyLjU4NSwxNjAuNTQ2LDYwLjE4NCwxNTkuNTYyLDU4LjIwN3oiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNzkuOTgxLDU1Ljk5NWgtMjMuOTk4Yy0yLjIxMSwwLTQsMS43ODktNCw0YzAsMi4yMSwxLjc5LDMuOTk5LDQsMy45OTloMjMuOTk4YzIuMjExLDAsNC0xLjc4OSw0LTMuOTk5ICAgIEMxODMuOTgxLDU3Ljc4NCwxODIuMTkyLDU1Ljk5NSwxNzkuOTgxLDU1Ljk5NXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xODkuNzY5LDQwLjQxOGMtMS45NjktMC45NjgtNC4zNzQtMC4xODctNS4zNjYsMS43ODlsLTgsMTUuOTk5Yy0wLjk4NCwxLjk3Ni0wLjE4Nyw0LjM3OCwxLjc4OSw1LjM2NiAgICBjMC41NzgsMC4yODUsMS4xODcsMC40MjIsMS43ODksMC40MjJjMS40NjEsMCwyLjg3NS0wLjgwOSwzLjU3OC0yLjIxMWw3Ljk5OS0xNS45OTkgICAgQzE5Mi41NDIsNDMuODA4LDE5MS43NDYsNDEuNDA2LDE4OS43NjksNDAuNDE4eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTIwNy43MDUsMTQ2LjUyOGwtMzEuMzMzLTc5Ljk5MmMtMC40ODUtMS4yMy0xLjUzOS0yLjE0NC0yLjgyOC0yLjQ0MWMtMS4yOTctMC4zMDUtMi42NDgsMC4wNjMtMy42MDksMC45NjFsLTguNjYzLDggICAgYy0xLjA3OCwwLjk5Mi0xLjUyNCwyLjQ4OC0xLjE3MiwzLjkwNmwyMy45OTgsOTUuOTljMC40NTMsMS44MiwyLjA4NiwzLjAzMSwzLjg4MiwzLjAzMWMwLjMyMSwwLDAuNjQ5LTAuMDM5LDAuOTctMC4xMjIgICAgYzIuMTQ4LTAuNTM1LDMuNDQ1LTIuNzA3LDIuOTE0LTQuODQ3bC0yMy40MjgtOTMuNjlsMi42MjUtMi40MjJsMjkuMTkyLDc0LjU0YzAuODA1LDIuMDU4LDMuMTA5LDMuMDg1LDUuMTg3LDIuMjY1ICAgIEMyMDcuNDk0LDE1MC45MDMsMjA4LjUxLDE0OC41ODMsMjA3LjcwNSwxNDYuNTI4eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTMyOC40MDUsMzYzLjI3NmMtMTAuMTk1LTU4LjU0OS0xNy43MjUtMTE2LjM0LTE3Ljg1LTExNy4yNDJjLTAuNDE0LTEuOTA2LTEwLjk5OS00Ny4yMy05Ni42Ny05My41NjkgICAgYy0xLjgyOC0wLjk3Ny00LjA5My0wLjQyNi01LjIzNCwxLjNsLTMxLjk5Nyw0Ny45OTZjLTAuODc1LDEuMzE2LTAuODk5LDMuMDI3LTAuMDQ3LDQuMzYzbDE5LjEwNywzMC4wNzVsLTMuNzI2LDcxLjUzNiAgICBsLTcuOTk5LDEzNS45ODZjLTAuMDg2LDEuMzgzLDAuNTYzLDIuNzExLDEuNjk1LDMuNTA4YzAuNjc5LDAuNDc3LDEuNDg0LDAuNzI3LDIuMjk2LDAuNzI3YzAuNTMyLDAsMS4wNzEtMC4xMDksMS41NzgtMC4zMjkgICAgbDU1Ljk5NS0yMy45OThjMS4zOTktMC41OTQsMi4zMjgtMS45MzcsMi40MTQtMy40NTJzLTAuNzAzLTIuOTUzLTIuMDMxLTMuNzAzYy0xLjc2NS0xLTMuODE5LTIuNTc4LTUuMDQ2LTMuOTUzICAgIGM4Ljg2Ni02LjQ1Miw0OS4wMjYtMjcuMjE2LDg1LjMzNS00NC45NjRDMzI3LjgyNywzNjYuNzc2LDMyOC43MTcsMzY1LjAyNiwzMjguNDA1LDM2My4yNzZ6IE0yMzIuMTI0LDQxMy4wMzggICAgYzAuNjMzLDIuMjY2LDIuMTk2LDQuMzA1LDMuOTE0LDUuOTY5bC00My42ODMsMTguNzI1bDcuNjE2LTEyOS41NThsMy43OTctNzIuODMzYzAuMDQ3LTAuODI5LTAuMTcyLTEuNjUzLTAuNjE3LTIuMzUyICAgIGwtMTguMzk2LTI4Ljk1OGwyOC41MTktNDIuNzc3Yzc5LjA1NSw0My43MjYsODkuMzU5LDg2LjA0Niw4OS4zOTgsODYuMTM2YzAuMDc4LDAuNTY3LDcuMzc0LDU2LjU5NiwxNy4zNDIsMTE0LjMwMSAgICBDMjMwLjA3Nyw0MDUuNzM0LDIzMS4wNjksNDA5LjI4OCwyMzIuMTI0LDQxMy4wMzh6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU5Ljk3NCw1NS45OTVjLTIuMjExLDAtNCwxLjc4OS00LDR2MzEuOTk2YzAsMi4yMTEsMS43ODksNCw0LDRzNC0xLjc4OSw0LTMuOTk5VjU5Ljk5NSAgICBDMjYzLjk3NCw1Ny43ODQsMjYyLjE4NSw1NS45OTUsMjU5Ljk3NCw1NS45OTV6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzAzLjAzMyw3My40MjNjLTEuNDE0LTEuNjkxLTMuOTQ1LTEuOTI2LTUuNjMzLTAuNDk2bC0yMy45OTcsMjAuMTE1Yy0xLjY5NSwxLjQyMS0xLjkxNCwzLjk0MS0wLjQ5Miw1LjYzNiAgICBjMC43ODksMC45NDIsMS45MjEsMS40MywzLjA2MiwxLjQzYzAuOTA2LDAsMS44MTktMC4zMDUsMi41Ny0wLjkzM2wyMy45OTgtMjAuMTE1QzMwNC4yMzUsNzcuNjM4LDMwNC40NTQsNzUuMTE4LDMwMy4wMzMsNzMuNDIzeiAgICAiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yOTIuNTczLDExMi40NzhjLTAuNjQxLTAuMzQ4LTE1Ljc3Mi04LjQ4OC0zMi41OTktOC40ODhjLTE2LjgxMiwwLTMyLjEyMyw4LjEzMi0zMi43NzEsOC40NzYgICAgYy0xLjkzNywxLjA0Ny0yLjY3MSwzLjQ2OS0xLjYyNSw1LjQxNGMwLjcxOSwxLjM0MywyLjEwMSwyLjEwOSwzLjUzMSwyLjEwOWMwLjYzMywwLDEuMjgyLTAuMTUzLDEuODg0LTAuNDc3ICAgIGMwLjE0MS0wLjA3NCwxNC4yMzMtNy41MjMsMjguOTgyLTcuNTIzYzE0Ljc0MSwwLDI4LjYzNyw3LjQ0MSwyOC43NzgsNy41MTVjMS45MzgsMS4wNTUsNC4zNjcsMC4zMjUsNS40MjItMS42MDUgICAgQzI5NS4yMjksMTE1Ljk1OCwyOTQuNTExLDExMy41MzIsMjkyLjU3MywxMTIuNDc4eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTMwNy45NjksMTAzLjk4OWgtMjAuMjY0Yy0yLjIxMSwwLTMuOTk5LDEuNzg5LTMuOTk5LDRzMS43ODgsNCwzLjk5OSw0aDIwLjI2NGMyLjIxMSwwLDQtMS43ODksNC00ICAgIFMzMTAuMTgsMTAzLjk4OSwzMDcuOTY5LDEwMy45ODl6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjQ2LjU0NSw5My4wNDFsLTIzLjk5OC0yMC4xMTVjLTEuNjk1LTEuNDE4LTQuMjExLTEuMTg3LTUuNjMyLDAuNDk2Yy0xLjQyMiwxLjY5Ni0xLjIwMyw0LjIxNSwwLjQ5Miw1LjYzNyAgICBsMjMuOTk4LDIwLjExNWMwLjc1LDAuNjI5LDEuNjY0LDAuOTM0LDIuNTcsMC45MzRjMS4xNDEsMCwyLjI3My0wLjQ4OCwzLjA2Mi0xLjQzMUMyNDguNDU5LDk2Ljk4MiwyNDguMjQsOTQuNDYyLDI0Ni41NDUsOTMuMDQxeiAgICAiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMzIuMjM0LDEwMy45ODloLTIwLjI1NmMtMi4yMTEsMC00LDEuNzg5LTQsNHMxLjc4OSw0LDQsNGgyMC4yNTZjMi4yMTEsMCw0LTEuNzg5LDQtNFMyMzQuNDQ1LDEwMy45ODksMjMyLjIzNCwxMDMuOTg5eiAgICAiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yOTEuOTcxLDEyMS4zNzFjLTIuMjExLDAtNCwxLjc4OS00LDR2NTQuNjEyYzAsMi4yMSwxLjc4OSwzLjk5OSw0LDMuOTk5czQtMS43ODksNC0zLjk5OXYtNTQuNjEyICAgIEMyOTUuOTcxLDEyMy4xNiwyOTQuMTgyLDEyMS4zNzEsMjkxLjk3MSwxMjEuMzcxeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM0Mi4zNjUsMjMyLjc3N2MtMS43NS0xLjMxMi00LjI2Ni0wLjk2OC01LjYwMiwwLjgwMWwtMTcuOTk4LDIzLjk5OGMtMS4zMiwxLjc2Ni0wLjk2MSw0LjI3NCwwLjgwNSw1LjU5NyAgICBjMC43MTgsMC41MzksMS41NjIsMC44MDEsMi4zOTgsMC44MDFjMS4yMTEsMCwyLjQxMy0wLjU1MSwzLjIwMy0xLjYwMmwxNy45OTktMjMuOTk3ICAgIEMzNDQuNDg5LDIzNi42MDksMzQ0LjEzLDIzNC4xMDEsMzQyLjM2NSwyMzIuNzc3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM2NS4yMjksMjQwLjE4M2wtMjMuOTk3LTcuOTk5Yy0yLjA4Ni0wLjY4Ny00LjM2LDAuNDI5LTUuMDYyLDIuNTI3Yy0wLjY5NiwyLjA5OCwwLjQzNiw0LjM2MywyLjUzLDUuMDU4bDIzLjk5OCw4ICAgIGMwLjQyMiwwLjE0MSwwLjg0NCwwLjIwNywxLjI2NSwwLjIwN2MxLjY3MiwwLDMuMjM1LTEuMDU5LDMuNzk3LTIuNzM1QzM2OC40NTYsMjQzLjE0MywzNjcuMzIzLDI0MC44NzgsMzY1LjIyOSwyNDAuMTgzeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM2Ni4yOTEsMjQwLjcyMmMtMS44MDUtMS4yODQtNC4zMDQtMC44NzEtNS41ODUsMC45M2wtMzkuOTk2LDU1Ljk5MWMtMS4yODEsMS43OTctMC44NjcsNC4yOTYsMC45Myw1LjU3NyAgICBjMC43MTEsMC41MDgsMS41MjMsMC43NSwyLjMyOCwwLjc1YzEuMjQxLDAsMi40NzYtMC41NzgsMy4yNTctMS42NzJsMzkuOTk2LTU1Ljk5OCAgICBDMzY4LjUwMiwyNDQuNTAzLDM2OC4wODgsMjQyLjAwMywzNjYuMjkxLDI0MC43MjJ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzU0LjA5OCwyODIuMjg1Yy0wLjkxNC0xLjk2OC0zLjIxOC0yLjgxMi01LjIzNC0xLjkzN2MtMS45OTMsMC44ODMtMi44OTksMy4yMzMtMi4wNTUsNS4yNDEgICAgYzAuMDU1LDAuMTMzLDEuMzEyLDMuMjM1LTAuNjcyLDcuMjE4Yy0xLjUzMSwzLjA1NS02LjE1NSwzLjE2NC02LjE3MSwzLjE2NGMtMi4yMTEsMC0zLjk5OSwxLjc4OS0zLjk5OSw0ICAgIGMwLDIuMjEsMS43ODgsMy45OTksMy45OTksMy45OTljMy41MzksMCwxMC4zMzUtMS41OTQsMTMuMzI3LTcuNTkyQzM1Ni45OCwyODguOTY1LDM1NC40MDMsMjgyLjk1NywzNTQuMDk4LDI4Mi4yODV6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzI3LjA5MiwyMzMuNDY5bC0zMS45OTYtMzkuOTg4Yy0xLjM3NS0xLjcyMi0zLjg4My0yLjAwMy01LjYyNS0wLjYyNWMtMS43MjcsMS4zODMtMiwzLjg5OC0wLjYyNSw1LjYyNWwzMS45OTcsMzkuOTg4ICAgIGMwLjc4OSwwLjk4OSwxLjk1MywxLjUsMy4xMjUsMS41YzAuODc0LDAsMS43NTctMC4yODUsMi40OTktMC44NzVDMzI4LjE5NCwyMzcuNzExLDMyOC40NjcsMjM1LjE5NiwzMjcuMDkyLDIzMy40Njl6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjIxLjk3NiwyMDguNTE1Yy0xLjkyOS0xLjExLTQuMzY3LTAuNDUtNS40NiwxLjQ2NGMtMTAuMDg1LDE3LjQ3NS0xOC4wNjEsMjEuMzU4LTE4LjMxMSwyMS40NzUgICAgYy0yLjAwNywwLjg1OS0yLjk2LDMuMTY4LTIuMTMyLDUuMTkxYzAuNjMzLDEuNTUsMi4xMjUsMi40ODgsMy43MDMsMi40ODhjMC41MDgsMCwxLjAxNi0wLjA5NCwxLjUxNS0wLjI5NyAgICBjMS4wMzktMC40MjUsMTAuNTUzLTQuNzUzLDIyLjE0Ni0yNC44NTdDMjI0LjU0NiwyMTIuMDY1LDIyMy44OSwyMDkuNjIsMjIxLjk3NiwyMDguNTE1eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTMyMy45NjgsNDcxLjk1NEgxODcuOThjLTIuMjEsMC0zLjk5OSwxLjc4OS0zLjk5OSw0czEuNzg5LDQsMy45OTksNGgxMzUuOTg4YzIuMjEsMCwzLjk5OS0xLjc4OSwzLjk5OS00ICAgIFMzMjYuMTc4LDQ3MS45NTQsMzIzLjk2OCw0NzEuOTU0eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE4OS43NjksNDcyLjM3NmMtMS45NjktMC45NjktNC4zNzQtMC4xODgtNS4zNjYsMS43ODlsLTgsMTUuOTk4Yy0wLjk4NCwxLjk3Ni0wLjE4Nyw0LjM4MywxLjc4OSw1LjM2NyAgICBjMC41NzgsMC4yODEsMS4xODcsMC40MjIsMS43ODksMC40MjJjMS40NjEsMCwyLjg3NS0wLjgxMywzLjU3OC0yLjIxMWw3Ljk5OS0xNS45OTggICAgQzE5Mi41NDIsNDc1Ljc2NywxOTEuNzQ2LDQ3My4zNiwxODkuNzY5LDQ3Mi4zNzZ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM5Ljk2Niw0ODcuOTUySDE3MS45ODJjLTIuMjExLDAtNCwxLjc4OS00LDRzMS43ODksNCw0LDRoMTY3Ljk4NGMyLjIxMSwwLDMuOTk5LTEuNzg5LDMuOTk5LTQgICAgUzM0Mi4xNzcsNDg3Ljk1MiwzMzkuOTY2LDQ4Ny45NTJ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM1LjU0NSw0OTAuMTYzbC04LTE1Ljk5OGMtMC45OTItMS45NzctMy4zODMtMi43NjYtNS4zNjYtMS43ODljLTEuOTc3LDAuOTg0LTIuNzczLDMuMzktMS43ODksNS4zNjdsNy45OTksMTUuOTk4ICAgIGMwLjcwMywxLjM5OSwyLjExNywyLjIxMSwzLjU3OCwyLjIxMWMwLjYwMiwwLDEuMjExLTAuMTQxLDEuNzg5LTAuNDIyQzMzNS43MzMsNDk0LjU0NiwzMzYuNTI4LDQ5Mi4xNCwzMzUuNTQ1LDQ5MC4xNjN6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjY3Ljk4LDIzOS45OGMtMC4wMDgsMC0wLjAwOCwwLTAuMDA4LDBjLTIuMjAzLDAtMy45OTEsMS43ODUtMy45OTksMy45OTJjMCwwLjYxNy0wLjc0Miw2Mi4wOTktNTMuOTgsOTIuNTI2ICAgIGMtMS45MjIsMS4wOTQtMi41ODUsMy41MzEtMS40OTIsNS40NTJjMC43NDMsMS4yOTcsMi4wOTQsMi4wMTYsMy40NzcsMi4wMTZjMC42OCwwLDEuMzYtMC4xNzIsMS45ODQtMC41MzEgICAgYzU3LjM1NC0zMi43NjMsNTguMDEtOTYuNzUyLDU4LjAxLTk5LjQ1OUMyNzEuOTcyLDI0MS43NjksMjcwLjE4MywyMzkuOTgsMjY3Ljk4LDIzOS45OHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zMTUuOTY5LDM3NS45NjNjLTIuMjExLDAtNCwxLjc4OS00LDR2NzkuOTkyYzAsMi4yMSwxLjc4OSwzLjk5OSw0LDMuOTk5YzIuMjEsMCwzLjk5OS0xLjc4OSwzLjk5OS0zLjk5OXYtNzkuOTkyICAgIEMzMTkuOTY4LDM3Ny43NTIsMzE4LjE3OSwzNzUuOTYzLDMxNS45NjksMzc1Ljk2M3oiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yOTEuOTcxLDM5MS45NjFjLTIuMjExLDAtNCwxLjc4OS00LDR2NjMuOTk0YzAsMi4yMSwxLjc4OSwzLjk5OSw0LDMuOTk5czQtMS43ODksNC0zLjk5OXYtNjMuOTk0ICAgIEMyOTUuOTcxLDM5My43NSwyOTQuMTgyLDM5MS45NjEsMjkxLjk3MSwzOTEuOTYxeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTI2Ny45NzMsNDA3Ljk2Yy0yLjIxMSwwLTMuOTk5LDEuNzg4LTMuOTk5LDMuOTk5djQ3Ljk5NmMwLDIuMjEsMS43ODgsMy45OTksMy45OTksMy45OTljMi4yMTEsMCw0LTEuNzg5LDQtMy45OTkgICAgdi00Ny45OTZDMjcxLjk3Myw0MDkuNzQ4LDI3MC4xODQsNDA3Ljk2LDI2Ny45NzMsNDA3Ljk2eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTI0My45NzUsNDMxLjk1N2MtMi4yMTEsMC00LDEuNzg5LTQsNHYyMy45OThjMCwyLjIxLDEuNzg5LDMuOTk5LDQsMy45OTlzNC0xLjc4OSwzLjk5OS0zLjk5OXYtMjMuOTk4ICAgIEMyNDcuOTc0LDQzMy43NDYsMjQ2LjE4NSw0MzEuOTU3LDI0My45NzUsNDMxLjk1N3oiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMTkuOTc3LDQzOS45NTdjLTIuMjExLDAtNCwxLjc4OC00LDMuOTk5djE1Ljk5OWMwLDIuMjEsMS43ODksMy45OTksNCwzLjk5OXM0LTEuNzg5LDQtMy45OTl2LTE1Ljk5OSAgICBDMjIzLjk3Nyw0NDEuNzQ1LDIyMi4xODgsNDM5Ljk1NywyMTkuOTc3LDQzOS45NTd6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTk1Ljk4LDQ0Ny45NTZjLTIuMjExLDAtNCwxLjc4OC00LDMuOTk5djhjMCwyLjIxLDEuNzksMy45OTksNCwzLjk5OXMzLjk5OS0xLjc4OSw0LTMuOTk5di04ICAgIEMxOTkuOTgsNDQ5Ljc0NCwxOTguMTkxLDQ0Ny45NTYsMTk1Ljk4LDQ0Ny45NTZ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjM1Ljk3NiwzODMuOTYyYy0yLjIxMSwwLTQsMS43ODktNCw0djIzLjk5N2MwLDIuMjExLDEuNzksNCw0LDRjMi4yMSwwLDMuOTk5LTEuNzg5LDQtNHYtMjMuOTk3ICAgIEMyMzkuOTc2LDM4NS43NTEsMjM4LjE4NywzODMuOTYyLDIzNS45NzYsMzgzLjk2MnoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNzUuOTczLDE2Ny45ODNjLTIuMjExLDAtNCwxLjc5LTQsNHY4YzAsMi4yMSwxLjc4OSwzLjk5OSw0LDMuOTk5YzIuMjEsMCwzLjk5OS0xLjc4OSwzLjk5OS0zLjk5OXYtOCAgICBDMjc5Ljk3MiwxNjkuNzcyLDI3OC4xODMsMTY3Ljk4MywyNzUuOTczLDE2Ny45ODN6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjgzLjk3MiwzMzUuOTY3Yy0yLjIxMSwwLTQsMS43ODktNCw0djQ0LjI4NGMwLDIuMjExLDEuNzg5LDQsNCw0YzIuMjEsMCwzLjk5OS0xLjc4OSwzLjk5OS00di00NC4yODQgICAgQzI4Ny45NzEsMzM3Ljc1NiwyODYuMTgyLDMzNS45NjcsMjgzLjk3MiwzMzUuOTY3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE3MS45ODIsNDg3Ljk1MmMtMi4yMTEsMC00LDEuNzg5LTQsNHYxNS45OThjMCwyLjIxMSwxLjc4OSw0LDQsNHM0LTEuNzg5LDQtNHYtMTUuOTk4ICAgIEMxNzUuOTgyLDQ4OS43NDEsMTc0LjE5Myw0ODcuOTUyLDE3MS45ODIsNDg3Ljk1MnoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zMzkuOTY2LDQ4Ny45NTJjLTIuMjExLDAtMy45OTksMS43ODktMy45OTksNHYxNS45OThjMCwyLjIxMSwxLjc4OCw0LDMuOTk5LDRzMy45OTktMS43ODksMy45OTktNHYtMTUuOTk4ICAgIEMzNDMuOTY1LDQ4OS43NDEsMzQyLjE3Nyw0ODcuOTUyLDMzOS45NjYsNDg3Ljk1MnoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        </div>
        <div className="response-topic-small">
          New York
        </div>
      </div>
      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQzNS4xODUgNDM1LjE4NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM1LjE4NSA0MzUuMTg1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDMxLjE4NSwyMTguMTg3YzIuMjA5LDAsNC0xLjc5MSw0LTRjMC0yLjIwOS0xLjc5MS00LTQtNGgtMjIuNTh2LTExLjAwNmM3LjI3LDEuNjMyLDE0LjgyNSwyLjQ5OSwyMi41OCwyLjQ5OSAgIGMyLjIwOSwwLDQtMS43OTEsNC00cy0xLjc5MS00LTQtNGMtNTIuNCwwLTk1LjAyOS00Mi42My05NS4wMjktOTUuMDI5YzAtMi4yMDktMS43OTEtNC00LTRoLTMuNzY4VjgxLjE3NmMwLTIuMjA5LTEuNzkxLTQtNC00ICAgYy0yLjIwOSwwLTQsMS43OTEtNCw0djEzLjQ3NmgtMy43NjdjLTIuMjA5LDAtNCwxLjc5MS00LDRjMCw1Mi4zOTktNDIuNjMsOTUuMDI5LTk1LjAyOSw5NS4wMjkgICBjLTUyLjM5OSwwLTk1LjAyOS00Mi42My05NS4wMjktOTUuMDI5YzAtMi4yMDktMS43OTEtNC00LTRoLTMuNzY3VjgxLjE3NmMwLTIuMjA5LTEuNzkxLTQtNC00cy00LDEuNzkxLTQsNHYxMy40NzZoLTMuNzY3ICAgYy0yLjIwOSwwLTQsMS43OTEtNCw0YzAsNTIuMzk5LTQyLjYzLDk1LjAyOS05NS4wMjksOTUuMDI5Yy0yLjIwOSwwLTQsMS43OTEtNCw0czEuNzkxLDQsNCw0YzcuNzU5LDAsMTUuMzE3LTAuODY4LDIyLjU5LTIuNTAxICAgdjExLjAwOEg0Yy0yLjIwOSwwLTQsMS43OTEtNCw0YzAsMi4yMDksMS43OTEsNCw0LDRoOTUuMDI5djguNUg0Yy0yLjIwOSwwLTQsMS43OTEtNCw0YzAsMi4yMDksMS43OTEsNCw0LDRoOTUuMDI5djUyLjJoLTIuNzkxICAgYy0yLjIwOSwwLTQsMS43OTEtNCw0djI4LjY2OWMtMy42NDIsMC4wNzktNy4zMDgtMS4xOTktMTAuMTQ2LTMuODU3Yy04LjU4LTguMDM3LTIyLjAyMi04LjAzNy0zMC42MDMtMC4wMDEgICBjLTUuNTE0LDUuMTY2LTE0LjE1Miw1LjE2NC0xOS42NjUsMGMtMS42MTItMS41MS00LjE0My0xLjQyNy01LjY1NCwwLjE4NmMtMS41MSwxLjYxMi0xLjQyNyw0LjE0NCwwLjE4NSw1LjY1NCAgIGM4LjU4LDguMDM2LDIyLjAyMiw4LjAzNSwzMC42MDMtMC4wMDFjNS41MTMtNS4xNjQsMTQuMTUxLTUuMTY1LDE5LjY2NSwwLjAwMWM4LjU4MSw4LjAzNiwyMi4wMjMsOC4wMzUsMzAuNjAzLTAuMDAxICAgYzUuNTE0LTUuMTY0LDE0LjE1MS01LjE2NSwxOS42NjQsMC4wMDFjOC41ODIsOC4wMzYsMjIuMDIzLDguMDM1LDMwLjYwMy0wLjAwMWM1LjUxNC01LjE2NCwxNC4xNTEtNS4xNjUsMTkuNjY1LDAuMDAxICAgYzguNTgxLDguMDM2LDIyLjAyMyw4LjAzNSwzMC42MDItMC4wMDFjNS41MTMtNS4xNjMsMTQuMTUxLTUuMTY2LDE5LjY2NSwwLjAwMWM4LjU4Miw4LjAzNSwyMi4wMjIsOC4wMzYsMzAuNjAzLTAuMDAxICAgYzUuNTE0LTUuMTY1LDE0LjE1MS01LjE2NCwxOS42NjUsMC4wMDFjOC41ODEsOC4wMzYsMjIuMDIzLDguMDM1LDMwLjYwMi0wLjAwMWM1LjUxNS01LjE2NSwxNC4xNTItNS4xNjQsMTkuNjY1LDAuMDAxICAgYzguNTgxLDguMDM2LDIyLjAyMyw4LjAzNSwzMC42MDMtMC4wMDFjNS41MTUtNS4xNjUsMTQuMTUyLTUuMTY0LDE5LjY2NSwwLjAwMWM0LjI5LDQuMDE4LDkuNzk2LDYuMDI2LDE1LjMwMiw2LjAyNiAgIGM1LjUwNSwwLDExLjAxMS0yLjAwOSwxNS4zMDEtNi4wMjZjMS42MTItMS41MTEsMS42OTUtNC4wNDIsMC4xODUtNS42NTRjLTEuNTEtMS42MTEtNC4wNDEtMS42OTMtNS42NTQtMC4xODYgICBjLTUuNTEyLDUuMTY2LTE0LjE0OSw1LjE2NS0xOS42NjUsMC4wMDFjLTguNTc5LTguMDM3LTIyLjAyMy04LjAzOC0zMC42MDMtMC4wMDFjLTIuODM4LDIuNjYtNi41MDQsMy45MzktMTAuMTQ2LDMuODZ2LTI4LjY3MSAgIGMwLTIuMjA5LTEuNzkxLTQtNC00aC0yLjc5MnYtNTIuMmg5NS4wMjljMi4yMDksMCw0LTEuNzkxLDQtNGMwLTIuMjA5LTEuNzkxLTQtNC00aC05NS4wMjl2LTguNUg0MzEuMTg1eiBNNDAwLjYwNCwyMTAuMTg3aC0xOC41OSAgIHYtMjEuMDE3YzUuODc2LDMuMjA1LDEyLjA5Niw1Ljg1NSwxOC41OSw3Ljg3N1YyMTAuMTg3eiBNMzc0LjAxNSwxODQuMzIxdjI1Ljg2NmgtMTguNTkydi00MS43OTIgICBDMzYwLjk2MSwxNzQuNDA2LDM2Ny4yMDEsMTc5Ljc1OSwzNzQuMDE1LDE4NC4zMjF6IE0zNDcuNDIzLDE1OC41NzR2NTEuNjEzaC0xMS4yNjd2LTcxLjczOCAgIEMzMzkuMTYyLDE0NS42MDIsMzQyLjk1NCwxNTIuMzQ3LDM0Ny40MjMsMTU4LjU3NHogTTMxMi42MjEsMjI2LjY4N0gxMjIuNTYzdi04LjVoMTkwLjA1OFYyMjYuNjg3eiBNMTA3LjAyOSwxMDIuNjUxaDcuNTM0ICAgdjE4NC4yMzNoLTcuNTM0VjEwMi42NTF6IE0yNDguMTc4LDIxMC4xODd2LTEzLjE0MmM2LjQ5NC0yLjAyMiwxMi43MTQtNC42NzMsMTguNTktNy44Nzh2MjEuMDJIMjQ4LjE3OHogTTI0MC4xNzgsMjEwLjE4N2gtMTguNTkgICB2LTguNTkyYzYuMzYtMC4yNDQsMTIuNTczLTEuMDY0LDE4LjU5LTIuNDE1VjIxMC4xODd6IE0yMTMuNTg4LDIxMC4xODdoLTE4LjU4di0xMS4wMDdjNi4wMTMsMS4zNTEsMTIuMjI0LDIuMTcxLDE4LjU4LDIuNDE1ICAgVjIxMC4xODd6IE0xODcuMDA4LDIxMC4xODdoLTE4LjU5di0yMS4wMmM1Ljg3NiwzLjIwNSwxMi4wOTYsNS44NTUsMTguNTksNy44NzlWMjEwLjE4N3ogTTMyMC42MjEsMTAyLjY1MWg3LjUzNHYxODQuMjMzaC03LjUzNCAgIFYxMDIuNjUxeiBNMzEyLjYyMSwyMTAuMTg3aC0xMS4yNjR2LTUxLjYxOGM0LjQ2Ny02LjIyNyw4LjI1OC0xMi45NjksMTEuMjY0LTIwLjEyVjIxMC4xODd6IE0yOTMuMzU3LDE2OC4zOTF2NDEuNzk3aC0xOC41OSAgIHYtMjUuODdDMjgxLjU4MSwxNzkuNzU1LDI4Ny44MiwxNzQuNDAyLDI5My4zNTcsMTY4LjM5MXogTTE2MC40MTcsMTg0LjMxOHYyNS44NjloLTE4LjU5MXYtNDEuNzk3ICAgQzE0Ny4zNjQsMTc0LjQwMiwxNTMuNjA0LDE3OS43NTYsMTYwLjQxNywxODQuMzE4eiBNMTMzLjgyNiwxNTguNTY4djUxLjYxOWgtMTEuMjYzdi03MS43MzggICBDMTI1LjU2OSwxNDUuNiwxMjkuMzYsMTUyLjM0MiwxMzMuODI2LDE1OC41Njh6IE03OS43NywxNjguMzg2djQxLjgwMkg2MS4xOHYtMjUuODczQzY3Ljk5MywxNzkuNzUxLDc0LjIzMywxNzQuMzk3LDc5Ljc3LDE2OC4zODYgICB6IE0zNC41OSwxOTcuMDQ1YzYuNDk0LTIuMDIzLDEyLjcxNC00LjY3NCwxOC41OS03Ljg4djIxLjAyMkgzNC41OVYxOTcuMDQ1eiBNODcuNzcsMjEwLjE4N3YtNTEuNjI1ICAgYzQuNDY1LTYuMjI1LDguMjU0LTEyLjk2NSwxMS4yNTktMjAuMTEzdjcxLjczOEg4Ny43N3ogTTEwMS43NTYsMzE1LjY5OGMtMC40ODEsMC40NTEtMC45OTQsMC44NDgtMS41MTksMS4yMnYtMjIuMDNoMjEuMTJ2MTUuMjA0ICAgQzExNC41MTYsMzA4Ljc2NiwxMDcuMTcsMzEwLjYyOSwxMDEuNzU2LDMxNS42OTh6IE0zMzMuNDI5LDMxNS42OTljLTUuNDEyLTUuMDctMTIuNzU5LTYuOTM1LTE5LjYwMS01LjYwN3YtMTUuMjA0aDIxLjExOXYyMi4wMzEgICBDMzM0LjQyMiwzMTYuNTQ3LDMzMy45MSwzMTYuMTUsMzMzLjQyOSwzMTUuNjk5eiBNMzA5LjgyOCwyODYuODg4Yy0yLjIwOSwwLTQsMS43OTEtNCw0djIyLjQ2OCAgIGMtMS4wNDgsMC42ODktMi4wNTksMS40NTktMy4wMDIsMi4zNDNjLTUuNTEyLDUuMTY2LTE0LjE1LDUuMTY1LTE5LjY2NSwwLjAwMWMtOC41NzgtOC4wMzctMjIuMDIyLTguMDM4LTMwLjYwMy0wLjAwMSAgIGMtNS41MTQsNS4xNjYtMTQuMTUxLDUuMTYzLTE5LjY2NSwwLjAwMWMtOC41NzktOC4wMzgtMjIuMDIyLTguMDM2LTMwLjYwMi0wLjAwMWMtNS41MTQsNS4xNjYtMTQuMTUyLDUuMTYzLTE5LjY2NSwwLjAwMSAgIGMtOC41NzktOC4wMzctMjIuMDIyLTguMDM3LTMwLjYwMy0wLjAwMWMtNS41MTMsNS4xNjQtMTQuMTUxLDUuMTY0LTE5LjY2NSwwLjAwMWMtMC45NDMtMC44ODQtMS45NTQtMS42NTMtMy4wMDEtMi4zNDJ2LTIyLjQ3ICAgYzAtMi4yMDktMS43OTEtNC00LTRoLTIuNzk0di01Mi4yaDE5MC4wNTh2NTIuMkgzMDkuODI4eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPHBhdGggZD0iTTQwMy4zNjEsMzQ2LjE0MmMtNS41MTIsNS4xNjUtMTQuMTQ5LDUuMTY2LTE5LjY2NSwwLjAwMWMtOC41NzktOC4wMzgtMjIuMDIzLTguMDM3LTMwLjYwMy0wLjAwMSAgIGMtNS41MTIsNS4xNjUtMTQuMTQ5LDUuMTY2LTE5LjY2NSwwLjAwMWMtOC41NzgtOC4wMzgtMjIuMDIzLTguMDM3LTMwLjYwMy0wLjAwMWMtNS41MTIsNS4xNjUtMTQuMTUsNS4xNjYtMTkuNjY1LDAuMDAxICAgYy04LjU3OC04LjAzOC0yMi4wMjItOC4wMzctMzAuNjAzLTAuMDAxYy01LjUxNCw1LjE2Ni0xNC4xNTEsNS4xNjMtMTkuNjY1LDAuMDAxYy04LjU3OS04LjAzOC0yMi4wMjItOC4wMzUtMzAuNjAyLTAuMDAxICAgYy01LjUxNCw1LjE2NS0xNC4xNTIsNS4xNjQtMTkuNjY1LDAuMDAxYy04LjU3OS04LjAzNy0yMi4wMjItOC4wMzYtMzAuNjAzLTAuMDAxYy01LjUxMyw1LjE2NC0xNC4xNTEsNS4xNjMtMTkuNjY1LDAuMDAxICAgYy04LjU3OS04LjAzNy0yMi4wMjEtOC4wMzYtMzAuNjAzLTAuMDAxYy01LjUxMyw1LjE2NC0xNC4xNTEsNS4xNjMtMTkuNjY1LDAuMDAxYy04LjU4LTguMDM3LTIyLjAyMi04LjAzNi0zMC42MDMtMC4wMDEgICBjLTUuNTE0LDUuMTY1LTE0LjE1Miw1LjE2NS0xOS42NjUsMGMtMS42MTItMS41MS00LjE0My0xLjQyNy01LjY1NCwwLjE4NmMtMS41MSwxLjYxMi0xLjQyNyw0LjE0MywwLjE4NSw1LjY1NCAgIGM4LjU4LDguMDM1LDIyLjAyMiw4LjAzNiwzMC42MDMtMC4wMDFjNS41MTMtNS4xNjMsMTQuMTUxLTUuMTY2LDE5LjY2NSwwLjAwMWM4LjU4MSw4LjAzNSwyMi4wMjMsOC4wMzYsMzAuNjAzLTAuMDAxICAgYzUuNTE0LTUuMTY1LDE0LjE1MS01LjE2NCwxOS42NjQsMC4wMDFjOC41ODIsOC4wMzUsMjIuMDIzLDguMDM2LDMwLjYwMy0wLjAwMWM1LjUxNC01LjE2MywxNC4xNTEtNS4xNjYsMTkuNjY1LDAuMDAxICAgYzguNTgxLDguMDM1LDIyLjAyMyw4LjAzNiwzMC42MDItMC4wMDFjNS41MTMtNS4xNjQsMTQuMTUxLTUuMTY1LDE5LjY2NSwwLjAwMWM4LjU4MSw4LjAzNCwyMi4wMjEsOC4wMzcsMzAuNjAzLTAuMDAxICAgYzUuNTE0LTUuMTY0LDE0LjE1MS01LjE2NSwxOS42NjUsMC4wMDFjOC41ODEsOC4wMzYsMjIuMDIzLDguMDM1LDMwLjYwMi0wLjAwMWM1LjUxNS01LjE2NCwxNC4xNTItNS4xNjUsMTkuNjY1LDAuMDAxICAgYzguNTgxLDguMDM2LDIyLjAyMyw4LjAzNSwzMC42MDMtMC4wMDFjNS41MTUtNS4xNjQsMTQuMTUyLTUuMTY1LDE5LjY2NSwwLjAwMWM0LjI5LDQuMDE3LDkuNzk2LDYuMDI2LDE1LjMwMiw2LjAyNiAgIGM1LjUwNSwwLDExLjAxMS0yLjAwOSwxNS4zMDEtNi4wMjZjMS42MTItMS41MTEsMS42OTUtNC4wNDIsMC4xODUtNS42NTRDNDA3LjUwNiwzNDQuNzE3LDQwNC45NzUsMzQ0LjYzNSw0MDMuMzYxLDM0Ni4xNDJ6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
        <div className="response-topic-small bay-area-small-font">
          San Francisco
        </div>
      </div>
      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQyNS4zMzMgNDI1LjMzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDI1LjMzMyA0MjUuMzMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDI1LjE1OCwyMjMuNjY0Yy0wLjQ0My0xLjQ0Ny0xLjY2Ni0yLjUyMS0zLjE1OS0yLjc3NGMtNi43NTMtMS4xNC0xMy43NDctMS43MTgtMjAuNzg2LTEuNzE4ICAgYy0yOC45ODgsMC01MS41MTQsOS41NC01Ny45MTksMTIuNTYxYy0zLjMwNi0xLjUxMy0xMC43ODItNC43NTgtMTkuNDk5LTcuNDMxYzcuOTc1LTE0LjA5NCwxMy45NDctMjQuNDUsMTYuOTUzLTI5LjM5MyAgIGMwLjY3LTEuMTAxLDAuNzY4LTIuNDU5LDAuMjYzLTMuNjQ1Yy0wLjUwNi0xLjE4Ny0xLjU1Mi0yLjA1Ny0yLjgxMS0yLjMzN2MtMjkuNjQxLTYuNjA3LTYyLjcwNC0yLjE5OC05OC4yNywxMy4xICAgYy0wLjAwMSwwLjAwMS0wLjAwMiwwLjAwMi0wLjAwNCwwLjAwMmMtMS42MDQsMC42ODctMy4yNDMsMS40MS00Ljk1MiwyLjE4OWMtNC43OTktOS4yMjktMTUuMDM3LTI2LjQ3MS0zMS43MTUtNDMuMDg2ICAgYy0yNC4wNTMtMjMuOTYtNTIuNTY4LTM4LjE4Mi04NC43NTYtNDIuMjY5Yy0xLjM2Mi0wLjE3Mi0yLjcwNCwwLjM1OC0zLjU3NywxLjQwOGMtMC44NzQsMS4wNDktMS4xNTIsMi40NzItMC43MzgsMy43NzIgICBjMS41MDYsNC43MzEsNS4xMywyMi41OTYsOS4zMDksNDQuMzk4Yy05LjY3Mi0zLjg3OC0yOC4wMzYtOS44MTEtNTAuNzQ3LTEwLjI3Yy0xLjIwMS0wLjA0LTIuMjY3LDAuNDU0LTMuMDQzLDEuMzExICAgYy0wLjc3NywwLjg1Ni0xLjE0NiwyLjAwNy0xLjAxMSwzLjE1NWMwLjYzOCw1LjQyOCwxLjgxOCwxNC4zOCwzLjUxLDI2LjY0MmMtMTEuNTQ2LTIuOTY0LTM3LjY3Ny04LjI0OS02MS43MjQtMy4wMjEgICBjLTEuMTk0LDAuMjYtMi4yMDQsMS4wNTItMi43NDIsMi4xNDhjLTAuNTM4LDEuMDk4LTAuNTQ1LDIuMzgxLTAuMDE5LDMuNDgzbDI2Ljk3LDU2LjUwOWwtNC43Miw2LjQzNmgtNS4zMDZjLTIuMjA5LDAtNCwxLjc5MS00LDQgICB2MTZINGMtMi4yMDksMC00LDEuNzkxLTQsNHYyMy42NjdjMCwyLjIwOSwxLjc5MSw0LDQsNGg0MDcuNTkxYzEuNjE4LDAsMy4wNzYtMC45NzUsMy42OTUtMi40NyAgIGMwLjYxOS0xLjQ5NCwwLjI3Ny0zLjIxNS0wLjg2Ny00LjM1OGwtMjEuNjY3LTIxLjY2N2MtMC43NS0wLjc1LTEuNzY3LTEuMTcyLTIuODI4LTEuMTcyaC0yMi43NTcgICBjMTQuMjI5LTExLjc1Miw0Mi40NTMtMzUuMzExLDU2LjkyNi00OS4xMDRDNDI1LjE4OSwyMjYuNjg1LDQyNS42MDEsMjI1LjExMiw0MjUuMTU4LDIyMy42NjR6IE0yMC42NjcsMjk4LjUwMUg4di0xNS42NjdoMTIuNjY3ICAgVjI5OC41MDF6IE0zMzkuOTg0LDIzOS4wMjJsOC40NTUsMjkuODEzaC0yNS41MzdjLTIuNzU4LTcuMDUzLTEwLjY2MS0yNy4xOTQtMTYuMDM3LTQwLjIyNyAgIEMzMjAuMTAzLDIzMC4zNTksMzM1LjE0LDIzNi44MiwzMzkuOTg0LDIzOS4wMjJ6IE0zMTQuMzEsMjY4LjgzNGgtMTMuODM5YzEuNTQ1LTMuNTgzLDQuMjI5LTkuNTk1LDcuNTA4LTE2LjA1NyAgIEMzMTAuNDUzLDI1OS4wMTIsMzEyLjczOCwyNjQuODI0LDMxNC4zMSwyNjguODM0eiBNMzMwLjk5MiwxOTUuNjU4Yy00LjIyNSw3LjE5Ny0xMC4xNDYsMTcuNjAxLTE1LjE2OCwyNi40ODggICBjLTUuMTExLTEuMTg0LTEwLjMzMi0xLjk3OS0xNS4xNTctMS45NzljLTEuMzQ1LDAtMi42LDAuNjc2LTMuMzQsMS43OThjLTAuNzM5LDEuMTIzLTAuODY2LDIuNTQyLTAuMzM3LDMuNzc4ICAgYzEuODQzLDQuMyw0LjQxNywxMC42MSw3LjA5MSwxNy4yNjhjLTYuMzk1LDExLjY3Mi0xMS4zNDUsMjMuNTA4LTEyLjI5NywyNS44MjNoLTUuMTA2bC0zOS4yMzItNjEuMjggICBDMjc3LjU4MywxOTUuMjk3LDMwNS42MzYsMTkxLjMwMywzMzAuOTkyLDE5NS42NTh6IE0yNDAuMzYsMjExLjMyNGwzNi44MTksNTcuNTExaC01MC45MzEgICBDMjI2Ljk5OSwyNTguOTAyLDIyOS44OTgsMjMyLjgzNCwyNDAuMzYsMjExLjMyNHogTTIxOC4yMTMsMjY4LjgzNGgtNjIuMzA0YzExLjg4NC0xMS40MDcsMzkuNTEtMzUuOTIxLDczLjgyOC01My4yMyAgIEMyMjEuMTkxLDIzNy4wMTIsMjE4LjgzMywyNTkuODc4LDIxOC4yMTMsMjY4LjgzNHogTTEyMy4zNzEsMTI3LjY3MmMyNy45OTcsNC43NzIsNTIuOTUxLDE3LjkxOCw3NC4yNDIsMzkuMTI4ICAgYzE1Ljc5LDE1LjczLDI1LjUxNSwzMi4wMTUsMzAuMTI5LDQwLjg1Yy0zNy40NzcsMTguNTMxLTY2Ljc3LDQ1LjAwNi03OC40OTEsNTYuNDUgICBDMTQ0LjU2NCwyMzcuOTMsMTI5LjMwMSwxNTMuMjg5LDEyMy4zNzEsMTI3LjY3MnogTTEyNS4zMDYsMTc3Ljk0YzAuNjY5LDMuNTMyLDEuMzQ1LDcuMTI3LDIuMDI1LDEwLjc1MiAgIGMtNS43OTgsNy4zMDgtMjguMjIsMzYuNjgxLTM3Ljc5MSw2NS40NDJjLTEuNTQ4LTEwLjY1LTExLjUxMS04MS4zMTQtMTIuMzI4LTg3Ljc4NyAgIEMxMDEuMTM5LDE2Ny42ODcsMTE5LjU2NSwxNzUuMzAyLDEyNS4zMDYsMTc3Ljk0eiBNODEuOTQ2LDI1Ny41MDFoLTEuMzM4TDQ0Ljc0MywyNDYuMzNjMy42MTQtNy44MDksMTMuMzE1LTI1LjU2MSwzMC40ODUtMzUuNTEzICAgQzc3LjkyNCwyMjkuODMyLDgwLjYzMywyNDguNDgzLDgxLjk0NiwyNTcuNTAxeiBNMTcuMTkxLDE5My4xNTZjMjMuNDQyLTMuNTYsNDguNTI2LDIuNTk4LDU2LjIxNCw0Ljc0MiAgIGMwLjIwOCwxLjQ4MywwLjQxOCwyLjk3NywwLjYzMSw0LjQ4MWMtMTguNTI0LDkuNTA5LTI5LjU4NywyNi43NDUtMzQuODA3LDM2Ljk1MUwxNy4xOTEsMTkzLjE1NnogTTEyNiwyOTguNTAxSDI4LjY2N3YtMzUuNjY3SDMyICAgYzEuMjc0LDAsMi40NzItMC42MDcsMy4yMjYtMS42MzVsNS42NDQtNy42OTdsMzcuOTQsMTEuODE4YzAuMzg1LDAuMTIsMC43ODYsMC4xODEsMS4xODksMC4xODFoMjcuNjcxTDEyNiwyNzUuMjM5VjI5OC41MDF6ICAgIE0xMTAuNTQ0LDI1Ny45NjljLTAuNTc4LTAuMzA4LTEuMjIzLTAuNDY4LTEuODc3LTAuNDY4aC0xMS44YzcuMzM2LTIyLjY0LDIzLjc4Ni00Ni41NjYsMzIuNDQtNTguMjA3ICAgYzUuNDksMjkuNTY1LDEwLjc0OCw1OC44MzgsMTIuNjYyLDY5LjU0aC0xMC45NzRMMTEwLjU0NCwyNTcuOTY5eiBNMzg4LjI2NywyODQuODM0bDEzLjY2NywxMy42NjdIMjU3di02YzAtMi4yMDktMS43OTEtNC00LTQgICBzLTQsMS43OTEtNCw0djZoLTEydi02YzAtMi4yMDktMS43OTEtNC00LTRzLTQsMS43OTEtNCw0djZoLTEydi02YzAtMi4yMDktMS43OTEtNC00LTRzLTQsMS43OTEtNCw0djZoLTEydi02YzAtMi4yMDktMS43OTEtNC00LTQgICBzLTQsMS43OTEtNCw0djZoLTEydi02YzAtMi4yMDktMS43OTEtNC00LTRzLTQsMS43OTEtNCw0djZoLTM1di0yMS42NjdoMjExLjc3Nmw3LjUwOSw2LjkzOGMwLjczOSwwLjY4NCwxLjcwOSwxLjA2MywyLjcxNSwxLjA2MyAgIEgzODguMjY3eiBNMzU4LjE4NCwyNzMuODcybC0xMC4wNzctMzUuNTM0YzcuMzMtMy4yNTQsMjcuNzU5LTExLjE2NSw1My4xMDYtMTEuMTY1YzMuNzQ2LDAsNy40NzcsMC4xNzQsMTEuMTU4LDAuNTIgICBDMzk1LjQzNiwyNDMuMDczLDM2OC44OTMsMjY1LjA2MywzNTguMTg0LDI3My44NzJ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBkPSJNMTY2LjAyNCwxNjQuMzg4YzE2Ljk2NiwxMi4yMTEsMjkuMjQ5LDI2Ljc1OSwzNy4xNTksMzcuOTczYzEuMjUxLDEuNzczLDMuNjg3LDIuMjE3LDUuNDg5LDEuMDA3ICAgYzEuODY1LTEuMjUzLDIuMzM2LTMuNzksMS4wNDEtNS42MjZjLTguMjg3LTExLjc0NS0yMS4xNjQtMjYuOTg5LTM4Ljk4NS0zOS44MjNjLTEuODM0LTEuMzItNC4zOTktMC44NzctNS42NjgsMC45OTJsMCwwLjAwMSAgIEMxNjMuODQ5LDE2MC42OTcsMTY0LjI3MywxNjMuMTI3LDE2Ni4wMjQsMTY0LjM4OHoiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik0xNTAuOTk3LDE1MC41MDdMMTUwLjk5NywxNTAuNTA3YzEuMDM4LTEuOTk0LDAuMjM4LTQuNDYyLTEuNzg0LTUuNDQxYy0wLjI2My0wLjEyOC0wLjUyNi0wLjI1NC0wLjc4OS0wLjM4ICAgYy0yLjAyOC0wLjk2Ny00LjQ1Ni0wLjA0OS01LjM2MywyLjAwN2wtMC4wMDEsMC4wMDFjLTAuODc2LDEuOTg1LTAuMDAzLDQuMjk2LDEuOTU2LDUuMjNjMC4yMjUsMC4xMDcsMC40NDksMC4yMTUsMC42NzMsMC4zMjMgICBDMTQ3LjY0NCwxNTMuMTk0LDE0OS45OTQsMTUyLjQzMywxNTAuOTk3LDE1MC41MDd6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
        <div className="response-topic-small">
          Sydney
        </div>
      </div>
      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE5LjkzMiAxOS45MzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE5LjkzMiAxOS45MzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIGQ9Ik0xMS45NjUsMTIuMDM2bC0wLjE5Mi0wLjU1M2gwLjA4MXYtMC42MDloLTAuODM2VjEwLjMzaC0wLjM5NFY5LjUxN2gtMC4yNDZ2LTIuMzRoMC4wNzEgICBjMC4xNzUsMCwwLjMxOS0wLjE0NywwLjMxOS0wLjMyNFY2LjcxMWMwLTAuMTc2LTAuMTQ2LTAuMzItMC4zMTktMC4zMmgtMC4xMzNWNC4wODhoLTAuMTA0VjIuNjgxaC0wLjEwMlYxLjM0N2gtMC4wNDJWMEg5Ljg2MSAgIHYxLjM0OEg5LjgxOXYxLjMzNEg5LjcxN3YxLjQwNkg5LjYxM3YyLjMwM0g5LjQ3N2MtMC4xNzYsMC0wLjMyLDAuMTQ2LTAuMzIsMC4zMnYwLjE0M2MwLDAuMTc3LDAuMTQ2LDAuMzI0LDAuMzIsMC4zMjRoMC4wNzF2Mi4zNCAgIEg5LjMwMnYwLjgxMkg4LjkzdjAuNTQ0SDguMTg2djAuNjA5aDAuMDUzbC0wLjEyNiwwLjU1M0g3LjUxNnYxLjIwNWgwLjAyOGwwLjIyOCwwLjQwNmgwLjA2N2MtMC4xMjEsMC4wODgtMC4xOTcsMC4yMy0wLjE5NywwLjM5MSAgIHYwLjA5YzAsMC4yNjgsMC4yMTQsMC40ODIsMC40NzEsMC40ODJoMC45MjFjLTAuMDA0LDEuNzI1LTAuMDUxLDEuNDI2LTAuMjI5LDUuMzIyaDIuMzIzYy0wLjE3OS0zLjg5Ni0wLjIyNy0zLjU5OC0wLjIzMS01LjMyMiAgIGgwLjk5NGMwLjI2LDAsMC40NzItMC4yMTUsMC40NzItMC40ODJ2LTAuMDljMC0wLjE2LTAuMDc5LTAuMzA1LTAuMTk5LTAuMzkzbDAuMjI0LTAuNDA0aDAuMDI5di0xLjIwNUgxMS45NjV6IE05LjEwOSwxMC41NzcgICBoMS43MTJ2MC4yNzNIOS4xMDlWMTAuNTc3eiBNMTEuNzY3LDEyLjAxNWgtMy40NlYxMS42NGgzLjQ2VjEyLjAxNXoiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        </div>
        <div className="response-topic-small">
          Toronto
        </div>
      </div>
      <div className="survey-response-item-small survey-response-hover-color-change">
        <div className="response-icon-small">
          <img className="response-icon-city"
               src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMxMy41MDQgMzEzLjUwNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzEzLjUwNCAzMTMuNTA0IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgogIDxnPgogICAgPGc+CiAgICAgIDxjaXJjbGUgY3g9IjEzOS4wMSIgY3k9IjU1LjcxNyIgcj0iMjcuNTkiIGZpbGw9IiNGRkZGRkYiLz4KICAgICAgPHBhdGggZD0ibTMwOS41MjIsMjA4LjczOGMtOC4xMTYtMTMuODcxLTI2LjAwMi0xOC41NTUtMzkuODczLTEwLjQzOS00Ljc2NywyLjc4OS02LjM3LDguOTE0LTMuNTgyLDEzLjY4MiAyLjc4OCw0Ljc2NyA4LjkxNCw2LjM2OSAxMy42ODIsMy41ODIgNC4zNTItMi41NDggOS45NjQtMS4wNzYgMTIuNTEsMy4yNzUgMi41NDcsNC4zNTIgMS4wNzcsOS45NjQtMy4yNzUsMTIuNTFsLTM5LjM1LDIzLjAyMS0zNy42Ny03MS4wNTljLTIuMzktNC41MDgtNi44MzYtNy4zODctMTEuNzEzLTcuODkxLTIuMDYsMC40MzItMTkuMjI5LDQuMDM2LTIyLjIzMiw0LjY2Ny03LjA3NCwxLjQ4NS0xNC4wNTEtMS44MzgtMTcuNTQ5LTcuNzIzbC0yNC44OTgtNDIuMDM2IDMzLjY2NSwzMy4xMjdjMi4zNjIsMi4zMjQgNS41MjEsMy41OSA4Ljc2OCwzLjU5IDEuODEyLDAtMi4wMzIsMC42OTkgNTEuNDQzLTEwLjUyNyA2Ljc1Ni0xLjQxOSAxMS4wODMtOC4wNDUgOS42NjUtMTQuODAyLTEuNDE4LTYuNzU3LTguMDQ0LTExLjA4MS0xNC44MDItOS42NjVsLTQyLjMxNiw4Ljg4NC0yOC44OS0yOC40MjggMjIuNDk3LDEyLjg0LS43OTItMTEuOTQ3Yy0wLjY4Mi0xMC4yNzEtOS41Ni0xOC4wNDQtMTkuODMxLTE3LjM2M2wtMzMuMTY0LDIuMmMtMTAuMjcxLDAuNjgxLTE4LjA0NCw5LjU2LTE3LjM2MywxOS44MzEgMCwwIDQuMDEyLDY0LjYwOCA1Ljc2Niw4Ni45MDYgMC43OTIsMTAuMDczIDguMjc5LDE4LjA3NyAxOC4xMiwxNS45NDVsNjIuNDQxLTEzLjUxOCAzMi40MzEsNjEuMTc2YzAuMTcsMC4zMjEgMC4zNSwwLjYzMiAwLjU0LDAuOTM1bC00MS4yOSwyNC4xNTZjLTQuNzY3LDIuNzg5LTYuMzcsOC45MTQtMy41ODIsMTMuNjgyIDIuNzg1LDQuNzYgOC45MDYsNi4zNzQgMTMuNjgyLDMuNTgybDEwNi41MjQtNjIuMzJjMTMuODY5LTguMTE1IDE4LjU1Mi0yNi4wMDEgMTAuNDM4LTM5Ljg3M3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgICAgPHBhdGggZD0ibTE4My4xNDgsMjMyLjA0N2MtMS4xOTEtNS4zOTMtNi41MjgtOC43OTQtMTEuOTIyLTcuNjA3bC00NC40ODcsOS44MjhjLTYuNzgsMS40OTgtMTMuODc1LTAuMDQ4LTE5LjQxOC00LjIyOS01LjU0Mi00LjE4Mi04Ljk3Ni0xMC41OC05LjM5Ny0xNy41MTFsLTEwLjY1MS0xNzUuNDA3IDMyLjM5MS0xNy4wN2M0Ljg4Ni0yLjU3NCA2Ljc2LTguNjIzIDQuMTg1LTEzLjUwOS0yLjU3NC00Ljg4Ni04LjYyLTYuNzU4LTEzLjUwOS00LjE4NS00LjQyOSwyLjMzNC0xMDAuMDc0LDUyLjczNy0xMDUsNTUuMzMzLTQuODg2LDIuNTc1LTYuNzYsOC42MjMtNC4xODUsMTMuNTA5IDIuNTcxLDQuODgxIDguNjE1LDYuNzYyIDEzLjUwOSw0LjE4NWw1My4xOTQtMjguMDMyIDEwLjAwMywxNjQuNzM3YzAuOCwxMy4xODIgNy4zMzIsMjUuMzUzIDE3Ljg3NCwzMy4zMDdzMjQuMDM4LDEwLjg5NCAzNi45MzQsOC4wNDVsNDIuODcxLTkuNDcxYzUuMzkzLTEuMTkzIDguNzk5LTYuNTMgNy42MDgtMTEuOTIzeiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" />
        </div>
        <div className="response-topic-small">
          Vancouver
        </div>
      </div>

    </div>
    <div className="survey-subscript">
      Please select multiple if necessary
    </div>
  </div>;

  const submitSurveyButton = <div className="submitSurveyButton hover-pointer survey-response-hover-color-change">
    See Result
  </div>

  return <div>

    <div className="take-survey-cover">
      {surveyQuestionOne}
      {surveyQuestionTwo}
      {surveyQuestionThree}
      {surveyQuestionFour}
      {surveyQuestionFive}
      {surveyQuestionSix}
      {surveyQuestionSeven}
      {submitSurveyButton}
    </div>

    <div className="take-survey-background-cover">

    </div>

    <div className="take-survey-background-cover-color">

    </div>

  </div>


}