import {render, screen} from '@testing-library/react';
import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import SortList from './sort-list.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

let history;
let store;
const mockStore = configureStore({});

describe('Component: SortList', () => {
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
          <SortList sortType={sortType} onSortChange={jest.fn()}/>
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });
});
