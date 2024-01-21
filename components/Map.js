import { MapContainer, TileLayer, Marker, Popup, L } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import HeatMap from "./HeatMap";

const Map = () => {
  return (
    <MapContainer
      center={[-1.19, 120.82]}
      zoom={5}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.8054, -74.0241]} draggable={true} animate={true}>
        <Popup>Hey ! I live here</Popup>
      </Marker>
      <HeatMap />
    </MapContainer>
  );
};

export default Map;
