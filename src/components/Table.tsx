/**
 * A reusable `Table` component for rendering tabular data with customizable columns and rows.
 *
 * @param {Object} props - The props object for the `Table` component.
 * @param {{ header: string; accessor: string; className?: string }[]} props.columns - 
 *        An array of column definitions, where each column specifies:
 *        - `header`: The display name of the column.
 *        - `accessor`: A unique key used to identify the column.
 *        - `className` (optional): Additional CSS classes for styling the column header.
 * @param {(item: any) => React.ReactNode} props.renderRow - 
 *        A function that takes a data item and returns a React node representing a row in the table.
 * @param {any[]} props.data - 
 *        An array of data items to be displayed in the table. Each item corresponds to a row.
 *
 * @returns {JSX.Element} A table element with a header and body, styled with Tailwind CSS classes.
 *
 * @example
 * ```tsx
 * const columns = [
 *   { header: 'Name', accessor: 'name' },
 *   { header: 'Age', accessor: 'age', className: 'text-right' },
 * ];
 * const data = [
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 30 },
 * ];
 * const renderRow = (item) => (
 *   <tr key={item.name}>
 *     <td>{item.name}</td>
 *     <td className="text-right">{item.age}</td>
 *   </tr>
 * );
 * 
 * <Table columns={columns} data={data} renderRow={renderRow} />
 * ```
 */
const Table = ({
    columns,
    renderRow,
    data,
  }: {
    columns: { header: string; accessor: string; className?: string }[];
    renderRow: (item: any) => React.ReactNode;
    data: any[];
  }) => {
    return (
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left text-black-500 text-sm">
            {columns.map((col) => (
              <th key={col.accessor} className={col.className}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item) => renderRow(item))}</tbody>
      </table>
    );
  };
  
  export default Table;