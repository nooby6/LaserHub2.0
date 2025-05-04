import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import EventCalendar from "@/components/EventCalender";
import 'react-calendar/dist/Calendar.css';
import Announcements from "@/components/Announcements";

// AdminPage component serves as the main dashboard for the admin interface.
// It is divided into two main sections: the left side (charts and user cards) and the right side (calendar and announcements).
const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row xl:flex-row xl:gap-8">
            {/* LEFT SIDE */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8 bg-gray p-4 rounded-md bg-gray">
                {/* USER CARDS */}
                {/* Displays user statistics for different user types: Students, Teachers, Parents, and Staff */}
                <div className="flex gap-4 justify-between flex-wrap md:flex-nowrap">
                    <UserCard type="Students"/>
                    <UserCard type="Teachers"/>
                    <UserCard type="Parents"/>
                    <UserCard type="Staff"/>
                </div>

                {/* MIDDLE CHARTS */}
                {/* Contains two charts: CountChart and AttendanceChart */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* COUNT CHART */}
                    {/* Displays a chart for count-related data */}
                    <div className="w-full lg:w-1/3 h-[450px] lg:h-[450px]">
                        <CountChart/>
                    </div>
                    
                    {/* ATTENDANCE CHART */}
                    {/* Displays a chart for attendance-related data */}
                    <div className="w-full lg:w-2/3 h[450px]">
                        <AttendanceChart/>
                    </div>
                </div>

                {/* BOTTOM CHART */}
                {/* Displays a financial chart */}
                <div className="w-full h-[500px] lg:h-[450px]">
                    <FinanceChart/>
                </div>
            </div>

            {/* RIGHT SIDE */}
            {/* Contains the Event Calendar and Announcements section */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                {/* EVENT CALENDAR */}
                {/* Displays a calendar for events */}
                <EventCalendar/>
                
                {/* ANNOUNCEMENTS */}
                {/* Displays announcements for the admin */}
                <Announcements/>
            </div>
        </div>
    )
}

export default AdminPage;