import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { announcementsData, role } from "@/lib/data";
import Image from "next/image";

// Define the type for an announcement object
type Announcement = {
    id: number;
    title: string;
    class: string;
    date: string;
};

// Define the table columns with headers and accessors
const columns = [
    {
        header: "Title",
        accessor: "title",
    },
    {
        header: "Class",
        accessor: "class",
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell", // Hide this column on smaller screens
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

const AnnouncementListPage = () => {
    // Function to render a single row in the table
    const renderRow = (item: Announcement) => (
        <tr
            key={item.id} // Unique key for each row
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-laserPurpleLight"
        >
            <td className="flex items-center gap-4 p-4">{item.title}</td>
            <td>{item.class}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td>
                <div className="flex items-center gap-2">
                    {/* Render action buttons only if the user role is admin */}
                    {role === "admin" && (
                        <>
                            <FormModal table="announcement" type="update" data={item} />
                            <FormModal table="announcement" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP SECTION */}
            <div className="flex items-center justify-between">
                {/* Page title */}
                <h1 className="hidden md:block text-lg font-semibold">
                    All Announcements
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    {/* Search bar for filtering table data */}
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        {/* Filter button */}
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-laserYellow">
                            <Image src="/filter.png" alt="" width={14} height={14} />
                        </button>
                        {/* Sort button */}
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-laserYellow">
                            <Image src="/sort.png" alt="" width={14} height={14} />
                        </button>
                        {/* Create announcement button, visible only for admin */}
                        {role === "admin" && (
                            <FormModal table="announcement" type="create" />
                        )}
                    </div>
                </div>
            </div>
            {/* TABLE SECTION */}
            <Table columns={columns} renderRow={renderRow} data={announcementsData} />
            {/* PAGINATION SECTION */}
            <Pagination />
        </div>
    );
};

export default AnnouncementListPage;