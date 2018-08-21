import React from "react";
import * as _ from "lodash";
import {
  answer1,
  answer2,
  answer3,
  answer4,
  answer5,
  answer6part1,
  answer6part2,
  answer6part3,
  answer6part4,
  answer6part5,
  answer7part1,
  answer7part2,
  questionConstants
} from '../../../../constants/surveyConstants';

export default class Survey extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop,
      itemTranslate = Math.min(0, scrollTop/3 - 60);

    this.setState({
      transform: itemTranslate
    });

    console.log("scrolled");
  }

  questionConstants() {
    const {questionOneSelected, questionTwoSelected, questionThreeSelected, questionFourSelected, questionFiveSelected, questionSixPartOneSelected, questionSixPartTwoSelected, questionSixPartThreeSelected, questionSixPartFourSelected, questionSixPartFiveSelected, questionSevenPartOneSelected, questionSevenPartTwoSelected, setSingleAnswer, setMultipleAnswer} = this.props;

    return [
      {
        name: "Question 1",
        question: "What would be your ideal life after 50 years old?",
        func: () => answer1.map((item, index) => this.getOption(item, index, "questionOneAnswer", questionOneSelected, setSingleAnswer, "response-icon", "response-topic")),
      },
      {
        name: "Question 2",
        question: "Select item(s) you believe a government should provide.",
        func: () => answer2.map((item, index) => this.getOption(
          item, index, "questionTwoAnswer", questionTwoSelected, setMultipleAnswer, "response-icon", "response-topic")),
      },
      {
        name: "Question 3",
        question: "What is your ideal weekly work hours?",
        func: () => answer3.map((item, index) => this.getOption(
          item, index, "questionThreeAnswer", questionThreeSelected, setSingleAnswer, "response-icon", "response-topic")),
      },
      {
        name: "Question 4",
        question: "Select the climate and environment that you must have.",
        func: () => answer4.map((item, index) => this.getOption(
          item, index, "questionFourAnswer", questionFourSelected, setMultipleAnswer, "response-icon", "response-topic"))
        ,
      },
      {
        name: "Question 5",
        question: "How important is your career and employer to you?",
        func: () => answer5.map((item, index) => this.getOption(
          item, index, "questionFiveAnswer", questionFiveSelected, setMultipleAnswer, "response-icon", "response-topic"))
        ,
      },
      {
        name: "Question 6 Part 1",
        question: "What is the highest degree you have?",
        func: () => answer6part1.map((item, index) => this.getOption(
          item, index, "questionSixPartOneAnswer", questionSixPartOneSelected, setSingleAnswer, "response-icon", "response-topic")),
      },
      {
        name: "Question 6 Part 2",
        question: "Please select conditions that are applicable to you:",
        func: () => answer6part2.map((item, index) => this.getOption(
          item, index, "questionSixPartTwoAnswer", questionSixPartTwoSelected, setMultipleAnswer, "response-eight-options", "response-topic")),
      },
      {
        name: "Question 6 Part 3",
        question: "What is your marital status?",
        func: () => answer6part3.map((item, index) => this.getOption(
          item, index, "questionSixPartThreeAnswer", questionSixPartThreeSelected, setSingleAnswer, "response-icon", "response-topic"
        )),
      },
      {
        name: "Question 6 Part 4",
        question: "What's the highest degree your partner has?",
        func: () => answer6part4.map((item, index) => this.getOption(item, index, "questionSixPartFourAnswer", questionSixPartFourSelected, setSingleAnswer, "response-icon", "response-topic")),
      },
      {
        name: "Question 6 Part 5",
        question: "Please select conditions that are applicable to your partner:",
        func: () => answer6part5.map((item, index) => this.getOption(item, index, "questionSixPartFiveAnswer", questionSixPartFiveSelected, setMultipleAnswer, "response-eight-options", "response-topic")),
      },
      {
        name: "Question 7",
        question: "Any of below apply to you?",
        func: () => answer7part1.map((item, index) => this.getOption(
          item, index, "questionSevenPartOneAnswer", questionSevenPartOneSelected, setMultipleAnswer, "response-icon", "response-topic"
        )),
      },
      {
        name: "Final Question",
        question: "Select your favorite cities",
        func: () => answer7part2.map((item, index) => this.getOption(item, index, "questionSevenPartTwoAnswer", questionSevenPartTwoSelected, setMultipleAnswer, "response-icon-small", "response-topic")),
      },
    ];
  }
  //Five Options Standard Survey
  getSurveyClassNameTypeOne(collection, item) {
    return `${_.includes(collection, item) ? "option-selected" : "option-unselected"} 
    survey-response-item survey-response-hover-color-change`;
  };

  getSurveyClassNameTypeTwo(collection, item) {
    return `${_.includes(collection, item) ? "option-selected" : "option-unselected"} 
    response-icon-eight-options survey-response-hover-color-change`;
  };

  getSurveyClassNameTypeThree(collection, item) {
    return `${_.includes(collection, item) ? "option-selected" : "option-unselected"} 
    survey-response-item-small survey-response-hover-color-change`;
  };

  getProgressBar() {
    // var pageHeight = document.getElementById("survey-page-cover").offsetHeight;
    // console.log(pageHeight);
  };

  getOption({icon, text, responseSelector}, index, questionSelector, questionSelected, cb, divClassNameOne, divClassNameTwo) {

    const {questionSevenPartTwoSelected} = this.props;

    if (divClassNameOne === "response-icon") {
      this.getProgressBar();
      return <div key={`question-one-${index}`}>
        <div className={this.getSurveyClassNameTypeOne(questionSelected, responseSelector)}
             onClick={() => cb(responseSelector, questionSelector)}>
          <div className={divClassNameOne}>
            <i className={`${icon}`}></i>
          </div>
          <div className={divClassNameTwo}>
            {text}
          </div>
        </div>
      </div>
    }

    if (divClassNameOne === "response-icon-small") {
      return <div>
        <div className={this.getSurveyClassNameTypeThree(questionSevenPartTwoSelected, responseSelector)}
             onClick={() => cb(responseSelector, questionSelector)}>
          <div className={divClassNameOne}>
            <img alt="" className="response-icon-city"
                 src={icon}/>
          </div>
          <div className="response-topic-small">
            {text}
          </div>
        </div>
      </div>
    }

    if (divClassNameOne === "response-eight-options") {
      return <div>
        <div key={`question-one-${index}`}
             className={this.getSurveyClassNameTypeTwo(questionSelected, responseSelector)}
             onClick={() => cb(responseSelector, questionSelector)}>
          <div className="response-icon-large">
            <i className={`${icon}`}></i>
          </div>
          <div className={divClassNameTwo}>
            {text}
          </div>
        </div>
      </div>
    }

  };

  showSpouseQuestion(questionSixPartThreeSelected) {
    return (questionSixPartThreeSelected === "Q6Part3Option2") ? "survey-spouse-question-show" : "survey-spouse-question-hide";
  }

  renderQuestion({name, question, func}, index) {

    const {questionSixPartThreeSelected} = this.props;

    return <div
      key={`question-${index}`}
      className={`survey-content ${(name === "Question 6 Part 4" || name === "Question 6 Part 5") ?
        this.showSpouseQuestion(questionSixPartThreeSelected) : ""}`}>
      <div className="survey-progress-indicator">
        {name}
      </div>
      <div className="survey-questions">
        {question}
      </div>
      <div className="survey-responses">
        {func()}
      </div>
    </div>;
  };

  submitSurveyButton() {
    return <div className="submitSurveyButton hover-pointer survey-response-hover-color-change">
      See Result
    </div>;
  }

  render() {
    return <div>

      <div className="survey-progress-bar-container">
        <div className="survey-progress-bar" id="survey-bar-width"/>
      </div>

      <div className="take-survey-cover" id="survey-page-cover">
        {this.questionConstants().map((item, index) => this.renderQuestion(item, index))}
        {this.submitSurveyButton}
      </div>

      <div className="take-survey-background-cover"/>
      <div className="take-survey-background-cover-color"/>
    </div>
  }
}
