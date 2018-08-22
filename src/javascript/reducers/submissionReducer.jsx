import {
  SUBMIT_SURVEY,
} from '../actions/actionConstants';

const initialState = {
  isSurveySubmitted: false,
  country: '',
};

const handleSubmitSurvey = (state, action) => {
  // do some calculations
  console.log("in the reducer, about to handle action", action.payload);

  // action.payload.map((item, index) => {
  //   console.log(item);
  // })

  const newState = Object.assign({}, state);
  newState["country"] = "canada";
  newState["isSurveySubmitted"] = true;

  console.log(newState);

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