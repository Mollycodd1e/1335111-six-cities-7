export const AppRoute = {
  SIGNIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
  MAIN: '/',
};

export const HouseType = {
  APARTMENT: 'apartment',
  ROOM: 'room',
  house: 'house',
  hotel: 'hotel',
};

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SortType = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  ROOM: '/hotel/id',
  REVIEWS: '/comments',
};

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
