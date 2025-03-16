import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./leaflet.css";

import BrowserWindow from "../../BrowserWindow/BrowserWindow";

export default function App() {
  return (
    <BrowserWindow>
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
      </MapContainer>
    </BrowserWindow>
  );
}
