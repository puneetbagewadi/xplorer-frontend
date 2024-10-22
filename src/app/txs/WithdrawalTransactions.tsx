"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { shortenAddress } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";
import { useMemo, useState } from "react";
import TablePagination from "@/components/TablePagination";

interface WithdrawalProps {
  id: number;
  nonce: number | string;
  L2TxnHash: string;
  L1TxnHash: string;
  from: string;
  status: string;
  time: string;
}
const data: WithdrawalProps[] = [
  {
    id: 0,
    nonce: "21014298",
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash: "To be assigned",
    status: "Ready to prove",
    from: "0xd56C4F0271C7ec0d172A650C3ff8CCB5225AaFc7",
    time: "41m ago"
  },
  {
    id: 1,
    nonce: "1-19325",
    L2TxnHash:
      "0x1b2925710c5c3784610151d2506e2463a21ec27c6526e4f134a65804d33105fc",
    L1TxnHash: "To be assigned",
    status: "Ready to prove",
    from: "0xd56C4F0271C7ec0d172A650C3ff8CCB5225AaFc7",
    time: "5h ago"
  },
  {
    id: 2,
    nonce: 21014298,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash: "To be assigned",
    status: "Ready to prove",
    from: "0xd56C4F0271C7ec0d172A650C3ff8CCB5225AaFc7",
    time: "41m ago"
  },
  {
    id: 3,
    nonce: "2-19325",
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash: "To be assigned",
    status: "Ready to prove",
    from: "0xd56C4F0271C7ec0d172A650C3ff8CCB5225AaFc7",
    time: "41m ago"
  },
  {
    id: 4,
    nonce: "1-19324",
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash: "To be assigned",
    status: "Ready to prove",
    from: "0xd56C4F0271C7ec0d172A650C3ff8CCB5225AaFc7",
    time: "41m ago"
  },
  {
    id: 5,
    nonce: "1-19325",
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash: "To be assigned",
    status: "Ready to prove",
    from: "0xd56C4F0271C7ec0d172A650C3ff8CCB5225AaFc7",
    time: "41m ago"
  },
  {
    id: 6,
    nonce: "1-19325",
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash: "To be assigned",
    status: "Ready to prove",
    from: "0xd56C4F0271C7ec0d172A650C3ff8CCB5225AaFc7",
    time: "41m ago"
  },
  {
    id: 6,
    nonce: "1-19325",
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash: "To be assigned",
    status: "Ready to prove",
    from: "0xd56C4F0271C7ec0d172A650C3ff8CCB5225AaFc7",
    time: "41m ago"
  },
  {
    id: 7,
    nonce: "1-19325",
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash: "To be assigned",
    status: "Ready to prove",
    from: "0xd56C4F0271C7ec0d172A650C3ff8CCB5225AaFc7",
    time: "41m ago"
  },
  {
    id: 8,
    nonce: "1-19325",
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash: "To be assigned",
    status: "Ready to prove",
    from: "0xd56C4F0271C7ec0d172A650C3ff8CCB5225AaFc7",
    time: "41m ago"
  }
];

export const columns: ColumnDef<WithdrawalProps>[] = [
  {
    accessorKey: "nonce",
    header: () => <div className="">Msg Nonce</div>,
    cell: ({ row }) => (
      <div className="capitalize ">
        <span> {row.getValue("nonce")}</span>
      </div>
    )
  },
  {
    accessorKey: "L2TxnHash",
    header: () => <div className="">L2 Txn Hash </div>,
    cell: ({ row }) => (
      <div className="capitalize">
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-1.5">
            <Link
              href={`/tx/${row.getValue("L2TxnHash")}`}
              className="text-center  text-xs  hover:underline"
            >
              {shortenAddress(row.getValue("L2TxnHash"))}
            </Link>
            <CopyToClipboard copyText={row.getValue("L2TxnHash")} />
          </div>
        </div>
      </div>
    )
  },
  {
    accessorKey: "from",
    header: () => <div className="">from</div>,
    cell: ({ row }) => (
      <div className="capitalize ">
        <div className="flex gap-1.5">
          <Image
            src="/assets/icons/eth.svg"
            alt="icon"
            width={14}
            height={14}
          />
          <Link
            href={`/address/${row.getValue("from")}`}
            className="text-center  hover:underline"
          >
            {shortenAddress(row.getValue("from"))}
          </Link>
          <CopyToClipboard copyText={row.getValue("from")} />
        </div>
      </div>
    )
  },
  {
    accessorKey: "status",
    header: () => <div className="">Status</div>,
    cell: ({ row }) => (
      <div className="capitalize ">
        <div className="capitalize ">
          <Badge variant={"lightOrange"}>
            <span> {row.getValue("status")}</span>
          </Badge>
        </div>
      </div>
    )
  },
  {
    accessorKey: "L1TxnHash",
    header: () => <div className="">L1 Txn Hash</div>,
    cell: ({ row }) => (
      <div className="capitalize flex flex-col gap-1">
        <p className="text-xs text-grey-500">{row.getValue("L1TxnHash")}</p>
      </div>
    )
  },
  {
    accessorKey: "time",
    header: () => <div className=" capitalize ">time</div>,
    cell: ({ row }) => (
      <div className="capitalize flex flex-col gap-1">
        {row.getValue("time")}
      </div>
    )
  }
];

export function WithdrawalTransactions() {
  const [globalFilter, setGlobalFilter] = useState("");
  // const [filteredData, setFilteredData] = useState(data);

  // Filter data only for specific columns (address, initiatedBy, interactedWith)
  const filteredData = useMemo(() => {
    if (!globalFilter) return data;
    return data.filter(
      (row) =>
        row.L2TxnHash.toLowerCase().includes(globalFilter.toLowerCase()) ||
        row.L1TxnHash.toLowerCase().includes(globalFilter.toLowerCase()) ||
        row.from.toLowerCase().includes(globalFilter.toLowerCase())
    );
  }, [globalFilter]);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,

    state: {
      globalFilter,
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });

  return (
    <div className="w-full flex space-y-6 flex-col ">
      {/* <SearchTableColumns 
        data={data}
        onSearch={setFilteredData}
        searchColumns={['address', 'initiatedBy', 'interactedWith']} 
      /> */}

      <div className="w-[75%] lg:w-[40%] ">
        <div className="relative cursor-pointer">
          <input
            className=" font-m_plus_2 placeholder:text-text-300 focus:ring-transparent block w-full  border border-grey-300 bg-grey-white p-4 text-text-500 caret-black focus:outline-none pl-12 rounded-xl"
            placeholder="Search ID / Address / Transactions"
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <Image
            className="absolute left-4 top-1/2 -translate-y-1/2"
            src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/search_grey.svg"
            alt="search"
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className=" space-y-4">
        <TablePagination tableData={table} />

        <div className=" border rounded-3xl bg-white flex flex-col">
          <Table className="">
            <TableHeader className=" ">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  className=" border-b border-grey-200 "
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        className="items-center !h-10 gap-5  !px-6 !py-4 "
                        key={header.id}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="items-center gap-5 px-6 py-5 text-gray-800"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination tableData={table} />
      </div>
    </div>
  );
}
