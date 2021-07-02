export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};
