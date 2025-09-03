"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ReminderPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSetReminder = () => {
    if (date && time) {
      toast.success("Reminder Set!");
    } else {
      toast.error("Please select date and time");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <Toaster position="top-center" />
      <h1 className="text-2xl font-bold mb-6">Set Reminder</h1>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded-md p-2 mb-4 w-64"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border rounded-md p-2 mb-4 w-64"
      />

      <button
        onClick={handleSetReminder}
        className="bg-black text-white px-6 py-2 rounded-md font-bold"
      >
        Set Reminder
      </button>
    </div>
  );
}
