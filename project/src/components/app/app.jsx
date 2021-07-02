import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import Main from '../main/main.jsx';
import Favorites from '../favorites/favorites.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Room from '../room/room.jsx';
import cardProp from '../card/card.prop.jsx';
import offersListProp from '../offersList/offers-list.prop.jsx';
import reviewsProp from '../offersList/reviews.prop.jsx';

function App(props) {
  const {cardsCount, offers, reviews} = props;

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
          <Favorites offers={offers}/>
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room offers={offers} reviews={reviews}/>
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
  reviews: reviewsProp,
};

export default App;
