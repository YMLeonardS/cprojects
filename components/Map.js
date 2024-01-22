import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import IndonesiaData from '../public/indonesia-prov.json';

const Map = () => {
  const center = [-2.10, 120.82];
  const zoom = 5;

  const getColor = (value) => {
    // Sesuaikan dengan skala warna berdasarkan data
    return value > 1000 ? '#B0E2B4' :
      value > 500 ? '#C0EBD5' :
      value > 100 ? '#CFF5F5' :
      value > 50 ? '#DAEBEF' :
      '#F8D2DE';
  };




  const style = (feature) => {
    // Sesuaikan dengan properti data yang sesuai
    const value = feature.properties.jumlah_perusahaan;
    return {
      fillColor: getColor(value),
      weight: 1,
      opacity: 1,
      color: '#ec008c',
      dashArray: '3',
      fillOpacity: 0.9,
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
      scrollWheelZoom={false}
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