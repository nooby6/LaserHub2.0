import Announcements from "@/components/Announcements";
// Importing the BigCalendarContainer component for displaying the calendar
import BigCalendarContainer from "@/components/BigCalenderContainer";

// Importing the auth function from Clerk for authentication
import { auth } from "@clerk/nextjs/server";

// TeacherPage component definition
const TeacherPage = async () => {
  // Destructuring userId from the authentication object
  const { userId } = await auth();
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendarContainer type="teacherId" id={userId!} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;