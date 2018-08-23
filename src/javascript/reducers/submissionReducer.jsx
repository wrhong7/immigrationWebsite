import {
  SUBMIT_SURVEY,
} from '../actions/actionConstants';

import {
  responsePreferenceWeights,
} from '../../constants/surveyAlgorithms';

const initialState = {
  isSurveySubmitted: false,
  country: '',
};

const getScoreSingleResponse = (algorithmWeightObject, userResponseValue) => {
  console.log(algorithmWeightObject);
  console.log(userResponseValue);
  console.log(algorithmWeightObject[userResponseValue]);



};

const getScoreMultipleResponse = (algorithmWeightObject, userResponse) => {
  const responseArray = algorithmWeightObject[userResponse];
  // responseArray.map((response) => {
  //
  // })
};

const handleSubmitSurvey = (state, action) => {
  const userValueObject = action.payload;
  const userValueObjectKeys = Object.keys(userValueObject);
  userValueObjectKeys.map((item) => {
    const userResponseValue = userValueObject[item];
    const careerLifePreferenceScore = (typeof userValueObject[item] === "string") ?
      getScoreSingleResponse(responsePreferenceWeights, userResponseValue) :
      getScoreMultipleResponse(responsePreferenceWeights, userResponseValue);
    return careerLifePreferenceScore;
  });

  // console.log(Object.keys(userEnteredSurveyValues));

  const newState = Object.assign({}, state);

  // console.log("this is response weights", responsePreferenceWeights);
  newState["careerLifePreferenceScore"] = 0;
  newState["riskPreferenceScore"] = 0;


  newState["country"] = "canada";
  newState["isSurveySubmitted"] = true;
  // console.log(newState);
  return newState;
};

const submission = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SURVEY:
      return handleSubmitSurvey(state, action);
    default:
      return state;
  }
};

export default submission;