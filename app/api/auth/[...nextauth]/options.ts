import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // CredentialsProvider({
    //     name: "Credentials",
    //     credentials: {
    //         username: {
    //             label:"Username",
    //             type:"text",
    //             placeholder:"Your Username"
    //         },
    //         password:{
    //             label:"Password",
    //             type:"password",
    //             placeholder:"password"
    //         }
    //     },
    //     async authorize(credentials){
    //         //to do:-(Import user from database and check for real users)
    //         const user = {id:"21",name:"Aditya",password:"Kunal!767718"}
    //         if(credentials?.username === user.name && credentials?.password === user.password){
    //             return user;
    //         }else{
    //             return null;
    //         }
    //     }
    // })
  ],
};
