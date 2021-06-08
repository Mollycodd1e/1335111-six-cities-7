import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import Main from '../main/main.jsx';
import Favorites from '../favorites/favorites.jsx';
import NotFoundPage from '../notFoundPage/not-found-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
//import Room from '../room/room.jsx';
import PropTypes from 'prop-types';

function App(props) {
  const {cardsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main cardsCount={cardsCount}/>
        </Route>
        <Route exact path={AppRoute.SIGNIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
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

export default App;
