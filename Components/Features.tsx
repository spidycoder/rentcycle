import React from "react";
import Image from "next/image";
import {
  apple,
  owner,
  playstore,
  safeRide,
  smartMobility,
  station,
} from "@/public";

const Features = () => {
  return (
    <div>
      <div className="flex flex-row sm:flex-wrap justify-evenly mt-4">
        <Image
          src={playstore}
          alt="playstore"
          // className="object-contain cursor-pointer"
          height={44}
          width={44}
        />
        <h1 className="text-2xl font-black mt-2 text-slate-600 cursor-pointer hover:text-amber-800">
          CCl Rental App
        </h1>
        <Image
          src={apple}
          alt="applestore"
          height={44}
          width={44}
          // className="object-contain  cursor-pointer"
        />
      </div>
      <div className="flex sm:p-4 flex-col mt-8 mb-12 text-slate-600 justify-center items-center">
        <h1 className="text-3xl">Why CCL?</h1>
        <p className="text-xl">
          We simplified Cycle rentals, so you can focus on what's important to
          you.
        </p>
      </div>
      <div className="flex sm:flex-col flex-row justify-evenly gap-3 pl-3 pr-3 pb-12">
        <div className="flex flex-col justify-center items-center border-2 rounded-md shadow-md">
          <Image
            src={safeRide}
            alt="saferide-logo"
            className="objext-cover mt-4 mb-4"
            height={144}
            width={144}
          />
          <p className="leading-6 p-4 flex items-center self-center">
            Your safety is our priority. From sanitizing all bikes before every
            use, to extensive on-ground safety measures, your rides with ONN
            will always be safe and reliable. We also offer helmets on-demand.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 rounded-md shadow-md">
          <Image
            src={owner}
            alt="saferide-logo"
            className="objext-cover mt-4 mb-4"
            height={144}
            width={144}
          />
          <p className="leading-6 p-4">
            Enjoy the freedom of owning a two-wheeler without the hefty
            down-payments, EMIs and paperwork. Now choose from rent-to-own,
            monthly/quarterly bookings, and even daily plans.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 rounded-md shadow-md">
          <Image
            src={smartMobility}
            alt="saferide-logo"
            className="objext-cover mt-4 mb-4"
            height={144}
            width={144}
          />
          <p className="leading-6 p-4">
            With your trusty CCL app, you can choose any cycle, make instant
            payments, get offers, and manage all aspect of your CCL experience
            right from the comfort and ease of your mobile app.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 rounded-md shadow-md">
          <Image
            src={station}
            alt="saferide-logo"
            className="objext-cover mt-4 mb-4"
            height={144}
            width={144}
          />
          <p className="leading-6 p-4">
            Your local ONN Station is here to make ensure your two-wheeler
            experience is flawless. At your neighborhood station, you get to
            pick any bike, get maintenance, sanitized, and a lot more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
