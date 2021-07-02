import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offersList/offers-list.jsx';
import offersListProp from '../offersList/offers-list.prop.jsx';
import cardProp from '../card/card.prop.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import {CITIES} from '../../const.js';
import PropTypes from 'prop-types';
import {SortList} from '../sort-list/sort-list.jsx';

function Main(props) {
  const {cardsCount, offers, activeCity, sortType} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites" xlinkHref="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" xlinkHref="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList activeCity={CITIES[0]} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>
              <SortList sortType={sortType} />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers.slice(0, cardsCount)} isNearby={false}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  cardsCount: cardProp,
  offers: offersListProp,
  activeCity: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offersList: state.offersList,
  sortType: state.sortType,
});

export {Main};
export default connect(mapStateToProps)(Main);
