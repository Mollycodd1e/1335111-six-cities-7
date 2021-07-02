import {ActionType} from './action.js';
import offers from '../mocks/offers.js';
import {CITIES} from '../const.js';

const getOffersListByCity = (offersList, activeCity) =>
  offersList.filter(({city}) => city.name  === activeCity);

const initialState = {
  activeCity: CITIES[0],
  offersList: getOffersListByCity(offers, CITIES[0]),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
        offersList: getOffersListByCity(offers, action.payload),
      };
    default:
      return state;
  }
};
