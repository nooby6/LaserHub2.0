import Image from "next/image";

// TableSearch is a functional component that renders a search input field with an accompanying search icon.
const TableSearch = () => {
    return (
        <div
            // Container div styled to be responsive, flexbox-aligned, and visually appealing with rounded corners and a border ring.
            className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-black-300 px-2"
        >
            {/* Search icon rendered using Next.js Image component for optimized image loading */}
            <Image src="/search.png" alt="Search Icon" width={14} height={14} />
            
            {/* Input field for search functionality with placeholder text and transparent background */}
            <input
                type="text"
                placeholder="Search..."
                className="w-[200px] p-2 bg-transparent outline-none"
            />
        </div>
    );
};

export default TableSearch; // Exporting the component for use in other parts of the application.