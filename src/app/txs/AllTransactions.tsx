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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { shortenAddress } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";
import ArrowRight from "@/assets/icons/arrow_right_grey.svg";
import BlockImage from "@/assets/icons/block_cube.svg";
import { useMemo, useState } from "react";
import TablePagination from "@/components/TablePagination";

const data: TransactionsAll[] = [
  {
    id: 0,
    address:
      "0xbdbd9b08ee5b0d0e0fc4c028e499361583fb9c8566b74117aef19a97d4bbfa38",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec",
    interactedWith: "0x237AE1c3712213dDb0332F9524AAa865B1Aff087",
    transactionValue: {
      token: "ETH",
      value: "0.00002",
      usdValue: "$0"
    }
  },
  {
    id: 1,
    address:
      "0xc23662293db0ac1cefbf4ee297e600417660f669c2c314280626069df30c9e6c",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0xe20113aE5D939BeF9Ae480384e264815207e4576",
    interactedWith: "0xb1d2B9446A9d1550e8d409C0F9745c5A2f10D332",
    transactionValue: {
      token: "ETH",
      Value: "0.00002",
      usdValue: "$0"
    }
  },
  {
    id: 2,
    address:
      "0xd646f0cca257bc403f1a26976bcd22877365968ab670f0920905f39fcf4592ee",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0x34723B92aE9708BA33843120A86035D049dA7dfA",
    interactedWith: "0xe8ceD5c467F880837c7fA3F2F05Cb99403e6CcEE",
    transactionValue: {
      token: "ETH",
      value: "0.00002",
      usdValue: "$0"
    }
  },
  {
    id: 3,
    address:
      "0xc9a1d61e75e3f3d6fc0004aeb2cb0c199b2be7e6bf035badde2a8c6f8fe14065",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0xEe74128677DEa423934d58489F06aAB7cd9AfE7A",
    interactedWith: "0x6041dC62b74e28596b4917693f6B0F5baA61A13F",
    transactionValue: {
      token: "ETH",
      value: "0.00002",
      usdValue: "$0"
    }
  },
  {
    id: 4,
    address:
      "0x7299e7f4def248879196013c1b482e5056ab40cf26bb89ac9c2f913ba6e85c7f",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec",
    interactedWith: "0xe8ceD5c467F880837c7fA3F2F05Cb99403e6CcEE",
    transactionValue: {
      token: "ETH",
      value: "0.00002",
      usdValue: "$0"
    }
  },

  {
    id: 5,
    address:
      "0xc23662293db0ac1cefbf4ee297e600417660f669c2c314280626069df30c9e6c",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0xe20113aE5D939BeF9Ae480384e264815207e4576",
    interactedWith: "0xb1d2B9446A9d1550e8d409C0F9745c5A2f10D332",
    transactionValue: {
      token: "ETH",
      Value: "0.00002",
      usdValue: "$0"
    }
  },
  {
    id: 6,
    address:
      "0xd646f0cca257bc403f1a26976bcd22877365968ab670f0920905f39fcf4592ee",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0x34723B92aE9708BA33843120A86035D049dA7dfA",
    interactedWith: "0xe8ceD5c467F880837c7fA3F2F05Cb99403e6CcEE",
    transactionValue: {
      token: "ETH",
      value: "0.00002",
      usdValue: "$0"
    }
  },
  {
    id: 7,
    address:
      "0xc9a1d61e75e3f3d6fc0004aeb2cb0c199b2be7e6bf035badde2a8c6f8fe14065",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0xEe74128677DEa423934d58489F06aAB7cd9AfE7A",
    interactedWith: "0x6041dC62b74e28596b4917693f6B0F5baA61A13F",
    transactionValue: {
      token: "ETH",
      value: "0.00002",
      usdValue: "$0"
    }
  },
  {
    id: 8,
    address:
      "0x7299e7f4def248879196013c1b482e5056ab40cf26bb89ac9c2f913ba6e85c7f",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec",
    interactedWith: "0xe8ceD5c467F880837c7fA3F2F05Cb99403e6CcEE",
    transactionValue: {
      token: "ETH",
      value: "0.00002",
      usdValue: "$0"
    }
  },
  {
    id: 9,
    address:
      "0xbdbd9b08ee5b0d0e0fc4c028e499361583fb9c8566b74117aef19a97d4bbfa38",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec",
    interactedWith: "0x237AE1c3712213dDb0332F9524AAa865B1Aff087",
    transactionValue: {
      token: "ETH",
      value: "0.00002",
      usdValue: "$0"
    }
  },
  {
    id: 10,
    address:
      "0xc9a1d61e75e3f3d6fc0004aeb2cb0c199b2be7e6bf035badde2a8c6f8fe14065",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0xEe74128677DEa423934d58489F06aAB7cd9AfE7A",
    interactedWith: "0x6041dC62b74e28596b4917693f6B0F5baA61A13F",
    transactionValue: {
      token: "ETH",
      value: "0.00002",
      usdValue: "$0"
    }
  },
  {
    id: 11,
    address:
      "0x7299e7f4def248879196013c1b482e5056ab40cf26bb89ac9c2f913ba6e85c7f",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec",
    interactedWith: "0xe8ceD5c467F880837c7fA3F2F05Cb99403e6CcEE",
    transactionValue: {
      token: "ETH",
      value: "0.00002",
      usdValue: "$0"
    }
  },
  {
    id: 12,
    address:
      "0xbdbd9b08ee5b0d0e0fc4c028e499361583fb9c8566b74117aef19a97d4bbfa38",
    status: "success",
    method: "Contract",
    block: 12435345,
    initiatedBy: "0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec",
    interactedWith: "0x237AE1c3712213dDb0332F9524AAa865B1Aff087",
    transactionValue: {
      token: "ETH",
      value: "0.00002",
      usdValue: "$0"
    }
  }
];

export type TransactionsAll = {
  id: number;
  address: string;
  status: "pending" | "processing" | "success" | "failed";
  method: string;
  block: number;
  initiatedBy: string;
  interactedWith: string;
  transactionValue: any;
};

export const columns: ColumnDef<TransactionsAll>[] = [
  {
    accessorKey: "address",
    header: () => <div className="">Transaction</div>,
    cell: ({ row }) => (
      <div className="capitalize  w-52 break-words flex gap-3 items-center col-span-3">
        <Avatar>
          <AvatarImage src="/assets/icons/fileOutput.svg" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <h4 className=" text-grey-800/80 font-bold font-m_plus_2 text-base">
            Contract Call
          </h4>
          <div className="flex gap-1.5">
            <Image
              src="/assets/icons/eth.svg"
              alt="icon"
              width={14}
              height={14}
            />
            <Link
              href={"/"}
              className="text-center font-semibold text-xs text-link-500 hover:underline"
            >
              {shortenAddress(row.getValue("address"))}
            </Link>
            <CopyToClipboard copyText={row.getValue("address")} />
          </div>
        </div>
      </div>
    )
  },
  {
    accessorKey: "method",
    header: () => <div className="hidden md:block">Method</div>,
    enableHiding: true,
    meta: {
      responsiveClass: "" // Hidden on mobile, visible on medium and larger screens
    },
    cell: ({ row }) => (
      <div className="capitalize hidden md:block">
        <Badge variant={"secondary"}>{row.getValue("method")}</Badge>
      </div>
    )
  },
  {
    accessorKey: "block",
    header: () => <div className="hidden md:block">Block</div>,
    cell: ({ row }) => (
      <div className="capitalize hidden md:block">
        <Badge>
          <Link
            href={"/"}
            className="text-center items-center  text-xs  hover:underline flex gap-2"
          >
            <BlockImage />

            <span> {row.getValue("block")}</span>
          </Link>
        </Badge>
      </div>
    )
  },
  {
    accessorKey: "initiatedBy",
    header: () => <div className="hidden md:block">Initiated by</div>,
    cell: ({ row }) => (
      <div className="capitalize hidden md:block">
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-1.5">
            <Image
              src="/assets/icons/eth.svg"
              alt="icon"
              width={14}
              height={14}
            />
            <Link href={"/"} className="text-center  text-xs  hover:underline">
              {shortenAddress(row.getValue("initiatedBy"))}
            </Link>
            <CopyToClipboard copyText={row.getValue("initiatedBy")} />
          </div>

          <ArrowRight />
        </div>
      </div>
    )
  },
  {
    accessorKey: "interactedWith",
    header: () => <div className="hidden md:block">Interacted with</div>,
    cell: ({ row }) => (
      <div className="capitalize hidden md:block">
        <div className="flex gap-1.5">
          <Image
            src="/assets/icons/eth.svg"
            alt="icon"
            width={14}
            height={14}
          />
          <Link href={"/"} className="text-center  hover:underline">
            {shortenAddress(row.getValue("interactedWith"))}
          </Link>
          <CopyToClipboard copyText={row.getValue("interactedWith")} />
        </div>
      </div>
    )
  },
  {
    accessorKey: "transactionValue",
    header: () => <div className="hidden md:block">Transaction value</div>,
    cell: ({ row }) => (
      <div className="capitalize hidden md:block">
        <div className="flex flex-col gap-2">
          <h4 className=" text-grey-800/80 font-bold font-m_plus_2 text-base">
            {`${(row.getValue("transactionValue") as any)?.token}`}{" "}
            {`(${(row.getValue("transactionValue") as any)?.usdValue})`}
          </h4>
          <div className=" mb-1 text-xs text-text-500">
            {(row.getValue("transactionValue") as any)?.value}
          </div>
        </div>
      </div>
    )
  },
  {
    accessorKey: "status",
    header: () => <div className=" text-right">status</div>,
    cell: ({ row }) => (
      <div className="capitalize flex flex-col gap-1 justify-end items-end">
        <Badge variant={"success"}>{row.getValue("status")}</Badge>
        <p className="text-xs text-grey-500">21s ago Oct-18-2024</p>
      </div>
    )
  }
];

export function AllTransactions() {
  const [globalFilter, setGlobalFilter] = useState("");
  // const [filteredData, setFilteredData] = useState(data);

  // Filter data only for specific columns (address, initiatedBy, interactedWith)
  const filteredData = useMemo(() => {
    if (!globalFilter) return data;
    return data.filter(
      (row) =>
        row.address.toLowerCase().includes(globalFilter.toLowerCase()) ||
        row.initiatedBy.toLowerCase().includes(globalFilter.toLowerCase()) ||
        row.interactedWith.toLowerCase().includes(globalFilter.toLowerCase())
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

      <div className="space-y-3">
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
