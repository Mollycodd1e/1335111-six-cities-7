import React, {useRef} from 'react';
import useMap from './use-map.jsx';
import offersListProp from '../offersList/offers-list.prop';
import {connect} from 'react-redux';
import {getOffersListByCity} from '../../const.js';

function Map(props) {
  const {offers} = props;

  const mapRef = useRef(null);
  useMap(mapRef, offers);

  return <section className="cities__map map" id="map" ref={mapRef} style={{height:'100%'}}></section>;
}

Map.propTypes = {
  offers: offersListProp,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: getOffersListByCity(state.offers, state.activeCity),
});

export {Map};
export default connect(mapStateToProps)(Map);

