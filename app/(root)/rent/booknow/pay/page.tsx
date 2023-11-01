import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

const page = ({
  searchParams,
}: {
  searchParams: {
    name: string;
    image: string;
    price: number;
    location: string;
    totalTime: number;
  };
}) => {
  const value = searchParams.totalTime * searchParams.price;
  return (
    <div>
      <h1 className="mt-12 mb-8 font-bold text-4xl flex justify-center items-center">
        Your Booking Details
      </h1>
      <div className="mt-12 flex flex-row justify-evenly">
        <div>
          <div className="flex flex-row gap-1">
            <h1 className="font-bold">Name:</h1>
            <h1 className="inline">{searchParams.name}</h1>
          </div>
          <div className="flex flex-row gap-1">
            <h1 className="font-bold">Price:</h1>
            <div className="flex flex-row">
              <h1 className="inline">₹</h1>
              <h1 className="inline">{searchParams.price}</h1>
              <h1 className="inline">hour</h1>
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <h1 className="font-bold">Location:</h1>
            <h1 className="inline">{searchParams.location}</h1>
          </div>
          <div className="flex flex-row gap-1">
            <h1 className="font-bold inline">TotalTime of Your Ride: </h1>
            <h1 className="inline">{searchParams.totalTime}</h1>
            <h1 className="inline ">Hours</h1>
          </div>
          <div className="flex flex-row gap-1">
            <h1 className="font-bold inline">TotalCost for Your Ride: </h1>
            <h1 className="inline ">₹</h1>
            <h1 className="inline">{value}</h1>
          </div>
        </div>
        <div className="relative h-54 w-64">
          <Image
            src={searchParams.image}
            alt="cycle"
            height={324}
            width={324}
          />
        </div>
      </div>
      <div className="mt-6 flex flex-row justify-evenly">
        <div>
          <Link href="/rent/booknow">
            <Button variant="contained">Change Your time</Button>
          </Link>
        </div>
        <div>
          <Link href="/rent/booknow/pay/payment">
            <Button variant="contained">Pay Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
