import React from 'react';
import Review from './review.jsx';
import reviewsProp from '../offersList/reviews.prop.jsx';
import offersListProp from '../offersList/offersList.prop.jsx';

function ReviewsList (props) {

  const {reviews, offer} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        if ((review.id) === (offer.id)) {
          return <Review review={review}/>;
        }
      })}
    </ul>);
}

ReviewsList.propTypes = {
  offer: offersListProp,
  reviews: reviewsProp,
};

export default ReviewsList;
