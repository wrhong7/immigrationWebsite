import {
  SET_ACTIVE_SECTION
} from '../actions/actionConstants';

const initialState = {
  activeSectionId: "",
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_SECTION:
      return {...state, activeSectionId: action.payload};
    default:
      return state;
  }
};

export default main;