// import React from 'react';
import {connect} from 'react-redux';
import Main from '../presentation/main';
import SurveyResult from "../presentation/surveyResult";

const mapStateToProps = state => state.submission;

// const mapDispatchToProps = dispatch => {
// /*  in order to dispatch a state, this section will need to be updated and state will be updated*/
// };

export default connect(
  mapStateToProps,
  null,
)(SurveyResult);

  // if i want an action to change state, use map dispatch to props [its like api read-write access]

  // if i simply want to call the values, then i use the map state to props [its like api read access]