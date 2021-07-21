import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Card from './card.jsx';
import configureStore from 'redux-mock-store';
import {AppRoute, AuthorizationStatus} from '../../const.js';
import {adaptOfferToClient} from '../../adapter.js';
import {createMemoryHistory} from 'history';
import * as Redux from 'react-redux';
//import SignIn from '../sign-in/sign-in.jsx';

let store;
let mockStore;
let history;

const MOCK_OFFER = {
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
};

describe('Component: Card', () => {
  beforeAll(() => {
    mockStore = configureStore({});
    history = createMemoryHistory();
  })

  it('should render correctly', () => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {offers: adaptOfferToClient(MOCK_OFFER)},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Card offers={adaptOfferToClient(MOCK_OFFER)} isNearby={true} onOfferHover={jest.fn()}/>
        </Router>
      </Provider>
    )

    expect(screen.getByText(/night/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Place image/i)).toBeInTheDocument();
  });

  it('onOfferHover should called when user hover Card', () => {
    const onOfferHover = jest.fn();

    render(
      <Provider store={store}>
        <Router history={history}>
          <Card offers={adaptOfferToClient(MOCK_OFFER)} isNearby={true} onOfferHover={onOfferHover}/>
        </Router>
      </Provider>
    )

    userEvent.hover(screen.getByLabelText('article'));
    expect(onOfferHover).toBeCalled();
  });

  it('should redirect when user clicked on button without Auth', () => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {offers: adaptOfferToClient(MOCK_OFFER), isDataLoaded: true},
    })

    history.push(AppRoute.MAIN);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Card offers={adaptOfferToClient(MOCK_OFFER)} isNearby={true} onClick={() => history.push(AppRoute.SIGNIN)}/>
            <Route exact path={AppRoute.SIGNIN}>
              <h1>Login screen</h1>
            </Route>
          </Switch>
        </Router>
      </Provider>
    )

    expect(screen.queryByText(/Login screen/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    //expect(screen.getByText(/Login screen/i)).toBeInTheDocument();
  });

  //it('should not redirect when user clicked on button with Auth', () => {
  //  store = mockStore({
  //    USER: {authorizationStatus: AuthorizationStatus.AUTH},
  //    DATA: {offers: adaptOfferToClient(MOCK_OFFER), isDataLoaded: true},
  //  })
//
  //  render(
  //    <Provider store={store}>
  //      <Router history={history}>
  //        <Switch>
  //          <Route>
  //            <Card offers={adaptOfferToClient(MOCK_OFFER)} isNearby={true} />
  //          </Route>
  //          <Route exact path={AppRoute.SIGNIN}>
  //            <h1>Login screen</h1>
  //          </Route>
  //        </Switch>
  //      </Router>
  //    </Provider>
  //  )
//
  //  userEvent.click(screen.getByRole('button'));
  //  expect(screen.getByText(/Beautiful & luxurious studio at great location/i)).toBeInTheDocument();
  //  expect(screen.queryByText(/Login screen/i)).not.toBeInTheDocument();
  //});
});

