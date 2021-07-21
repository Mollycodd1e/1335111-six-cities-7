import React from 'react';
import Review from './review.jsx';
import reviewsProp from '../offersList/reviews.prop.jsx';

function ReviewsList (props) {

  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <Review key={review.id} review={review}/>,
      )}
    </ul>);
}

ReviewsList.propTypes = {
  reviews: reviewsProp,
};

export default ReviewsList;
