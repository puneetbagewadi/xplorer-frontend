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
import ExternalTxnIcon from "@/assets/icons/external_link_blue.svg";
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
      "0xbe06a9d9b03e0eaa4aaedc7eeac939ffe1f07faf90f211729d5ea3aceb36a79f",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 4,
    L1Block: 21014298,
    L2TxnHash:
      "0x2893d829dfa11fa8dc4e612b3c3a2c4ed14065d1ce82aaa3fc5418a474abaf9a",
    L1TxnHash:
      "0xe8f129d826011bc6242a57c98b3b3c757be0143f0840f6ae889d8cfa6dc9d7e8",
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
      "0x2150512c6ae92d3d9cec5b1259ce07b42cbcac076896a4b632d12898ea3cd96a",
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
    L1Block: 21014298345345,
    L2TxnHash:
      "0xeeaef76aa7c5d15d09f6cff9cffdfa33ced54406d36d7da894bfddf398a3162b",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },

  {
    id: 10,
    L1Block: 210142982353453,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 11,
    L1Block: 21012918645645,
    L2TxnHash:
      "0x1b2925710c5c3784610151d2506e2463a21ec27c6526e4f134a65804d33105fc",
    L1TxnHash:
      "0xc9f43aed8dac631f45bfed4f54929470895cd939356811d2802445700fd1c768",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "5h ago"
  },
  {
    id: 12,
    L1Block: 210142983453,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 13,
    L1Block: 210142983453,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 14,
    L1Block: 21014298154,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 15,
    L1Block: 2101429815,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 162,
    L1Block: 21014298162,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 16,
    L1Block: 2101429816,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 17,
    L1Block: 2101429817,
    L2TxnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    L1TxnHash:
      "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    L1TxnHashOrigin: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    gasLimit: 490798,
    time: "41m ago"
  },
  {
    id: 18,
    L1Block: 2101429818,
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
      <>
        <div className="col-span-12 grid grid-cols-txsMobTable text-left lg:col-span-2 lg:block">
          <p className="paragraph2_regular text-grey-600 lg:hidden">L1 Block</p>

          <div>
            <Badge>
              <Link
                href={`/block/${row.getValue("L1Block")}`}
                className="text-center items-center  text-xs  hover:underline flex gap-2"
              >
                <BlockImage />

                <span className="supportText_regular capitalize text-white  hover:underline">
                  {" "}
                  {row.getValue("L1Block")}
                </span>
              </Link>
            </Badge>
          </div>
        </div>
      </>
    )
  },
  {
    accessorKey: "L2TxnHash",
    header: () => <div className="">L2 Txn Hash </div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">
          L2 Txn Hash
        </p>
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-1.5">
            <Image
              src="/assets/icons/eth.svg"
              alt="icon"
              width={14}
              height={14}
            />
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
    accessorKey: "L1TxnHash",
    header: () => <div className="">L1 Txn Hash</div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">
          L1 Txn Hash
        </p>{" "}
        <div className="flex gap-1.5">
          <Image
            src="/assets/icons/eth.svg"
            alt="icon"
            width={14}
            height={14}
          />
          <Link
            href={`/tx/${row.getValue("L1TxnHash")}`}
            className="text-center  text-xs hover:underline"
          >
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
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">
          L1 Txn Hash
        </p>{" "}
        <div className="flex gap-1.5 items-center">
          <Image
            src="/assets/icons/eth.svg"
            alt="icon"
            width={14}
            height={14}
          />
          <Link
            href={`/address/${row.getValue("L1TxnHashOrigin")}`}
            className="text-center text-xs hover:underline"
          >
            {shortenAddress(row.getValue("L1TxnHashOrigin"))}
          </Link>
          <Link
            href={`https://etherscan.io/address/${row.getValue(
              "L1TxnHashOrigin"
            )}`}
            className="text-center  hover:underline"
          >
            <ExternalTxnIcon />
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
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">
          L1 Txn Hash
        </p>{" "}
        <p className="text-xs text-grey-500">{row.getValue("gasLimit")}</p>
      </div>
    )
  },
  {
    accessorKey: "time",
    header: () => <div className=" capitalize text-right">time</div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">
          L1 Txn Hash
        </p>{" "}
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

        <div className="bg-secondary-200 relative w-full rounded-2xl px-6 py-2 md:p-6 mt-4 rounded-4xl border border-grey-200 bg-white !p-0">
          <div className="hidden grid-cols-auto gap-5 border-b border-grey-200 px-6 py-4 lg:grid">
            {table.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <div
                  key={header.id}
                  className="col-span-2 paragraph2_regular text-text-800"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </div>
              ))
            )}
          </div>

          {/* <div className="grid grid-cols-12 gap-4"> */}

          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <div
                key={row.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <div className="grid grid-cols-auto items-center gap-6 px-6 py-5 ">
                  {row.getVisibleCells().map((cell) => (
                    <>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-12 text-center p-4">No results.</div>
          )}
        </div>

        <TablePagination tableData={table} />
      </div>
    </div>
  );
}
