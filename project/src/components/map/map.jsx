import React, {useRef} from 'react';
import useMap from './use-map.jsx';
import offersListProp from '../offersList/offers-list.prop';
import offerProp from '../offersList/offer.prop.jsx';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map(props) {
  const {offers, activeOffer} = props;

  const mapRef = useRef(null);

  const defaultIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [15, 30],
  });

  const activeIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [15, 30],
  });

  useMap(mapRef, offers, activeOffer, defaultIcon, activeIcon);

  return <section className="cities__map map" id="map" ref={mapRef} style={{height:'100%'}}></section>;
}

Map.propTypes = {
  offers: offersListProp,
  activeOffer: offerProp,
};

export default Map;
