import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import SingleTeacherPage from "../page";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

/**
 * Component: TeacherListPage
 * 
 * This component renders a page displaying a list of teachers in a tabular format.
 * It includes features such as search, filtering, sorting, and pagination.
 * Admin users have additional options to create or delete teacher records.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered TeacherListPage component.
 * 
 * @remarks
 * - The table rows are dynamically rendered using the `renderRow` function.
 * - Admin-specific actions (create and delete) are conditionally displayed based on the `role` variable.
 * - The component uses utility classes from Tailwind CSS for styling.
 * - The `FormModal` component is used for creating and deleting teacher records.
 * - The `TableSearch`, `Table`, and `Pagination` components are used for search, table rendering, and pagination respectively.
 * 
 * @example
 * ```tsx
 * <TeacherListPage />
 * ```
 * 
 * @dependencies
 * - `Image`: Used for rendering teacher photos and action icons.
 * - `Link`: Used for navigation to individual teacher details.
 * - `FormModal`: Handles modal actions for creating and deleting teachers.
 * - `TableSearch`, `Table`, `Pagination`: Utility components for table management.
 * 
 * @internal
 * - The `renderRow` function is used internally to render each teacher row in the table.
 * - The `columns` and `teachersData` variables are expected to be defined and passed to the `Table` component.
 */

export default SingleTeacherPage;