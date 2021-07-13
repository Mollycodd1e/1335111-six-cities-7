import React, {useState} from 'react';
import {connect} from 'react-redux';
import Header from '../header/header.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offersList/offers-list.jsx';
import offersListProp from '../offersList/offers-list.prop.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import {getOffersListByCity} from '../../utils.js';
import PropTypes from 'prop-types';
import {SortList} from '../sort-list/sort-list.jsx';

function Main(props) {
  const {offers, activeCity, sortType} = props;

  const [activeOffer, setActiveOffer] = useState();
  //const sortedOffers = getSortedOffers(sortType, offers);
  const handleOfferHover = (offer) => {
    setActiveOffer(offer);
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList activeCity={activeCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>
              <SortList sortType={sortType} />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers} isNearby={false} onOfferHover={handleOfferHover}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} activeCity={activeCity} activeOffer={activeOffer}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: offersListProp,
  activeCity: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: getOffersListByCity(state.offers, state.activeCity),
  sortType: state.sortType,
});

export {Main};
export default connect(mapStateToProps)(Main);
