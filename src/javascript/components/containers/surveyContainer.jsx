// import React from 'react';
import {connect} from 'react-redux';
import Survey from '../presentation/pages/survey.jsx';
import * as actions from '../../actions/actionCreators';

const mapStateToProps = state => ({
  questionOneSelected: state.main.questionOneAnswer,
  questionTwoSelected: state.main.questionTwoAnswer,
  questionThreeSelected: state.main.questionThreeAnswer,
  questionFourSelected: state.main.questionFourAnswer,
  questionFiveSelected: state.main.questionFiveAnswer,
  questionSixSelected: state.main.questionSixAnswer,
  questionSixPartOneSelected: state.main.questionSixPartOneAnswer,
  questionSixPartTwoSelected: state.main.questionSixPartTwoAnswer,
  questionSixPartThreeSelected: state.main.questionSixPartThreeAnswer,
  questionSixPartFourSelected: state.main.questionSixPartFourAnswer,
  questionSevenPartOneSelected: state.main.questionSevenPartOneAnswer,
  questionSevenPartTwoSelected: state.main.questionSevenPartTwoAnswer,
});

const mapDispatchToProps = dispatch => ({
  setSingleAnswer: (res, questionId) => dispatch(actions.setSingleAnswer(res, questionId)),
  setMultipleAnswer: (res, questionId) => dispatch(actions.setMultipleAnswer(res, questionId)),

  setQuestionOneAnswer: (res) => dispatch(actions.setQuestionOneAnswer(res)),
  setQuestionTwoAnswer: (res) => dispatch(actions.setQuestionTwoAnswer(res)),
  setQuestionThreeAnswer: (res) => dispatch(actions.setQuestionThreeAnswer(res)),
  setQuestionFourAnswer: (res) => dispatch(actions.setQuestionFourAnswer(res)),
  setQuestionFiveAnswer: (res) => dispatch(actions.setQuestionFiveAnswer(res)),
  setQuestionSixAnswer: (res) => dispatch(actions.setQuestionSixAnswer(res)),
  setQuestionSixPartOneAnswer: (res) => dispatch(actions.setQuestionSixPartOneAnswer(res)),
  setQuestionSixPartTwoAnswer: (res) => dispatch(actions.setQuestionSixPartTwoAnswer(res)),
  setQuestionSixPartThreeAnswer: (res) => dispatch(actions.setQuestionSixPartThreeAnswer(res)),
  setQuestionSixPartFourAnswer: (res) => dispatch(actions.setQuestionSixPartFourAnswer(res)),
  setQuestionSevenPartOneAnswer: (res) => dispatch(actions.setQuestionSevenPartOneAnswer(res)),
  setQuestionSevenPartTwoAnswer: (res) => dispatch(actions.setQuestionSevenPartTwoAnswer(res)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Survey);