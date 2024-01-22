// import { useState } from "react"
// import { useTable } from "react-table"
// import data from './../public/data'


// const columns = [
//   {
//     accessor: 'kode_hs',
//     header: 'kode_hs',
//     cell: (props) => <p>{props.getValue()}</p>
//   },
//   {
//     accessor: 'kelompok_barang',
//     header: 'kelompok_barang',
//     cell: (props) => <p>{props.getValue()}</p>
//   },
  
// ]
// const Table = () => {
//   const [datas, setDatas] = useState(data)
//   const table = useTable({
//     data,
//     columns,
//     getCore

//   })
//   return (
//     <div>Table</div>
//   )
// }

// export default Table


// components/Table.js
'use client'
// components/Table.js
import React from 'react';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { useTable, useFilters, useGlobalFilter, usePagination, useResizeColumns } from 'react-table';

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
    useFilters,
    useGlobalFilter,
    usePagination,
    useResizeColumns
  );

  const { globalFilter } = state;

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-full'>
        <input
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className='border px-2 my-2 w-[212px]'
        />
      </div>
      <table {...getTableProps()} className="text-xs">
        <thead className='border'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} 
                  className={`border p-2 text-${column.render('align')} bg-[#e3faee] border-slate-300`} 
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className='even:bg-slate-50 odd:bg-white'>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} 
                    className={`border py-2 px-4 text-${cell.render('align')}`} 
                    style={{ width: `${cell.render('size')}px` }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className='flex gap-4 p-6'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} 
          className='w-5 rounded-full cursor-pointer hover:bg-emerald-50 hover:scale-125'
          >
          <FiChevronsLeft />
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}
          className='w-5 rounded-full cursor-pointer hover:bg-emerald-50 hover:scale-125'
        >
          <GoChevronLeft />
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}
          className='w-5 rounded-full cursor-pointer hover:bg-emerald-50 hover:scale-125'
        >
          <GoChevronRight />
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}
          className='w-5 rounded-full cursor-pointer hover:bg-emerald-50 hover:scale-125'
        >
          <FiChevronsRight />
        </button>
        <span>
          Page
          <strong>
            {state.pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to page:
          <input
            type="number"
            defaultValue={state.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        <select
          value={state.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Table;

