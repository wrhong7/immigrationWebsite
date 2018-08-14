import React from 'react';
import {connect} from 'react-redux';
import Main from '../presentation/main';

const mapStateToProps = state => state.main;

const mapDispatchToProps = dispatch => {

};

export default connect(
  mapStateToProps,
  null,
)(Main);