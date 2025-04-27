import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData } from "@/lib/data";
import Image from "next/image";

// Define the Subject type to ensure type safety for subject data
type Subject = {
    id: number;
    name: string;
    teachers: string[];
};

// Define the table columns with headers and accessors for rendering the table
const columns = [
    {
        header: "Subject Name",
        accessor: "name",
    },
    {
        header: "Teachers",
        accessor: "teachers",
        className: "hidden md:table-cell", // Hide this column on smaller screens
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

const SubjectListPage = () => {
    // Function to render a single row in the table
    const renderRow = (item: Subject) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            {/* Subject Name */}
            <td className="flex items-center gap-4 p-4">{item.name}</td>
            
            {/* Teachers (hidden on smaller screens) */}
            <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
            
            {/* Actions (only visible for admin role) */}
            <td>
                <div className="flex items-center gap-2">
                    {role === "admin" && (
                        <>
                            {/* Update and Delete modals for admin */}
                            <FormModal table="subject" type="update" data={item} />
                            <FormModal table="subject" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP SECTION: Header and Search/Filter/Sort Controls */}
            <div className="flex items-center justify-between">
                {/* Page Title */}
                <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
                
                {/* Search and Action Buttons */}
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    {/* Search Input */}
                    <TableSearch />
                    
                    {/* Filter and Sort Buttons */}
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/filter.png" alt="" width={14} height={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/sort.png" alt="" width={14} height={14} />
                        </button>
                        
                        {/* Create Modal (only for admin role) */}
                        {role === "admin" && <FormModal table="teacher" type="create" />}
                    </div>
                </div>
            </div>
            
            {/* LIST SECTION: Table displaying subjects */}
            <Table columns={columns} renderRow={renderRow} data={subjectsData} />
            
            {/* PAGINATION SECTION */}
            <Pagination />
        </div>
    );
};

export default SubjectListPage;