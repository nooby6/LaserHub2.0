export default function DashboardLayout ({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col lg:flex-row gap-4 p-4">
      {/* Sidebar */}
      <div className="w-1/6"></div>
      {/* Main Content */}
      <div className="w-5/6"></div>
      </div>
  );
}