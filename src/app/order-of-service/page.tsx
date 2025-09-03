export default function OrderOfServicePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Order of Service</h1>
      <ul className="list-disc text-lg space-y-2">
        <li>Opening Prayer</li>
        <li>Welcome Speech</li>
        <li>Choir Ministration</li>
        <li>Guest Speaker</li>
        <li>Tributes</li>
        <li>Closing Remarks</li>
      </ul>
    </div>
  );
}
