export default function FlexOnePage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-purple-300">
      <div className="flex-1 p-6 bg-green-300 text-center"></div>
      <div className="flex-3 p-6 bg-blue-300 text-center"></div>
      <div className="flex-2 p-6 bg-yellow-300 text-center"></div>
      <div className="flex-4 p-6 bg-red-300 text-center"></div>
    </div>
  );
}
