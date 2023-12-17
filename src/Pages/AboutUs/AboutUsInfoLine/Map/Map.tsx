import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import { MapWrapper } from "./MapStyles";
function Map() {
  const position: [number, number] = [49.822289, 24.032];
  return (
    <MapWrapper>
      <MapContainer center={position} zoom={18} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
          position={position}
        >
          <Popup>Музей Івана Франка. Welcome!</Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
}

export default Map;
