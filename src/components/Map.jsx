import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

function GetClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

function ChangeMapPosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default function Map({ cities }) {
  const [position, setPosition] = useState([51.505, -0.09]);

  const [latitude, longitude] = useLocation();
  useEffect(() => {
    if (latitude && longitude) setPosition([latitude, longitude]);
  }, [latitude, longitude]);

  return (
    <div className="map__container">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities &&
          cities.map((city) => (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
            >
              <Popup>
                <span>{flagemojiToPNG(city.emoji)}</span>{" "}
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          ))}
        <Marker position={position}> </Marker>
        <GetClick />
        <ChangeMapPosition position={position} />
      </MapContainer>
    </div>
  );
}
