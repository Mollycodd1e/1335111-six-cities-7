import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, HouseType} from '../../const.js';
import Main from '../main/main.jsx';
import Favorites from '../favorites/favorites.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Room from '../room/room.jsx';
import PropTypes from 'prop-types';

function App(props) {
  const {cardsCount, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main cardsCount={cardsCount} offers={offers}/>
        </Route>
        <Route exact path={AppRoute.SIGNIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

App.propTypes = {
  offers: PropTypes.shape({
    bedrooms: PropTypes.number.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }),
      name: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.number),
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    maxAdults: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([HouseType.string]).isRequired,
  }),
};

App.propTypes = {
  comments: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};

export default App;
