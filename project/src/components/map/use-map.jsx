import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMap(mapRef, offers) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const town = [offers[0].city.location.latitude, offers[0].city.location.longitude];

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

      const zoom = offers[0].city.location.zoom;

      const instance = leaflet.map('map', {
        center: town,
        zoom: zoom,
        zoomControl: false,
        marker: true,
      });

      instance.setView(town, zoom);

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(instance);

      offers.map((offer) => {
        leaflet
          .marker([offer.location.latitude, offer.location.longitude], {icon: (offer) ? defaultIcon : activeIcon})
          .addTo(instance);
      });

      setMap(instance);
    }
  }, [mapRef, map]);


  return map;
}

export default useMap;
