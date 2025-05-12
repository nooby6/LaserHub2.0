"use client";

import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";

/**
 * Pagination component for navigating through paginated data.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.page - The current page number.
 * @param {number} props.count - The total number of items.
 *
 * @remarks
 * This component provides a simple pagination UI with "Prev" and "Next" buttons
 * and a list of page numbers. It calculates whether the "Prev" and "Next" buttons
 * should be enabled based on the current page and total item count.
 *
 * @example
 * ```tsx
 * <Pagination page={1} count={100} />
 * ```
 *
 * @dependencies
 * - `useRouter` from `next/router` is used for navigation.
 * - `ITEM_PER_PAGE` is a constant that determines the number of items per page.
 *
 * @returns {JSX.Element} A pagination UI component.
 *
 * @note
 * Ensure that the `ITEM_PER_PAGE` constant is defined in the scope where this component is used.
 * The component assumes that the `page` prop starts from 1 (not 0-indexed).
 */
const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        disabled={!hasPrev}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          changePage(page - 1);
        }}
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from(
          { length: Math.ceil(count / ITEM_PER_PAGE) },
          (_, index) => {
            const pageIndex = index + 1;
            return (
              <button
                key={pageIndex}
                className={`px-2 rounded-sm ${
                  page === pageIndex ? "bg-lamaSky" : ""
                }`}
                onClick={() => {
                  changePage(pageIndex);
                }}
              >
                {pageIndex}
              </button>
            );
          }
        )}
      </div>
      <button
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!hasNext}
        onClick={() => {
          changePage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;