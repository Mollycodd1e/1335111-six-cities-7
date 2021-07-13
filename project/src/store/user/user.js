//import {ActionType} from '../action.js';
import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const.js';
import {requireAuthorization, logout} from '../action.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

//const user = (state = initialState, action) => {
//  switch (action.type) {
//    case ActionType.REQUIRED_AUTHORIZATION:
//      return {
//        ...state,
//        authorizationStatus: action.payload,
//      };
//    case ActionType.LOGOUT:
//      return {
//        ...state,
//        authorizationStatus: AuthorizationStatus.NO_AUTH,
//      };
//    default:
//      return state;
//  }
//};

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
