import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import Main from '../main/main.jsx';
import Favorites from '../favorites/favorites.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Room from '../room/room.jsx';
//import PropTypes from 'prop-types';
import cardProp from '../card/card.prop.jsx';
import offersListProp from '../offersList/offersList.prop.jsx';

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
  cardsCount: cardProp,
  offers: offersListProp,
};

//App.propTypes = {
//  comments: PropTypes.shape({
//    comment: PropTypes.string.isRequired,
//    date: PropTypes.string.isRequired,
//    id: PropTypes.number.isRequired,
//    rating: PropTypes.number.isRequired,
//    user: PropTypes.shape({
//      avatarUrl: PropTypes.string.isRequired,
//      id: PropTypes.number.isRequired,
//      isPro: PropTypes.bool.isRequired,
//      name: PropTypes.string.isRequired,
//    }),
//  }),
//};

export default App;
