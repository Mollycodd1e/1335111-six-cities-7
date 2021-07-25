import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {postReview} from '../../store/api-action.js';

function ReviewForm(props) {
  const {roomId} =props;

  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const [review, setReview] = useState('');

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postReview({id: roomId, comment: review, rating: Number(rating)}));
    setRating(null);
    setReview('');
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => onFormSubmit(evt)}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={(evt) => setRating(Number(evt.target.value))}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={(evt) => setRating(Number(evt.target.value))}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={(evt) => setRating(Number(evt.target.value))}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={(evt) => setRating(Number(evt.target.value))}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={(evt) => setRating(Number(evt.target.value))}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" minLength="50" maxLength="300" placeholder="Tell how was your stay, what you like and what can be improved"
        value={review} onChange={(evt) => setReview(evt.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={(review.length <= 50) || (review.length >= 300) || (rating === null) ? 1 : 0}>Submit</button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  roomId: PropTypes.number.isRequired,
};

export default ReviewForm;
