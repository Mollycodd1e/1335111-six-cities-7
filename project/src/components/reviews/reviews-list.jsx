import React from 'react';
import Review from './review.jsx';
import reviewsProp from '../offersList/reviews.prop.jsx';

function ReviewsList (props) {

  const {reviews} = props;

  const maximumAmountOfReviews = 10;

  return (
    <ul className="reviews__list">
      {reviews.slice(0, maximumAmountOfReviews).sort((a, b) => new Date(b.date) - new Date(a.date)).map((review) =>
        <Review key={review.id} review={review}/>,
      )}
    </ul>);
}

ReviewsList.propTypes = {
  reviews: reviewsProp,
};

export default ReviewsList;
