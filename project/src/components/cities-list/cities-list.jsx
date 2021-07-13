import React from 'react';
import {useSelector} from 'react-redux';
//import {connect} from 'react-redux';
import City from '../city/city.jsx';
import {CITIES} from '../../const.js';
//import PropTypes from 'prop-types';
import {getActiveCity} from '../../store/changer/selectors.js';
//import {ActionCreator} from '../../store/action.js';
//import {changeCity} from '../../store/action.js';

function CitiesList() {

  const activeCity = useSelector(getActiveCity);

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) =>
        <City key={city} city={city} isActive={activeCity === city}/>)}
    </ul>
  );
}

//CitiesList.propTypes = {
//  activeCity: PropTypes.string.isRequired,
//  onCityChange: PropTypes.func.isRequired,
//};

//const mapStateToProps = (state) => ({
//  activeCity: state.activeCity,
//});
//
//const mapDispatchToProps = (dispatch) => ({
//  onCityChange(city) {
//    dispatch(ActionCreator.changeCity(city));
//  },
//});

export default CitiesList;
//export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
