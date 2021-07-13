import React from 'react';
import ReactDOM from 'react-dom';
//import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './components/services/api.js';
//import {ActionCreator} from './store/action.js';
import { requireAuthorization } from './store/action.js';
import {AuthorizationStatus} from './const.js';
import App from './components/app/app';
import reducer from './store/reducer.js';
//import thunk from 'redux-thunk';
import {checkAuth, fetchOffersList} from './store/api-action.js';
//import {composeWithDevTools} from 'redux-devtools-extension';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

//const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

const store = configureStore({reducer: reducer, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
