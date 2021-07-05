import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createAPI} from './components/services/api.js';
import {ActionCreator} from './store/action.js';
import {AuthorizationStatus} from './const.js';
import App from './components/app/app';
//import offers from './mocks/offers.js';
//import reviews from './mocks/reviews.js';
import {reducer} from './store/reducer';
import thunk from 'redux-thunk';
import {checkAuth, fetchOffersList} from './store/api-action.js';
import {composeWithDevTools} from 'redux-devtools-extension';

//const Setting = {
//  CARDS_COUNT: 4,
//};

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
