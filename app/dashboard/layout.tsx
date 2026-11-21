export default function DashboardLayout({}: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-amber-300 h-full w-full"></div>
      <div className="flex-5 bg-green-300 h-full w-full">
        <div className="h-20 bg-violet-300"></div>
      </div>
    </div>
  );
}
