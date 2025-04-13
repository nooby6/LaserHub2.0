import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

// DashboardLayout component serves as the layout for the dashboard pages.
// It includes a sidebar with a logo and menu, and a main content area with a navbar and dynamic content.
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* LEFT: Sidebar section */}
            <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-5'>
                {/* Logo and title link */}
                <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <span className="hidden lg:block">Laser Learning Hub</span>
                </Link>
                {/* Menu component */}
                <Menu />
            </div>
            
            {/* RIGHT: Main content section */}
            <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll'>
                {/* Navbar component */}
                <Navbar />
                {/* Dynamic content passed as children */}
                {children}
            </div>
        </div>
    );
}