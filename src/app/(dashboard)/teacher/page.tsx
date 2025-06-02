import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import { auth } from "@clerk/nextjs/server";

/**
 * TeacherPage component
 * 
 * This page serves as the main dashboard for teachers.
 * It displays the teacher's schedule and relevant announcements.
 */
const TeacherPage = async () => {
  // Retrieve the authenticated user's ID
  const { userId } = await auth();

  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row bg-gray-300">
      {/* LEFT: Schedule Section */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          {/* Display the calendar for the teacher using their userId */}
          <BigCalendarContainer type="teacherId" id={userId!} />
        </div>
      </div>
      {/* RIGHT: Announcements Section */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* Display announcements relevant to the teacher */}
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;