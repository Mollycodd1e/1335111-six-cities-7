import React from 'react';
import Review from './review.jsx';
import reviewsProp from '../offersList/reviews.prop.jsx';
import offerProp from '../offersList/offer.prop.jsx';

function ReviewsList (props) {

  const {reviews, offer} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        if ((review.id) === (offer.id)) {
          return <Review key={offer} review={review}/>;
        }
      })}
    </ul>);
}

ReviewsList.propTypes = {
  offer: offerProp,
  reviews: reviewsProp,
};

export default ReviewsList;
