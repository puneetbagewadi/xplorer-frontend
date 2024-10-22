"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
import BlockImage from "@/assets/icons/block_cube.svg";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";
import { ContractCallDetails } from "./ContractCallDetails";

const TransactionSuccessDetails = () => {
  return (
    <div className=" grid-cols-auto			 gap-2.5 md:grid">
      <div className="col-span-5 mb-4">
        <div className="sticky left-0 top-24 lg:h-[calc(100vh-80px)]">
          <div>
            <div className=" relative w-full rounded-2xl px-6 py-2 md:p-6 !p-0 shadow-down">
              <div className="bg-success-600 rounded-t-[28px] px-6">
                <img
                  src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/contract_success.svg"
                  alt="swap"
                />
              </div>
            </div>
            <div className=" relative w-full rounded-2xl py-2 md:p-6 rounded-t-none bg-primaryGradient !px-4 pb-4 pt-5">
              <div className="mb-20">
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="heading2_bold mb-2 text-white">
                      Contract Call
                    </h2>
                    <div className="flex items-center gap-x-2">
                      <div className="flex items-center gap-x-1">
                        <img
                          src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/clock_grey.svg"
                          alt="time"
                        />
                      </div>
                      <p className="supportText_regular text-grey-300">
                        30s ago
                      </p>
                      <span className="h-1 w-1 rounded-full bg-grey-300 "></span>
                      <p className="supportText_regular text-grey-300">
                        Oct-21-2024
                      </p>
                      <span className="h-1 w-1 rounded-full bg-grey-300 "></span>
                      <div className="hidden lg:block">
                        <p className="supportText_regular ">
                          Confirmed in &lt;= 10s
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex w-fit items-center justify-center gap-x-1  px-3 py-[5px]  mb-[2px] rounded-lg bg-success-600 false false false false false">
                    <img
                      className="h-4 w-4 "
                      src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/check_white.svg"
                      alt="Success"
                    />
                    <p className="paragraph2_regular text-xs capitalize text-white false false false false false">
                      Success
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative text-right">
                <ul>
                  <li className="mb-5 flex items-center justify-between last:mb-0">
                    <div className="flex items-center gap-1 relative">
                      <p className="paragraph2_regular text-grey-300">
                        Located in
                      </p>
                      {/* <InfoTooltip message={"Block number containing the transactions"}/> */}
                    </div>
                    <Badge variant={"transparentSlate50"}>
                      <Link
                        href={"/block/3530969"}
                        className="text-center items-center  text-xs  hover:underline flex gap-2"
                      >
                        <BlockImage />

                        <span>3530969</span>
                      </Link>
                    </Badge>
                  </li>
                  <li className="mb-5 flex items-center justify-between last:mb-0">
                    <div className="flex items-center gap-1">
                      <p className=" font-m_plus_2  text-grey-300">
                        Current stage
                      </p>
                      <img
                        alt="help icon"
                        loading="lazy"
                        width={16}
                        height={16}
                        decoding="async"
                        data-nimg={1}
                        className="cursor-pointer"
                        src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/help_circle.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div role="presentation">
                      <Badge variant={"transparentSlate50"}>Confirmed</Badge>
                    </div>
                  </li>
                </ul>
                <div className="mb-9 mt-5">
                  <li className="flex items-start justify-between gap-x-4">
                    <p className="paragraph2_regular text-grey-300">Tags</p>
                    <div className="flex flex-wrap items-center gap-2 md:w-full">
                      <Badge variant={"transparentSlate50"}>
                        Nonce: 1074388
                      </Badge>
                      <Badge variant={"transparentSlate50"}>
                        Transaction type: 2 (EIP-1559)
                      </Badge>
                      <Badge variant={"transparentSlate50"}>Position: 12</Badge>
                    </div>
                  </li>
                </div>
              </div>
              <div
                className="bg-secondary-200 relative w-full rounded-2xl px-6 py-2 md:p-6 flex cursor-pointer items-end justify-between bg-grey-800"
                role="presentation"
              >
                <div>
                  <div className="mb-2 flex items-center gap-1">
                    <p className="supportText_regular text-grey-300">
                      Transaction ID
                    </p>
                    <img
                      alt="help icon"
                      loading="lazy"
                      width={16}
                      height={16}
                      decoding="async"
                      data-nimg={1}
                      className="cursor-pointer"
                      src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/help_circle.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <p className="supportText_regular text-white">
                    0x0490398985e82...b5a73d626cf8672
                  </p>
                </div>
                <CopyToClipboard
                  copyText={"0x0490398985e82...b5a73d626cf8672"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-7">
        <div className="mb-10 grid auto-cols-fr grid-flow-row gap-2.5 ">
          <ContractCallDetails />
        </div>
      </div>
    </div>
  );
};

export default TransactionSuccessDetails;
