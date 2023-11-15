"use client";
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useRouter } from "next/navigation";

const page = ({
  searchParams,
}: {
  searchParams: {
    name: string;
    image: string;
    price: number;
    location: string;
    totalTime: number;
    TotalPrice: number;
  };
}) => {
  const router = useRouter();
  const priceForStripe = searchParams.TotalPrice * 100;
  const publishableKey = process.env
    .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;

  // State to store the user's email
  const [userEmail, setUserEmail] = useState("");

  const onToken = async (token: any) => {
    try {
      // Include the user's email in the request body
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail, // Include the user's email
          searchParams,
        }),
      });

      if (res.status === 200) {
        console.log("Email Sent Successfully");
        router.push("/success");
      }
    } catch (error: any) {
      console.error(error);
    }
    
  };

  return (
    <div className="sm:p-4 mt-40 flex justify-center items-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Enter Your Email to get the confirmation of the Booking
        </h1>
        <div className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:border-blue-400"
          />
          <StripeCheckout
            label="Pay with Card"
            name="CCL"
            currency="INR"
            description={`Your total Price for Ride is ₹${searchParams.TotalPrice}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
