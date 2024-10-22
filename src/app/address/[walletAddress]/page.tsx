"use client";
import React, { useState } from "react";
import Image from "next/image";
import WalletTransactionsTab from "./WalletTransactionsTab";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";
import { shortenAddress } from "@/lib/utils";

const TokenPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
      <div className="col-span-1 row-start-1 md:col-span-8">
        <div className="relative w-full rounded-2xl px-6 py-2 md:p-6 h-auto bg-primaryGradient !p-0 !pb-4 lg:!p-6">
          <div className="flex grid-cols-12 flex-col gap-3 md:grid md:gap-10">
            <div className="col-span-7">
              <div className="flex h-full w-full grid-cols-12 flex-col md:grid md:w-auto md:gap-5">
                <div className="relative col-span-6 flex flex-col items-start px-6 pt-10 md:justify-between md:px-0 md:pt-0">
                  <Image
                    src="/assets/icons/holder1.svg"
                    alt="WETH"
                    width="72"
                    height="72"
                    className="relative z-[1] rounded-full"
                  />
                  <div>
                    <h3 className="font-bold mb-2 w-[65%] mt-4 capitalize text-white md:w-auto text-2xl">
                      Waysmith #48579
                    </h3>

                    <p className="text-sm text-grey-300 font-normal">
                      {shortenAddress(
                        "0xf977814e90da44bfa03b6295a0616a897441acec",
                        5
                      )}
                      <CopyToClipboard
                        className="ml-1"
                        copyText={"0xF977814e90dA44bFA03b6295A0616a897441aceC"}
                      />
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-grey-500 text-sm gap-2">
                        Net Worth
                        <span className="mr-2 font-bold text-16 text-white">
                          {" "}
                          $77.10 M
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ----- */}

            <div className="col-span-5 flex flex-col items-end px-6 md:px-0 justify-center">
              <ul className="flex w-full flex-col gap-3">
                <li className="relative rounded-xl bg-neutral-50/5 px-[22px] p-6">
                  <p className="text-xs mb-0.5 text-grey-500">Tokens</p>
                  <p className="text-sm mb-0.5 text-grey-300">$77.10 M</p>
                  {/* <Image
                    src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/chains/manta/transfer.svg"
                    className="top-1 absolute right-0 "
                    alt="Transfers"
                    width={25}
                    height={50}
                  /> */}
                </li>
                <li className="relative rounded-xl bg-neutral-50/5 px-[22px] p-6">
                  <p className="text-xs mb-0.5 text-grey-500">NFTs</p>
                  <p className="text-sm mb-0.5 text-grey-300">$0</p>
                  {/* <Image
                    src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/chains/manta/holders.svg"
                    className="top-2 absolute right-0 "
                    alt="Holders"
                    width={25}
                    height={50}
                  /> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------- */}

      <div className="col-span-1 row-span-2 md:col-span-4 md:row-start-1 md:row-end-7">
        <div className="grid auto-cols-fr grid-flow-row gap-2.5 md:mb-10">
          <div className="col-span-12">
            <div
              className="bg-secondary-200 relative w-full rounded-2xl px-6 py-2 md:p-6 bg-white py-4 shadow-md"
              role="presentation"
            >
              <div className="relative z-10 flex items-center justify-center gap-x-4 text-center md:flex-col">
                <Image
                  alt="shark"
                  width="105"
                  height="124"
                  className="mx-auto w-[35%] md:w-auto"
                  src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/whale.svg"
                />
                <div className="self-center">
                  <p className="font-bold mt-1 text-text-800">
                    Woah! You’ve spotted a Whale!
                  </p>
                  <p className="supportText_regular mt-2 text-left text-xs text-text-500 md:mt-[14px] md:text-center">
                    Whales are users with a wallet with over $500k
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 z-[1] h-[70%] w-full rounded-b-2xl bg-cover bg-no-repeat bg-seaWater"></div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="relative w-full rounded-2xl md:p-6 bg-white px-4 py-6 shadow-md">
              <p className="text-xs text-grey-500">
                Who did they most transact with?
              </p>
              <div className="mt-6">
                <div className="mb-9 last:mb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-2 md:items-start">
                      <Image
                        src="/assets/icons/holder1.svg"
                        alt="holder 1"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-bold pb-1 text-grey-800">
                          Excursionist #42333
                        </p>
                        <p className="text-center text-xs break-words text-grey-500 flex gap-2">
                          <span className="hover:underline cursor-pointer">
                            {" "}
                            0x63D...007D
                          </span>
                          <CopyToClipboard
                            copyText={
                              "0x63D83FBAE0EE891328ba7130A1920a46fe54007D"
                            }
                          />
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-2 items-center">
                      <p className="font-semibold text-grey-800 text-xs">
                        23 txns
                      </p>
                      {/* <CircularProgressBar className="flex-1" /> */}
                      {/* <Image
                      src="/assets/icons/circularProgressBar.svg"
                      alt="holder 1"
                      width={40}
                      height={40}
                      className="rounded-full"
                    /> */}
                    </div>
                  </div>
                </div>

                {/* -------- */}

                <div className="mb-9 last:mb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-2 md:items-start">
                      <Image
                        src="/assets/icons/holder2.svg"
                        alt="holder 2"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-bold pb-1 text-grey-800">
                          Discoverer #16950
                        </p>
                        <p className="text-center text-xs break-words text-grey-500 flex gap-2">
                          <span className="hover:underline cursor-pointer">
                            {" "}
                            0x63D...008D
                          </span>
                          <CopyToClipboard
                            copyText={
                              "0x63D83FBAE0EE891328ba7130A1920a46fe54008D"
                            }
                          />
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-2 items-center">
                      <p className="font-semibold text-grey-800 text-xs">
                        1 txn
                      </p>
                      {/* <CircularProgressBar className="flex-1" /> */}
                      {/* <Image
                      src="/assets/icons/circularProgressBar.svg"
                      alt="holder 2"
                      width={40}
                      height={40}
                      className="rounded-full"
                    /> */}
                    </div>
                  </div>
                </div>

                {/* --------- */}

                <div className="mb-9 last:mb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-2 md:items-start">
                      <Image
                        src="/assets/icons/holder3.svg"
                        alt="holder 3"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-bold pb-1 text-grey-800">
                          Itinerant #30658
                        </p>
                        <p className="text-center text-xs break-words text-grey-500 flex gap-2">
                          <span className="hover:underline cursor-pointer">
                            {" "}
                            0x63D...009D
                          </span>
                          <CopyToClipboard
                            copyText={
                              "0x63D83FBAE0EE891328ba7130A1920a46fe54009D"
                            }
                          />
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-2 items-center">
                      <p className="font-semibold text-grey-800 text-xs">
                        2 txns
                      </p>
                      {/* <CircularProgressBar className="flex-1" /> */}
                      {/* <Image
                      src="/assets/icons/circularProgressBar.svg"
                      alt="holder 3"
                      width={40}
                      height={40}
                      className="rounded-full"
                    /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* ---------- */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-3 md:col-span-8 md:row-start-2">
        <WalletTransactionsTab
          tabNames={[
            "Wallet",
            "Activity",
            "Token Transfers",
            "Internal Transactions"
          ]}
        />
      </div>
    </div>
  );
};

export default TokenPage;
