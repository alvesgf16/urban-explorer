"use client";

import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Plan = () => {
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps/embed/v1/view?key=AIzaSyAxwttmWKpYSCE_iHgoLwgB8IL-0Rn1CmA&center=40.73061,-73.935242&zoom=12"
  );

  const handlePlanRoute = () => {
    if (startLocation && destination) {
      // Construct URL for Directions API with mode=bicycling
      const directionsUrl = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyAxwttmWKpYSCE_iHgoLwgB8IL-0Rn1CmA&origin=${encodeURIComponent(
        startLocation
      )}&destination=${encodeURIComponent(destination)}&mode=bicycling`;

      // Update the map URL
      setMapUrl(directionsUrl);

      alert(`Planning cycling route from ${startLocation} to ${destination}.`);
    } else {
      alert("Please fill in both the start and destination fields.");
    }
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentLocation = `${latitude},${longitude}`;
          setStartLocation(currentLocation);
          alert("Current location has been set as the starting point.");
        },
        (error) => {
          console.error("Error fetching geolocation: ", error);
          alert("Unable to retrieve your current location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Plan Your Journey</h1>
        <p className="mb-6">
          Use our tools to plan a scenic and safe cycling journey. Enter your
          starting location and destination to see your route.
        </p>

        {/* Journey Planner Form */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Journey Planner</h2>
          <div className="mb-4">
            <label htmlFor="startLocation" className="block text-gray-700 mb-2">
              Start Location:
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                id="startLocation"
                className="flex-1 p-3 border border-gray-300 rounded"
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                placeholder="Enter your starting location (e.g., New York)"
              />
              <button
                onClick={handleUseCurrentLocation}
                className="bg-teal-600 text-white px-4 py-2 font-bold rounded hover:bg-teal-700 transition"
              >
                Use Current Location
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="destination" className="block text-gray-700 mb-2">
              Destination:
            </label>
            <input
              type="text"
              id="destination"
              className="w-full p-3 border border-gray-300 rounded"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter your destination (e.g., Boston)"
            />
          </div>
          <button
            onClick={handlePlanRoute}
            className="bg-teal-600 text-white px-6 py-3 font-bold rounded hover:bg-teal-700 transition"
          >
            Plan Route
          </button>
        </section>

        {/* Embedded Map */}
        <section className="rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-2xl font-semibold mb-4">Interactive Map</h2>
          <div className="h-[400px] w-full">
            <iframe
              title="Interactive Map"
              src={mapUrl}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Plan;
