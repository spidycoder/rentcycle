"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const redirectInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      router.push("/");
      clearInterval(redirectInterval);
    }, 4000);

    return () => {
      clearInterval(redirectInterval);
      clearTimeout(redirectTimeout);
    };
  }, [router]);
  return (
    <div className="flex  flex-col items-center justify-between p-24 text-4xl">
      <h1 className="font-semibold sm:text-2xl flex items-center justify-center mt-10">
        Your Booking is Confirmed,Check your Email for all the details
      </h1>
      <p className="sm:text-lg mt-6">
        Redirecting to the home page in {countdown}s
      </p>
    </div>
  );
};

export default Success;
