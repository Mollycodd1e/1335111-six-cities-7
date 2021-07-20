import {render, screen} from '@testing-library/react';
import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Header from './header.jsx';
import {AuthorizationStatus} from '../../const.js';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

let history;
let store;

describe('Component: Header', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});

    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });
  });

  it('should render correctly with Auth', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);

    expect(screen.getByAltText(/Sign out/i)).toBeInTheDocument();
  });

  //it('should redirect to root url when user clicked to link', () => {
  //  history.push('/fake');
  //  render(
  //    <Router history={history}>
  //      <Switch>
  //        <Route path="/" exact>
  //          <h1>This is main page</h1>
  //        </Route>
  //        <Route>
  //          <Logo />
  //        </Route>
  //      </Switch>
  //    </Router>);
//
  //  expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
  //  userEvent.click(screen.getByRole('link'));
  //  expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  //});
});
