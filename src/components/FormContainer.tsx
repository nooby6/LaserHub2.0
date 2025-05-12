import prisma from "@/lib/prisma";
import FormModal from "./FormModal";
import { auth } from "@clerk/nextjs/server";

export type FormContainerProps = {
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
  id?: number | string;
};

/**
 * Asynchronous React functional component that serves as a container for rendering a form modal.
 * The component dynamically fetches related data based on the provided `table` and `type` parameters.
 *
 * @param {FormContainerProps} props - The props object containing the following:
 * @param {string} props.table - The name of the database table for which the form is being rendered.
 * @param {string} props.type - The type of operation being performed (e.g., "create", "update", "delete").
 * @param {any} props.data - The data to be passed to the form modal for pre-filling or processing.
 * @param {string | number | undefined} props.id - The unique identifier for the entity being operated on.
 *
 * @returns {JSX.Element} A JSX element containing the `FormModal` component with the appropriate props.
 *
 * @remarks
 * - The component uses the `auth` function to retrieve the current user's ID and session claims.
 * - Based on the `table` parameter, it fetches related data from the database using Prisma ORM.
 * - If the `type` is "delete", no related data is fetched.
 * - The `relatedData` object is dynamically populated with data relevant to the specified `table`.
 *
 * @example
 * ```tsx
 * <FormContainer
 *   table="student"
 *   type="create"
 *   data={{ name: "John Doe" }}
 *   id={undefined}
 * />
 * ```
 *
 * @throws {Error} If there are issues with database queries or authentication.
 *
 * @see {@link FormModal} for the modal component being rendered.
 */
const FormContainer = async ({ table, type, data, id }: FormContainerProps) => {
  let relatedData = {};

  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  const currentUserId = userId;

  if (type !== "delete") {
    switch (table) {
      case "subject":
        const subjectTeachers = await prisma.teacher.findMany({
          select: { id: true, name: true, surname: true },
        });
        relatedData = { teachers: subjectTeachers };
        break;
      case "class":
        const classGrades = await prisma.grade.findMany({
          select: { id: true, level: true },
        });
        const classTeachers = await prisma.teacher.findMany({
          select: { id: true, name: true, surname: true },
        });
        relatedData = { teachers: classTeachers, grades: classGrades };
        break;
      case "teacher":
        const teacherSubjects = await prisma.subject.findMany({
          select: { id: true, name: true },
        });
        relatedData = { subjects: teacherSubjects };
        break;
      case "student":
        const studentGrades = await prisma.grade.findMany({
          select: { id: true, level: true },
        });
        const studentClasses = await prisma.class.findMany({
          include: { _count: { select: { students: true } } },
        });
        relatedData = { classes: studentClasses, grades: studentGrades };
        break;
      case "exam":
        const examLessons = await prisma.lesson.findMany({
          where: {
            ...(role === "teacher" ? { teacherId: currentUserId! } : {}),
          },
          select: { id: true, name: true },
        });
        relatedData = { lessons: examLessons };
        break;

      default:
        break;
    }
  }

  return (
    <div className="">
      <FormModal
        table={table}
        type={type}
        data={data}
        id={typeof id === "string" ? parseInt(id, 10) : id}
        relatedData={relatedData}
      />
    </div>
  );
};

export default FormContainer;