import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

// DashboardLayout is a layout component for the dashboard pages.
// It provides a consistent structure with a sidebar on the left and main content on the right.
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* LEFT: Sidebar section */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-white shadow-md shadow-lg flex flex-col gap-4">
                {/* Logo and branding */}
                <Link
                    href="/"
                    className="flex items-center justify-center lg:justify-start gap-2 text-[#1E1E2F] font-semibold text-xl"
                >
                    {/* Logo image */}
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    {/* Brand name, visible only on larger screens */}
                    <span className="hidden lg:block font-bold">Laser Learning Hub</span>
                </Link>
                {/* Menu component for navigation links */}
                <Menu />
            </div>

            {/* RIGHT: Main content section */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
                {/* Navbar component for top navigation */}
                <Navbar />
                {/* Render the children passed to the layout */}
                {children}
            </div>
        </div>
    );
}