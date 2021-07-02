export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
  CHANGE_SORT_TYPE: 'sort/changeSortType',
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
};
