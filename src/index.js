import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,compose,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import { SagaAdd,SagaEdit,SagaRem } from './saga/sagas'

import createSagaMiddleware from 'redux-saga'
import Reducer from './Reducer/Reducer'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(Reducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(SagaAdd)
sagaMiddleware.run(SagaEdit)
sagaMiddleware.run(SagaRem)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
