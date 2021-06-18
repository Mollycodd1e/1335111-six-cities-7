import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers.js';
import reviews from './mocks/reviews.js';

const Setting = {
  CARDS_COUNT: 4,
};

ReactDOM.render(
  <React.StrictMode>
    <App cardsCount={Setting.CARDS_COUNT} offers={offers} reviews={reviews}/>
  </React.StrictMode>,
  document.getElementById('root'));
