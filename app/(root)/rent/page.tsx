import Image from "next/image";
import Link from "next/link";
import { first, second, third } from "../../../Constants";

const page = () => {
  return (
    <div className="mb-12">
      <div className=" mt-8 flex flex-row justify-center items-center">
        <h1 className=" font-black hover:text-amber-800 text-3xl hover:shadow-sm">
          Book Your Cycle
        </h1>
      </div>
      {/* first row */}
      <div className="mt-8 flex flex-col gap-2 mb-6">
        <div className="flex flex-row justify-evenly">
          {first.map((cycle) => (
            <div className="flex flex-col" key={cycle.name}>
              <div className="relative h-64 w-64 flex flex-col justify-center items-center border-1 hover:border-2 hover:shadow-md">
                <div className="flex justify-end mb-2">
                  <h1
                    className={`text-white pl-3 pr-3 pt-1 pb-1 self-start ${
                      cycle.left < 3 ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    {cycle.left}
                    <p className="inline"> Left</p>
                  </h1>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={cycle.image}
                    alt="cycle"
                    className="object-cover"
                    height={144}
                    width={144}
                  />
                </div>
                <h1 className="font-semibold text-xl flex justify-center items-center mt-2">
                  {cycle.name}
                </h1>
                <div className="flex flex-row justify-center items-center gap-2 mt-2">
                  <div className="flex flex-row">
                    <h1 className="inline">₹</h1>
                    <h1>{cycle.rent}</h1>
                    <h1 className="inline">/hour</h1>
                  </div>
                  <Link
                    href={{
                      pathname: "/rent/booknow",
                      query: {
                        name: cycle.name,
                        image: cycle.image,
                        price: cycle.rent,
                      },
                    }}
                  >
                    <button
                      type="submit"
                      className="bg-blue-900 text-white px-3 py-1"
                    >
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* second row*/}
        <div className="flex flex-row justify-evenly">
          {second.map((cycle) => (
            <div className="flex flex-col" key={cycle.name}>
              <div className="relative h-64 w-64 flex flex-col justify-center items-center border-1 hover:border-2 hover:shadow-md">
                <div className="flex justify-end mb-2">
                  <h1
                    className={`text-white pl-3 pr-3 pt-1 pb-1 self-start ${
                      Number(cycle.left) < 3 ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    {cycle.left}
                    <p className="inline"> Left</p>
                  </h1>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={cycle.image}
                    alt="cycle"
                    className="object-cover"
                    height={144}
                    width={144}
                  />
                </div>
                <h1 className="font-semibold text-xl flex justify-center items-center mt-2">
                  {cycle.name}
                </h1>
                <div className="flex flex-row justify-center items-center gap-2 mt-2">
                  <div className="flex flex-row">
                    <h1 className="inline">₹</h1>
                    <h1>{cycle.rent}</h1>
                    <h1 className="inline">/hour</h1>
                  </div>
                  <Link
                    href={{
                      pathname: "/rent/booknow",
                      query: {
                        name: cycle.name,
                        image: cycle.image,
                        price: cycle.rent,
                      },
                    }}
                  >
                    <button
                      type="submit"
                      className="bg-blue-900 text-white px-3 py-1"
                    >
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* third row */}
        <div className="flex flex-row justify-evenly">
          {third.map((cycle) => (
            <div className="flex flex-col" key={cycle.name}>
              <div className="relative h-64 w-64 flex flex-col justify-center items-center border-1 hover:border-2 hover:shadow-md">
                <div className="flex justify-end mb-2">
                  <h1
                    className={`text-white pl-3 pr-3 pt-1 pb-1 self-start ${
                      Number(cycle.left) < 3 ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    {cycle.left}
                    <p className="inline"> Left</p>
                  </h1>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={cycle.image}
                    alt="cycle"
                    className="object-cover"
                    height={144}
                    width={144}
                  />
                </div>
                <h1 className="font-semibold text-xl flex justify-center items-center mt-2">
                  {cycle.name}
                </h1>
                <div className="flex flex-row justify-center items-center gap-2 mt-2">
                  <div className="flex flex-row">
                    <h1 className="inline">₹</h1>
                    <h1>{cycle.rent}</h1>
                    <h1 className="inline">/hour</h1>
                  </div>
                  <Link
                    href={{
                      pathname: "/rent/booknow",
                      query: {
                        name: cycle.name,
                        image: cycle.image,
                        price: cycle.rent,
                      },
                    }}
                  >
                    <button
                      type="submit"
                      className="bg-blue-900 text-white px-3 py-1"
                    >
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
