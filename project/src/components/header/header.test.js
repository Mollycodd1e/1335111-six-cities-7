import {render, screen} from '@testing-library/react';
import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Header from './header.jsx';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const.js';
import {Provider} from 'react-redux';

let history;
const mockStore = configureStore({});

describe('Component: Header', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly with Auth', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render correctly w/o Auth', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
