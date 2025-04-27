import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {
  assignmentsData,
  role,
} from "@/lib/data";
import Image from "next/image";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

/**
 * Component: AssignmentListPage
 *
 * This component renders a page displaying a list of assignments. It includes features
 * such as search, filtering, sorting, and pagination. The component is designed to be
 * responsive and adapts to different screen sizes.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered AssignmentListPage component.
 *
 * @remarks
 * - The `renderRow` function is used to dynamically generate table rows for each assignment.
 * - The component conditionally renders action buttons (create, update, delete) based on the user's role.
 * - The table supports additional features like search and pagination for better usability.
 *
 * @example
 * ```tsx
 * <AssignmentListPage />
 * ```
 *
 * @function renderRow
 * @param {Assignment} item - The assignment object containing details such as subject, class, teacher, and due date.
 * @returns {JSX.Element} A table row element representing an assignment.
 *
 * @remarks
 * - The `renderRow` function includes conditional rendering for admin and teacher roles to display update and delete modals.
 * - The row styling includes hover effects and alternating background colors for better readability.
 *
 * @dependencies
 * - `FormModal`: Used for creating, updating, and deleting assignments.
 * - `TableSearch`: Provides a search bar for filtering assignments.
 * - `Table`: A reusable table component for displaying assignment data.
 * - `Pagination`: Handles pagination for the assignment list.
 * - `Image`: Displays icons for filtering and sorting.
 *
 * @props
 * - `columns`: Defines the table column headers.
 * - `assignmentsData`: The data source for the list of assignments.
 * - `role`: Determines the user's role (e.g., admin, teacher) to conditionally render certain features.
 *
 * @styles
 * - The component uses Tailwind CSS classes for styling, ensuring a clean and responsive design.
 * - Custom colors like `lamaPurpleLight` and `lamaYellow` are used for branding.
 */
const AssignmentListPage = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" || role === "teacher" && (
            <>
              <FormModal table="assignment" type="update" data={item} />
              <FormModal table="assignment" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          All Assignments
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" || role === "teacher" && <FormModal table="assignment" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AssignmentListPage;