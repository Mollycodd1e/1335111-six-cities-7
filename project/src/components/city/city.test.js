import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import City from './city.jsx';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

let store;
let history;

describe('Component: City', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});

    store = createFakeStore({
      CHANGER: {activeCity: 'Paris'},
    });
  });

  it('should render correctly', () => {
    const city = 'Paris';

    render(
      <Provider store={store}>
        <Router history={history}>
          <City city={city} isActive={true}/>
        </Router>
      </Provider>
    )

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  });

  it('should switch city', () => {
    const city = 'Paris';

    render(
      <Provider store={store}>
        <Router history={history}>
          <City city={city} isActive={true} onClick={jest.fn()}/>
        </Router>
      </Provider>
    )

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Paris/i));
  });
});
