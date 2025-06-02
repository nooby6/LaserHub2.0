import Image from "next/image";
import AttendanceChart from "./AttendanceChart";
import prisma from "@/lib/prisma";

/**
 * AttendanceChartContainer is an asynchronous React functional component that retrieves and processes
 * attendance data for the current week (Monday to Friday) from the database using Prisma.
 *
 * The component:
 * - Determines the date of the most recent Monday.
 * - Queries the attendance records from that Monday onwards.
 * - Aggregates the number of present and absent entries for each weekday (Monday to Friday).
 * - Structures the data for visualization and renders it using the AttendanceChart component.
 * - Displays a styled container with a header and an options icon.
 *
 * @returns {Promise<JSX.Element>} A promise that resolves to a JSX element containing the attendance chart UI.
 *
 * @remarks
 * - Assumes the presence of a Prisma client instance named `prisma` and an `AttendanceChart` component.
 * - Only considers attendance data from Monday to Friday, excluding weekends.
 * - The attendance data is grouped by weekday and visualized for the current week.
 */
const AttendanceChartContainer = async () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  const lastMonday = new Date(today);

  lastMonday.setDate(today.getDate() - daysSinceMonday);

  const resData = await prisma.attendance.findMany({
    where: {
      date: {
        gte: lastMonday,
      },
    },
    select: {
      date: true,
      present: true,
    },
  });

  // console.log(data)

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const attendanceMap: { [key: string]: { present: number; absent: number } } =
    {
      Mon: { present: 0, absent: 0 },
      Tue: { present: 0, absent: 0 },
      Wed: { present: 0, absent: 0 },
      Thu: { present: 0, absent: 0 },
      Fri: { present: 0, absent: 0 },
    };

  resData.forEach((item) => {
    const itemDate = new Date(item.date);
    const dayOfWeek = itemDate.getDay();
    
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      const dayName = daysOfWeek[dayOfWeek - 1];

      if (item.present) {
        attendanceMap[dayName].present += 1;
      } else {
        attendanceMap[dayName].absent += 1;
      }
    }
  });

  const data = daysOfWeek.map((day) => ({
    name: day,
    present: attendanceMap[day].present,
    absent: attendanceMap[day].absent,
  }));

  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <AttendanceChart data={data}/>
    </div>
  );
};

export default AttendanceChartContainer;