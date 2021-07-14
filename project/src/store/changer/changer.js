//import {ActionType} from './action.js.js';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType} from '../action.js';
import {CITIES, SortType} from '../../const.js';

const initialState = {
  activeCity: CITIES[0],
  sortType: SortType.POPULAR,
};

//const changer = (state = initialState, action) => {
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
//    default:
//      return state;
//  }
//};

const changer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export {changer};
