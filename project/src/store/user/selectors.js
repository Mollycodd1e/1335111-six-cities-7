import {NameSpace} from '../reducer.js';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
