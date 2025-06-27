"use client";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Add your background image paths here
const backgroundImages = [
  "/bg1.jpg",
  "/bg2.jpg",
  "/bg3.jpg",
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Background Slideshow */}
      {backgroundImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Dashboard background"
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-40" : "opacity-0"
          }`}
        />
      ))}
      
      {/* Overlay and Content */}
      <div className="relative z-10 h-screen flex">
        {/* LEFT - Sidebar with modern glass effect */}
        <div className="w-[16%] xl:w-[14%] p-4 bg-black/20 backdrop-blur-lg border-r border-white/10">
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start gap-2 mb-8"
          >
            <Image src="/logo.jpg" alt="logo" width={32} height={32} className="rounded-md"/>
            <span className="hidden lg:block font-bold text-white">Laser Hub</span>
          </Link>
          <Menu />
        </div>
        
        {/* RIGHT - Main Content */}
        <div className="w-[84%] xl:w-[86%] flex flex-col">
          <Navbar />
          <main className="flex-grow overflow-y-auto p-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}