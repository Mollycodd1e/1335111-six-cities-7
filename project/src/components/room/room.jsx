import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import Header from '../header/header.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offersList/offers-list.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import ReviewsList from '../reviews/reviews-list.jsx';
import {AuthorizationStatus} from '../../const.js';
import {fetchReviews, fetchRoom, fetchOffersNearby} from '../../store/api-action.js';
import LoadingScreen from '../loading-screen/loading-screen.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {getOffersNearby, getReviews, getRoom, getRoomLoadStatus} from '../../store/data/selectors.js';
import {getAuthorizationStatus} from '../../store/user/selectors.js';

function Room () {

  const dispatch = useDispatch();

  const {id} = useParams();

  const offersNearby = useSelector(getOffersNearby);
  const reviews = useSelector(getReviews);
  const room = useSelector(getRoom);
  const isRoomDataLoaded = useSelector(getRoomLoadStatus);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchOffersNearby(id)).then(() =>
      dispatch(fetchRoom(id)));
    dispatch(fetchReviews(id));
  }, [id]);

  if (!isRoomDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const maxVisiblePhotos = 6;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {room.images.slice(0, maxVisiblePhotos).map((image) => (
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
                  {room.goods.map((item) =>
                    <li className="property__inside-item" key={item}>{item}</li>,
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={room.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {room.host.name}
                  </span>
                  <span className="property__user-status">
                    {room.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {room.description}
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
                  <ReviewForm roomId={room.id}/> : ''}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offersNearby} room={room}/>
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

export default Room;
