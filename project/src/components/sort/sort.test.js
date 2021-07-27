import {render, screen} from '@testing-library/react';
import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Sort from './sort.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';

let history;
let store;
const mockStore = configureStore({});

describe('Component: Sort', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    store = mockStore({
      CHANGER: {activeCity: 'Paris', sortType: 'Popular'},
    });
  });

  it('should render correctly', () => {
    const sortType = 'Popular';

    render(
      <Provider store={store}>
        <Router history={history}>
          <Sort sortType={sortType} isActive onSortChange={jest.fn()}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Popular/i)).toBeInTheDocument();
  });

  it('should change city', () => {
    const sortType = 'Top rated first';

    const handleSortTypeChange = jest.fn();

    render(
      <Provider store={store}>
        <Router history={history}>
          <Sort sortType={sortType} isActive onSortChange={handleSortTypeChange}/>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByText('Top rated first'));
    expect(handleSortTypeChange).toBeCalled();
    expect(handleSortTypeChange).nthCalledWith(1, 'Top rated first');
  });
});
