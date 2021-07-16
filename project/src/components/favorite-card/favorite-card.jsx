import React from 'react';
import offersListProp from '../offersList/offers-list.prop';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function FavoriteCard(props) {

  const {favoriteOffers, currentCity} = props;

  const favoriteOffersByCity = favoriteOffers.filter((offer) => offer.city.name === currentCity);

  return (
    <li className="favorites__locations-items">
      {favoriteOffersByCity .length > 0 ?
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" xlinkHref="#">
              <span>{currentCity}</span>
            </a>
          </div>
        </div>
        : ''}
      <div className="favorites__places">
        {favoriteOffersByCity.map((offer) => (
          <article className="favorites__card place-card" key={offer.id}>
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <a xlinkHref="#">
                <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
              </a>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;{offer.price}</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{width: `${offer.rating/5*100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
              </h2>
              <p className="place-card__type">{offer.type}</p>
            </div>
          </article>
        ))}
      </div>
    </li>
  );
}

FavoriteCard.propTypes = {
  favoriteOffers: offersListProp,
  currentCity: PropTypes.string.isRequired,
};

export default FavoriteCard;
