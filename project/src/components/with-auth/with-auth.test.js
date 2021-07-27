import {render, screen} from '@testing-library/react';
import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import WithAuth from './with-auth.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import { AuthorizationStatus } from '../../const.js';

let history;
let store;
const mockStore = configureStore({});

describe('Component: WithAuth', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <WithAuth />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});
