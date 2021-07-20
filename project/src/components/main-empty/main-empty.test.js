import {render, screen} from '@testing-library/react';
import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MainEmpty from './main-empty.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../const.js';

let history;
let store;
const mockStore = configureStore({});

const MOCK_OFFERS = [];

describe('Component: MainEmpty', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {offers: MOCK_OFFERS, isDataLoaded: true},
      CHANGER: {activeCity: 'Paris', sortType: 'Popular'},
    });
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainEmpty offers={MOCK_OFFERS}/>
        </Router>
      </Provider>
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
