"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Invitation() {
  const router = useRouter();

  // Google Maps link for venue
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Sheba+Event+Centre,+20+Mobolaji+Bank+Anthony+Way,+Maryland+Lagos";

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <Image
        src="/heroimg.jpeg" 
        alt="Invitation Background"
        fill
        className="object-cover md:object-contain"
      />

      {/* Button Section */}
      <div className="absolute bottom-5 flex flex-col items-center gap-1 w-full px-6">
        {/* Set Reminder */}
        <button
          onClick={() => router.push("/reminder")}
          className="w-full max-w-md bg-black text-white py-3 font-bold rounded-md shadow-lg border-2 border-yellow-500"
        >
          SET REMINDER
        </button>

        {/* Venue Direction */}
        <button
          onClick={() => window.open(googleMapsUrl, "_blank")}
          className="w-full max-w-md bg-black text-white py-3 font-bold rounded-md shadow-lg border-2 border-yellow-500"
        >
          VENUE DIRECTION
        </button>

        {/* Order of Service */}
        <button
          onClick={() => router.push("/order-of-service")}
          className="w-full max-w-md bg-black text-white py-3 font-bold rounded-md shadow-lg border-2 border-yellow-500"
        >
          ORDER OF SERVICE
        </button>

        {/* RSVP */}
        <a
          href="tel:07084917780"
          className="w-32 bg-black text-white py-3 font-bold rounded-md shadow-lg text-center border-2 border-yellow-500"
        >
          RSVP
        </a>
      </div>
    </div>
  );
}
