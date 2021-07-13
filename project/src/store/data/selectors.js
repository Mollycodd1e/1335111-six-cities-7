import {NameSpace} from '../reducer.js';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getRoom = (state) => state[NameSpace.DATA].room;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getOffersNearby = (state) => state[NameSpace.DATA].offersNearby;
export const getDataLoadStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getRoomLoadStatus = (state) => state[NameSpace.DATA].isRoomDataLoaded;
