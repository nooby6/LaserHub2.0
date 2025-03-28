import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/* SEARCH BAR */}
            <div className="hidden md:flex">
                <Image src="/search.png" alt="" width={14} height={14}/>
                <input type="text" placeholder="Search..."/>
            </div>
            {/* ICONS AND USER */}
            <div className="flex items-center gap-4">
                <div className="bg-white rounded-full p-2 shadow-md flex items-center gap-4 cursor-pointer">
                    <Image src="/message.png" alt="" width={20} height={20}/>
                </div>
                <div className="bg-white rounded-full p-2 shadow-md flex items-center gap-4 cursor-pointer">
                    <Image src="/announcement.png" alt="" width={20} height={20}/>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs leading-3 font">Audrine Whrite</span>
                    <span>Admin</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;