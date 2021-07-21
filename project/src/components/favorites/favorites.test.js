import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import Favorites from './favorites';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import { AuthorizationStatus } from '../../const';
import { adaptOffersToClient } from '../../adapter';

let store;
let history;
const mockStore = configureStore({});

const MOCK_OFFERS = [{
  'bedrooms': 3,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": "Paris"
  },
  "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
  host : {
    "id": 3,
    "is_pro": true,
    "name": "Angelina"
  },
  "id": 1,
  "images": ["img/1.png", "img/2.png"],
  "is_favorite": true,
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

describe('Component: Favorites', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {offers: MOCK_OFFERS, favoriteOffers: MOCK_OFFERS},
      CHANGER: {activeCity: 'Paris'},
    });
  });

  it('should render correctly', () => {

    const currentCity = 'Paris';

    render(
      <Provider store={store}>
        <Router history={history}>
          <Favorites favoriteOffers={MOCK_OFFERS} currentCity={currentCity}/>
        </Router>
      </Provider>
    )

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });
});
