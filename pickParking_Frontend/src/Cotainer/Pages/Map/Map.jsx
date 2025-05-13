import React, { useState, useEffect } from "react";
import {
  Slider,
  Checkbox,
  Button,
  DatePicker,
  Input,
  Select,
  Alert,
  Typography,
  Card,
} from "antd";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet/hooks";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import { Icon } from "leaflet";

const { Option } = Select;
const { Title, Text } = Typography;

// Placeholder icons
const pin = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png";
const redPin = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";

// Search Control Component
const SearchControl = ({ onSearch }) => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      showMarker: true,
      showPopup: true,
      marker: {
        icon: new Icon({
          iconUrl: redPin,
          iconSize: [25, 41],
        }),
      },
    });

    map.addControl(searchControl);

    // Listen for search results
    map.on("geosearch/showlocation", (e) => {
      const { location } = e;
      onSearch({
        lat: location.y,
        lng: location.x,
        label: location.label,
      });
    });

    return () => {
      map.removeControl(searchControl);
      map.off("geosearch/showlocation");
    };
  }, [map, onSearch]);

  return null;
};

// Utility to calculate distance between two coordinates (Haversine formula)
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const ParkingSpotFinder = () => {
  const [priceRange, setPriceRange] = useState([5, 50]);
  const [distance, setDistance] = useState(5);
  const [parkingType, setParkingType] = useState(["garage", "street"]);
  const [features, setFeatures] = useState(["evCharging"]);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [sortBy, setSortBy] = useState("distance");
  const [error, setError] = useState(null);
  const [spots, setSpots] = useState([]);
  const [radius, setRadius] = useState(10);
  const [center, setCenter] = useState([12.9308, 77.5838]); // Default: Jayanagar, Bangalore

  const customMarker = new Icon({
    iconUrl: pin,
    iconSize: [25, 41],
  });

  // Dummy parking spots with coordinates
  const dummySpots = [
    {
      id: 1,
      name: "Jayanagar Garage",
      price: 10,
      lat: 12.9308,
      lng: 77.5838,
      type: "garage",
      features: ["evCharging", "covered"],
      rating: 4.5,
    },
    {
      id: 2,
      name: "Basavanagudi Street Parking",
      price: 8,
      lat: 12.9429325,
      lng: 77.560459,
      type: "street",
      features: ["securityCamera"],
      rating: 4.0,
    },
    {
      id: 3,
      name: "Chickpete Lot",
      price: 12,
      lat: 12.9697203,
      lng: 77.5571645,
      type: "lot",
      features: ["24/7Access", "covered"],
      rating: 4.2,
    },
    {
      id: 4,
      name: "Koramangala Driveway",
      price: 15,
      lat: 12.935,
      lng: 77.624,
      type: "driveway",
      features: ["evCharging", "securityCamera"],
      rating: 4.8,
    },
  ];

  // Handle search results
  const handleSearch = ({ lat, lng, label }) => {
    setCenter([lat, lng]);
    setLocation(label);
    fetchSpots([lat, lng]);
  };

  // Fetch and filter spots based on search location and filters
  const fetchSpots = (searchCenter = center) => {
    setError(null);
    setTimeout(() => {
      if (Math.random() > 0.7) {
        setError(
          "Failed to get parking spots: Control plane request failed; endpoint is disabled"
        );
        setSpots([]);
      } else {
        // Filter spots based on radius and other filters
        const filteredSpots = dummySpots
          .map((spot) => {
            const dist = calculateDistance(
              searchCenter[0],
              searchCenter[1],
              spot.lat,
              spot.lng
            );
            return { ...spot, distance: dist };
          })
          .filter((spot) => {
            return (
              spot.distance <= radius && // Within radius
              spot.price >= priceRange[0] &&
              spot.price <= priceRange[1] && // Price range
              parkingType.includes(spot.type) && // Parking type
              features.every((f) => spot.features.includes(f)) && // Features
              spot.distance <= distance // Max distance
            );
          })
          .sort((a, b) => {
            if (sortBy === "priceLowToHigh") return a.price - b.price;
            if (sortBy === "priceHighToLow") return b.price - a.price;
            if (sortBy === "rating") return b.rating - a.rating;
            return a.distance - b.distance; // Default: distance
          });

        setSpots(filteredSpots);
      }
      V2()
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 1000);
  };

  // Reset filters
  const resetFilters = () => {
    setPriceRange([5, 50]);
    setDistance(5);
    setParkingType(["garage", "street"]);
    setFeatures(["evCharging"]);
    setLocation("");
    setDate(null);
    setTime(null);
    setSortBy("distance");
    setCenter([12.9308, 77.5838]);
    setRadius(10);
    fetchSpots([12.9308, 77.5838]);
  };

  // Initial fetch
  useEffect(() => {
    fetchSpots();
  }, [priceRange, distance, parkingType, features, sortBy, radius]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-80 bg-white p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="space-y-4">
          <Input
            placeholder="Enter your location"
            prefix={<span>📍</span>}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded"
          />
          <DatePicker
            placeholder="Select date"
            format="DD-MM-YYYY"
            value={date}
            onChange={(value) => setDate(value)}
            className="w-full rounded"
          />
          <DatePicker.TimePicker
            placeholder="Select time"
            format="HH:mm"
            value={time}
            onChange={(value) => setTime(value)}
            className="w-full rounded"
          />
          <div>
            <p className="text-sm font-medium">Price Range</p>
            <Slider
              range
              min={5}
              max={50}
              value={priceRange}
              onChange={(value) => setPriceRange(value)}
            />
            <p className="text-sm">
              ${priceRange[0]} - ${priceRange[1]}/hour
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Distance</p>
            <Slider
              min={0.1}
              max={5}
              step={0.1}
              value={distance}
              onChange={(value) => setDistance(value)}
            />
            <p className="text-sm">Within: {distance} mi</p>
          </div>
          <div>
            <p className="text-sm font-medium">Parking Type</p>
            <Checkbox.Group
              value={parkingType}
              onChange={(checkedValues) => setParkingType(checkedValues)}
              className="flex flex-col space-y-2"
            >
              <Checkbox value="garage">Garage</Checkbox>
              <Checkbox value="street">Street</Checkbox>
              <Checkbox value="driveway">Driveway</Checkbox>
              <Checkbox value="lot">Lot</Checkbox>
            </Checkbox.Group>
          </div>
          <div>
            <p className="text-sm font-medium">Features</p>
            <Checkbox.Group
              value={features}
              onChange={(checkedValues) => setFeatures(checkedValues)}
              className="flex flex-col space-y-2"
            >
              <Checkbox value="evCharging">EV Charging</Checkbox>
              <Checkbox value="covered">Covered</Checkbox>
              <Checkbox value="securityCamera">Security Camera</Checkbox>
              <Checkbox value="24/7Access">24/7 Access</Checkbox>
            </Checkbox.Group>
          </div>
          <Button
            type="default"
            block
            onClick={resetFilters}
            className="rounded hover:bg-gray-100"
          >
            Reset Filters
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <Title level={4}>{spots.length} Parking Spots Found</Title>
          <Select
            value={sortBy}
            onChange={(value) => setSortBy(value)}
            className="w-40"
          >
            <Option value="priceLowToHigh">Price: Low to High</Option>
            <Option value="priceHighToLow">Price: High to Low</Option>
            <Option value="distance">Distance</Option>
            <Option value="rating">Rating</Option>
          </Select>
        </div>

        {error && (
          <Alert
            message="Error loading parking spots"
            description={error}
            type="error"
            showIcon
            closable
            onClose={() => setError(null)}
            className="mb-4"
          />
        )}

        <div className="mb-4">
          <MapContainer
            center={center}
            zoom={13}
            className="h-[500px] w-full rounded-lg shadow"
          >
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SearchControl onSearch={handleSearch} />
            <Circle center={center} radius={radius * 1000} />
            {spots.map((spot) => (
              <Marker
                key={spot.id}
                position={[spot.lat, spot.lng]}
                icon={customMarker}
              >
                <Popup>
                  {spot.name}
                  <br />
                  Price: ${spot.price}/hour
                  <br />
                  Distance: {spot.distance.toFixed(2)} km
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          <div className="mt-2 flex items-center space-x-4">
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={radius}
              onChange={(e) => setRadius(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm">{radius} km</span>
          </div>
        </div>

        {spots.length > 0 ? (
          spots.map((spot) => (
            <Card
              key={spot.id}
              className="mb-4 shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <Title level={5}>{spot.name}</Title>
                  <Text>Price: ${spot.price}/hour</Text>
                  <br />
                  <Text>Distance: {spot.distance.toFixed(2)} km</Text>
                  <br />
                  <Text>Type: {spot.type}</Text>
                  <br />
                  <Text>Features: {spot.features.join(", ")}</Text>
                  <br />
                  <Text>Rating: {spot.rating} ⭐</Text>
                </div>
                <Button type="primary" className="rounded">
                  Book Now
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <Text className="text-gray-500">
            No parking spots found. Try adjusting your filters or search for a
            new location.
          </Text>
        )}

        {error && (
          <Button
            type="primary"
            onClick={() => fetchSpots()}
            className="mt-4 rounded"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
};

export default ParkingSpotFinder;
