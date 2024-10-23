"use client";

import React, { useEffect } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  PaginationTableState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";

import { shortenAddress } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";
import TablePagination from "@/components/TablePagination";

interface BlockTransactions {
  id: number;
  txnHash: string;
  from: string;
  to: string;
  details: {
    nativeValue: string;
    value: string;
  };
}
export const blockTransactions: BlockTransactions[] = [
  {
    id: 0,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 1,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 2,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 3,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 4,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 5,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 6,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 6,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 7,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 8,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },

  {
    id: 10,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 11,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 12,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 13,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 14,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 15,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  },
  {
    id: 162,
    txnHash:
      "0xf980cb1aa5086bf31a53230379de895e674fd9ff1fff34865a7b0a8bd0dc8940",
    from: "0x115fd8db1db578345a673f01e7d5aaff7f2cf4e0f82033bb13a4ee5e59810924",
    to: "0x746ca609680c55c3bdd0b3627b4c5db21b13d421",
    details: {
      nativeValue: "$0 (0 ETH)",
      value: "$0.14 (0.000052 ETH)"
    }
  }
];

export const columns: ColumnDef<BlockTransactions>[] = [
  {
    accessorKey: "txnHash",
    header: () => <div className="">Transaction Id </div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">
          Transaction Id
        </p>
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-1.5">
            <Link
              href={`/tx/${row.getValue("txnHash")}`}
              className="text-center  text-xs text-sky-blue  hover:underline"
            >
              {shortenAddress(row.getValue("txnHash"))}
            </Link>
            <CopyToClipboard copyText={row.getValue("txnHash")} />
          </div>
        </div>
      </div>
    )
  },
  {
    accessorKey: "from",
    header: () => <div className="">From</div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">From</p>{" "}
        <div className="flex gap-1.5">
          <Image
            src="/assets/icons/eth.svg"
            alt="icon"
            width={14}
            height={14}
          />
          <Link
            href={`/tx/${row.getValue("from")}`}
            className="text-center  text-xs hover:underline"
          >
            {shortenAddress(row.getValue("from"))}
          </Link>
          <CopyToClipboard copyText={row.getValue("from")} />
        </div>
      </div>
    )
  },
  {
    accessorKey: "to",
    header: () => <div className="">To</div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">To</p>{" "}
        <div className="flex gap-1.5 items-center">
          <Image
            src="/assets/icons/eth.svg"
            alt="icon"
            width={14}
            height={14}
          />
          <Link
            href={`/address/${row.getValue("to")}`}
            className="text-center text-xs hover:underline"
          >
            {shortenAddress(row.getValue("to"))}
          </Link>

          <CopyToClipboard copyText={row.getValue("to")} />
        </div>
      </div>
    )
  },
  {
    accessorKey: "details",
    header: () => <div className="">Transaction value</div>,
    cell: ({ row }) => (
      <div className="col-span-12 grid grid-cols-txsMobTable lg:col-span-2 lg:block">
        <p className="paragraph2_regular text-grey-600 lg:hidden">
          Transaction value
        </p>
        <div>
          <p className="text-xs text-grey-500">
            {`${(row.getValue("details") as any)?.nativeValue}`}
          </p>
          <p className="text-xs text-grey-500">
            {`${(row.getValue("details") as any)?.value}`}
          </p>
        </div>
      </div>
    )
  }
];

export function BlockTransactions() {
  const table = useReactTable({
    data: blockTransactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full flex space-y-6 flex-col ">
      <div className="bg-secondary-200 relative w-full rounded-2xl px-6 py-2 md:p-6  rounded-4xl border border-grey-200 bg-white !p-0">
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-12 text-center p-4">No results.</div>
        )}
      </div>
    </div>
  );
}
