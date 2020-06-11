/**
 * @format
 */

import 'react-native-gesture-handler'
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import * as reducers from './src/store/reducers/index'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({ ...reducers }),
  composeEnhancers(applyMiddleware(promiseMiddleware)),
)

const appWithReduxProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => appWithReduxProvider)
