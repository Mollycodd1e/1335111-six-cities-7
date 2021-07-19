import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../components/services/api.js';
import {ActionType} from './action.js';
import {checkAuth, fetchFavoriteList, fetchOffersList, fetchOffersNearby, fetchReviews, fetchRoom, login, postFavorites, postReview} from './api-action.js';
import {APIRoute, AuthorizationStatus} from '../const.js';
import {adaptOffersToClient, adaptOfferToClient, adaptReviewsToClient} from '../adapter.js';

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

const MOCK_REVIEWS = [{
  "comment": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  "date": "2019-05-08T14:13:56.569Z",
  "id": 1,
  "rating": 4,
  "user": {
    "avatar_url": "img/1.png",
    "id": 4,
    "is_pro": false,
    "name": "Max"
  }
}];

const MOCK_ROOM = {
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
};

const MOCK_COMMENT = {
  "comment": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  "rating": 4
};

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
          payload: MOCK_OFFERS.map((offer) => adaptOffersToClient(offer)),
        });
      });
  });

  it('should make a correct API call to GET /reviews', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 'testId';
    const reviewsLoader = fetchReviews(offerId);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${offerId}`)
      .reply(200, MOCK_REVIEWS);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: MOCK_REVIEWS.map((review) => adaptReviewsToClient(review)),
        });
      });
  });

  //it('should make a correct API call to GET /room', () => {
  //  const apiMock = new MockAdapter(api);
  //  const dispatch = jest.fn();
  //  const offerId = 'testId';
  //  const roomLoader = fetchRoom(offerId);
  //
  //  apiMock
  //    .onGet(`${APIRoute.ROOM}/${offerId}`)
  //    .reply(200, MOCK_ROOM);
  //
  //  return roomLoader(dispatch, () => {}, api)
  //    .then(() => {
  //      expect(dispatch).toHaveBeenCalledTimes(1);
  //
  //      expect(dispatch).toHaveBeenNthCalledWith(1, {
  //        type: ActionType.LOAD_ROOM,
  //        payload: adaptOfferToClient(MOCK_ROOM),
  //      });
  //    });
  //});

  it('should make a correct API call to GET /offersNearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 'testId';
    const offersNearbyLoader = fetchOffersNearby(offerId);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${offerId}${APIRoute.OFFERS_NEARBY}`)
      .reply(200, MOCK_OFFERS);

    return offersNearbyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: MOCK_OFFERS.map((offer) => adaptOffersToClient(offer))
        });
      });
  });

  it('should make a correct API call to GET /favoriteOffers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = fetchFavoriteList();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, MOCK_OFFERS);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: MOCK_OFFERS.map((offer) => adaptOffersToClient(offer))
        });
      });
  });

  it('should make a correct API call to POST /favoriteOffers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFavoriteOffer = {id: 'fakeId', status: 'fakeStatus'}
    const favoriteOfferLoader = postFavorites(fakeFavoriteOffer.id, fakeFavoriteOffer.status);

    apiMock
      .onPost((`${APIRoute.FAVORITE}/${fakeFavoriteOffer.id}/${fakeFavoriteOffer.status}`))
      .reply(200, MOCK_ROOM);

    return favoriteOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FAVORITE_OFFERS,
          payload: adaptOfferToClient(MOCK_ROOM),
        });
      });
  });

  it('should make a correct API call to POST /reviews', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeComment = {id:'testId', comment: 'testComment', rating: 'testRating'};
    const postReviewLoader = postReview(fakeComment);

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${fakeComment.id}`)
      .reply(200, MOCK_REVIEWS);

    return postReviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: MOCK_REVIEWS.map((review) => adaptReviewsToClient(review)),
        });
      });
  });
});
