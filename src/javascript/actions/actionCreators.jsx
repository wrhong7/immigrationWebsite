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
} from './actionConstants';

export const setActiveSectionId = (id) => ({
  type: SET_ACTIVE_SECTION,
  payload: id,
});

export const setQuestionOneAnswer = (res) => ({
  type: SET_QUESTION_ONE_ANSWER,
  payload: res,
});

export const setQuestionTwoAnswer = (res) => ({
  type: SET_QUESTION_TWO_ANSWER,
  payload: res,
});