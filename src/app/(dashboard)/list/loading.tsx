/**
 * Loading
 *
 * A React functional component that displays a skeleton loading UI for the dashboard list page.
 * Utilizes Tailwind CSS classes for styling and animation.
 *
 * - The top section simulates a header row with four placeholder elements of varying widths.
 * - The main section renders 10 rows, each with four animated placeholder cells, mimicking the structure of a data table.
 * - The `animate-pulse` class provides a pulsing animation to indicate loading state.
 *
 * @returns {JSX.Element} The skeleton loading component for the dashboard list.
 */
const Loading = () => {
  return (
    <div className="p-8 animate-pulse">
      <div className=" rounded-lg overflow-hidden shadow-md">
        <div className="p-8 bg-black-200 flex space-x-32">
          <div className="h-6 bg-black-300 rounded w-1/6"></div>
          <div className="h-6 bg-black-300 rounded w-2/6"></div>
          <div className="h-6 bg-black-300 rounded w-1/6"></div>
          <div className="h-6 bg-black-300 rounded w-1/6"></div>
        </div>
        <div className="p-4">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-4 py-2 mt-4"
            >
              <div className="h-8 bg-black-200 rounded w-1/6 mr-2"></div>
              <div className="h-8 bg-black-200 rounded w-2/6 mr-2"></div>
              <div className="h-8 bg-black-200 rounded w-1/6 mr-2"></div>
              <div className="h-8 bg-black-200 rounded w-1/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;