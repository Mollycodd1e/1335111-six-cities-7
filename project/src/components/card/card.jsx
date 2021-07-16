import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import offerProp from '../offersList/offer.prop';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors.js';
import {AppRoute, AuthorizationStatus} from '../../const.js';
import {postFavorites} from '../../store/api-action.js';

function Card(props) {
  const {offers, isNearby, onOfferHover} = props;

  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();

  const [status, setStatus] = useState(0);

  //useEffect(() => {
  //  dispatch(postFavorites(offers.id, status));
  //}, [status]);

  const onFavoriteClick = (evt) => {
    evt.preventDefault();
    if (status === 0) {
      setStatus(1);
      dispatch(postFavorites(offers.id , status));
    } else {
      setStatus(0);
      dispatch(postFavorites(offers.id , status));
    }
  };

  const handleMouseEnter = () => {
    if (onOfferHover) {
      onOfferHover(offers);
    }
  };

  const handleMouseLeave = () => {
    if (onOfferHover) {
      onOfferHover(null);
    }
  };

  return (
    <article className={isNearby ? 'near-places__card place-card' : 'cities__place-card place-card'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      {isNearby ? '' :
        <div className={offers.isPremium ? 'place-card__mark' : 'visually-hidden'}>
          <span>Premium</span>
        </div>}
      <div className={isNearby ? 'near-places__image-wrapper place-card__image-wrapper' : 'cities__image-wrapper place-card__image-wrapper'}>
        <a xlinkHref="#">
          <img className="place-card__image" src={offers.previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offers.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={offers.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
            type="button"
            onClick={authorizationStatus === AuthorizationStatus.AUTH ? onFavoriteClick : () => history.push(AppRoute.SIGNIN)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offers.rating/5*100}%`}}></span>
            <span className="visually-hidden">{offers.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offers.id}`}>{offers.title}</Link>
        </h2>
        <p className="place-card__type">{offers.type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  isNearby: PropTypes.bool.isRequired,
  offers: offerProp,
  onOfferHover: PropTypes.func,
};

export default Card;
