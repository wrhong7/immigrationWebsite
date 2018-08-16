import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import MainContainer from './components/containers/mainContainer.jsx';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import SurveyContainer from "./components/containers/surveyContainer";
import about from "./components/presentation/pages/about";
import disclaimer from "./components/presentation/pages/disclaimer";
import algorithms from "./components/presentation/pages/algorithms";

function App() {

  //using root reducer to create a store and apply middleware-thunk for async action creators;
  const store = createStore(rootReducer, applyMiddleware(thunk));

  const goToLandingPage = () => {
    return <MainContainer/>
  }

  const goToTakeSurveyPage = () => {
    return <SurveyContainer/>
  }

  return <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={goToLandingPage} />
          <Route exact path="/about" component={about} />
          <Route exact path="/algorithms" component={algorithms} />
          <Route exact path="/disclaimer" component={disclaimer} />
          <Route exact path="/survey" component={goToTakeSurveyPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>

}

export default App;
