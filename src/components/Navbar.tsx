'use client';

import { SignOutButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useUser();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex gap-6">
        <Link href="/">
          <span className={`text-sm ${isActive('/') ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
            Dashboard
          </span>
        </Link>
        <Link href="/patients">
          <span className={`text-sm ${isActive('/patients') ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
            Patients
          </span>
        </Link>
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-800">{user.emailAddresses[0]?.emailAddress}</p>
          <SignOutButton>
            <button className="text-sm text-red-500 hover:underline">Logout</button>
          </SignOutButton>
        </div>
      ) : (
        <Link href="/sign-in" className="text-sm text-blue-600 hover:underline">
          Sign in
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
