import React from 'react';
import {useSelector} from 'react-redux';
import City from '../city/city.jsx';
import {CITIES} from '../../const.js';
import {getActiveCity} from '../../store/changer/selectors.js';

function CitiesList() {

  const activeCity = useSelector(getActiveCity);

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) =>
        <City key={city} city={city} isActive={activeCity === city}/>)}
    </ul>
  );
}

export default CitiesList;
