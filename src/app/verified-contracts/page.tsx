"use client";
import React from "react";
import CircularProgressBar from "@/assets/icons/circularProgressBar.svg";
import ContractsList from "./ContractsTable";

const VerifiedContracts = () => {
  return (
    <>
      <div className="mb-8 grid grid-cols-1 gap-2.5 md:mb-10 md:grid-cols-3">
        <div>
          <div
            className=" relative w-full rounded-2xl px-6 py-2 md:p-6 h-full rounded-4xl bg-blackGradient !p-6 hover:shadow-down"
            role="presentation"
          >
            <p className="font-normal mb-4 text-grey-300 text-sm">
              Verified contracts
            </p>
            <div className="">
              <p className="font-bold mb-2 text-white text-4xl leading-normal">
                2218
              </p>
              <p className="font-normal text-grey-300">of 28745</p>
            </div>
            <div className="absolute right-4 top-1/2 h-[114px] w-[114px] -translate-y-1/2 md:right-6 md:top-1/2">
              <div data-test-id="CircularProgressbarWithChildren">
                <div className="relative w-full h-full">
                  <CircularProgressBar />
                  <div
                    data-test-id="CircularProgressbarWithChildren__children"
                    className="absolute w-full h-full flex -mt-[100%] flex-col justify-center items-center"
                  >
                    <strong className="gradientText bg-clip-text text-transparent font-bold !bg-blueGradient">
                      7.7%
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="bg-secondary-200 relative w-full rounded-2xl px-6 py-2 md:p-6 h-full rounded-4xl bg-blackGradient !p-6 hover:shadow-down"
            role="presentation"
          >
            <p className="paragraph2_regular mb-4 text-grey-300">
              Recent growth in 24h
            </p>
            <ul>
              <li className="mb-4 flex items-center justify-between">
                <p className="paragraph2_regular text-grey-500">
                  All contracts
                </p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-success-600">+ 26</p>
                  <div
                    role="presentation"
                    className="inline-flex w-fit items-center justify-center gap-x-1 rounded-lg px-2 py-1 bg-grey-800 "
                  >
                    <img
                      className="h-4 w-4 "
                      src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/arrow_up_neutral.svg"
                      alt=""
                    />
                    <p className="font-normal text-xs capitalize text-white  ">
                      0.09%
                    </p>
                  </div>
                </div>
              </li>
              <li className="mb-4 flex items-center justify-between">
                <p className="paragraph2_regular text-grey-500">Verified</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-success-600">+ 13</p>
                  <div
                    role="presentation"
                    className="inline-flex w-fit items-center justify-center gap-x-1 rounded-lg px-2 py-1 bg-grey-800 "
                  >
                    <img
                      className="h-4 w-4 "
                      src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/arrow_up_neutral.svg"
                      alt=""
                    />
                    <p className="font-normal text-xs capitalize text-white  ">
                      0.59%
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ContractsList />
    </>
  );
};

export default VerifiedContracts;
