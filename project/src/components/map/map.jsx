import React, {useRef} from 'react';
import useMap from './use-map.jsx';
import offersListProp from '../offersList/offers-list.prop';
import offerProp from '../offersList/offer.prop.jsx';

function Map(props) {
  const {offers, activeOffer} = props;

  const mapRef = useRef(null);

  useMap(mapRef, offers, activeOffer);

  return <section className="cities__map map" id="map" ref={mapRef} style={{height:'100%'}}></section>;
}

Map.propTypes = {
  offers: offersListProp,
  activeOffer: offerProp,
};

export default Map;
