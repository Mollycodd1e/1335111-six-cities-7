import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './components/services/api.js';
import {requireAuthorization} from './store/action.js';
import {AuthorizationStatus} from './const.js';
import App from './components/app/app';
import reducer from './store/reducer.js';
import {checkAuth, fetchFavoriteList, fetchOffersList} from './store/api-action.js';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({reducer: reducer, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());
store.dispatch(fetchFavoriteList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
