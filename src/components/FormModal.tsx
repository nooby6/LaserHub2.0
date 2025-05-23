"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

// USE LAZY LOADING

// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />
};

/**
 * A React functional component that renders a modal form for performing CRUD operations
 * on various entities such as teacher, student, parent, and more. The modal's behavior
 * and appearance are determined by the `type` and `table` props.
 *
 * @param {Object} props - The props object for the component.
 * @param {"teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement"} props.table
 * The type of entity for which the form is being rendered. Determines the context of the form.
 * 
 * @param {"create" | "update" | "delete"} props.type
 * The type of operation to be performed. Determines the form's purpose and layout:
 * - `"create"`: For creating a new entity.
 * - `"update"`: For updating an existing entity.
 * - `"delete"`: For deleting an entity.
 * 
 * @param {any} [props.data]
 * Optional data to pre-fill the form when updating an entity. Ignored for create and delete operations.
 * 
 * @param {number} [props.id]
 * Optional ID of the entity to be deleted. Required for delete operations.
 * 
 * @returns {JSX.Element} A button that opens a modal containing the appropriate form based on the provided props.
 *
 * @remarks
 * - The modal includes a close button to dismiss it.
 * - For delete operations, a confirmation message is displayed.
 * - For create and update operations, the form is dynamically rendered based on the `table` prop.
 * - The modal is styled with Tailwind CSS classes for responsiveness and aesthetics.
 *
 * @example
 * ```tsx
 * <FormModal
 *   table="teacher"
 *   type="create"
 * />
 * 
 * <FormModal
 *   table="student"
 *   type="update"
 *   data={{ name: "John Doe", age: 16 }}
 * />
 * 
 * <FormModal
 *   table="event"
 *   type="delete"
 *   id={123}
 * />
 * ```
 */
const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-laserYellow"
      : type === "update"
      ? "bg-laserSky"
      : "bg-laserPurple";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;