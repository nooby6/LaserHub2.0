import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

/**
 * DashboardLayout Component
 * 
 * This component serves as the layout for the dashboard pages. It includes a sidebar on the left
 * and a main content area on the right. The layout is responsive and adjusts based on screen size.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the main content area
 * @returns {JSX.Element} The rendered dashboard layout
 */
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* LEFT: Sidebar containing the logo and menu */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
                {/* Logo and link to the home page */}
                <Link
                    href="/"
                    className="flex items-center justify-center lg:justify-start gap-2"
                >
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <span className="hidden lg:block font-bold">Laser Learning Hub</span>
                </Link>
                {/* Menu component */}
                <Menu />
            </div>
            
            {/* RIGHT: Main content area */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
                {/* Navbar component */}
                <Navbar />
                {/* Render the children passed to the layout */}
                {children}
            </div>
        </div>
    );
}