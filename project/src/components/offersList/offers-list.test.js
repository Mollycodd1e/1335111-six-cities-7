import {render, screen} from '@testing-library/react';
import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import OffersList from './offers-list.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../const.js';
import {adaptOffersToClient} from '../../adapter.js';

let history;
let store;
const mockStore = configureStore({});

const MOCK_OFFERS = [{
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: "Amsterdam"
  },
  description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
  host: {
    avatar_url: "img/1.png",
    id: 3,
    is_pro: true,
    name: "Angelina"
  },
  id: 1,
  images: ["img/1.png", "img/2.png"],
  is_favorite: false,
  is_premium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  max_adults: 4,
  preview_image: "img/1.png",
  price: 120,
  rating: 4.8,
  title: "Beautiful & luxurious studio at great location",
  type: "apartment"
}];

describe('Component: OffersList', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {offers: MOCK_OFFERS.map((offer) => adaptOffersToClient(offer)), isDataLoaded: true},
      CHANGER: {activeCity: 'Paris', sortType: 'Popular'},
    });
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <OffersList offers={ MOCK_OFFERS.map((offer) => adaptOffersToClient(offer))} isNearby={false}/>
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Beautiful & luxurious studio at great location/i)).toBeInTheDocument();
    expect(screen.getByText(/apartment/i)).toBeInTheDocument();
  });

  it('should render correctly without offers', () => {

    store = mockStore({
      DATA: {offers: [], isDataLoaded: true},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <OffersList offers={[]} isNearby={false}/>
        </Router>
      </Provider>
    );

    expect(screen.queryByText(/Beautiful & luxurious studio at great location/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/apartment/i)).not.toBeInTheDocument();
  });
});
