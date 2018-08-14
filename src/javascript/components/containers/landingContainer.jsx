import React from 'react';
import {connect} from 'react-redux';
import Landing from '../presentation/pages/landing';
import * as actions from '../../actions/actionCreators';

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({
  handleButtonClick: (sectionId) => dispatch(actions.setActiveSectionId(sectionId)),
});

export default connect(
  //saying null since we don't have state for this function
  null,
  mapDispatchToProps,
)(Landing);