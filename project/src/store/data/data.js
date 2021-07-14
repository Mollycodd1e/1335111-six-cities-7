import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, loadRoom, loadOffersNearby, loadReviews, loadFavoriteOffers} from '../action.js';

const initialState = {
  offers: [],
  room: {},
  favoriteOffers: [],
  offersNearby: [],
  reviews: [],
  isRoomDataLoaded: false,
  isDataLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadRoom, (state, action) => {
      state.room = action.payload;
      state.isRoomDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
      state.isDataLoaded = true;
    });
});

export {data};
