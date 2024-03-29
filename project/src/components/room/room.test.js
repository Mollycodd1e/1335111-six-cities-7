import {render, screen} from '@testing-library/react';
import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Room from '../room/room.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {adaptOffersToClient, adaptReviewsToClient} from '../../adapter.js';
import {AuthorizationStatus} from '../../const.js';
import thunk from 'redux-thunk';
import {createAPI} from '../../components/services/api.js';

let api = null;
api = createAPI(() => {});
const mockStore = configureStore([thunk.withExtraArgument(api)]);

let history;
let store;

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

const MOCK_OFFER = {
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
};

const MOCK_REVIEWS = [{
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    'avatar_url': 'img/1.png',
    id: 4,
    'is_pro': false,
    name: 'Max',
  },
}];

describe('Component: Room', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {offersNearby: MOCK_OFFERS.map((offer) => adaptOffersToClient(offer)), room: adaptOffersToClient(MOCK_OFFER),
        reviews: MOCK_REVIEWS.map((review) => adaptReviewsToClient(review)), isDataLoaded: true, isRoomDataLoaded: true, isFavoriteDataLoaded: true},
      CHANGER: {activeCity: 'Paris', sortType: 'Popular'},
    });
  });

  it('should render correctly with AUTH', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Room room={adaptOffersToClient(MOCK_OFFER)} reviews={MOCK_REVIEWS.map((review) => adaptReviewsToClient(review))}
            offersNearby={MOCK_OFFERS.map((offer) => adaptOffersToClient(offer))}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Bedrooms/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
  });

  it('should render correctly without AUTH', () => {

    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {offersNearby: MOCK_OFFERS.map((offer) => adaptOffersToClient(offer)), room: adaptOffersToClient(MOCK_OFFER),
        reviews: MOCK_REVIEWS.map((review) => adaptReviewsToClient(review)), isDataLoaded: true, isRoomDataLoaded: true, isFavoriteDataLoaded: true},
      CHANGER: {activeCity: 'Paris', sortType: 'Popular'},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Room room={adaptOffersToClient(MOCK_OFFER)} reviews={MOCK_REVIEWS.map((review) => adaptReviewsToClient(review))}
            offersNearby={MOCK_OFFERS.map((offer) => adaptOffersToClient(offer))}
          />
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/To submit review please make sure to set/i)).not.toBeInTheDocument();
  });
});
