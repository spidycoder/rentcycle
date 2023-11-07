import User from "@/lib/models/user.model";
import { connectDB } from "@/lib/mongoose";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    await connectDB();

    // Getting data from the frontend using the request
    const { email, password } = await request.json();

    // Checking if the user with the same email exists in our database (if it exists, then we don't allow that user)
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse("Email is already in use", {
        status: 400,
      });
    }

    // If the user does not exist, then hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Creating a new user object with the hashed password
    const newUser = new User({
      email,
      password: hashPassword,
    });
    // Saving the new user to the database
    await User.create(newUser);

    return new NextResponse("User is registered", { status: 200 });
  } catch (error: any) {
    console.error(error);
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
