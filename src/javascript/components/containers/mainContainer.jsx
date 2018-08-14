import React from 'react';
import {connect} from 'react-redux';
import Main from '../presentation/main';

const mapStateToProps = state => state.main;

const mapDispatchToProps = dispatch => {
/*  in order to dispatch a state, this section will need to be updated and state will be updated*/
};

export default connect(
  mapStateToProps,
  null,
)(Main);