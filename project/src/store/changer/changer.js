import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType} from '../action.js';
import {CITIES, SortType} from '../../const.js';

const initialState = {
  activeCity: CITIES[0],
  sortType: SortType.POPULAR,
};

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
