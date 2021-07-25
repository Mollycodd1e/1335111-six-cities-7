import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import FavoritesEmpty from './favorites-empty.jsx';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {AuthorizationStatus} from '../../const';

let store;
let history;

const MOCK_OFFERS = [];

describe('Component: FavoritesEmpty', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});

    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {favoriteOffers: MOCK_OFFERS},
    });
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesEmpty />
        </Router>
      </Provider>
    )

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  });
});
