export default function GridPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-purple-300 p-6">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="h-40 w-full p-6 bg-green-300 rounded-lg text-center">
          Child 01
        </div>
        <div className="h-40 w-full p-6 bg-blue-300 rounded-lg text-center">
          Child 02
        </div>
        <div className="h-40 w-full p-6 bg-yellow-300 rounded-lg text-center">
          Child 03
        </div>
        <div className="h-40 w-full p-6 bg-red-300 rounded-lg text-center">
          Child 04
        </div>
      </div>
    </main>
  );
}
