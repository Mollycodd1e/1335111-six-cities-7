import {NameSpace} from '../reducer.js';

export const getActiveCity = (state) => state[NameSpace.CHANGER].activeCity;
export const getSortType = (state) => state[NameSpace.CHANGER].sortType;
