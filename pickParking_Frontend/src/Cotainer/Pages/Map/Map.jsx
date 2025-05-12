// import React, { useState } from "react";
// import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
// import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
// import { useMap } from "react-leaflet/hooks";
// import "leaflet/dist/leaflet.css";
// import "leaflet-geosearch/dist/geosearch.css";
// import { Icon } from "leaflet";
// import pin from "../../../assets/pin.png";
// import redPin from "../../../assets/react.svg"; // Import the red pin image

// const SearchControl = () => {
//   const map = useMap();

//   React.useEffect(() => {
//     const provider = new OpenStreetMapProvider();
//     const searchControl = new GeoSearchControl({
//       provider,
//       style: "bar",
//       showMarker: true,
//       showPopup: true,
//       marker: {
//         icon: new Icon({
//           iconUrl: redPin, // Use the red pin image
//           iconSize: [38, 38],
//         }),
//       },
//     });

//     map.addControl(searchControl);

//     return () => map.removeControl(searchControl);
//   }, [map]);

//   return null;
// };

// const MapComponent = () => {
  // const [radius, setRadius] = useState(10);
  // const [center, setCenter] = useState([12.9308, 77.5838]);
  // const customMarker = new Icon({
  //   iconUrl: pin,
  //   iconSize: [38, 38],
  // });

  // const markers = [
  //   {
  //     geocode: [12.9308, 77.5838],
  //     popup: "jayanagar",
  //   },
  //   {
  //     geocode: [12.9429325, 77.560459],
  //     popup: "basavanagudi",
  //   },
  //   {
  //     geocode: [12.9697203, 77.5571645],
  //     popup: "chickpete",
  //   },
  // ];

//   return (
    // <div className="map-container">
    //   <input
    //     type="range"
    //     min="1"
    //     max="50"
    //     step="1"
    //     className="justify-content-center"
    //     value={radius}
    //     onChange={(e) => setRadius(parseInt(e.target.value))}
    //   />
    //   <span>{radius} km</span>
    //   <MapContainer center={center} zoom={13} style={{ height: "750px" }}>
    //     <TileLayer
    //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />

    //     <SearchControl />

    //     <Circle center={center} radius={radius * 1000} />
    //     {markers.map((marker, index) => (
    //       <Marker key={index} position={marker.geocode} icon={customMarker}>
    //         <Popup>{marker.popup}</Popup>
    //       </Marker>
    //     ))}
    //   </MapContainer>
    // </div>
//   );
// };

// export default MapComponent;
import React, { useState } from 'react';
import { Slider, Checkbox, Button, DatePicker, Input, Select, Alert, Space, Typography, Card } from 'antd';

const { Option } = Select;
const { Title, Text } = Typography;
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet/hooks";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import { Icon } from "leaflet";
import pin from "../../../assets/pin.png";
import redPin from "../../../assets/react.svg"; 

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
const ParkingSpotFinder = () => {
  const [priceRange, setPriceRange] = useState([5, 50]);
  const [distance, setDistance] = useState(5);
  const [parkingType, setParkingType] = useState(['garage', 'street']);
  const [features, setFeatures] = useState(['evCharging']);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [sortBy, setSortBy] = useState('distance');
  const [error, setError] = useState(null);
  const [spots, setSpots] = useState([]);

  // Dummy data for parking spots
  const dummySpots = [
    { id: 1, name: 'Downtown Garage', price: 10, distance: 0.5, type: 'garage', features: ['evCharging', 'covered'], rating: 4.5 },
    { id: 2, name: 'Main Street Parking', price: 8, distance: 1.2, type: 'street', features: ['securityCamera'], rating: 4.0 },
  ];

  const fetchSpots = () => {
    setError(null);
    // Simulate API call
    setTimeout(() => {
      if (Math.random() > 0.7) { // Simulate error 30% of the time
        setError('Failed to get parking spots: Control plane request failed; endpoint is disabled');
        setSpots([]);
      } else {
        setSpots(dummySpots);
      }
    }, 1000);
  };

  const resetFilters = () => {
    setPriceRange([5, 50]);
    setDistance(5);
    setParkingType(['garage', 'street']);
    setFeatures(['evCharging']);
    setLocation('');
    setDate(null);
    setTime(null);
    setSortBy('distance');
  };
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
    <div style={{ padding: '16px', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        {/* Filters Sidebar */}
        <div style={{ width: '25%', background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <Title level={4}>Filters</Title>
          <Space direction="vertical" style={{ width: '100%' }}>
            {/* Location */}
            <Input
              placeholder="Enter your location"
              prefix={<span>📍</span>}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            {/* Date and Time */}
            <DatePicker
              placeholder="Select date"
              format="DD-MM-YYYY"
              value={date}
              onChange={(value) => setDate(value)}
              style={{ width: '100%' }}
            />
            <DatePicker.TimePicker
              placeholder="Select time"
              format="HH:mm"
              value={time}
              onChange={(value) => setTime(value)}
              style={{ width: '100%' }}
            />

            {/* Price Range */}
            <div>
              <Text>Price Range</Text>
              <Slider
                range
                min={5}
                max={50}
                value={priceRange}
                onChange={(value) => setPriceRange(value)}
                style={{ marginTop: '8px' }}
              />
              <Text>
                ${priceRange[0]} - ${priceRange[1]}/hour
              </Text>
            </div>

            {/* Distance */}
            <div>
              <Text>Distance</Text>
              <Slider
                min={0.1}
                max={5}
                step={0.1}
                value={distance}
                onChange={(value) => setDistance(value)}
                style={{ marginTop: '8px' }}
              />
              <Text>Within: {distance} mi</Text>
            </div>

            {/* Parking Type */}
            <div>
              <Text>Parking Type</Text>
              <Checkbox.Group
                value={parkingType}
                onChange={(checkedValues) => setParkingType(checkedValues)}
                style={{ display: 'flex', flexDirection: 'column', marginTop: '8px' }}
              >
                <Checkbox value="garage">Garage</Checkbox>
                <Checkbox value="street">Street</Checkbox>
                <Checkbox value="driveway">Driveway</Checkbox>
                <Checkbox value="lot">Lot</Checkbox>
              </Checkbox.Group>
            </div>

            {/* Features */}
            <div>
              <Text>Features</Text>
              <Checkbox.Group
                value={features}
                onChange={(checkedValues) => setFeatures(checkedValues)}
                style={{ display: 'flex', flexDirection: 'column', marginTop: '8px' }}
              >
                <Checkbox value="evCharging">EV Charging</Checkbox>
                <Checkbox value="covered">Covered</Checkbox>
                <Checkbox value="securityCamera">Security Camera</Checkbox>
                <Checkbox value="24/7Access">24/7 Access</Checkbox>
              </Checkbox.Group>
            </div>

            {/* Reset Filters */}
            <Button type="default" block onClick={resetFilters} style={{ marginTop: '16px' }}>
              Reset Filters
            </Button>
          </Space>
        </div>

        {/* Main Content */}
        <div style={{ width: '100%' }}>
          {/* Search Button and Sort */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
            <Title level={4}>
              {spots.length} parking spots found
            </Title>
            <Select
              defaultValue="distance"
              value={sortBy}
              onChange={(value) => setSortBy(value)}
              style={{ width: '160px' }}
            >
              <Option value="priceLowToHigh">Price: Low to High</Option>
              <Option value="priceHighToLow">Price: High to Low</Option>
              <Option value="distance">Distance</Option>
              <Option value="rating">Rating</Option>
            </Select>
          </div>

          {/* Error Message */}
          {error && (
            <Alert
              message="Error loading parking spots"
              description={error}
              type="error"
              showIcon
              closable
              onClose={() => setError(null)}
              style={{ marginBottom: '16px' }}
            />
          )}

          {/* Map Placeholder */}
          <div style={{ background: '#f0f0f0', height: '256px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '16px' }}>
         <div className="map-container">
   
    </div>
          </div>
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
      <MapContainer center={center} zoom={13} style={{ height: "550px" }}>
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
          {/* Parking Spots */}
          {spots.length > 0 ? (
            spots.map((spot) => (
              <Card key={spot.id} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <Title level={5}>{spot.name}</Title>
                    <Text>Price: ${spot.price}/hour</Text><br />
                    <Text>Distance: {spot.distance} mi</Text><br />
                    <Text>Type: {spot.type}</Text><br />
                    <Text>Features: {spot.features.join(', ')}</Text><br />
                    <Text>Rating: {spot.rating} ⭐</Text>
                  </div>
                  <Button type="primary">Book Now</Button>
                </div>
              </Card>
            ))
          ) : (
            <Text>No parking spots found. Try adjusting your filters.</Text>
          )}

          {/* Try Again Button */}
          {error && (
            <Button type="primary" onClick={fetchSpots} style={{ marginTop: '16px' }}>
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParkingSpotFinder;