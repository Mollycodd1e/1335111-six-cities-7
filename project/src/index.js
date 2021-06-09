import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers.js';
import rewievs from './mocks/rewievs.js';

const Setting = {
  CARDS_COUNT: 4,
};

ReactDOM.render(
  <React.StrictMode>
    <App cardsCount={Setting.CARDS_COUNT} offers={offers} rewievs={rewievs}/>
  </React.StrictMode>,
  document.getElementById('root'));
