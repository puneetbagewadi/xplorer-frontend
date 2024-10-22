"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableHead,
  TableRow
} from "@/components/ui/table";
import { shortenAddress } from "@/lib/utils";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";

const people = [
  {
    rank: "1",
    address: "0xC882b111A75C0c657fC507C04FbFcD2cC984F071",
    ethBalance: "29,357.93",
    totalTxns: 28
  },
  {
    rank: "2",
    address: "0xC882b111A75C0c657fC507C984FbFcD2cC984F071",
    ethBalance: "29,357.93",
    totalTxns: 28
  },
  {
    rank: "3",
    address: "0xC882b111A75C0c657fas77C04FbFcD2cC984F071",
    ethBalance: "29,357.93",
    totalTxns: 28
  },
  {
    rank: "4",
    address: "0xC882b111A3150c657fC507C984FbFcD2cC984F071",
    ethBalance: "29,357.93",
    totalTxns: 28
  }
  // More people...
];
const Accounts = () => {
  return (
    <>
      <div className="relative rounded-2xl shadow-sm my-6 w-full md:w-1/2 lg:w-2/5">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          id="search"
          name="search"
          type="text"
          placeholder="Search for address, Transaction, token etc..."
          className="block w-full !shadow-none !rounded-2xl !h-auto !border-1 !border-grey-300 p-3 pl-10 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white"
        />
      </div>

      {/* // table */}

      <div className="border rounded-3xl bg-white mt-8 overflow-hidden">
        {/* <div className="-mx-4 mt-8 sm:-mx-0"> */}
        <Table className="min-w-full divide-y divide-gray-300">
          <TableHeader className="p-4">
            <TableRow>
              <TableHead
                scope="col"
                className="py-4 px-6 text-left text-sm font-normal text-text-800"
              >
                Rank
              </TableHead>
              <TableHead
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-normal text-text-800 lg:table-cell"
              >
                Account Address
              </TableHead>
              <TableHead
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-normal text-text-800"
              >
                ETH Balance
              </TableHead>
              <TableHead
                scope="col"
                className="px-6 py-3.5 text-left text-sm font-normal text-text-800"
              >
                Total Txns
              </TableHead>
            </TableRow>
          </TableHeader>
          <tbody className="divide-y divide-gray-200 bg-white">
            {people.map((person) => (
              <TableRow key={person.address}>
                <TableCell className="w-full max-w-0 py-4 pl-6 pr-3 text-xs font-semibold text-text-800 sm:w-auto sm:max-w-none">
                  {person.rank}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Account Address</dt>
                    <dd className="mt-1 truncate text-link-500">
                      <div className="flex justify-start items-center gap-2">
                        <div className="h-5 w-5 flex-shrink-0">
                          <Image
                            alt="profilePic"
                            width="40"
                            height="40"
                            className="rounded-full"
                            src={"/assets/icons/holder1.svg"}
                          />
                        </div>
                        {shortenAddress(person.address, 8)} {` `}
                        <CopyToClipboard copyText={person.address} />
                      </div>
                    </dd>
                  </dl>
                </TableCell>
                <TableCell className="hidden px-3 py-4 text-sm text-link-500 lg:table-cell">
                  <div className="flex justify-start items-center gap-2">
                    <div className="h-5 w-5 flex-shrink-0 inline-flex">
                      <Image
                        alt="profilePic"
                        width="40"
                        height="40"
                        className="rounded-full"
                        src={"/assets/icons/holder1.svg"}
                      />
                    </div>
                    <span>{shortenAddress(person.address, 8)}</span>

                    <CopyToClipboard copyText={person.address} />
                  </div>
                </TableCell>
                <TableCell className="px-3 py-4 text-sm text-text-800">
                  {person.ethBalance}
                </TableCell>
                <TableCell className="px-6 py-4 text-xs font-semibold text-text-500">
                  {person.totalTxns}
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
        {/* </div> */}
      </div>
    </>
  );
};

export default Accounts;
