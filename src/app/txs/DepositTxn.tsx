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
import ArrowRight from "@/assets/icons/arrow_right_grey.svg";
import BlockImage from "@/assets/icons/block_cube.svg";
import { useMemo, useState } from "react";
import TablePagination from "@/components/TablePagination";

interface DepositTransactionTypes {
  id: number;
  L1Block: number | string;
  L2TxnHash: string;
  L1TxnHash: string;
  L1TxnHashOrigin: string;
  gasLimit: number;
  time: string;
}
const data: DepositTransactionTypes[] = [
  {
    id: 0,
    L1Block: 21014298,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 1,
    L1Block: 21012918,
    L2TxnHash:
      "0x1b2925710c5c3784610151d2506e2463a21ec27c6526e4f134a65804d33105fc",
    L1TxnHash:
      "0xc9f43aed8dac631f45bfed4f54929470895cd939356811d2802445700fd1c768",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "5h ago"
  },
  {
    id: 2,
    L1Block: 21014298,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 3,
    L1Block: 21014298,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 4,
    L1Block: 21014298,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 5,
    L1Block: 21014298,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 6,
    L1Block: 21014298,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 6,
    L1Block: 21014298,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 7,
    L1Block: 21014298,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 8,
    L1Block: 21014298,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  }
];

export const columns: ColumnDef<DepositTransactionTypes>[] = [
  {
    accessorKey: "L1Block",
    header: () => <div className="">L1 Block</div>,
    cell: ({ row }) => (
      <div className="capitalize ">
        <Badge>
          <Link
            href={"/"}
            className="text-center items-center  text-xs  hover:underline flex gap-2"
          >
            <BlockImage />

            <span> {row.getValue("L1Block")}</span>
          </Link>
        </Badge>
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
            <Image
              src="/assets/icons/eth.svg"
              alt="icon"
              width={14}
              height={14}
            />
            <Link href={"/"} className="text-center  text-xs  hover:underline">
              {shortenAddress(row.getValue("L2TxnHash"))}
            </Link>
            <CopyToClipboard copyText={row.getValue("L2TxnHash")} />
          </div>

          <ArrowRight />
        </div>
      </div>
    )
  },
  {
    accessorKey: "L1TxnHash",
    header: () => <div className="">L1 Txn Hash</div>,
    cell: ({ row }) => (
      <div className="capitalize ">
        <div className="flex gap-1.5">
          <Image
            src="/assets/icons/eth.svg"
            alt="icon"
            width={14}
            height={14}
          />
          <Link href={"/"} className="text-center  hover:underline">
            {shortenAddress(row.getValue("L1TxnHash"))}
          </Link>
          <CopyToClipboard copyText={row.getValue("L1TxnHash")} />
        </div>
      </div>
    )
  },
  {
    accessorKey: "L1TxnHashOrigin",
    header: () => <div className="">L1 Txn origin</div>,
    cell: ({ row }) => (
      <div className="capitalize ">
        <div className="flex gap-1.5">
          <Image
            src="/assets/icons/eth.svg"
            alt="icon"
            width={14}
            height={14}
          />
          <Link href={"/"} className="text-center  hover:underline">
            {shortenAddress(row.getValue("L1TxnHashOrigin"))}
          </Link>
          <CopyToClipboard copyText={row.getValue("L1TxnHashOrigin")} />
        </div>
      </div>
    )
  },
  {
    accessorKey: "gasLimit",
    header: () => <div className="">gasLimit</div>,
    cell: ({ row }) => (
      <div className="capitalize flex flex-col gap-1">
        <p className="text-xs text-grey-500">{row.getValue("gasLimit")}</p>
      </div>
    )
  },
  {
    accessorKey: "time",
    header: () => <div className=" capitalize text-right">time</div>,
    cell: ({ row }) => (
      <div className="capitalize flex flex-col gap-1 justify-end items-end">
        {row.getValue("time")}
      </div>
    )
  }
];

export function DepositTxn() {
  const [globalFilter, setGlobalFilter] = useState("");
  // const [filteredData, setFilteredData] = useState(data);

  // Filter data only for specific columns (address, initiatedBy, interactedWith)
  const filteredData = useMemo(() => {
    if (!globalFilter) return data;
    return data.filter(
      (row) =>
        row.L2TxnHash.toLowerCase().includes(globalFilter.toLowerCase()) ||
        row.L1TxnHash.toLowerCase().includes(globalFilter.toLowerCase()) ||
        row.L1TxnHashOrigin.toLowerCase().includes(globalFilter.toLowerCase())
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
