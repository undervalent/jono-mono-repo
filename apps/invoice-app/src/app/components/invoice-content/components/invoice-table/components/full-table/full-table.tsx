//@ts-ignore
import React from 'react';
import { useTable } from 'react-table';
import '../table.styles.css';
import classNames from 'classnames';
import { formatDate } from 'date-fns';
interface Props {
  //Had to set this to any as I couldn't figure out how to get the columns typed correctly
  items: any;
}

export const FullTable: React.FC<Props> = ({ items }) => {
  const data = React.useMemo(() => items, [items]);
  console.log('ITEMS -->', items);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Invoice name',
        accessor: 'name',
      },
      {
        Header: 'QTY',
        accessor: 'quantity',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Total',
        accessor: 'total',
      },
    ],

    [],
  );
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table {...getTableProps()} style={{ width: '100%' }} className="table">
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => {
            return (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => {
                    const classes = classNames({
                      'align-left': column.id === 'name',
                      'align-right': column.id !== 'name',
                    });
                    return (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()} className={classes}>
                        {
                          // Render the header
                          column.render('Header')
                        }
                      </th>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </thead>

      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    const classes = classNames({
                      'align-left': cell.column.id === 'name',
                      'align-right': cell.column.id !== 'name',
                      'light-text':
                        cell.column.id === 'quantity' ||
                        cell.column.id === 'price',
                    });
                    // console.log("CELL -->", { cell });
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()} className={classes}>
                        {
                          // Render the cell contents

                          cell.render('Cell')
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};
