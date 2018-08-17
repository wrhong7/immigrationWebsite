import {
  SET_ACTIVE_SECTION,
  SET_QUESTION_ONE_ANSWER, SET_QUESTION_TWO_ANSWER,
} from '../actions/actionConstants';

import * as _ from "lodash";

const initialState = {
  activeSectionId: "",
  questionOneAnswer: "",
  questionTwoAnswer: [],
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
    default:
      return state;
  }
};

export default main;