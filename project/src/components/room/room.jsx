import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {connect} from 'react-redux';
import Header from '../header/header.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offersList/offers-list.jsx';
import ReviewsForm from '../reviews-form/reviews-form.jsx';
import offersListProp from '../offersList/offers-list.prop.jsx';
import reviewsProp from '../offersList/reviews.prop.jsx';
import ReviewsList from '../reviews/review-list.jsx';
import {getOffersListByCity} from '../../const.js';
import {fetchReviews, fetchRoom, fetchOffersNearby} from '../../store/api-action.js';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen.jsx';
import {AuthorizationStatus} from '../../const.js';
//import offerProp from '../offersList/offer.prop.jsx';

function Room (props) {

  const {offers, reviews, offersNearby , loadData, room, isRoomDataLoaded, authorizationStatus} = props;
  const {id} = useParams();

  useEffect(() => {
    loadData(id);
  }, [id]);

  if (!isRoomDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const nearbyOffersCount = 3;
  const maxVisiblePhotos = 6;
  const offer = offers.find((item) => item.id === Number(id));

  //for (const offer of offers) {
  //if ((`/offer/${offer.id}`) === window.location.pathname) {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(0, maxVisiblePhotos).map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {room.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {room.title}
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
                  <span style={{width: `${room.rating/5*100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{room.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {room.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {room.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {room.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{room.price}</b>
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
                <ReviewsList reviews={reviews}/>
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <ReviewsForm roomId={room.id}/> : ''}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers.slice(0, nearbyOffersCount)}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={offersNearby} isNearby/>
            </div>
          </section>
        </div>
      </main>
    </div>);}
//  );}}
//}

Room.propTypes = {
  offers: offersListProp,
  reviews: reviewsProp,
  loadData: PropTypes.func.isRequired,
  room: PropTypes.object.isRequired,
  offersNearby: offersListProp,
  isRoomDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: getOffersListByCity(state.offers, state.activeCity),
  reviews: state.reviews,
  room: state.room,
  offersNearby: state.offersNearby,
  isRoomDataLoaded: state.isRoomDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  loadData(id) {
    dispatch(fetchRoom(id));
    dispatch(fetchReviews(id));
    dispatch(fetchOffersNearby(id));
  },
});


export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
