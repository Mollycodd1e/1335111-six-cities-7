import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
  CHANGE_SORT_TYPE: 'sortTypes/changeSortType',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_ROOM: 'room/loadRoom',
  LOAD_REVIEWS: 'room/loadReviews',
  LOAD_OFFERS_NEARBY: 'room/loadOffersNearby',
  CHANGE_FAVORITE_OFFERS: 'favorite/changeFavoriteOffers',
  LOAD_FAVORITE_OFFERS: 'favorite/loadFavoriteOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (sortType) => ({
  payload: sortType,
}));

export const loadOffers = createAction( ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const changeFavoriteOffers = createAction( ActionType.CHANGE_FAVORITE_OFFERS, (favoriteOffers) => ({
  payload: favoriteOffers,
}));

export const loadFavoriteOffers = createAction( ActionType.LOAD_FAVORITE_OFFERS, (favoriteOffers) => ({
  payload: favoriteOffers,
}));

export const loadRoom = createAction(ActionType.LOAD_ROOM, (room) => ({
  payload: room,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offersNearby) => ({
  payload: offersNearby,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);
