import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { shortenAddress } from "@/lib/utils";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";

const holders = [
  {
    name: "Excursionist #42333",
    address: "0x63D83FBAE0EE891328ba7130A1920a46fe54006D",
    image: "/assets/icons/holder1.svg",
    quantity: "145.61",
    percentage: "13.1"
  },
  {
    name: "Itinerant #30658",
    address: "0x63D83FBAE0EE891328ba7130A1920a46fe54006D",
    image: "/assets/icons/holder2.svg",
    quantity: "92.169534",
    percentage: "8.3"
  },
  {
    name: "Discoverer #16950",
    address: "0x63D83FBAE0EE891328ba7130A1920a46fe54006D",
    image: "/assets/icons/holder3.svg",
    quantity: "59.927955",
    percentage: "5.4"
  }
];

const HolderRow = () => {
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
      {/* Table goes here */}
      {/* <div className="p-5 bg-white"> */}
      <Table className="bg-white rounded-[28px]">
        <TableCaption>A list of holders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="p-6">Holder</TableHead>
            <TableHead className="">Quantity</TableHead>
            <TableHead className="">Percentage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{createRow()}</TableBody>
      </Table>
      {/* </div> */}
    </>
  );
};

const createRow = () => {
  return holders.map((holder) => (
    <TableRow key={holder.name} className="hover:bg-transparent">
      <TableCell className="whitespace-nowrap py-5 pl-6 pr-3 text-sm">
        <div className="flex items-center">
          <div className="h-11 w-11 flex-shrink-0">
            <Image
              alt="profilePic"
              width="40"
              height="40"
              className="rounded-full"
              src={holder.image}
            />
          </div>
          <div className="ml-4">
            <div className="font-bold text-[16px] text-text-800">
              {holder.name}
            </div>
            <div className="mt-1 text-gray-500 flex justify-start gap-2 items-center">
              <span className="hover:underline cursor-pointer font-normal text-xs">
                {shortenAddress(holder.address)}
              </span>
              <CopyToClipboard copyText={holder.address} />
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className="whitespace-nowrap px-3 py-5">
        <div className="text-grey-500 text-[16px] font-bold">
          {holder.quantity}
        </div>
      </TableCell>
      <TableCell className="whitespace-nowrap px-3 py-5 text-xs text-text-800 font-semibold">
        {holder.percentage}
      </TableCell>
    </TableRow>
  ));
};

export default HolderRow;
