import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import IndonesiaData from '../public/indonesia-prov.json';

const Map = () => {
  const center = [-1.19, 120.82];
  const zoom = 5;

  const getColor = (value) => {
    // Sesuaikan dengan skala warna berdasarkan data
    return value > 1000 ? '#67000d' :
      value > 500 ? '#a50f15' :
      value > 200 ? '#cb181d' :
      value > 100 ? '#ef3b2c' :
      '#fee08b';
  };




  const style = (feature) => {
    // Sesuaikan dengan properti data yang sesuai
    const value = feature.properties.jumlah_perusahaan;
    return {
      fillColor: getColor(value),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  };

  const onEachFeature = (feature, layer) => {
    // Sesuaikan dengan pop-up informasi
    const { Propinsi, jumlah_perusahaan } = feature.properties;
    layer.bindPopup(`Provinsi: ${Propinsi}<br>Perusahaan: ${jumlah_perusahaan}`);
  };

  return (

    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GeoJSON
        data={IndonesiaData}
        style={style}
        onEachFeature={onEachFeature}
      />
    </MapContainer>

  );
};

export default Map;