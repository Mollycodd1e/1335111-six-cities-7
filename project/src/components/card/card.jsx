import React from 'react';
import offerProp from '../offersList/offerProp';

function Card(props) {
  const {offers} = props;

  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>{offers.isPremium ? 'Premium' : 'Standart'}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
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
          <button className={offers.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
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
          <a xlinkHref="#">{offers.title}</a>
        </h2>
        <p className="place-card__type">{offers.type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  offers: offerProp,
};

export default Card;
