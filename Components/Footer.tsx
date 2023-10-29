import React from "react";
import Image from "next/image";
import { facebook, instagram, linkedin, twitter } from "@/public/images";

const Footer = () => {
  return (
    <div className="bg-slate-600 pt-6 pl-3 pr-3">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-start h-full w-1/2">
          <h1 className="text-white font-semibold">WE'RE AT</h1>
          <p className="text-white">Bengaluru</p>
          <p className="text-white">Hyderabad</p>
          <p className="text-white">Jaipur</p>
          <p className="text-white">Mumbai</p>
          <p className="text-white">Patna</p>
          <p className="text-white">Delhi</p>
        </div>

        <div className="flex flex-col justify-start h-full w-1/2">
          <h1 className="text-white">
            CCL IS HERE TO REDEFINE THE WAY YOU RIDE! RENT A CYCLe ON AN HOURLY,
            DAILY, WEEKLY OR EVEN MONTHLY BASIS. WE ALSO HAVE LONG TERM LEASING
            SOLUTIONS FOR BUSINESSES WHO ARE INTO LAST MILE DELIVERY THROUGH TWO
            WHEELERS.
          </h1>
          <div className="flex flex-row gap-4">
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
