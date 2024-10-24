"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlockImage from "@/assets/icons/block_cube.svg";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";
import BlockImageBlue from "@/assets/icons/block_icon.svg";
import { blockTransactions, BlockTransactions } from "./BlockTransactions";
import TablePagination from "@/components/TablePagination";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import InfoTooltip from "@/components/InfoTooltip";
import { shortenAddress } from "@/lib/utils";
const BlockDetails = () => {
  return (
    <div className=" grid-cols-auto	gap-2.5 md:grid">
      <div className="col-span-5 mb-4">
        <div className="sticky left-0 top-24 lg:h-[calc(100vh-80px)]">
          <div className="">
            <div className=" relative w-full rounded-t-[28px] px-6 py-2 md:p-6 !p-0 shadow-down flex justify-between rounded-t-4xl bg-black">
              <div className=" rounded-t-[28px] px-6 flex justify-between rounded-t-4xl bg-black">
                <BlockImageBlue />
              </div>
            </div>
            <div className="bg-secondary-200 relative w-full rounded-[28px] py-2 md:p-6 rounded-t-none bg-blackGradient !px-4 pb-4 pt-5">
              <div>
                <div className="items-center justify-between lg:flex">
                  <div className="">
                    <h2 className="heading2_bold mb-2 w-[70%] text-white lg:w-auto">
                      Block #3538414
                    </h2>
                    <div className="flex items-center gap-x-2">
                      <div className="flex items-center gap-x-1">
                        <img
                          src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/clock_grey.svg"
                          alt="time"
                        />
                      </div>
                      <p className="supportText_regular text-grey-300">
                        35s ago
                      </p>
                      <span className="h-1 w-1 rounded-full bg-grey-300 " />
                      <p className="supportText_regular text-grey-300">
                        Oct-22-2024
                      </p>
                      <span className="h-1 w-1 rounded-full bg-grey-300 hidden md:block" />
                      <p className="supportText_regular hidden text-grey-300 md:block">
                        20:11:39 PM (+05:30 UTC)
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-4 top-6 w-[25%] rounded-lg bg-grey-50/10 px-2 py-1 text-center lg:block lg:w-auto lg:text-left">
                    <p className="supportText_regular text-xs text-grey-300">
                      46 Txns
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mt-14 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <p className="paragraph2_regular text-grey-300">
                        Mined By
                      </p>
                      <InfoTooltip
                        message={
                          "A block producer who successfully included the block onto the blockchain"
                        }
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/eth.svg"
                        alt="icon"
                        width={14}
                        height={14}
                      />
                      <Link
                        href={`/address/0xDB1a1Ac7d2C61Fd1B03B412e1A0183A3a862C1e3`}
                        className="text-center text-grey-300 hover:underline"
                      >
                        {shortenAddress(
                          "0xDB1a1Ac7d2C61Fd1B03B412e1A0183A3a862C1e3"
                        )}
                      </Link>
                      <CopyToClipboard
                        copyText={"0xDB1a1Ac7d2C61Fd1B03B412e1A0183A3a862C1e3"}
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex w-full items-start justify-between lg:items-center">
                    <div className="flex items-center gap-1">
                      <p className="paragraph2_regular  text-grey-300">
                        Gas Used
                      </p>
                      <InfoTooltip
                        message={
                          "The total gas amount used in the block and it's percentage of gas filled in the block"
                        }
                      />
                    </div>
                    <div className="flex w-2/3 flex-wrap items-start justify-end gap-2 lg:w-[80%] lg:items-center">
                      <p className="supportText_regular text-sky-blue">
                        7.35 %
                      </p>

                      <div className="w-[30%]">
                        <Progress value={40} className=" bg-white h-1.5" />
                      </div>
                      <p className="supportText_regular flex justify-end gap-1 text-grey-300">
                        <span className="text-success-600">3,675,597</span>
                        <span className="text-text-500">/</span>50,000,000
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex w-full items-center justify-between">
                    <div className="flex items-center gap-1">
                      <p className="paragraph2_regular  text-grey-300">Size</p>
                      <InfoTooltip message={"Size of the blocks in bytes"} />
                    </div>
                    <p className="paragraph2_regular  text-grey-300">
                      20,758 bytes
                    </p>
                  </div>
                  <div className="mt-5 flex w-full items-center justify-between">
                    <div className="flex items-center gap-1">
                      <p className="paragraph2_regular  text-grey-300">
                        Difficulty
                      </p>
                      <InfoTooltip
                        message={
                          "block difficulty for miner, used to calibrate block generation time"
                        }
                      />
                    </div>
                    <p className="paragraph2_regular  text-grey-300">0</p>
                  </div>
                  <div className=" mt-4">
                    <Accordion
                      type="multiple"
                      className="w-full  rounded-2xl !bg-transparent space-y-2 !p-0"
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="!bg-transparent !p-0 !text-sky-blue">
                          <p className="paragraph2_regular text-sky-blue">
                            Other fee
                          </p>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div
                            className="  pb-4 md:pb-0"
                            style={{ height: "auto" }}
                          >
                            <div className="mt-3 flex flex-col gap-y-2">
                              <div className="mt-5 flex w-full items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <p className="paragraph2_regular  text-grey-300">
                                    Base gas fee
                                  </p>
                                  <InfoTooltip message={"Base gas fee"} />
                                </div>
                                <p className="paragraph2_regular  text-white">
                                  0.000000000 ETH
                                </p>
                              </div>
                              <div className="mt-5 flex w-full items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <p className="paragraph2_regular  text-grey-300">
                                    Burnt fees
                                  </p>
                                  <InfoTooltip message={"test jkghjsdkf"} />
                                </div>
                                <p className="paragraph2_regular  text-white">
                                  0.000000005700850947 ETH
                                </p>
                              </div>
                              <div className="mt-5 flex w-full items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <p className="paragraph2_regular  text-grey-300">
                                    Priority fee
                                  </p>
                                  <InfoTooltip message={"Priority fee"} />
                                </div>
                                <p className="paragraph2_regular  text-white">
                                  0.000005088936507818 ETH
                                </p>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
                <div className="mt-12">
                  <div
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-grey-500 p-4"
                    role="presentation"
                  >
                    <div className="flex items-center gap-1">
                      <p className="supportText_regular text-grey-300">
                        Parent Block’s hash
                      </p>
                      <InfoTooltip message={"Size of the blocks in bytes"} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/eth.svg"
                        alt="icon"
                        width={14}
                        height={14}
                      />
                      <Link
                        href={`/address/0xDB1a1Ac7d2C61Fd1B03B412e1A0183A3a862C1e3`}
                        className="text-center text-grey-300 hover:underline"
                      >
                        {shortenAddress(
                          "0xDB1a1Ac7d2C61Fd1B03B412e1A0183A3a862C1e3"
                        )}
                      </Link>
                      <CopyToClipboard
                        copyText={"0xDB1a1Ac7d2C61Fd1B03B412e1A0183A3a862C1e3"}
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex items-start">
                    <img
                      alt="subdirectoryRight icon"
                      loading="lazy"
                      width={32}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className=""
                      src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/subdirectory_right.svg"
                      style={{ color: "transparent" }}
                    />
                    <div
                      className="bg-secondary-200 relative w-full rounded-2xl px-6 py-2 md:p-6 flex cursor-pointer items-end justify-between bg-grey-800"
                      role="presentation"
                    >
                      <div>
                        <div className="mb-2 flex items-center gap-1">
                          <p className="supportText_regular text-grey-300">
                            Block ID
                          </p>
                          <InfoTooltip message={"Block id"} />
                        </div>
                        <p className="supportText_regular text-white">
                          0xe6f14f38736d9...68b5f4eec960a6e
                        </p>
                      </div>
                      <CopyToClipboard
                        copyText={"0xDB1a1Ac7d2C61Fd1B03B412e1A0183A3a862C1e3"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-7">
        <div className="mb-10 grid auto-cols-fr grid-flow-row gap-2.5 ">
          <BlockTransactions />
        </div>
      </div>
    </div>
  );
};

export default BlockDetails;
