import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offersList/offers-list.jsx';
import offersListProp from '../offersList/offersList.prop.jsx';
import cardProp from '../card/card.prop.jsx';
import CitiesList from '../cities-list/citiesList.jsx';
import {CITIES} from '../../const.js';
import PropTypes from 'prop-types';

function Main(props) {
  const {cardsCount, offers, activeCity} = props;

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
            <CitiesList activeCity={CITIES[0]}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
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
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offersList: state.offersList,
});

export {Main};
export default connect(mapStateToProps)(Main);
