import React, { useState } from "react";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet/hooks";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import { Icon } from "leaflet";
import pin from "../../../assets/pin.png";
import redPin from "../../../assets/react.svg"; // Import the red pin image

const SearchControl = () => {
  const map = useMap();

  React.useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      showMarker: true,
      showPopup: true,
      marker: {
        icon: new Icon({
          iconUrl: redPin, // Use the red pin image
          iconSize: [38, 38],
        }),
      },
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, [map]);

  return null;
};

const MapComponent = () => {
  const [radius, setRadius] = useState(10);
  const [center, setCenter] = useState([12.9308, 77.5838]);
  const customMarker = new Icon({
    iconUrl: pin,
    iconSize: [38, 38],
  });

  const markers = [
    {
      geocode: [12.9308, 77.5838],
      popup: "jayanagar",
    },
    {
      geocode: [12.9429325, 77.560459],
      popup: "basavanagudi",
    },
    {
      geocode: [12.9697203, 77.5571645],
      popup: "chickpete",
    },
  ];

  return (
    <div className="map-container">
      <input
        type="range"
        min="1"
        max="50"
        step="1"
        className="justify-content-center"
        value={radius}
        onChange={(e) => setRadius(parseInt(e.target.value))}
      />
      <span>{radius} km</span>
      <MapContainer center={center} zoom={13} style={{ height: "750px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <SearchControl />

        <Circle center={center} radius={radius * 1000} />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customMarker}>
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
