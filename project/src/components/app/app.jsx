import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, isCheckedAuth} from '../../const.js';
import Main from '../main/main.jsx';
import Favorites from '../favorites/favorites.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Room from '../room/room.jsx';
import LoadingScreen from '../loading-screen/loading-screen.jsx';
import PropTypes from 'prop-types';
import PrivateRoute from '../private-route/private-route.jsx';

function App(props) {

  const {authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SIGNIN}>
          <SignIn />
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => <Favorites />}>
        </PrivateRoute>
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
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps)(App);
