"use client";

import { useRouter } from "next/navigation";

export default function OrderOfServicePage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-emerald-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Order of Service
        </h1>

        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
          <li>Opening Prayer</li>
          <li>Welcome Speech</li>
          <li>Choir Ministration</li>
          <li>Guest Speaker</li>
          <li>Tributes</li>
          <li>Closing Remarks</li>
        </ul>

        <button
          onClick={() => router.push("/")}
          className="mt-8 w-full bg-gray-800 text-white py-2 rounded-lg font-medium hover:bg-gray-900 transition"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
