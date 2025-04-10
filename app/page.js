"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import Image from 'next/image';

const images = [
  { src: "/route.webp", alt: "Scenic Route" },
  { src: "/cycling.jpg", alt: "Cycling Path" },
  { src: "/mountain.jpg", alt: "Mountain View" },
  { src: "/city.jpg", alt: "City Landscape" },
  { src: "/nature.jpg", alt: "Nature Trail" },
];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      <Header />
      <main className="p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden rounded-lg shadow-xl mb-12">
          {/* Sliding Background */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover brightness-75 transition-opacity duration-1000"
            />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
              Welcome to Urban Explorer
            </h1>
            <p className="text-lg mb-6 max-w-2xl mx-auto drop-shadow-md">
              Discover the best spots for cyclists and pedestrians. Plan routes,
              explore destinations, and connect with a vibrant community.
            </p>
            <Link href="/plan">
              <button className="bg-teal-500 text-white px-8 py-4 font-bold rounded-lg shadow-lg hover:bg-teal-600 transition transform hover:scale-105">
                Start Exploring
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Why Choose Urban Explorer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-teal-500 mb-3">
                Plan Your Journey
              </h3>
              <p className="text-gray-300 mb-4">
                Use our interactive tools to plan scenic routes, discover
                landmarks, and customize your journey.
              </p>
              <Link href="/plan">
                <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-teal-500 mb-3">
                Popular Destinations
              </h3>
              <p className="text-gray-300 mb-4">
                Explore top-rated destinations cherished by cyclists and
                pedestrians, offering scenic trails, and vibrant paths.
              </p>
              <Link href="/popular">
                <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
                  View Destinations
                </button>
              </Link>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-teal-500 mb-3">
                Real-Time Updates
              </h3>
              <p className="text-gray-300 mb-4">
                Stay updated with real-time information on traffic conditions,
                weather forecasts to plan your journey effortlessly.
              </p>
              <Link href="/real-time">
                <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
                  Check Updates
                </button>
              </Link>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-teal-500 mb-3">
                Community Insights
              </h3>
              <p className="text-gray-300 mb-4">
                Connect with fellow explorers, share experiences, and find
                hidden gems, and experience new adventures.
              </p>
              <Link href="/community">
                <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
                  Join the Community
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
