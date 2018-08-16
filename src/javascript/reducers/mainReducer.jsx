import {
  SET_ACTIVE_SECTION,
  SET_QUESTION_ONE_ANSWER,
} from '../actions/actionConstants';

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

const main = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_SECTION:
      return {...state, activeSectionId: action.payload};
    case SET_QUESTION_ONE_ANSWER:
      console.log(state);
      return {...state, questionOneAnswer: action.payload};
    default:
      return state;
  }
};

export default main;