import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";

// TeacherPage component represents the main dashboard page for teachers.
// It displays a schedule using a calendar component and announcements in a responsive layout.
const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT: Schedule Section */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          {/* Section Header */}
          <h1 className="text-xl font-semibold">Schedule</h1>
          {/* Calendar Component */}
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT: Announcements Section */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* Announcements Component */}
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;