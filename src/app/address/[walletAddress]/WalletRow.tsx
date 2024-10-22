import React from "react";
import Image from "next/image";
import { InfoIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const people = [
  {
    asset: "Ethereum (ETH)",
    asset_type: "token",
    amount: "$80.21 M (29,357.93 ETH)",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rate: "1 ETH = $2,732.24"
  },
  {
    asset: "Mint (MNT)",
    asset_type: "token",
    amount: "$80.21 M (29,357.93 ETH)",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rate: "1 ETH = $2,732.24"
  },
  {
    asset: "Partisia (PART)",
    asset_type: "token",
    amount: "$80.21 M (29,357.93 ETH)",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rate: "1 ETH = $2,732.24"
  }
];

export default function Example() {
  return (
    <>
      <div className="relative rounded-2xl shadow-sm my-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          id="search"
          name="search"
          type="text"
          placeholder="Search for address, transaction, token etc..."
          className="block w-full !shadow-none !rounded-2xl !h-auto !border-1 !border-grey-300 p-3 pl-10 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white"
        />
      </div>

      <ul role="list" className="divide-y divide-gray-300 bg-white rounded-3xl">
        <li className="flex justify-between gap-x-6 py-5 px-6">
          All (8) Tokens (8)
        </li>
        {people.map((person) => (
          <li key={person.asset} className="flex justify-between gap-x-6">
            <div className="flex min-w-0 gap-x-4 p-6">
              <Image
                alt=""
                src={person.imageUrl}
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                height={40}
                width={40}
              />
              <div className="min-w-0 flex-auto">
                <p className="text-16 font-bold leading-6 text-gray-800">
                  {person.asset}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.asset_type}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end p-6">
              <p className="text-16 font-bold leading-6 text-gray-800 flex gap-1 items-center">
                {person.amount}
                {` `}
                <InfoIcon className="h-3 w-3 text-gray-400" />
              </p>
              {person.rate ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {person.rate}
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
