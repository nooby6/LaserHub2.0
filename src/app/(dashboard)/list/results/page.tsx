import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {
  resultsData,
  role,
} from "@/lib/data";
import Image from "next/image";

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: "exam" | "assignment";
  date: string;
  score: number;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

/**
 * Component: ResultListPage
 *
 * This component renders a page displaying a list of results in a tabular format.
 * It includes features such as search, filtering, sorting, and pagination.
 * The component is designed to be responsive and adapts to different screen sizes.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered ResultListPage component.
 *
 * @remarks
 * - The `renderRow` function is used to dynamically render each row of the results table.
 * - The table supports role-based actions (e.g., create, update, delete) for users with "admin" or "teacher" roles.
 * - The component integrates with reusable components such as `Table`, `TableSearch`, `FormModal`, and `Pagination`.
 *
 * @example
 * ```tsx
 * <ResultListPage />
 * ```
 *
 * @dependencies
 * - `Table`: A reusable table component for rendering tabular data.
 * - `TableSearch`: A search input component for filtering table data.
 * - `FormModal`: A modal component for handling create, update, and delete operations.
 * - `Pagination`: A component for navigating through paginated data.
 *
 * @internal
 * - The `renderRow` function uses the `Result` type to define the structure of each row.
 * - The `role` variable determines the visibility of certain actions based on user permissions.
 *
 * @todo
 * - Add error handling for cases where `resultsData` is empty or undefined.
 * - Improve accessibility by adding ARIA attributes to interactive elements.
 */
const ResultListPage = () => {
  const renderRow = (item: Result) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-laserPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.student}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" || role === "teacher" && (
            <>
              <FormModal table="result" type="update" data={item} />
              <FormModal table="result" type="delete" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-laserYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-laserYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" || role === "teacher" && <FormModal table="result" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ResultListPage;