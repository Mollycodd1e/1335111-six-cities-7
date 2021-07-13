import {SortType, AuthorizationStatus} from './const.js';

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

export const getOffersListByCity = (offersList, activeCity) =>
  offersList.filter(({city}) => city.name  === activeCity);

export const getSortedOffers = (sortType, offers) => {
  switch (sortType) {
    case SortType.PRICE_LOW:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.PRICE_HIGH:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    case SortType.POPULAR:
    default:
      return offers;
  }
};
