import React from 'react';
import { useTable } from 'react-table';
import { TableHead, TableCell, TableRow } from './full-table.styles';

interface Props {
  //Had to set this to any as I couldn't figure out how to get the columns typed correctly
  items: any;
}

export const FullTable: React.FC<Props> = ({ items }) => {
  const data = React.useMemo(() => items, [items]);
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
    <table {...getTableProps()} style={{ width: '100%' }}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => {
                  return (
                    // Apply the header cell props
                    <TableHead
                      alignment={column.id === 'name' ? 'left' : 'right'}
                      {...column.getHeaderProps()}
                    >
                      {
                        // Render the header
                        column.render('Header')
                      }
                    </TableHead>
                  );
                })
              }
            </TableRow>
          ))
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
              <TableRow {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // console.log("CELL -->", { cell });
                    // Apply the cell props
                    return (
                      <TableCell
                        {...cell.getCellProps()}
                        alignment={cell.column.id === 'name' ? 'left' : 'right'}
                        darkened={
                          cell.column.id === 'name' ||
                          cell.column.id === 'total'
                        }
                      >
                        {
                          // Render the cell contents

                          cell.render('Cell')
                        }
                      </TableCell>
                    );
                  })
                }
              </TableRow>
            );
          })
        }
      </tbody>
    </table>
  );
};
