export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
  CHANGE_SORT_TYPE: 'sortTypes/changeSortType',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_REVIEWS: 'room/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
