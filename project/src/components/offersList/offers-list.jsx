import React, {useState} from 'react';
import Card from '../card/card.jsx';
import offersListProp from './offersList.prop.jsx';

function OffersList (props) {
  const {offers} = props;
  const [, setId] = useState(null);

  if (offers) {
    return (
      offers.map((offer, i) =>
        <Card key={offer.isNearby === true ? offer.id : offer.id} offers={offers[i]} onMouseEnter={() => setId(offer.id)} onMouseLeave={() => setId(null)}/>)
    );
  }
}

OffersList.propTypes = {
  offers: offersListProp,
};

export default OffersList;
