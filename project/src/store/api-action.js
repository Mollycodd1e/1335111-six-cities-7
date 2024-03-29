import {loadOffers, loadReviews, loadOffersNearby, loadRoom, requireAuthorization, logout, loadFavoriteOffers, changeFavoriteOffers, setUsername} from './action.js';
import {AuthorizationStatus, APIRoute} from '../const.js';
import {adaptOffersToClient, adaptReviewsToClient} from '../adapter.js';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOffersToClient(offer));
      return offers;
    })
    .then((offers) => dispatch(loadOffers(offers)))
);

export const fetchRoom = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.ROOM}/${id}`)
    .then(({data}) => {
      const room = adaptOffersToClient(data);
      return room;
    }).then((room) => dispatch(loadRoom(room)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => {
      const reviews = data.map((review) => adaptReviewsToClient(review));
      return reviews;
    }).then((reviews) => dispatch(loadReviews(reviews)))
);

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.OFFERS_NEARBY}`)
    .then(({data}) => {
      const offersNearby = data.map((offer) => adaptOffersToClient(offer));
      return offersNearby;
    }).then((offersNearby) => dispatch(loadOffersNearby(offersNearby)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setUsername(data.email));
      localStorage.setItem('token', data.token);
      api.defaults.headers['x-token'] = data.token;
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logoutAction = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => api.defaults.headers['x-token'] = '')
    .then(() => dispatch(logout()))
);

export const postReview = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating},
    {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .then(({data}) => {
      const reviews = data.map((review) => adaptReviewsToClient(review));
      return reviews;
    }).then((reviews) => dispatch(loadReviews(reviews)))
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      const favoriteOffers = data.map((offer) => adaptOffersToClient(offer));
      return favoriteOffers;
    }).then((favoriteOffers) => dispatch(loadFavoriteOffers(favoriteOffers)))
);

export const postFavorites = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => adaptOffersToClient(data))
    .then((favoriteOffers) => dispatch(changeFavoriteOffers(favoriteOffers)))
);
