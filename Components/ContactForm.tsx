"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { mainPage1, cycle1, mainPage3 } from "@/public";

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
const images = [mainPage1, cycle1, mainPage3];
const cycles = [
  {
    value: "Hercules",
  },
  {
    value: "Avon",
  },
  {
    value: "BSA",
  },
  {
    value: "Urban Terrain",
  },
  {
    value: "Svitch",
  },
  {
    value: "Hero",
  },
  {
    value: "Vector V202",
  },
];
export default function ContactForm() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    selectedLocation: "",
    selectedCycle: "",
    message: "",
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      formData.firstName === " " ||
      formData.lastName === " " ||
      formData.email === " " ||
      formData.message === "" ||
      formData.mobileNo === "" ||
      formData.selectedCycle === "" ||
      formData.selectedLocation === ""
    ) {
      toast.error("Please fill all the required fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("we recieved your query,we will contact you soon", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      selectedLocation: "",
      selectedCycle: "",
      message: "",
    });
  };
  return (
    <div>
      <div className="flex flex-col mt-8 mb-12 text-slate-600 justify-center items-center">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-xl sm:text-center">
          Any Cycle Renting Issue? Feel Free to Contact us.
        </p>
      </div>
      <div className="flex sm:flex-col sm:items-center flex-row justify-evenly">
        <div className="relative mt-16 h-64 w-64 lg:h-72 lg:w-72 border-2 rounded-md shadow-md shadow-slate-400 mb-4 lg:mb-0">
          <Image
            src={images[currentIndex]}
            alt="cycle-images"
            className="object-cover h-64 w-64 lg:h-72 lg:w-72"
          />
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { mb: 2, width: "100%", maxWidth: "400px" },
          }}
          noValidate
          autoComplete="off"
          className="sm:p-4"
        >
          <div>
            <TextField
              required
              id="standard-required"
              label="First-Name"
              variant="standard"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              // className="border-2"
            />
            <TextField
              required
              id="standard-required"
              label="last-Name"
              variant="standard"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
          <div>
            <TextField
              required
              id="standard-search"
              label="Email"
              type="email"
              variant="standard"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <TextField
              required
              id="standard-search"
              label="Mobile Number"
              type=""
              variant="standard"
              value={formData.mobileNo}
              onChange={(e) =>
                setFormData({ ...formData, mobileNo: e.target.value })
              }
            />
          </div>
          <div>
            <TextField
              id="filled-select-location"
              select
              label="Select"
              defaultValue=""
              helperText="Please select your location"
              variant="filled"
              value={formData.selectedLocation}
              onChange={(e) =>
                setFormData({ ...formData, selectedLocation: e.target.value })
              }
            >
              {locations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="filled-select-cycle"
              select
              label="select"
              defaultValue=""
              helperText="Please select your cycle"
              variant="filled"
              value={formData.selectedCycle}
              onChange={(e) =>
                setFormData({ ...formData, selectedCycle: e.target.value })
              }
            >
              {cycles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <TextField
            id="standard-required"
            label="Your Message"
            variant="standard"
            sx={{ width: "100%" }}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button
            type="submit"
            className="border-2 bg-blue-500 text-white rounded-md pt-2 pb-2 pl-4 pr-4 sm:px-4 sm:py-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Box>
      </div>
    </div>
  );
}
