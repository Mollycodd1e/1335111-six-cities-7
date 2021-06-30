import React, {useState} from 'react';
import Card from '../card/card.jsx';
import offersListProp from './offersList.prop.jsx';

function OffersList (props) {
  const {offers, isNearby} = props;
  const [, setId] = useState(null);

  if (offers) {
    return (
      offers.map((offer, i) =>
        <Card key={isNearby ? offer.id : offer.id} offers={offers[i]} isNearby={isNearby} onMouseEnter={() => setId(offer.id)} onMouseLeave={() => setId(null)}/>)
    );
  }
}

OffersList.propTypes = {
  offers: offersListProp,
};

export default OffersList;
