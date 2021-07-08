import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMap(mapRef, offers, activeOffer, defaultIcon, activeIcon) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const town = [offers[0].city.location.latitude, offers[0].city.location.longitude];

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
          .marker([offer.location.latitude, offer.location.longitude], {icon: defaultIcon})
          .addTo(instance);
      });

      setMap(instance);

    } else {
      [...map.getPane('markerPane').children].forEach((marker) => marker.remove());

      const anotherTown = [offers[0].city.location.latitude, offers[0].city.location.longitude];
      const newZoom = offers[0].city.location.zoom;

      map.setView(anotherTown, newZoom);

      offers.map((offer) => {
        leaflet
          .marker([offer.location.latitude, offer.location.longitude], {icon: (activeOffer === offer) ? activeIcon : defaultIcon})
          .addTo(map);
      });

      setMap(map);
    }
  }, [mapRef, map, offers, activeOffer]);

  return map;
}

export default useMap;
