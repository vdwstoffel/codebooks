import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import "./leaflet.css"
import BrowserWindow from "../../BrowserWindow/BrowserWindow";

export default function RecenterMap() {
  const [position, setPosition] = useState([51, 3]);
  return (
    <BrowserWindow>
      <div>
        <button onClick={() => setPosition([51, 9])}>Pos 1</button>
        <button onClick={() => setPosition([46, 18])}>Pos 2</button>
      </div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ChangeCenter position={position} />
      </MapContainer>
    </BrowserWindow>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}