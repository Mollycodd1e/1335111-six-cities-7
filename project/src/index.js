import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import offers from './mocks/offers.js';
import reviews from './mocks/reviews.js';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const Setting = {
  CARDS_COUNT: 4,
};

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cardsCount={Setting.CARDS_COUNT} offers={offers} reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
