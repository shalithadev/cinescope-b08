export default function DashboardPage() {
  return (
    <div className="h-full w-full p-4 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Dashboard Overview
          </h2>
          <p className="text-muted-foreground">
            Welcome to the CineScope admin dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
