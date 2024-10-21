"use client"

import * as React from "react"
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
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { shortenAddress } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const data: TransactionsAll[] = [
  {

    id: 0,
  address: "0x7299e7f4def248879196013c1b482e5056ab40cf26bb89ac9c2f913ba6e85c7f",
  status: "success",
  method: "Contract",
  block:12435345,
  initiatedBy:"0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec",
  interactedWith:"0x237AE1c3712213dDb0332F9524AAa865B1Aff087",
  transactionValue:"0.000001 ETH"
  },
  {

    id: 1,
  address: "0x7299e7f4def248879196013c1b482e5056ab40cf26bb89ac9c2f913ba6e85c7f",
  status: "success",
  method: "Contract",
  block:12435345,
  initiatedBy:"0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec",
  interactedWith:"0x237AE1c3712213dDb0332F9524AAa865B1Aff087",
  transactionValue:"0.000001 ETH"
  },
  {

    id: 2,
  address: "0x7299e7f4def248879196013c1b482e5056ab40cf26bb89ac9c2f913ba6e85c7f",
  status: "success",
  method: "Contract",
  block:12435345,
  initiatedBy:"0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec",
  interactedWith:"0x237AE1c3712213dDb0332F9524AAa865B1Aff087",
  transactionValue:"0.000001 ETH"
  },
  {

    id: 3,
  address: "0x7299e7f4def248879196013c1b482e5056ab40cf26bb89ac9c2f913ba6e85c7f",
  status: "success",
  method: "Contract",
  block:12435345,
  initiatedBy:"0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec",
  interactedWith:"0x237AE1c3712213dDb0332F9524AAa865B1Aff087",
  transactionValue:"0.000001 ETH"
  },
  {

    id: 4,
  address: "0x7299e7f4def248879196013c1b482e5056ab40cf26bb89ac9c2f913ba6e85c7f",
  status: "success",
  method: "Contract",
  block:12435345,
  initiatedBy:"0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec",
  interactedWith:"0x237AE1c3712213dDb0332F9524AAa865B1Aff087",
  transactionValue:"0.000001 ETH"
  },
  
]

export type TransactionsAll = {
  id: number
  address: string
  status: "pending" | "processing" | "success" | "failed"
  method: string
  block:number
  initiatedBy:string
  interactedWith:string
  transactionValue:any
}

export const columns: ColumnDef<TransactionsAll>[] = [

  {
    accessorKey: "address",
    header: () => <div className="">Address</div>,
    cell: ({ row }) => (
      <div className="capitalize  w-52 break-words flex gap-3 items-center col-span-3">
        <Avatar>
      <AvatarImage src="/assets/icons/fileOutput.svg" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
        <div className="flex flex-col gap-2">
          <h4 className=" text-grey-800/80 font-bold font-m_plus_2 text-base">Contract Call</h4>
          <div className="flex gap-1.5">
            <Image src="/public/assets/icons/eth.svg" alt="icon"/>
          <Link href={"/"}>
          {shortenAddress(row.getValue("address"))}
          </Link>
          
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "method",
    header: () => <div className="hidden md:block">Method</div>,
    enableHiding:true,
    meta: {
      responsiveClass: '', // Hidden on mobile, visible on medium and larger screens
    },
    cell: ({ row }) => <div className="capitalize hidden md:block">
      
      <Badge variant={"secondary"}>
      {row.getValue("method")}
      </Badge>
      </div>,
  },
  {
    accessorKey: "block",
    header: () => <div className="hidden md:block">Block</div>,
    cell: ({ row }) => <div className="capitalize hidden md:block">
      <Badge>
      {row.getValue("block")}
      </Badge>
    </div>,
  },
  {
    accessorKey: "initiatedBy",
    header: () => <div className="hidden md:block">Initiated by</div>,
    cell: ({ row }) => <div className="capitalize hidden md:block">{shortenAddress(row.getValue("initiatedBy"))}</div>,
  },
  {
    accessorKey: "interactedWith",
    header: () => <div className="hidden md:block">Interacted with</div>,
    cell: ({ row }) => <div className="capitalize hidden md:block">{shortenAddress(row.getValue("interactedWith"))}</div>,
  },
  {
    accessorKey: "transactionValue",
    header: () => <div className="hidden md:block">Transaction value</div>,
    cell: ({ row }) => <div className="capitalize hidden md:block">{row.getValue("transactionValue")}</div>,
  },
  {
    accessorKey: "status",
    header: () =><div className=" text-right">status</div>,
    cell: ({ row }) => <div className="capitalize flex flex-col gap-1 justify-end items-end">
       <Badge variant={"success"}>
      {row.getValue("status")}
      </Badge>
      <p>
      21s ago Oct-18-2024
      </p>
      </div>,
  },


]

export function AllTransactions() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full ">
      <div className=" border rounded-3xl bg-white">
      <Table className="">
          <TableHeader className=" ">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className=" border-b border-grey-200 " key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="items-center !h-10 gap-5  !px-6 !py-4 " key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
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
              <TableCell key={cell.id} className="items-center gap-5 px-6 py-5 text-gray-800">
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
