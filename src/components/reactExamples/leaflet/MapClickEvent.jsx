import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import "./leaflet.css";
import BrowserWindow from "../../BrowserWindow/BrowserWindow";

export default function MapClickEvent() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: null,
    lon: null,
  });

  function ClickEvent() {
    useMapEvents({
      click: (e) => {
        console.log(e.latlng);
        setSelectedLocation({ lat: e.latlng.lat, lng: e.latlng.lng });
      },
    });
    return null;
  }

  return (
    <BrowserWindow>
      <h1>
        Clicked Location: {selectedLocation.lat}, {selectedLocation.lng}
      </h1>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ClickEvent />
      </MapContainer>
    </BrowserWindow>
  );
}
