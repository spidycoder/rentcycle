"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import Link from "next/link";
import { useState } from "react";

const locations = [
  {
    value: "Bengaluru",
  },
  {
    value: "Mumbai",
  },
  {
    value: "Delhi",
  },
  {
    value: "Patna",
  },
];

const page = ({
  searchParams,
}: {
  searchParams: {
    name: string;
    image: string;
    price: number;
  };
}) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [startTime, setStartTime] = useState<dayjs.Dayjs | null>(
    dayjs("2023-04-17T15:30")
  );
  const [endTime, setEndTime] = useState<dayjs.Dayjs | null>(
    dayjs("2023-04-17T17:30")
  );
  const handleLocationChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedLocation(e.target.value as string);
  };
  const handleStartTimeChange = (time: dayjs.Dayjs | null) => {
    setStartTime(time);
  };
  const handleEndTimeChange = (time: dayjs.Dayjs | null) => {
    setEndTime(time);
  };
  //finding the difference between the time and dividing it by 60 to convert it into hours
  const differenceInMinutes = endTime?.diff(startTime, "minute");
  const totalTime = differenceInMinutes ? (differenceInMinutes / 60).toFixed(2) : 0.00;
  return (
    <div className="mt-20">
      <h1 className="flex justify-center items-center mt-12 font-bold hover:text-amber-800 text-3xl">
        Book Now
      </h1>
      <div className="flex flex-row justify-evenly mt-10">
        <div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                mb: 2,
                width: "100%",
                maxWidth: "400px",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="filled-select-location"
                select
                required
                label="Select"
                defaultValue=""
                helperText="Please select your location"
                variant="filled"
                value={selectedLocation}
                onChange={handleLocationChange}
              >
                {locations.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["MobileDateTimePicker"]}>
                  <DemoItem label="Select Date and Start Time of Your Booking">
                    <MobileDateTimePicker
                      defaultValue={dayjs("2023-04-17T15:30")}
                      value={startTime}
                      onChange={handleStartTimeChange}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["MobileDateTimePicker"]}>
                  <DemoItem label="Seclect Date and Ending Time of Your Booking">
                    <MobileDateTimePicker
                      defaultValue={dayjs("2023-04-17T17:30")}
                      value={endTime}
                      onChange={handleEndTimeChange}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div>
              <Link
                href={{
                  pathname: "/rent/booknow/pay",
                  query: {
                    name: searchParams.name,
                    image: searchParams.image,
                    price: searchParams.price,
                    location: selectedLocation,
                    totalTime: totalTime,
                  },
                }}
              >
                <Button variant="contained">Book Your Ride</Button>
              </Link>
            </div>
          </Box>
        </div>
        <div className="relative flex flex-col h-58 p-5 w-64 items-center justify-center border-1 hover:border-2 hover:shadow-md">
          <h1 className="font-semibold text-2xl mb-4">
            Cycle: {searchParams.name}
          </h1>
          <Image
            src={searchParams.image}
            alt="cycle"
            className="object-cover rounded-md"
            height={324}
            width={324}
          />
          <div className="flex flex-row mt-3 text-1xl">
            <h1 className="inline">₹</h1>
            <h1>{searchParams.price}</h1>
            <h1 className="inline">/hour</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
