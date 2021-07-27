import { AuthorizationStatus } from '../const.js';
import {
  changeCity,
  changeSortType,
  ActionType,
  loadOffers,
  loadFavoriteOffers,
  loadOffersNearby,
  loadRoom,
  logout,
  requireAuthorization
} from './action.js';

const MOCK_OFFERS = [{
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    'avatar_url': 'img/1.png',
    id: 3,
    'is_pro': true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  'is_favorite': false,
  'is_premium': false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  'max_adults': 4,
  'preview_image': 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
}];

describe('Actions', () => {
  it('action creator for change city', () => {
    const expectedCity = {
      type: ActionType.CHANGE_CITY,
      payload: 'Cologne',
    };

    expect(changeCity('Cologne')).toEqual(expectedCity);
  });

  it('action creator for change sort type', () => {
    const expectedSortType = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: 'From high to low price',
    };

    expect(changeSortType('From high to low price')).toEqual(expectedSortType);
  });

  it('action creator for load offers', () => {
    const expectedLoadOffers = {
      type: ActionType.LOAD_OFFERS,
      payload: MOCK_OFFERS,
    };

    expect(loadOffers(MOCK_OFFERS)).toEqual(expectedLoadOffers);
  });

  it('action creator for load favoriteOffers', () => {
    const expectedLoadFavoriteOffers = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: MOCK_OFFERS,
    };

    expect(loadFavoriteOffers(MOCK_OFFERS)).toEqual(expectedLoadFavoriteOffers);
  });

  it('action creator for load offersNearby', () => {
    const expectedOffersNearby = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: MOCK_OFFERS,
    };

    expect(loadOffersNearby(MOCK_OFFERS)).toEqual(expectedOffersNearby);
  });

  it('action creator for load room', () => {
    const expectedRoom = {
      type: ActionType.LOAD_ROOM,
      payload: MOCK_OFFERS,
    };

    expect(loadRoom(MOCK_OFFERS)).toEqual(expectedRoom);
  });

  it('action creator for requireAuthorization', () => {
    const expectedRequireAuthorization = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual(expectedRequireAuthorization);
  });

  it('action creator for logout', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });
});
