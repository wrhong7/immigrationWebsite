import {
  SUBMIT_SURVEY,
} from '../actions/actionConstants';

import {
  responsePreferenceWeights,
} from '../../constants/surveyAlgorithms';

const initialState = {
  isSurveySubmitted: false,
  careerLifePreferenceScore: 10,
  riskPreferenceScore: 20,
};

const getScoreSingleResponse = (algorithmWeightObject, questionId, userResponseValue) => {
  if (userResponseValue !== "") {
    return algorithmWeightObject[questionId][userResponseValue];
  }
};

const getScoreMultipleResponse = (algorithmWeightObject, questionId, userResponseValueArray) => {
  let careerLifePreferenceScore = 0;
  let riskPreferenceScore = 0;
  userResponseValueArray.map((userResponseValue) => {
    careerLifePreferenceScore += algorithmWeightObject[questionId][userResponseValue][0];
    riskPreferenceScore += algorithmWeightObject[questionId][userResponseValue][1];
  });
  return [careerLifePreferenceScore, riskPreferenceScore];
};

const handleSubmitSurvey = (state, action) => {
  const userValueObject = action.payload;
  const userValueObjectKeys = Object.keys(userValueObject);
  const newState = Object.assign({}, state);

  userValueObjectKeys.map((item) => {
    const userResponseValue = userValueObject[item];

    console.log(item);

    if (userResponseValue !== "") {
      const careerLifePreferenceScore = (typeof userValueObject[item] === "string") ?
        getScoreSingleResponse(responsePreferenceWeights, item, userResponseValue) :
        getScoreMultipleResponse(responsePreferenceWeights, item, userResponseValue);

      console.log(item, careerLifePreferenceScore);
      newState["careerLifePreferenceScore"] += careerLifePreferenceScore[0];
      newState["riskPreferenceScore"] += careerLifePreferenceScore[1];
    }
  });
  newState["isSurveySubmitted"] = true;
  return newState;
};

const submission = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SURVEY:
      let updatedState =  handleSubmitSurvey(state, action);
      console.log("UPDATED AFTER SUBMISSION", updatedState);
      return updatedState;
    default:
      return state;
  }
};

export default submission;