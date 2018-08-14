import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import MainContainer from './components/containers/mainContainer.jsx';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

function App() {

  //using root reducer to create a store and apply middleware-thunk for async action creators;
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return <Provider store={store}>
    <MainContainer/>
  </Provider>
}

export default App;
