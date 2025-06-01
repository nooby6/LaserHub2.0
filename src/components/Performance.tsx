"use client"; // Indicates that this component is a client-side component in a Next.js application.

import Image from "next/image"; // Importing the Image component from Next.js for optimized image rendering.
import { PieChart, Pie, ResponsiveContainer } from "recharts"; // Importing necessary components from the Recharts library for creating charts.

// Sample data for the pie chart, including name, value, and fill color for each segment.
const data = [
    { name: "Group A", value: 92, fill: "#C3EBFA" },
    { name: "Group B", value: 8, fill: "#FAE27C" },
];

// Performance component to display a pie chart and related performance metrics.
const Performance = () => {
    return (
        <div className="bg-white p-4 rounded-md h-80 relative">
            {/* Header section with title and an icon */}
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Performance</h1>
                <Image src="/moreDark.png" alt="" width={16} height={16} /> {/* Icon for additional options */}
            </div>

            {/* Responsive container for the pie chart */}
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    {/* Pie chart configuration */}
                    <Pie
                        dataKey="value" // Specifies the key in the data array to determine the size of each pie segment.
                        startAngle={180} // Starting angle of the pie chart.
                        endAngle={0} // Ending angle of the pie chart.
                        data={data} // Data array for the pie chart.
                        cx="50%" // Horizontal center position of the pie chart.
                        cy="50%" // Vertical center position of the pie chart.
                        innerRadius={70} // Inner radius for creating a donut chart effect.
                        fill="#8884d8"
                    />
                </PieChart>
            </ResponsiveContainer>

            {/* Centered text inside the pie chart */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-3xl font-bold">9.2</h1> {/* Performance score */}
                <p className="text-xs text-black-300">of 10 max LTS</p> {/* Description of the score */}
            </div>

            {/* Footer text below the pie chart */}
            <h2 className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center">
                1st Semester - 2nd Semester
            </h2>
        </div>
    );
};

export default Performance; // Exporting the Performance component for use in other parts of the application.