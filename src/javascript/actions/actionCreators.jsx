import {
  SET_ACTIVE_SECTION,
  SET_QUESTION_ONE_ANSWER,
  SET_QUESTION_TWO_ANSWER,
  SET_QUESTION_THREE_ANSWER,
  SET_QUESTION_FOUR_ANSWER,
  SET_QUESTION_FIVE_ANSWER,
  SET_QUESTION_SIX_ANSWER,
  SET_QUESTION_SIX_PART_ONE_ANSWER,
  SET_QUESTION_SIX_PART_TWO_ANSWER,
  SET_QUESTION_SIX_PART_THREE_ANSWER,
  SET_QUESTION_SIX_PART_FOUR_ANSWER,
  SET_QUESTION_SEVEN_PART_ONE_ANSWER,
  SET_QUESTION_SEVEN_PART_TWO_ANSWER,
  SET_SINGLE_ANSWER,
  SET_MULTIPLE_ANSWER,
} from './actionConstants';

export const setActiveSectionId = (id) => ({
  type: SET_ACTIVE_SECTION,
  payload: id,
});

export const setSingleAnswer = (res, questionId) => ({
  type: SET_SINGLE_ANSWER,
  payload: res,
  data: questionId,
});

export const setMultipleAnswer = (res, questionId) => ({
  type: SET_MULTIPLE_ANSWER,
  payload: res,
  data: questionId,
});

export const setQuestionOneAnswer = (res) => ({
  type: SET_QUESTION_ONE_ANSWER,
  payload: res,
});

export const setQuestionTwoAnswer = (res) => ({
  type: SET_QUESTION_TWO_ANSWER,
  payload: res,
});

export const setQuestionThreeAnswer = (res) => ({
  type: SET_QUESTION_THREE_ANSWER,
  payload: res,
});

export const setQuestionFourAnswer = (res) => ({
  type: SET_QUESTION_FOUR_ANSWER,
  payload: res,
});

export const setQuestionFiveAnswer = (res) => ({
  type: SET_QUESTION_FIVE_ANSWER,
  payload: res,
});

export const setQuestionSixAnswer = (res) => ({
  type: SET_QUESTION_SIX_ANSWER,
  payload: res,
});

export const setQuestionSixPartOneAnswer = (res) => ({
  type: SET_QUESTION_SIX_PART_ONE_ANSWER,
  payload: res,
});

export const setQuestionSixPartTwoAnswer = (res) => ({
  type: SET_QUESTION_SIX_PART_TWO_ANSWER,
  payload: res,
});

export const setQuestionSixPartThreeAnswer = (res) => ({
  type: SET_QUESTION_SIX_PART_THREE_ANSWER,
  payload: res,
});

export const setQuestionSixPartFourAnswer = (res) => ({
  type: SET_QUESTION_SIX_PART_FOUR_ANSWER,
  payload: res,
});

export const setQuestionSevenPartOneAnswer = (res) => ({
  type: SET_QUESTION_SEVEN_PART_ONE_ANSWER,
  payload: res,
});

export const setQuestionSevenPartTwoAnswer = (res) => ({
  type: SET_QUESTION_SEVEN_PART_TWO_ANSWER,
  payload: res,
});