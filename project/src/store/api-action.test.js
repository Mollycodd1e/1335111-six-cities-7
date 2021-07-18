import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../components/services/api.js';
import {ActionType} from './action.js';
import {checkAuth, fetchOffersList, login} from './api-action.js';
import {APIRoute, AuthorizationStatus} from '../const.js';
import {adaptOffersToClient} from '../adapter.js';

let api = null;

const MOCK_OFFERS = [{
  "bedrooms": 3,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": "Amsterdam"
  },
  "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
  "host": {
    "avatar_url": "img/1.png",
    "id": 3,
    "is_pro": true,
    "name": "Angelina"
  },
  "id": 1,
  "images": ["img/1.png", "img/2.png"],
  "is_favorite": false,
  "is_premium": false,
  "location": {
    "latitude": 52.35514938496378,
    "longitude": 4.673877537499948,
    "zoom": 8
  },
  "max_adults": 4,
  "preview_image": "img/1.png",
  "price": 120,
  "rating": 4.8,
  "title": "Beautiful & luxurious studio at great location",
  "type": "apartment"
}];

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'fake@test.ru', password: 'q1w2e3r4'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, MOCK_OFFERS);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: adaptOffersToClient(MOCK_OFFERS),
        });
      });
  });
});
