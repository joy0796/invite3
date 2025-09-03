"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Invitation() {
  const router = useRouter();

  // Google Maps link for venue
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Sheba+Event+Centre,+20+Mobolaji+Bank+Anthony+Way,+Maryland+Lagos";

  return (
    <div
      className="w-full md:w-1/2 mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 border-2 border-black"
      style={{ minHeight: "100dvh" }} // ✅ mobile-friendly vh
    >
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-2">
        <div className="h-[100px] w-[100px] bg-white rounded-full border-6 border-green-800 text-black font-bold">
          Event Logo
        </div>
        <h1 className="mt-1 text-2xl font-bold text-gray-800 text-center">
          Invitation Verified For
        </h1>
        <h1 className="mt-1 text-lg font-bold text-yellow-500 text-center">
          GUEST NAME
        </h1>
        <p className="text-gray-600 text-center mt-1">
          Welcome as we celebrate
        </p>
        <h1 className="mt-1 text-2xl font-bold text-yellow-500 text-center ">
          CELEBRANT NAME
        </h1>
      </div>

      <div className="flex flex-col justify-start">
        <p className="text-gray-600 text-center mt-1">Date: 30th December 2025</p>
        <p className="text-gray-600 text-center mt-1">Time: 1.00pm</p>
        <h1 className="mt-1 text-lg font-bold text-yellow-500 text-center border-b-2 border-black">
          EVENT CENTER AND ADDRESS
        </h1>
        <p className="text-gray-600 text-center mt-1">
          Dresscode: 
        </p>
      </div>

      {/* Button Section */}
      <div className="flex flex-col items-center gap-2 w-full max-w-md mt-4">
        {/* Set Reminder */}
        <button
          onClick={() => router.push("/reminder")}
          className="w-full bg-black text-white py-2 font-bold rounded-md shadow-lg border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition"
        >
          SET REMINDER
        </button>

        {/* Venue Direction */}
        <button
          onClick={() => window.open(googleMapsUrl, "_blank")}
          className="w-full bg-black text-white py-2 font-bold rounded-md shadow-lg border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition"
        >
          VENUE DIRECTION
        </button>

        {/* Order of Service */}
        <button
          onClick={() => router.push("/order-of-service")}
          className="w-full bg-black text-white py-2 font-bold rounded-md shadow-lg border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition"
        >
          ORDER OF SERVICE
        </button>

        {/* RSVP */}
        <a
          href="tel:07084917780"
          className="w-32 bg-black text-white py-2 font-bold rounded-md shadow-lg text-center border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition"
        >
          RSVP
        </a>
      </div>
    </div>
  );
}
