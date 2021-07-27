import {render, screen} from '@testing-library/react';
import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Review from './review.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../const.js';
import {adaptReviewsToClient} from '../../adapter.js';

let history;
let store;
const mockStore = configureStore({});

const MOCK_REVIEWS = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    'avatar_url': 'img/1.png',
    id: 4,
    'is_pro': false,
    name: 'Max',
  },
};

describe('Component: Review', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {reviews: adaptReviewsToClient(MOCK_REVIEWS), isDataLoaded: true},
      CHANGER: {activeCity: 'Paris', sortType: 'Popular'},
    });
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Review review={adaptReviewsToClient(MOCK_REVIEWS)} />
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText(/Reviews avatar/i)).toBeInTheDocument();
  });
});
