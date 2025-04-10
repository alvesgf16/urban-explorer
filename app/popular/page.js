"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import router for navigation
import Header from "../components/Header";
import Footer from "../components/Footer";

const destinations = [
  {
    name: "Prince's Island Park",
    location: "Downtown Calgary, AB",
    description:
      "A tranquil urban park with walking trails, a river, and open spaces.",
    image: "/park.jpg",
    coordinates: { lat: 51.0534, lng: -114.0708 },
    rating: 4.8,
  },
  {
    name: "Stephen Avenue Walk",
    location: "Downtown Calgary, AB",
    description:
      "A vibrant pedestrian mall with shops, restaurants, and historical buildings.",
    image: "/stephen.jpg",
    coordinates: { lat: 51.0454, lng: -114.0626 },
    rating: 4.6,
  },
  {
    name: "Crescent Heights",
    location: "Downtown Calgary, AB",
    description:
      "Crescent Heights Lookout Point in Calgary a stunning panoramic views of downtown, the Bow River, and Mountains.",
    image: "/crescent.jpg",
    coordinates: { lat: 51.0579, lng: -114.0734 },
    rating: 4.5,
  },
  {
    name: "Studio Bell (National Music Centre)",
    location: "Downtown Calgary, AB",
    description:
      "A unique venue celebrating Canadian music with interactive exhibits.",
    image: "/studio.jpg",
    coordinates: { lat: 51.0457, lng: -114.0572 },
    rating: 4.7,
  },
  {
    name: "Nose Hill Park",
    location: "Downtown Calgary, AB",
    description:
      "Nose Hill Park in Calgary is one of North America's largest urban parks, expansive natural landscapes and wildlife.",
    image: "/nose.jpg",
    coordinates: { lat: 51.1011, lng: -114.1242 },
    rating: 4.7,
  },
  {
    name: "Calgary Tower",
    location: "Downtown Calgary, AB",
    description:
      "A landmark observation tower offering panoramic city views. Magnificient view from the top.",
    image: "/calgary-tower.jpg",
    coordinates: { lat: 51.0447, lng: -114.0719 },
    rating: 4.7,
  },
  {
    name: "Fish Creek Provincial Park",
    location: "South Calgary, AB",
    description:
      "A sprawling natural park with extensive bike trails, picnic areas, and scenic river views.",
    image: "/fish.jpg",
    coordinates: { lat: 50.9115, lng: -114.0582 },
    rating: 4.8,
  },
  {
    name: "Glenmore Reservoir Trail",
    location: "Calgary, AB",
    description:
      "A beautiful cycling and walking path surrounding a serene reservoir, perfect for outdoor activities.",
    image: "/glenmore.jpeg",
    coordinates: { lat: 50.9805, lng: -114.1308 },
    rating: 4.9,
  },
  {
    name: "Bow River Pathway",
    location: "Calgary, AB",
    description:
      "A network of scenic trails along the Bow River, ideal for cycling and enjoying picturesque landscapes.",
    image: "/bow.jpg",
    coordinates: { lat: 51.0455, lng: -114.0716 },
    rating: 4.9,
  },
  {
    name: "Weaselhead Flats",
    location: "Calgary, AB",
    description:
      "A natural area with diverse wildlife and well-maintained trails for hiking and cycling.",
    image: "/flats.jpg",
    coordinates: { lat: 50.9802, lng: -114.1504 },
    rating: 4.7,
  },
  {
    name: "Elbow River Pathway",
    location: "Calgary, AB",
    description:
      "A peaceful pathway following the Elbow River, offering beautiful views and relaxing cycling routes.",
    image: "/elbow.webp",
    coordinates: { lat: 51.0372, lng: -114.0759 },
    rating: 4.8,
  },
  {
    name: "Edworthy Park",
    location: "Calgary, AB",
    description:
      "A riverside park with a mix of paved and unpaved cycling trails and stunning views of the Bow River.",
    image: "/edworthy.jpg",
    coordinates: { lat: 51.0555, lng: -114.1588 },
    rating: 4.8,
  },
  {
    name: "Glenbow Ranch Provincial Park",
    location: "Cochrane, AB (near Calgary)",
    description:
      "A stunning park with rolling hills, grasslands, and scenic bike trails overlooking the Bow River.",
    image: "/ranch.jpg",
    coordinates: { lat: 51.2185, lng: -114.3595 },
    rating: 4.9,
  },
  {
    name: "Banff Legacy Trail",
    location: "Banff, AB (near Calgary)",
    description:
      "A 26-km trail offering breathtaking views of the Rocky Mountains, perfect for a day-long cycling adventure.",
    image: "/banff.jpg",
    coordinates: { lat: 51.1784, lng: -115.5708 },
    rating: 4.9,
  },
  {
    name: "Douglas Fir Trail",
    location: "Calgary, AB",
    description:
      "A scenic cycling and walking trail through lush Douglas fir forests, with views of the Bow River.",
    image: "/douglas.jpg",
    coordinates: { lat: 51.0515, lng: -114.1524 },
    rating: 4.7,
  },
];

const Popular = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter(); // Initialize router

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDestinationClick = (destination) => {
    // Navigate to the route page with destination details
    router.push(
      `/route?lat=${destination.coordinates.lat}&lng=${
        destination.coordinates.lng
      }&name=${encodeURIComponent(destination.name)}`
    );
  };

  return (
    <>
      <Header />
      <main className="p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">
          Popular Destinations in Calgary Downtown
        </h1>
        <p className="mb-6 text-gray-700">
          Explore the best attractions in the heart of Calgary! From iconic
          landmarks to cultural hotspots, here are the must-visit places in
          downtown Calgary.
        </p>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg"
            placeholder="Search destinations (e.g., Calgary Tower)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Destinations Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
                onClick={() => handleDestinationClick(destination)} // Handle click
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-teal-600 mb-2">
                    {destination.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    {destination.location}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {destination.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-lg font-bold mr-2">
                      ★ {destination.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({Math.round(destination.rating * 50)} reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-700">No destinations match your search.</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Popular;
