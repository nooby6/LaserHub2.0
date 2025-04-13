"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

/**
 * EventCalendar Component
 *
 * This component renders a calendar and a list of events. It allows users to select a date
 * and view events associated with the selected date. The component is styled with Tailwind CSS
 * for a modern and responsive design.
 *
 * @component
 * @returns {JSX.Element} The rendered EventCalendar component.
 *
 * @remarks
 * - The `useState` hook is used to manage the selected date.
 * - The `Calendar` component is used for date selection.
 * - Events are displayed in a list format with alternating border colors for visual distinction.
 * - The `events` array is expected to be available in the component's scope, containing event details.
 *
 * @example
 * ```tsx
 * const events = [
 *   { id: 1, title: "Meeting", time: "10:00 AM", description: "Team meeting in Room 1" },
 *   { id: 2, title: "Workshop", time: "2:00 PM", description: "React workshop in Hall A" },
 * ];
 *
 * <EventCalendar />
 * ```
 *
 * @dependencies
 * - `useState` from React for state management.
 * - `Calendar` component for date selection.
 * - `Image` component for rendering icons or images.
 *
 * @styles
 * - Tailwind CSS classes are used for styling the component.
 * - Alternating border colors (`odd:border-t-laserSky` and `even:border-t-laserPurple`) are applied to event cards.
 */
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md shadow-md ">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between mt-4 mb-2 border-b-2 border-gray-100 pb-2">
        <h1 className="text-xl font-semibold my-2">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto h-[400px]">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-laserSky even:border-t-laserPurple shadow-sm hover:shadow-md transition-all duration-200"
            key={event.id}
          >
            <div className="flex items-center justify-between mb-2">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;