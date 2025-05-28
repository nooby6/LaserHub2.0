import Announcements from "@/components/Announcements";
import AttendanceChartContainer from "@/components/AttendaceChartContainer";
import CountChartContainer from "@/components/CountChartContainer";
import EventCalendarContainer from "@/components/EventCalenderContainer";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

/**
 * AdminPage component renders the main dashboard for admin users.
 * It displays user statistics, various charts, event calendar, and announcements.
 *
 * @param searchParams - Query parameters from the URL, passed to child components as needed.
 */
const AdminPage = ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT SECTION: User cards and charts */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS:
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer searchParams={{}} />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChartContainer />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer searchParams={searchParams}/>
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;