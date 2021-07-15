import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../header/header.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offersList/offers-list.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import {getOffersListByCity, getSortedOffers} from '../../utils.js';
import SortList from '../sort-list/sort-list.jsx';
import {getActiveCity, getSortType} from '../../store/changer/selectors.js';
import {getOffers} from '../../store/data/selectors.js';
import MainEmpty from '../main-empty/main-empty.jsx';

function Main() {
  const activeCity = useSelector(getActiveCity);
  const offers = useSelector(getOffers);
  const offersListByCity = getOffersListByCity(offers, activeCity);
  const sortType = useSelector(getSortType);
  const sortedOffers = getSortedOffers(sortType,offersListByCity);

  const [activeOffer, setActiveOffer] = useState();

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
          {sortedOffers.length > 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortedOffers.length} places to stay in {activeCity}</b>
                <SortList />
                <div className="cities__places-list places__list tabs__content">
                  <OffersList offers={sortedOffers} isNearby={false} onOfferHover={handleOfferHover}/>
                </div>
              </section>
              <div className="cities__right-section">
                <Map offers={sortedOffers} activeCity={activeCity} activeOffer={activeOffer}/>
              </div>
            </div>
            : <MainEmpty />}
        </div>
      </main>
    </div>
  );
}

export default Main;
