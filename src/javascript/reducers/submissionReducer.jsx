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
  australiaScore: 30,
  canadaScore: 110,
  irelandScore: 0,
  newZealandScore: 0,
  unitedKingdomScore: 0,
  unitedStatesScore: 0,
};

const flipDegrees = (userValueObject) => {
  //need to flip degrees between principal applicant and spouse in case spouse is better educated than the princial;
  if (userValueObject["questionSixPartFourSelected"] === "Q6Part4Option2") {
    userValueObject["questionSixPartOneSelected"] = "Q6Part1Option2";
  }
  if (userValueObject["questionSixPartFourSelected"] === "Q6Part4Option3") {
    userValueObject["questionSixPartOneSelected"] = "Q6Part1Option3";
  }
  userValueObject["questionSixPartFourSelected"] = "Q6Part4Option1";
};

const checkIfSpouseHasHigherScore = (userValueObject) => {
  //check if this person has a spouse
  if (userValueObject["questionSixPartThreeSelected"] === "Q6Part3Option2" && userValueObject["questionSixPartOneSelected"] === "Q6Part1Option1"
    && (userValueObject["questionSixPartFourSelected"] === "Q6Part4Option2" || "Q6Part4Option3")) {
    console.log("his wife has a higher degree");
    //this means the applicant is married. the person only has a bachelor's degree. spouse has a master's degree.
    //for the best benefit, we need to flip the degree between the spouse and the principal applicant since spouse
    // will have a higher score.
    return true;
  }
  //we need to flip the principal applicant and spouse (dependent) if the dependent's scores are higher:
  //this situation is often caused by three different cases
  //1. spouse have higher education background than PA
  //2. spouse have over 3 years of work experience while PA doesn't
  //3. there are situation where spouse speaks better english than PA, but i am not going to apply this case
  // since if you can navigate to this page, that means you speak a decent english
};

const addEligibilityScoreForMultipleResponse = (allUserAnswers, algorithmWeightObject, questionId, userResponseValueArray) => {
  let eligibilityScore = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  userResponseValueArray.map((userResponseValue) => {
    eligibilityScore[2] += algorithmWeightObject[questionId][userResponseValue][2];
    eligibilityScore[3] += algorithmWeightObject[questionId][userResponseValue][3];
    eligibilityScore[4] += algorithmWeightObject[questionId][userResponseValue][4];
    eligibilityScore[5] += algorithmWeightObject[questionId][userResponseValue][5];
    eligibilityScore[6] += algorithmWeightObject[questionId][userResponseValue][6];
    eligibilityScore[7] += algorithmWeightObject[questionId][userResponseValue][7];
    eligibilityScore[8] += algorithmWeightObject[questionId][userResponseValue][8];
  });
  return eligibilityScore;
}

const getEligibilityScore = (allUserAnswers, algorithmWeightObject, maritalStatus) => {
  let updatedEligibilityScoreToReturn = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let eligibilityScore = [];
  let userKeys = Object.keys(allUserAnswers);
  userKeys.map((questionId) => {
    let userResponseValue = allUserAnswers[questionId];
    if (userResponseValue !== "") {
      eligibilityScore = (typeof allUserAnswers[questionId] === "string") ?
        getScoreSingleResponse(allUserAnswers, algorithmWeightObject, questionId, userResponseValue) :
        addEligibilityScoreForMultipleResponse(allUserAnswers, algorithmWeightObject, questionId, userResponseValue);
      updatedEligibilityScoreToReturn.map(function (number, index) {
        updatedEligibilityScoreToReturn[index] += eligibilityScore[index];
      });
    }
  });
  (maritalStatus === "married") ? updatedEligibilityScoreToReturn.splice(3, 1) : updatedEligibilityScoreToReturn.splice(4, 1);
  return updatedEligibilityScoreToReturn;
};

const checkIfMarried = (allUserAnswers, algorithmWeightObject) =>
  (allUserAnswers["questionSixPartThreeSelected"] === "Q6Part3Option2") ?
    getEligibilityScore(allUserAnswers, algorithmWeightObject, "married") :
    getEligibilityScore(allUserAnswers, algorithmWeightObject, "single");

const getScoreSingleResponse = (allUserAnswers, algorithmWeightObject, questionId, userResponseValue) => {
  if (userResponseValue !== "") {
    return algorithmWeightObject[questionId][userResponseValue];
  }
};

const getScoreMultipleResponse = (allUserAnswers, algorithmWeightObject, questionId, userResponseValueArray) => {
  let careerLifePreferenceScore = 0;
  let riskPreferenceScore = 0;
  userResponseValueArray.map((userResponseValue) => {
    careerLifePreferenceScore += algorithmWeightObject[questionId][userResponseValue][0];
    riskPreferenceScore += algorithmWeightObject[questionId][userResponseValue][1];
  });
  return [careerLifePreferenceScore, riskPreferenceScore];
};

const handleSubmitSurvey = (state, action) => {
  let userValueObject = action.payload;
  const userValueObjectKeys = Object.keys(userValueObject);
  const newState = Object.assign({}, state);
  if (checkIfSpouseHasHigherScore(userValueObject) === true) {
    flipDegrees(userValueObject);
  };
  let eligibilityScore = checkIfMarried(userValueObject, responsePreferenceWeights);

  userValueObjectKeys.map((item) => {
    let userResponseValue = userValueObject[item];
    if (userResponseValue !== "") {
      const careerLifePreferenceScore = (typeof userValueObject[item] === "string") ?
        getScoreSingleResponse(userValueObject, responsePreferenceWeights, item, userResponseValue) :
        getScoreMultipleResponse(userValueObject, responsePreferenceWeights, item, userResponseValue);
      newState["careerLifePreferenceScore"] += careerLifePreferenceScore[0];
      newState["riskPreferenceScore"] += careerLifePreferenceScore[1];
    }
  });

  newState["australiaScore"] += eligibilityScore[2];
  newState["canadaScore"] += eligibilityScore[3];
  newState["irelandScore"] += eligibilityScore[4];
  newState["newZealandScore"] += eligibilityScore[5];
  newState["unitedKingdomScore"] += eligibilityScore[6];
  newState["unitedStatesScore"] += eligibilityScore[7];
  newState["isSurveySubmitted"] += true;

  return newState;
};

const submission = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SURVEY:
      let updatedState = handleSubmitSurvey(state, action);
      return updatedState;
    default:
      return state;
  }
};

export default submission;