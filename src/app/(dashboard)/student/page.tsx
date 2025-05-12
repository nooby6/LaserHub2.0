import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalenderContainer";
import BigCalendar from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalender";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

/**
 * Asynchronous React component representing the Student Page.
 * 
 * This component fetches the authenticated user's associated class information
 * from the database and displays a schedule, event calendar, and announcements.
 * 
 * @async
 * @function StudentPage
 * @returns {JSX.Element} The rendered Student Page component.
 * 
 * @remarks
 * - Utilizes the `auth` function to retrieve the authenticated user's ID.
 * - Queries the database using Prisma to find classes associated with the user.
 * - Displays a schedule using the `BigCalendarContainer` component.
 * - Includes additional components for events (`EventCalendar`) and announcements (`Announcements`).
 * 
 * @throws {Error} If the `auth` function or database query fails.
 * 
 * @dependencies
 * - `auth`: Function to retrieve authentication details.
 * - `prisma.class.findMany`: Prisma query to fetch class data.
 * - `BigCalendarContainer`: Component to display the schedule.
 * - `EventCalendar`: Component to display events.
 * - `Announcements`: Component to display announcements.
 * 
 * @example
 * ```tsx
 * <StudentPage />
 * ```
 */
const StudentPage = async () => {
  const { userId } = await auth();

  const classItem = await prisma.class.findMany({
    where: {
      students: { some: { id: userId! } },
    },
  });

  console.log(classItem);
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendarContainer type="classId" id={classItem[0].id} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;