//import {ActionType} from './action.js';
import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, loadRoom, loadOffersNearby, loadReviews} from '../action.js';

const initialState = {
  offers: [],
  room: {},
  offersNearby: [],
  reviews: [],
  isRoomDataLoaded: false,
  isDataLoaded: false,
};

//const data = (state = initialState, action) => {
//  switch (action.type) {
//    case ActionType.LOAD_OFFERS:
//      return {
//        ...state,
//        offers: action.payload,
//        isDataLoaded: true,
//      };
//    case ActionType.LOAD_ROOM:
//      return {
//        ...state,
//        room: action.payload,
//        isRoomDataLoaded: true,
//      };
//    case ActionType.LOAD_OFFERS_NEARBY:
//      return {
//        ...state,
//        offersNearby: action.payload,
//        isDataLoaded: true,
//      };
//    case ActionType.LOAD_REVIEWS:
//      return {
//        ...state,
//        reviews: action.payload,
//        isDataLoaded: true,
//      };
//    default:
//      return state;
//  }
//};

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
    });
});

export {data};
