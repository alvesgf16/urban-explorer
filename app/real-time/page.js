"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RealTime = () => {
  const [weather, setWeather] = useState(null);
  const [trafficAlerts, setTrafficAlerts] = useState([]);
  const [eventAlerts, setEventAlerts] = useState([]);

  // Simulate fetching real-time weather data
  useEffect(() => {
    // Placeholder API simulation
    const fetchWeather = () => {
      setWeather({
        temperature: "-5°C",
        condition: "Clear",
        wind: "9 km/h",
        humidity: "81%",
      });
    };

    const fetchTrafficAlerts = () => {
      setTrafficAlerts([
        "Heavy traffic on 5th Ave near Calgary Tower.",
        "Road closure on 8th St due to maintenance.",
      ]);
    };

    const fetchEventAlerts = () => {
      setEventAlerts([
        "Cycling Marathon: Downtown closed from 10 AM to 4 PM.",
        "Weather Alert: Possible rain showers in the evening.",
      ]);
    };

    fetchWeather();
    fetchTrafficAlerts();
    fetchEventAlerts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Real-Time Updates</h1>
        <p className="mb-8 text-gray-700">
          Stay informed with live updates on traffic, weather, and events. Make
          smarter decisions to ensure a smooth journey.
        </p>

        {/* Weather Section */}
        <section className="mb-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">
            Current Weather
          </h2>
          {weather ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold">{weather.temperature}</div>
                <div className="text-gray-700">{weather.condition}</div>
              </div>
              <div className="space-y-2 text-gray-700">
                <p>Wind: {weather.wind}</p>
                <p>Humidity: {weather.humidity}</p>
              </div>
            </div>
          ) : (
            <p>Loading weather data...</p>
          )}
        </section>

        {/* Traffic Alerts Section */}
        <section className="mb-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">
            Traffic Alerts
          </h2>
          {trafficAlerts.length > 0 ? (
            <ul className="list-disc ml-6 text-gray-700">
              {trafficAlerts.map((alert, index) => (
                <li key={index}>{alert}</li>
              ))}
            </ul>
          ) : (
            <p>No traffic alerts at the moment.</p>
          )}
        </section>

        {/* Event Alerts Section */}
        <section className="mb-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">
            Event Alerts
          </h2>
          {eventAlerts.length > 0 ? (
            <ul className="list-disc ml-6 text-gray-700">
              {eventAlerts.map((alert, index) => (
                <li key={index}>{alert}</li>
              ))}
            </ul>
          ) : (
            <p>No events scheduled at the moment.</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RealTime;
