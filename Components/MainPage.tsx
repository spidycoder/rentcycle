"use client";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import {mainPage1, mainPage2, mainPage3 } from "@/public/images";
import Image from "next/image";

const images = [mainPage1,mainPage2, mainPage3];
const text: [string, string][] = [
  ["Self Ride Bike Rentals", "Now Start at ₹10/hour"],
  ["Long term Rentals", "Choose from monthly and annual plan"],
  ["Rent today, Own Tomorrow", "Zero downpayment, flexible ownership"],
];

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
  }, []);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % text.length);
    }, 2000);
  }, []);

  return (
    <div>
      <Fade>
        <div className="relative h-screen w-screen">
          <Image
            src={images[currentIndex]}
            alt="image"
            className="z-0 object-cover h-full w-full"
          />
          <div className="absolute top-1/2 left-1/2 text-center z-10 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-white font-black text-5xl mb-3">
              {text[currentIndex1][0]}
            </h1>
            <p className="text-white font-black text-2xl">
              {text[currentIndex1][1]}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default MainPage;
