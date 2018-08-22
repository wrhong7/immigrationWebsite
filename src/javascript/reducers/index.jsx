import {combineReducers} from 'redux';
import main from './mainReducer';
import submission from './submissionReducer';

export default combineReducers({
  main,
  submission,
});