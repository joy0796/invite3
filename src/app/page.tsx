"use client";

import { useRouter } from "next/navigation";

export default function Invitation() {
  const router = useRouter();

  // Google Maps link for venue
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Sheba+Event+Centre,+20+Mobolaji+Bank+Anthony+Way,+Maryland+Lagos";

  return (
    <div
      className="w-full md:w-1/2 mx-auto min-h-screen flex flex-col items-center justify-center relative px-6 border-2 border-black bg-white"
      style={{ minHeight: "100dvh" }} // ✅ mobile-friendly vh
    >
      {/* Background Watermark */}
      <div
        className="absolute inset-0 bg-center bg-contain bg-no-repeat opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/idcode.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-2">
          <div className="h-[100px] w-[100px] bg-white rounded-full border-6 border-green-800 text-black font-bold text-center pt-8">
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
          <h1 className="mt-1 text-2xl font-bold text-yellow-500 text-center border-b-2 border-black">
            CELEBRANT NAME
          </h1>
        </div>

        <div className="flex flex-col justify-start">
          <p className="text-gray-600 text-center mt-1">Date: Event Date</p>
          <p className="text-gray-600 text-center mt-1">Time: Event Time</p>
          <h1 className="mt-1 text-lg font-bold text-yellow-500 text-center ">
            EVENT CENTER: ICC Abuja
          </h1>
          <p className="text-gray-600 text-center mt-1 text-justify">
            Dresscode:
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-col items-center gap-2 w-full max-w-md mt-4">
  <button
    onClick={() => router.push("/reminder")}
    className="w-full bg-black text-white py-2 font-bold rounded-md shadow-lg border-2 border-yellow-500 
               hover:bg-yellow-500 hover:text-black 
               active:bg-yellow-600 active:text-black transition"
  >
    SET REMINDER
  </button>

  <button
    onClick={() => window.open(googleMapsUrl, "_blank")}
    className="w-full bg-black text-white py-2 font-bold rounded-md shadow-lg border-2 border-yellow-500 
               hover:bg-yellow-500 hover:text-black 
               active:bg-yellow-600 active:text-black transition"
  >
    VENUE DIRECTION
  </button>

  <button
    onClick={() => router.push("/order-of-service")}
    className="w-full bg-black text-white py-2 font-bold rounded-md shadow-lg border-2 border-yellow-500 
               hover:bg-yellow-500 hover:text-black 
               active:bg-yellow-600 active:text-black transition"
  >
    ORDER OF SERVICE
  </button>

  <a
    href="tel:07031031944"
    className="w-32 bg-black text-white py-2 font-bold rounded-md shadow-lg text-center border-2 border-yellow-500 
               hover:bg-yellow-500 hover:text-black 
               active:bg-yellow-600 active:text-black transition"
  >
    RSVP
  </a>
</div>


        <div className="mt-4 italic flex justify-end">
  <p>
    Designed by [web&IGlogo]{" "}
    <a
      href="https://idcode.ng"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-500 hover:underline"
    >
      IDcode.ng
    </a>
  </p>
</div>


      </div>
    </div>
  );
}
