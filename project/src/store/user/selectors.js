import {NameSpace} from '../reducer.js';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUsername = (state) => state[NameSpace.USER].username;
