import React from 'react';
import Logo from '../logo/logo.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offersList/offers-list.jsx';
import ReviewsForm from '../reviews-form/reviews-form.jsx';
import offersListProp from '../offersList/offersList.prop.jsx';
import reviewsProp from '../offersList/reviews.prop.jsx';
import ReviewsList from '../reviews/review-list.jsx';

function Room (props) {

  const {offers , reviews} = props;
  const nearbyOffersCount = 3;

  for (const offer of offers) {
    if ((`/offer/${offer.id}`) === window.location.pathname) {
      return (
        <div className="page">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <Logo />
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" xlinkHref="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" xlinkHref="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  <div className="property__image-wrapper">
                    <img className="property__image" src="img/room.jpg" alt="Photo studio"/>
                  </div>
                  <div className="property__image-wrapper">
                    <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
                  </div>
                  <div className="property__image-wrapper">
                    <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio"/>
                  </div>
                  <div className="property__image-wrapper">
                    <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio"/>
                  </div>
                  <div className="property__image-wrapper">
                    <img className="property__image" src="img/studio-01.jpg" alt="Photo studio"/>
                  </div>
                  <div className="property__image-wrapper">
                    <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
                  </div>
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  <div className="property__mark">
                    <span>{offer.isPremium ? 'Premium' : 'Standart'}</span>
                  </div>
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {offer.title}
                    </h1>
                    <button className="property__bookmark-button button" type="button">
                      <svg className="property__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: `${offer.rating/5*100}%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{offer.rating}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {offer.type}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {offer.bedrooms} Bedrooms
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max {offer.maxAdults} adults
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{offer.price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {offer.goods.map((item) =>
                        <li className="property__inside-item" key={item}>{item}</li>,
                      )}
                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                        <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                      </div>
                      <span className="property__user-name">
                        {offer.host.name}
                      </span>
                      <span className="property__user-status">
                        {offer.host.isPro ? 'Pro' : ''}
                      </span>
                    </div>
                    <div className="property__description">
                      <p className="property__text">
                        {offer.description}
                      </p>
                      <p className="property__text">
                        An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                      </p>
                    </div>
                  </div>
                  <section className="property__reviews reviews">
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                    <ReviewsList reviews={reviews} offer={offer}/>
                    <ReviewsForm />
                  </section>
                </div>
              </div>
              <section className="property__map map">
                <Map offers={offers}/>
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <OffersList offers={offers.slice(0, nearbyOffersCount)} isNearby/>
                </div>
              </section>
            </div>
          </main>
        </div>
      );}}
}

Room.propTypes = {
  offers: offersListProp,
  reviews: reviewsProp,
};

export default Room;
