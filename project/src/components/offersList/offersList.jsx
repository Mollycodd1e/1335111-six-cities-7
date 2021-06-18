import React, {useState} from 'react';
import Card from '../card/card.jsx';
import offersListProp from '../offersList/offersList.prop.jsx';
import cardProp from '../card/card.prop.jsx';

function OffersList (props) {
  const {cardsCount, offers} = props;
  const [, setId] = useState(null);

  return (
    new Array(cardsCount).fill().map((card, i) =>
      <Card key={card} offers={offers[i]} onMouseEnter={() => setId(card.id)} onMouseLeave={() => setId(null)}/>)
  );
}

OffersList.propTypes = {
  cardsCount: cardProp,
  offers: offersListProp,
};

export default OffersList;
