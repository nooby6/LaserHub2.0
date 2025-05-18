import Announcements from "@/components/Announcements";
import AttendanceChartContainer from "@/components/AttendaceChartContainer";
import CountChartContainer from "@/components/CountChartContainer";
import EventCalendarContainer from "@/components/EventCalenderContainer";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

// AdminPage component: This is the main dashboard page for the admin view.
// It displays user cards, various charts, an event calendar, and announcements.
const AdminPage = ({
    searchParams,
}: {
    searchParams: { [keys: string]: string | undefined };
}) => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT SECTION */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* USER CARDS SECTION */}
                <div className="flex gap-4 justify-between flex-wrap">
                    {/* Display cards for different user types */}
                    <UserCard type="admin" />
                    <UserCard type="teacher" />
                    <UserCard type="student" />
                    <UserCard type="parent" />
                </div>

                {/* MIDDLE CHARTS SECTION */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* COUNT CHART */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        {/* Displays a chart showing counts of various entities */}
                        <CountChartContainer searchParams={{}} />
                    </div>

                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        {/* Displays a chart showing attendance statistics */}
                        <AttendanceChartContainer />
                    </div>
                </div>

                {/* BOTTOM CHART SECTION */}
                <div className="w-full h-[500px]">
                    {/* Displays a financial chart */}
                    <FinanceChart />
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                {/* EVENT CALENDAR */}
                {/* Displays a calendar with events, using searchParams for filtering */}
                <EventCalendarContainer searchParams={searchParams} />

                {/* ANNOUNCEMENTS */}
                {/* Displays a list of announcements */}
                <Announcements />
            </div>
        </div>
    );
};

export default AdminPage;