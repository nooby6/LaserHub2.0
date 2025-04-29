/**
 * Pagination Component
 *
 * This component renders a simple pagination UI with "Prev" and "Next" buttons
 * and a set of page number buttons. It is designed to be used in applications
 * where paginated data needs to be displayed.
 *
 * @component
 * @returns {JSX.Element} A JSX element representing the pagination controls.
 *
 * @remarks
 * - The "Prev" button is disabled by default and styled accordingly.
 * - The page number buttons are displayed in a horizontal layout with a gap between them.
 * - The "Next" button is enabled by default and styled similarly to the "Prev" button.
 *
 * @example
 * ```tsx
 * <Pagination />
 * ```
 *
 * @note
 * - The `bg-laserSky` class used for the active page button should be defined in your CSS or Tailwind configuration.
 * - Additional functionality, such as handling button clicks or dynamically enabling/disabling buttons, can be added as needed.
 */
const Pagination = () => {
    return (
      <div className="p-4 flex items-center justify-between text-gray-500">
        <button
          disabled
          className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <div className="flex items-center gap-2 text-sm">
          <button className="px-2 rounded-sm bg-laserSky">1</button>
          <button className="px-2 rounded-sm ">2</button>
          <button className="px-2 rounded-sm ">3</button>
          ...
          <button className="px-2 rounded-sm ">10</button>
        </div>
        <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;