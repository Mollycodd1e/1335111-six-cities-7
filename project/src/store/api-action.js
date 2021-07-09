import {ActionCreator} from './action.js';
import {AuthorizationStatus, APIRoute} from '../const.js';
import {adaptOffersToClient, adaptReviewsToClient} from '../adapter.js';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOffersToClient(offer));
      return offers;
    }).then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);

export const fetchRoom = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.ROOM}/${id}`)
    .then(({data}) => {
      const room = data.adaptOffersToClient();
      return room;
    }).then((room) => dispatch(ActionCreator.loadOffers(room)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => {
      const reviews = data.map((review) => adaptReviewsToClient(review));
      return reviews;
    }).then((reviews) => dispatch(ActionCreator.loadReviews(reviews)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
