import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const.js';
import {requireAuthorization, logout} from '../action.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export {user};
