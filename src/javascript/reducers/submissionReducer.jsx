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
  australiaScore: 0,
  canadaScore: 0,
  irelandScore: 0,
  newZealandScore: 0,
  unitedKingdomScore: 0,
  unitedStatesScore: 0,
};

const flipDegrees = (userValueObject) => {
  //need to flip degrees between principal applicant and spouse in case spouse is better educated than the princial;
  if (userValueObject["questionSixPartFourSelected"] === "Q6Part4Option2" ) {
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

const determineCanadaScore = (allUserAnswers, algorithmWeightObject, questionId, userResponseValueArray, userResponseValue) => {

  //this function is used to determine the proper canadian immigration score per the relationship status;
  //fyi, canada uses different scoring mechanism for single vs married couple;

  // if (userResponseValue["questionSixPartOneAnswer"] === "Q6Part2Option1") {
  //   console.log("PA's education level is", userResponseValue["questionSixPartOneAnswer"]["Q6Part2Option"]);
  // }

  console.log("triggered 1");
  console.log(userResponseValue);

};

const getScoreSingleResponse = (allUserAnswers, algorithmWeightObject, questionId, userResponseValue) => {
  if (userResponseValue !== "") {
    return algorithmWeightObject[questionId][userResponseValue];
  }
};

const getScoreMultipleResponse = (allUserAnswers, algorithmWeightObject, questionId, userResponseValueArray) => {
  let careerLifePreferenceScore = 0;
  let riskPreferenceScore = 0;
  let australiaScore = 0;
  let canadaScore = 0;
  let irelandScore = 0;
  let newZealandScore = 0;
  let unitedKingdomScore = 0;
  let unitedStatesScore = 0;
  userResponseValueArray.map((userResponseValue) => {

    console.log(userResponseValue);

    careerLifePreferenceScore += algorithmWeightObject[questionId][userResponseValue][0];
    riskPreferenceScore += algorithmWeightObject[questionId][userResponseValue][1];

    australiaScore += algorithmWeightObject[questionId][userResponseValue][2];

    //here needs to enter the canada score logic unit function for
    determineCanadaScore(allUserAnswers, algorithmWeightObject, questionId, userResponseValueArray, userResponseValue);

    irelandScore += algorithmWeightObject[questionId][userResponseValue][5];
    newZealandScore += algorithmWeightObject[questionId][userResponseValue][6];
    unitedKingdomScore += algorithmWeightObject[questionId][userResponseValue][7];
    unitedStatesScore += algorithmWeightObject[questionId][userResponseValue][8];
  });
  return [careerLifePreferenceScore, riskPreferenceScore];
};

const handleSubmitSurvey = (state, action) => {
  let userValueObject = action.payload;
  const userValueObjectKeys = Object.keys(userValueObject);
  const newState = Object.assign({}, state);

  if (checkIfSpouseHasHigherScore(userValueObject) === true) {
    flipDegrees(userValueObject);
  }

  userValueObjectKeys.map((item) => {
    const userResponseValue = userValueObject[item];
    if (userResponseValue !== "") {
      const careerLifePreferenceScore = (typeof userValueObject[item] === "string") ?
        getScoreSingleResponse(userValueObject, responsePreferenceWeights, item, userResponseValue) :
        getScoreMultipleResponse(userValueObject, responsePreferenceWeights, item, userResponseValue);

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