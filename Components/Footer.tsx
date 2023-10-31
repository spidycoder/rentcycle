import React from "react";
import Image from "next/image";
import { facebook, instagram, linkedin, twitter } from "@/public";

const Footer = () => {
  return (
    <div className="bg-slate-600 pt-6 pl-6 pr-6 pb-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-start h-full w-1/2">
          <h1 className="text-white font-semibold mb-4">WE'RE IN</h1>
          <p className="text-white hover:text-amber-700 cursor-pointer">
            Bengaluru
          </p>
          <p className="text-white hover:text-amber-700 cursor-pointer">
            Hyderabad
          </p>
          <p className="text-white hover:text-amber-700 cursor-pointer">
            Jaipur
          </p>
          <p className="text-white hover:text-amber-700 cursor-pointer">
            Mumbai
          </p>
          <p className="text-white hover:text-amber-700 cursor-pointer">
            Patna
          </p>
          <p className="text-white hover:text-amber-700 cursor-pointer">
            Delhi
          </p>
        </div>

        <div className="flex flex-col justify-start h-full w-1/2">
          <h1 className="text-white">
            CCL IS HERE TO REDEFINE THE WAY YOU RIDE! RENT A CYCLE ON AN HOURLY,
            DAILY, WEEKLY OR EVEN MONTHLY BASIS. WE ALSO HAVE LONG TERM LEASING
            SOLUTIONS FOR BUSINESSES WHO ARE INTO LAST MILE DELIVERY THROUGH TWO
            WHEELERS.
          </h1>
          <div className="flex flex-row gap-4 mt-4">
            <Image src={facebook} alt="facebook" height={44} width={44} />
            <Image src={twitter} alt="twitter" height={44} width={44} />
            <Image src={instagram} alt="instagram" height={44} width={44} />
            <Image src={linkedin} alt="linkedin" height={44} width={44} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
