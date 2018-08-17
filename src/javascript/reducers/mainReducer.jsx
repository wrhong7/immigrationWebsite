import {
  SET_ACTIVE_SECTION,
  SET_QUESTION_ONE_ANSWER,
  SET_QUESTION_TWO_ANSWER,
  SET_QUESTION_THREE_ANSWER,
  SET_QUESTION_FOUR_ANSWER,
  SET_QUESTION_FIVE_ANSWER,
  SET_QUESTION_SIX_ANSWER,
  SET_QUESTION_SEVEN_PART_ONE_ANSWER,
  SET_QUESTION_SEVEN_PART_TWO_ANSWER,
} from '../actions/actionConstants';

import * as _ from "lodash";

const initialState = {
  activeSectionId: "",
  questionOneAnswer: "",
  questionTwoAnswer: "",
  questionThreeAnswer: "",
  questionFourAnswer: "",
  questionFiveAnswer: "",
  questionSixAnswer: "",
  questionSevenPartOneAnswer: "",
  questionSevenPartTwoAnswer: "",
};

const handleMultipleAnswerQuestions = (responseArray, response) => {

  //this code is not the cleanest in the world since .includes() & .indexOf() is not working.
  //had to npm install lodash --save to find a quick fix for this. future note.

  if (_.indexOf(responseArray, response) > -1) {
    return _.without(responseArray, response);
  } else {
    return [...responseArray, response];
  }

};

const main = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_SECTION:
      return {...state, activeSectionId: action.payload};
    case SET_QUESTION_ONE_ANSWER:
      return {...state, questionOneAnswer: action.payload};
    case SET_QUESTION_TWO_ANSWER:
      return {...state, questionTwoAnswer: handleMultipleAnswerQuestions(state.questionTwoAnswer, action.payload)};
    case SET_QUESTION_THREE_ANSWER:
      return {...state, questionThreeAnswer: action.payload};
    case SET_QUESTION_FOUR_ANSWER:
      return {...state, questionFourAnswer: handleMultipleAnswerQuestions(state.questionFourAnswer, action.payload)};
    case SET_QUESTION_FIVE_ANSWER:
      return {...state, questionFiveAnswer: handleMultipleAnswerQuestions(state.questionFiveAnswer, action.payload)};
    case SET_QUESTION_SIX_ANSWER:
      return {...state, questionSixAnswer: handleMultipleAnswerQuestions(state.questionSixAnswer, action.payload)};
    case SET_QUESTION_SEVEN_PART_ONE_ANSWER:
      return {...state, questionSevenPartOneAnswer: handleMultipleAnswerQuestions(state.questionSevenPartOneAnswer, action.payload)};
    case SET_QUESTION_SEVEN_PART_TWO_ANSWER:
      return {...state, questionSevenPartTwoAnswer: handleMultipleAnswerQuestions(state.questionSevenPartTwoAnswer, action.payload)};
    default:
      return state;
  }
};

export default main;