import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import EventCalendar from "@/components/EventCalender";
import 'react-calendar/dist/Calendar.css';
import Announcements from "@/components/Announcements";



const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row xl:flex-row xl:gap-8">
            {/* LEFT SIDE */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8 bg-gray p-4 rounded-md">
            {/* USER CARDS */}
            <div className="flex gap-4 justify-between flex-wrap md:flex-nowrap">
                <UserCard type="Students"/>
                <UserCard type="Teachers"/>
                <UserCard type="Parents"/>
                <UserCard type="Staff"/>
            </div>
            {/* MIDDLE CHARTS */}
            <div className="flex gap-4 flex-col lg:flex-row">
            
                {/* COUNT CHART */}
                <div className="w-full lg:w-1/3 h-[450px] lg:h-[450px]">
                    <CountChart/>
                </div>
            
                {/* ATTENDANCE CHART */}
                <div className="w-full lg:w-2/3 h[450px]">
                    <AttendanceChart/>
                </div>
            </div>
            {/* BOTTOM CHART */}
            <div className="w-full h-[500px] lg:h-[450px]">
                <FinanceChart/>
            </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar/>
                <Announcements/>
            </div>
        </div>
    )
}

export default AdminPage;