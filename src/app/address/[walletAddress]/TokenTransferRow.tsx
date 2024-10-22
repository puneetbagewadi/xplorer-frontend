import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { InfoIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { shortenAddress } from "@/lib/utils";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";
import GasIcon from "@/assets/icons/gasGray.svg";

const people = [
  {
    asset: "Ethereum (ETH)",
    fromAddress: "0x3CDfB47b0E910d9190eD788726cD72489bf10499",
    toAddress: "0xF977814e90dA44bFA03b6295A0616a897441aceC",
    tokenAddress:
      "0x4cef859122a897f60194c6a0fb75d2decbfb2c26f0288ac012258f109f6b45ac",
    asset_type: "token",
    amount: "135.03 ETH",
    imageUrl: "/assets/icons/send.svg",
    gas: "0.01 ETH"
  },
  {
    asset: "Partisia (MPC)",
    fromAddress: "0x3CDfB47b0E910d9190eD788726cD72489bf10499",
    toAddress: "0xF977814e90dA44bFA03b6295A0616a897441aceC",
    tokenAddress:
      "0xc333eb3f8e25c481076a780ff2760be29003aa9f450021f21aec823116816fa8",
    asset_type: "token",
    amount: "120.03 ETH",
    imageUrl: "/assets/icons/send.svg",
    gas: "0.02 ETH"
  }
];

const TokenTransferRow = () => {
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
      <Accordion type="single" collapsible className="w-full">
        {[1, 2, 3].map((item) => {
          return (
            <AccordionItem
              key={item}
              value={"item" + item}
              className="mb-6 bg-white px-6 py-2 rounded-3xl"
            >
              <AccordionTrigger>September 2024 (2)</AccordionTrigger>
              <AccordionContent>
                <ul
                  role="list"
                  className="divide-y divide-gray-300 bg-white rounded-3xl"
                >
                  {people.map((item) => (
                    <li
                      key={item.asset}
                      className="flex justify-between gap-x-6 p-6 pl-0 last:pb-0"
                    >
                      <div className="flex min-w-0 gap-x-4">
                        <Image
                          alt=""
                          src={item.imageUrl}
                          className="h-12 w-12 flex-none rounded-full bg-gray-50"
                          height={40}
                          width={40}
                        />
                        <div className="min-w-0 flex-auto">
                          <p className="text-16 font-bold leading-6 text-gray-800">
                            Send
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            #{shortenAddress(item.tokenAddress)}
                            <CopyToClipboard copyText={item.tokenAddress} />
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-start items-center gap-2">
                        <div className="flex justify-start items-center gap-2">
                          <Image
                            alt=""
                            src={"/assets/icons/holder1.svg"}
                            className="h-5 w-5 flex-none rounded-full bg-gray-50"
                            height={20}
                            width={20}
                          />
                          <span>{shortenAddress(item.fromAddress)}</span>
                          <CopyToClipboard copyText={item.fromAddress} />
                        </div>

                        <Image
                          alt=""
                          src={"/assets/icons/arrowRightGray.svg"}
                          className="h-5 w-5 flex-none rounded-full bg-gray-50"
                          height={20}
                          width={20}
                        />

                        <div className="flex justify-start items-center gap-2">
                          <Image
                            alt=""
                            src={"/assets/icons/holder2.svg"}
                            className="h-5 w-5 flex-none rounded-full bg-gray-50"
                            height={20}
                            width={20}
                          />
                          <span>{shortenAddress(item.toAddress)}</span>
                          <CopyToClipboard copyText={item.toAddress} />
                        </div>
                      </div>

                      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-16 font-bold leading-6 text-gray-800 flex gap-1 items-center">
                          {item.amount}
                          {` `}
                        </p>
                        {item.gas ? (
                          <p className="mt-1 text-xs leading-5 text-gray-500 flex items-center gap-1">
                            <GasIcon />
                            {item.gas}
                          </p>
                        ) : (
                          <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </div>
                            <p className="text-xs leading-5 text-gray-500">
                              Online
                            </p>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default TokenTransferRow;
