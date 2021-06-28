import React, {useRef} from 'react';
import useMap from './use-map.jsx';
import offersListProp from '../offersList/offersList.prop';

function Map(props) {
  const {offers} = props;

  const mapRef = useRef(null);
  useMap(mapRef, offers);

  return <section className="cities__map map" id="map" ref={mapRef} style={{height:'100%'}}></section>;
}

Map.propTypes = {
  offers: offersListProp,
};

export default Map;
