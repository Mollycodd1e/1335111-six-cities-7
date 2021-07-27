import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const.js';
import {requireAuthorization, logout, setUsername} from '../action.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  username: '',
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.username = '';
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(setUsername , (state, action) => {
      state.username = action.payload;
    });
});

export {user};
