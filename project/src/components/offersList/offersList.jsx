import React from 'react';
import Card from '../card/card.jsx';
import offersListProp from '../offersList/offersList.prop.jsx';
import cardProp from '../card/card.prop.jsx';

function OffersList (props) {
  const {cardsCount, offers} = props;

  return (
    new Array(cardsCount).fill().map((card, i) =>
      <Card key={card} offers={offers[i]}/>)
  );
}

OffersList.propTypes = {
  cardsCount: cardProp,
  offers: offersListProp,
};

export default OffersList;
