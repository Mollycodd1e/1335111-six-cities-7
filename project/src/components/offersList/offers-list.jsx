import React from 'react';
import Card from '../card/card.jsx';
import offersListProp from './offers-list.prop.jsx';

function OffersList (props) {
  const {offers, isNearby, onOfferHover} = props;

  if (offers) {
    return (
      offers.map((offer, i) =>
        <Card key={isNearby ? offer.id : offer.id} offers={offers[i]} isNearby={isNearby} onOfferHover={onOfferHover}/>)
    );
  }
}

OffersList.propTypes = {
  offers: offersListProp,
};

export default OffersList;
