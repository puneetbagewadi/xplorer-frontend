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

import { shortenAddress } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";
import BlockImage from "@/assets/icons/block_cube.svg";
import ExternalTxnIcon from "@/assets/icons/external_link_blue.svg";
import { useMemo, useState } from "react";
import TablePagination from "@/components/TablePagination";

interface VerifiedContractTypes {
  id: number;
  contract: {
    name: string;
    address: string;
  };
  balance: number;
  txnCount: number;
  compiler: string;
  version: string;
  settings: string[];
  status: string;
}
const data: VerifiedContractTypes[] = [
  {
    id: 0,
    contract: {
      name: "Scroll",
      address: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421"
    },
    balance: 0.12,
    txnCount: 5,
    compiler: "solidity",
    version: "v0.8.17+commit.8df45f5f",
    settings: ["Optimization", "Constructor arg"],
    status: "41m ago"
  }
];

export const columns: ColumnDef<VerifiedContractTypes>[] = [
  {
    accessorKey: "contract",
    header: () => <div className="">Ver Contracts</div>,
    cell: ({ row }) => {
      // const
      return (
        <>
          <div className="col-span-12 grid grid-cols-txsMobTable text-left lg:col-span-2 lg:block">
            <p className="paragraph2_regular text-grey-600 lg:hidden">
              Contracts
            </p>

            <div>
              <Badge>
                <Link
                  href={`/block/${(row.getValue("contract") as any)?.address}`}
                  className="text-center items-center text-xs hover:underline flex gap-2"
                >
                  <BlockImage />

                  <span className="supportText_regular capitalize text-white hover:underline">
                    {" "}
                    {/* {row.getValue("contract")} */}
                  </span>
                </Link>
              </Badge>
            </div>
          </div>
        </>
      );
    }
  },
  {
    accessorKey: "balance",
    header: () => <div className="">Balance </div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">Balance</p>
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-1.5">
            <Image
              src="/assets/icons/eth.svg"
              alt="icon"
              width={14}
              height={14}
            />
            <Link
              href={`/tx/${row.getValue("balance")}`}
              className="text-center  text-xs  hover:underline"
            >
              {shortenAddress(row.getValue("balance"))}
            </Link>
            <CopyToClipboard copyText={row.getValue("balance")} />
          </div>
        </div>
      </div>
    )
  },
  {
    accessorKey: "txns",
    header: () => <div className="">Txns</div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">Txns</p>{" "}
        <div className="flex gap-1.5">
          <Image
            src="/assets/icons/eth.svg"
            alt="icon"
            width={14}
            height={14}
          />
          <Link
            href={`/tx/${row.getValue("txns")}`}
            className="text-center  text-xs hover:underline"
          >
            {shortenAddress(row.getValue("txns"))}
          </Link>
          <CopyToClipboard copyText={row.getValue("txns")} />
        </div>
      </div>
    )
  },
  {
    accessorKey: "compiler",
    header: () => <div className="">Compiler</div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">Compiler</p>{" "}
        <div className="flex gap-1.5 items-center">
          <Image
            src="/assets/icons/eth.svg"
            alt="icon"
            width={14}
            height={14}
          />
          <Link
            href={`/address/${row.getValue("compiler")}`}
            className="text-center text-xs hover:underline"
          >
            {shortenAddress(row.getValue("compiler"))}
          </Link>
          <Link
            href={`https://etherscan.io/address/${row.getValue("compiler")}`}
            className="text-center hover:underline"
          >
            <ExternalTxnIcon />
          </Link>

          <CopyToClipboard copyText={row.getValue("compiler")} />
        </div>
      </div>
    )
  },
  {
    accessorKey: "version",
    header: () => <div className="">Version</div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">Version</p>{" "}
        <p className="text-xs text-grey-500">{row.getValue("version")}</p>
      </div>
    )
  },
  {
    accessorKey: "settings",
    header: () => <div className=" capitalize ">Settings</div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">Settings</p>{" "}
        {row.getValue("settings")}
      </div>
    )
  },
  {
    accessorKey: "status",
    header: () => <div className=" capitalize ">Status</div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">Status</p>{" "}
        {row.getValue("status")}
      </div>
    )
  }
];

export default function ContractsList() {
  const [globalFilter, setGlobalFilter] = useState("");
  // const [filteredData, setFilteredData] = useState(data);

  // Filter data only for specific columns (address, initiatedBy, interactedWith)
  const filteredData = useMemo(() => {
    if (!globalFilter) return data;
    return data.filter(
      (row) =>
        // row.L2TxnHash.toLowerCase().includes(globalFilter.toLowerCase()) ||
        // row.L1TxnHash.toLowerCase().includes(globalFilter.toLowerCase()) ||
        // row.L1TxnHashOrigin.toLowerCase().includes(globalFilter.toLowerCase())
        true
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
