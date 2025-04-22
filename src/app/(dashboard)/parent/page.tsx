import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import React from "react";

// ParentPage component: Represents the main dashboard page for a parent user.
// It displays a schedule (using BigCalendar) and announcements in a responsive layout.
const ParentPage = () => {
    return (
        <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
            {/* LEFT: Schedule Section */}
            <div className="w-full xl:w-2/3">
                <div className="h-full bg-white p-4 rounded-md">
                    {/* Section Title */}
                    <h1 className="text-xl font-semibold">Schedule (Audrine Whrite)</h1>
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

export default ParentPage;