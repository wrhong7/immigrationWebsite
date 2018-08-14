import {SET_ACTIVE_SECTION} from './actionConstants';

export const setActiveSectionId = (id) => ({
  type: SET_ACTIVE_SECTION,
  payload: id,
});