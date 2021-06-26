import React from 'react';
import NearbyOffer from '../nearbyOffer/nearbyOffer.jsx';
import offersListProp from '../offersList/offersList.prop.jsx';


function NearbyOffersList (props) {
  const {offers} = props;

  return (
    new Array(offers.length).fill().map((offer, i) =>
      <NearbyOffer key={offer} offers={offers[i]} />)
  );
}

NearbyOffersList.propTypes = {
  offers: offersListProp,
};

export default NearbyOffersList;
