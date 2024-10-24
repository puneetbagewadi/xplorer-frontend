import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import UniqueAvatar from "@/components/unique-avatar";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";

const TransferRow = () => {
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
      <Accordion type="single" collapsible className="bg-white rounded-2xl">
        <AccordionItem value="item-1" className="!border-b-0">
          <AccordionTrigger className="p-6 text-text-500 text-[16px]">
            <p className="font-bold">
              Today
              <span className="text-xs ml-2 font-normal">
                (29 transactions)
              </span>
            </p>
          </AccordionTrigger>
          <AccordionContent className="!pb-0">{createRow()}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

const createRow = () => {
  return (
    <div className="bg-white rounded-2xl">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((person: any) => (
        <div
          key={person}
          className="flex flex-col lg:flex-row justify-between lg:items-center p-3 md:p-6 first:border-t last:border-b-0 border-b gap-5 items-start"
        >
          <div className="flex flex-col">
            <div className="mb-2.5">
              <div className="relative flex items-center justify-evenly gap-10 lg:col-span-4">
                <div className="mr-8 flex items-center gap-x-1 lg:mr-0">
                  <UniqueAvatar
                    text="0x3EF68D3f7664b2805D4E88381b64868a56f88bC4"
                    size={24}
                  />
                  <div className="flex w-full items-center gap-2 text-center">
                    <a href="/address/0x3EF68D3f7664b2805D4E88381b64868a56f88bC4">
                      <p className="text-center text-xs font-semibold break-words text-text-800 hover:underline">
                        0x3EF...8bC4
                      </p>
                    </a>
                    <CopyToClipboard
                      copyText={"0x3EF68D3f7664b2805D4E88381b64868a56f88bC4"}
                    />
                  </div>
                </div>
                <Image
                  alt="arrow"
                  width="16"
                  height="16"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/arrow_right_grey.svg"
                />
                <div className="mr-8 flex items-center gap-x-1 lg:mr-0">
                  <UniqueAvatar
                    text="0x0000000000000000000000000000000000000000"
                    size={24}
                  />
                  <div className="flex w-full items-center gap-2 text-center font-semibold text-xs">
                    <a href="/address/0x0000000000000000000000000000000000000000">
                      <p className="text-center font-semibold break-words text-text-800 hover:underline">
                        0x000...0000
                      </p>
                    </a>
                    <Image
                      alt="copy"
                      width="12"
                      height="12"
                      className="cursor-pointer"
                      src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/copy_grey_filled.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-xs text-grey-500">#</span>
              <div className="flex w-full items-center gap-2 text-center">
                <a href="/tx/0xc302a3ca38cc64841703c4a5a65ff1bf1b29593ccf63f6c8b694559e4ae11d29">
                  <p className="text-center font-semibold text-xs break-words text-link-500 hover:underline">
                    0xc30...1d29
                  </p>
                </a>
                <Image
                  alt="copy"
                  width="12"
                  height="12"
                  className="cursor-pointer "
                  src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/copy_grey_filled.svg"
                />
              </div>
            </div>
          </div>
          {/* ------ */}

          <div className="flex h-fit items-center justify-center gap-x-1 rounded-lg py-1 px-4 bg-black">
            <Image
              src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/block_cube_grey.svg"
              alt="cube"
              className="h-4 w-4"
              height={16}
              width={16}
            />
            <p className="text-xs capitalize text-white hover:underline">
              3484215
            </p>
          </div>

          {/* ------ */}
          <div className="px-3 text-sm text-gray-500 flex flex-col justify-center items-end gap-2 self-end">
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-success-600">
              Success
            </span>
            <p className="text-grey-500 text-xs">1h ago Oct-16-2024</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransferRow;
