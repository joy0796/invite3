"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function ReminderPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const router = useRouter();

  const handleSetReminder = () => {
    if (date && time) {
      toast.success("Reminder Set!");
    } else {
      toast.error("Please select date and time");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-emerald-100 p-6">
      <Toaster position="top-center" />
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Set Reminder
        </h1>

        <div className="space-y-4">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border w-full rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border w-full rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-emerald-500"
          />

          <button
            onClick={handleSetReminder}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition"
          >
            Confirm Reminder
          </button>
        </div>

        <button
          onClick={() => router.push("/")}
          className="mt-6 w-full bg-gray-800 text-white py-2 rounded-lg font-medium hover:bg-gray-900 transition"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
