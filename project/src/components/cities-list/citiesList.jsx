import React from 'react';
import {connect} from 'react-redux';
import City from '../city/city.jsx';
import {CITIES} from '../../const.js';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action.js';

function CitiesList(props) {

  const {activeCity, onCityChange} = props;

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) =>
        <City key={city} city={city} isActive={activeCity === city} onCityChange={onCityChange}/>)}
    </ul>
  );
}

CitiesList.propTypes = {
  onCityChange: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
