import React from 'react';
import {connect} from 'react-redux';
import Survey from '../presentation/pages/survey.jsx';
import * as actions from '../../actions/actionCreators';

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({
  setQuestionOneAnswer: (res) => dispatch(actions.setQuestionOneAnswer(res)),
});

export default connect(
  //saying null since we don't have state for this function
  null,
  mapDispatchToProps,
)(Survey);