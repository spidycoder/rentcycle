import React from "react";
import Image from "next/image";
import { top1, top2, top3, top4, top5 } from "@/public";

const TopCycles = () => {
  return (
    <div className="bg-slate-300 pb-8">
      <div className="pt-5 mb-5 flex justify-center items-center">
        <h1 className="text-black font-semibold text-2xl">
          Popular Cycles for Rent:
        </h1>
      </div>
      <div className="flex sm:flex-col sm:items-center flex-row justify-evenly gap-3 pl-2 pr-2">
        <div className="relative h-64 w-64 border-slate-200 rounded-md shadow-xl group">
          <Image
            src={top1}
            alt="cycle"
            className="object-cover h-full w-full group-hover:brightness-75"
          />
          <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-xl">Vector</p>
            <p className="text-white font-bold text-xl">̥₹15/Hour</p>
          </div>
        </div>

        <div className="relative h-64 w-64 border-slate-200 rounded-md shadow-xl group">
          <Image
            src={top2}
            alt="cycle"
            className="object-cover h-full w-full group-hover:brightness-75"
          />
          <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-xl">Fire-Fox</p>
            <p className="text-white font-bold text-xl">̥₹10/Hour</p>
          </div>
        </div>

        <div className="relative h-64 w-64 border-slate-200 rounded-md shadow-xl group">
          <Image
            src={top3}
            alt="cycle"
            className="object-cover h-full w-full group-hover:brightness-75"
          />
          <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-xl">Geekay</p>
            <p className="text-white font-bold text-xl">̥₹20/Hour</p>
          </div>
        </div>

        <div className="relative h-64 w-64 border-slate-200 rounded-md shadow-xl group">
          <Image
            src={top4}
            alt="cycle"
            className="object-cover h-full w-full group-hover:brightness-75"
          />
          <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-xl">Leader</p>
            <p className="text-white font-bold text-xl">̥₹15/Hour</p>
          </div>
        </div>

        <div className="relative h-64 w-64 border-slate-200 rounded-md shadow-xl group">
          <Image
            src={top5}
            alt="cycle"
            className="object-cover h-full w-full group-hover:brightness-75"
          />
          <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-xl">Terrain</p>
            <p className="text-white font-bold text-xl">̥₹25/Hour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCycles;
