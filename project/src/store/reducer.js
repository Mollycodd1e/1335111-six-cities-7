//import {ActionType} from './action.js';
//import {CITIES, SortType} from '../const.js';
import {combineReducers} from 'redux';
import {user} from './user/user.js';
import {data} from './data/data.js';
import {changer} from './changer/changer.js';

export const NameSpace = {
  DATA: 'DATA',
  CHANGER: 'CHANGER',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CHANGER]: changer,
  [NameSpace.USER]: user,
});

//export const reducer = (state = initialState, action) => {
//  switch (action.type) {
//    case ActionType.CHANGE_CITY:
//      return {
//        ...state,
//        activeCity: action.payload,
//      };
//    case ActionType.CHANGE_SORT_TYPE:
//      return {
//        ...state,
//        sortType: action.payload,
//      };
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
//  }
//};
