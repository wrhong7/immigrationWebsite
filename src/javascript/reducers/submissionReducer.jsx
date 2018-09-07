import {
  SUBMIT_SURVEY,
} from '../actions/actionConstants';

import {
  responsePreferenceWeights, preferenceScorePerCountry,
} from '../../constants/surveyAlgorithms';

const initialState = {
  isSurveySubmitted: false,
  careerLifePreferenceScore: 10,
  riskPreferenceScore: 20,
  surveyResults: {
    industryPreference: [["Australia", 0], ["Canada", 0], ["Ireland", 0], ["New Zealand", 0], ["United Kingdom", 0], ["United States", 0]],
    cityPreference: [["Australia", 0], ["Canada", 0], ["Ireland", 0], ["New Zealand", 0], ["United Kingdom", 0], ["United States", 0]],
    riskPreference: [["Australia", 20], ["Canada", 20], ["Ireland", 20], ["New Zealand", 20], ["United Kingdom", 20], ["United States", 20]],
    careerLifePreference: [["Australia", 10], ["Canada", 10], ["Ireland", 10], ["New Zealand", 10], ["United Kingdom",10], ["United States", 10]],
    eligibility: [["Australia", 30], ["Canada", 110], ["Ireland", 0], ["New Zealand", 0], ["United Kingdom", 0], ["United States", 0]],
  },
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

const updateEligibilityScore = (propState, eligibilityScore) => {
  let eligibilityScoreUpdate = propState["surveyResults"]["eligibility"];
  //updates australia eligibility score
  eligibilityScoreUpdate[0][1] += eligibilityScore[2];
  //updates canada eligibility score
  eligibilityScoreUpdate[1][1] += eligibilityScore[3];
  //updates ireland eligibility score
  eligibilityScoreUpdate[2][1] += eligibilityScore[4];
  //updates australia eligibility score
  eligibilityScoreUpdate[3][1] += eligibilityScore[5];
  //updates canada eligibility score
  eligibilityScoreUpdate[4][1] += eligibilityScore[6];
  //updates ireland eligibility score
  eligibilityScoreUpdate[5][1] += eligibilityScore[7];
  //updates survey submission status
  propState["isSurveySubmitted"] = true;
  return propState;
};

const updatePreferenceScoreMapping = (propState, preferenceScorePerCountry, updatedValue) => {
  let assignCountryValues = Object.keys(preferenceScorePerCountry);
  let indexCounter = 0;
  assignCountryValues.map((value) => {
    let countryFieldValue = preferenceScorePerCountry[value][updatedValue];
    if (updatedValue === "Life" || "Career") {
      propState["surveyResults"]["careerLifePreference"][indexCounter][1] = countryFieldValue;
    };
    if (updatedValue === "riskTaking || riskAverse") {
      propState["surveyResults"]["riskPreference"][indexCounter][1] = countryFieldValue;
    };
    indexCounter += 1;
  });
  return propState;
};

const updatePreferenceScore = (propState, preferenceScorePerCountry) => {
  propState["careerLifePreferenceScore"] >= 0 ?
    updatePreferenceScoreMapping(propState, preferenceScorePerCountry, "Life"):
    updatePreferenceScoreMapping(propState, preferenceScorePerCountry, "Career");
  propState["riskPreferenceScore"] >= 0 ?
    updatePreferenceScoreMapping(propState, preferenceScorePerCountry, "riskTaking"):
    updatePreferenceScoreMapping(propState, preferenceScorePerCountry, "riskAverse");
};

const updateIndustryScore = (propState, preferenceScorePerCountry, userChoices) => {

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
  updateEligibilityScore(newState, eligibilityScore);
  updatePreferenceScore(newState, preferenceScorePerCountry);
  updateIndustryScore(newState, preferenceScorePerCountry, userValueObject["questionSevenPartOneSelected"]);
  return newState;
};

const submission = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SURVEY:
      let updatedState = handleSubmitSurvey(state, action);
      console.log(updatedState);

      //here we need to restructure the updatedState to d3 readable format and let surveyResult.jsx
      //to present the drawing

      //here we need to add a function that takes in risk and careerLife scores and map the scores accordingly.
      //if the risk is a minus value, we will rank based on risk averse countries.
      //if the risk is a positive value, we will rank based on risk taking counries.
      //if the career-life is a minus value, we will rank based on career emphasizing countries.
      //if the career-life is a positive value, we will rank based on life emphasizing countries.

      //per eligibility, if someone meets the eligibility, we will use 100%.
      //per eligibility, if someone meets the criteria only after the job sponsorship,
      //we will use 60% if someone can get PR in 2 years--Case of Australia, Canada, Ireland, and New Zealand.
      //we will use 40% if someone can get PR in 5 years--Case of United Kingdom.
      //we will use 20% if someone can get PR in undefined timeline.
      //We will use 100% if someone has high academic publication volume.

      return updatedState;
    default:
      return state;
  }
};

export default submission;