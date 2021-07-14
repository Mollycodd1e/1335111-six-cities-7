import React from 'react';
import PropTypes from 'prop-types';
import { changeCity } from '../../store/action';
import { useDispatch } from 'react-redux';

function City(props) {
  const {city, isActive} = props;

  const dispatch = useDispatch();

  const handleCityChange = (evt) => {
    evt.preventDefault();
    dispatch(changeCity(city));
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
};

export default City;
