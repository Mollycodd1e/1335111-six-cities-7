import {render, screen} from '@testing-library/react';
import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewForm from './review-form.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../const.js';
import {adaptReviewsToClient} from '../../adapter.js';

let history;
let store;
const mockStore = configureStore({});

const MOCK_REVIEWS = [{
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
}];

describe('Component: ReviewsForm', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {reviews: MOCK_REVIEWS.map((review) => adaptReviewsToClient(review)), isDataLoaded: true},
    });

    const roomId = MOCK_REVIEWS[0].id;

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm roomId={roomId}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    expect(screen.getByText(/and describe your stay with at least/i)).toBeInTheDocument();
  });
});
