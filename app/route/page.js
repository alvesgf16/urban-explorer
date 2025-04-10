"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Page = () => {
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const name = searchParams.get("name");

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Cycling Route to {name}</h1>
        <div className="rounded-lg shadow-lg overflow-hidden h-[400px]">
          <iframe
            title={`Cycling Route to ${name}`}
            src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyAxwttmWKpYSCE_iHgoLwgB8IL-0Rn1CmA&origin=Calgary,AB&destination=${lat},${lng}&mode=bicycling`}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
