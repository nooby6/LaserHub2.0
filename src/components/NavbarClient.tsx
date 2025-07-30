'use client';

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import type { User } from "@clerk/nextjs/server";

interface Props {
  user: User | null;
}

const NavbarClient = ({ user }: Props) => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-black-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14}/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full p-2 shadow-md flex items-center gap-4 cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20}/>
        </div>

        <div className="bg-white rounded-full p-2 shadow-md flex items-center gap-4 cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20}/>
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full">
            2
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Audrine Whrite</span>
          <span className="text-[10px] text-black-500 text-right">
            {user?.publicMetadata?.role as string}
          </span>
        </div>

        <UserButton />
      </div>
    </div>
  );
};

export default NavbarClient;
