import React from 'react';
import Header from '../header/header.jsx';
import FavoriteCard from '../favorite-card/favorite-card.jsx';
import {Link} from 'react-router-dom';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';
import {AppRoute, CITIES} from '../../const.js';
import {useSelector} from 'react-redux';
import {getFavoriteOffers} from '../../store/data/selectors.js';

function Favorites () {

  const favoriteOffers = useSelector(getFavoriteOffers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length > 0 ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.values(CITIES).map((value) =>
                  <FavoriteCard key={value} favoriteOffers={favoriteOffers} currentCity={value}/>,
                )}
              </ul>
            </section>
            : <FavoritesEmpty />}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
