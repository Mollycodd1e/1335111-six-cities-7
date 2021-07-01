import React from 'react';
import PropTypes from 'prop-types';

function City(props) {
  const {city, isActive, onCityChange} = props;

  const handleCityChange = (evt) => {
    evt.preventDefault();
    onCityChange(city);
  };

  return (
    <li className="locations__item">
      <a className={`locations__item-link ${isActive ? 'tabs__item--active' : 'tabs__item'}`} xlinkHref={city.name} onClick={handleCityChange}>
        <span>{city}</span>
      </a>
    </li>);
}

City.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default City;
