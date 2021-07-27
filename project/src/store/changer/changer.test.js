import {changer} from './changer.js';
import {CITIES, SortType} from '../../const.js';
import {changeCity, changeSortType} from '../action.js';

describe('Reducer: changer', () => {
  it('without additional parameters should return initial state', () => {
    expect(changer(undefined, {})).toEqual({activeCity: CITIES[0], sortType: SortType.POPULAR});
  });

  it('should change to another town', () => {
    const state = {activeCity: CITIES[0], sortType: SortType.POPULAR};

    expect(changer(state, changeCity(CITIES[1])))
      .toEqual({activeCity: 'Cologne', sortType: 'Popular'});
  });

  it('should change to another sort type', () => {
    const state = {activeCity: CITIES[0], sortType: SortType.POPULAR};

    expect(changer(state, changeSortType(SortType.PRICE_LOW)))
      .toEqual({activeCity: 'Paris', sortType: 'Price: low to high'});
  });
});
