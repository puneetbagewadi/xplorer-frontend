"use client"
import React from "react"
import Image from "next/image"
import HoldersTransfersTab from "./HoldersTransfersTab"
import CopyToClipboard from "@/lib/helpers/CopyToClipboard"
import UniqueAvatar from "@/components/unique-avatar"

const TokenPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
      <div className="col-span-1 row-start-1 md:col-span-8">
        <div className="relative h-auto w-full rounded-2xl bg-primaryGradient !p-0 px-6 py-2 !pb-4 md:p-6 lg:!p-6">
          <div className="flex grid-cols-12 flex-col gap-3 md:grid md:gap-10">
            <div className="col-span-8">
              <div className="flex h-full w-full grid-cols-12 flex-col md:grid md:w-auto md:gap-5">
                <div className="col-span-6 w-full">
                  <div className="relative flex h-[200px] items-center justify-center overflow-hidden rounded-xl py-10 md:h-full">
                    <img
                      src="https://assets.coingecko.com/coins/images/32212/thumb/wETH_32.png?1696817415"
                      alt="WETH"
                      width="124"
                      height="124"
                      className="relative z-[1] rounded-full"
                    />
                    <div className="absolute left-0 top-0 h-full w-full bg-white opacity-30"></div>
                    <img
                      src="https://assets.coingecko.com/coins/images/32212/thumb/wETH_32.png?1696817415"
                      alt="WETH"
                      className="absolute left-0 top-0 z-[0] w-full object-cover blur-[28px] md:h-full"
                    />
                  </div>
                </div>
                <div className="relative col-span-6 flex flex-col items-start px-6 pt-10 md:justify-between md:px-0 md:pt-0">
                  <div>
                    <h3 className="mb-2 w-[65%] text-2xl font-bold capitalize text-white md:w-auto">
                      Wrapped Ether (WETH)
                    </h3>
                    <ul className="flex list-none items-center space-x-8 md:mb-16">
                      <li className="false relative text-white">
                        <p className="text-xs text-grey-300">ERC-20</p>
                      </li>
                      <li className="relative text-white before:absolute before:left-[-26px] before:top-1/2 before:mx-2 before:inline before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-grey-500 before:content-['']">
                        <p className="text-xs text-grey-300">Decimals: 18</p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-2.5 mr-[25%]   pb-5"></div>
                    <p className="mb-1 text-sm text-grey-500">Contract:</p>
                    <div className="flex items-center gap-2">
                      <p className="gap-2 text-xs font-semibold text-white">
                        <span className="mr-2">0x0Dc...1746</span>
                        <CopyToClipboard copyText={"address"} />
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-0 top-10 block pr-6 md:hidden">
                    <div className="mb-7 flex items-center gap-x-2">
                      <div
                        role="presentation"
                        className="h-9 w-9 cursor-pointer rounded-lg bg-transparent-blue p-2"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 9.16667H9.16667V2.5H2.5V9.16667ZM4.16667 4.16667H7.5V7.5H4.16667V4.16667ZM2.5 17.5H9.16667V10.8333H2.5V17.5ZM4.16667 12.5H7.5V15.8333H4.16667V12.5ZM10.8333 2.5V9.16667H17.5V2.5H10.8333ZM15.8333 7.5H12.5V4.16667H15.8333V7.5ZM10.8417 10.8333H12.5083V12.5H10.8417V10.8333ZM12.5083 12.5H14.175V14.1667H12.5083V12.5ZM10.8417 14.1667H12.5083V15.8333H10.8417V14.1667ZM14.175 14.1667H15.8417V15.8333H14.175V14.1667ZM15.8417 15.8333H17.5083V17.5H15.8417V15.8333ZM12.5083 15.8333H14.175V17.5H12.5083V15.8333ZM14.175 10.8333H15.8417V12.5H14.175V10.8333ZM15.8417 12.5H17.5083V14.1667H15.8417V12.5Z"
                            fill="#01AEE8"
                          ></path>
                        </svg>
                      </div>
                      <div
                        role="presentation"
                        className="h-9 w-9 cursor-pointer rounded-lg bg-transparent-blue p-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M16.6665 1.66699H8.33317C7.414 1.66699 6.6665 2.41449 6.6665 3.33366V6.66699H3.33317C2.414 6.66699 1.6665 7.41449 1.6665 8.33366V16.667C1.6665 17.5862 2.414 18.3337 3.33317 18.3337H11.6665C12.5857 18.3337 13.3332 17.5862 13.3332 16.667V13.3337H16.6665C17.5857 13.3337 18.3332 12.5862 18.3332 11.667V3.33366C18.3332 2.41449 17.5857 1.66699 16.6665 1.66699ZM3.33317 16.667V8.33366H11.6665L11.6682 16.667H3.33317ZM16.6665 11.667H13.3332V8.33366C13.3332 7.41449 12.5857 6.66699 11.6665 6.66699H8.33317V3.33366H16.6665V11.667Z"
                            fill="#01AEE8"
                          ></path>
                        </svg>
                      </div>
                      <div
                        role="presentation"
                        className="relative h-9 w-9 cursor-pointer rounded-lg bg-transparent-yellow500  p-2"
                      >
                        <img
                          className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2"
                          src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/metamask.png"
                          alt="metamask"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ----- */}

            <div className="col-span-4 flex flex-col items-end px-6 md:px-0">
              <div className="hidden md:block">
                <div className="mb-7 flex items-center gap-x-2">
                  <div
                    role="presentation"
                    className="h-9 w-9 cursor-pointer rounded-lg bg-transparent-blue p-2"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 9.16667H9.16667V2.5H2.5V9.16667ZM4.16667 4.16667H7.5V7.5H4.16667V4.16667ZM2.5 17.5H9.16667V10.8333H2.5V17.5ZM4.16667 12.5H7.5V15.8333H4.16667V12.5ZM10.8333 2.5V9.16667H17.5V2.5H10.8333ZM15.8333 7.5H12.5V4.16667H15.8333V7.5ZM10.8417 10.8333H12.5083V12.5H10.8417V10.8333ZM12.5083 12.5H14.175V14.1667H12.5083V12.5ZM10.8417 14.1667H12.5083V15.8333H10.8417V14.1667ZM14.175 14.1667H15.8417V15.8333H14.175V14.1667ZM15.8417 15.8333H17.5083V17.5H15.8417V15.8333ZM12.5083 15.8333H14.175V17.5H12.5083V15.8333ZM14.175 10.8333H15.8417V12.5H14.175V10.8333ZM15.8417 12.5H17.5083V14.1667H15.8417V12.5Z"
                        fill="#01AEE8"
                      ></path>
                    </svg>
                  </div>
                  <div
                    role="presentation"
                    className="h-9 w-9 cursor-pointer rounded-lg bg-transparent-blue p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.6665 1.66699H8.33317C7.414 1.66699 6.6665 2.41449 6.6665 3.33366V6.66699H3.33317C2.414 6.66699 1.6665 7.41449 1.6665 8.33366V16.667C1.6665 17.5862 2.414 18.3337 3.33317 18.3337H11.6665C12.5857 18.3337 13.3332 17.5862 13.3332 16.667V13.3337H16.6665C17.5857 13.3337 18.3332 12.5862 18.3332 11.667V3.33366C18.3332 2.41449 17.5857 1.66699 16.6665 1.66699ZM3.33317 16.667V8.33366H11.6665L11.6682 16.667H3.33317ZM16.6665 11.667H13.3332V8.33366C13.3332 7.41449 12.5857 6.66699 11.6665 6.66699H8.33317V3.33366H16.6665V11.667Z"
                        fill="#01AEE8"
                      ></path>
                    </svg>
                  </div>
                  <div
                    role="presentation"
                    className="relative h-9 w-9 cursor-pointer rounded-lg bg-transparent-yellow500 p-2"
                  >
                    <img
                      className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2"
                      src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/metamask.png"
                      alt="metamask"
                    />
                  </div>
                </div>
              </div>
              <ul className="flex w-full flex-col gap-1">
                <li className="relative rounded-xl bg-neutral-50/5 px-[22px] py-3">
                  <p className="mb-0.5 text-xs text-grey-500">Transfers</p>
                  <p className="mb-0.5 text-sm text-grey-300">10,606,290</p>
                  <img
                    src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/chains/manta/transfer.svg"
                    className="absolute right-0 top-1 "
                    alt="Transfers"
                  />
                </li>
                <li className="relative rounded-xl bg-neutral-50/5 px-[22px] py-3">
                  <p className="mb-0.5 text-xs text-grey-500">Holders</p>
                  <p className="mb-0.5 text-sm text-grey-300">19,183</p>
                  <img
                    src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/chains/manta/holders.svg"
                    className="absolute right-0 top-2 "
                    alt="Holders"
                  />
                </li>
                <li className="relative rounded-xl bg-neutral-50/5 px-[22px] py-3">
                  <p className="mb-0.5 text-xs text-grey-500">
                    Max Total Supply
                  </p>
                  <p className="mb-0.5 text-sm text-grey-300">1109.05 WETH</p>
                  <img
                    src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/chains/manta/total_supply.svg"
                    className="absolute right-0 top-2 "
                    alt="Max Total Supply"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------- */}

      <div className="col-span-1 row-span-2 md:col-span-4 md:row-start-1 md:row-end-7">
        <div className="grid auto-cols-fr grid-flow-row gap-2.5 md:mb-10">
          <div className="relative w-full rounded-2xl bg-white px-4 py-6 shadow-md md:p-6">
            <p className="text-xs text-grey-500">Who holds the most tokens?</p>
            <div className="mt-6">
              <div className="mb-9 last:mb-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 md:items-start">
                    <UniqueAvatar
                      text={"0x63D83FBAE0EE891328ba7130A1920a46fe54007D"}
                    />
                    <div className="flex flex-col">
                      <p className="pb-1 font-bold text-grey-800">
                        Excursionist #42333
                      </p>
                      <p className="flex gap-2 break-words text-center text-xs text-grey-500">
                        <span className="cursor-pointer hover:underline">
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
                  <div className="relative flex items-center gap-2">
                    <p className="text-xs font-semibold text-grey-800">
                      13.1 %
                    </p>
                    {/* <CircularProgressBar className="flex-1" /> */}
                    <Image
                      src="/assets/icons/circularProgressBar.svg"
                      alt="holder 1"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* -------- */}

              <div className="mb-9 last:mb-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 md:items-start">
                    <UniqueAvatar
                      text={"0x63D83FBAE0EE891328ba7130A1920a46fe54008D"}
                    />
                    <div className="flex flex-col">
                      <p className="pb-1 font-bold text-grey-800">
                        Discoverer #16950
                      </p>
                      <p className="flex gap-2 break-words text-center text-xs text-grey-500">
                        <span className="cursor-pointer hover:underline">
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
                  <div className="relative flex items-center gap-2">
                    <p className="text-xs font-semibold text-grey-800">8.3 %</p>
                    {/* <CircularProgressBar className="flex-1" /> */}
                    <Image
                      src="/assets/icons/circularProgressBar.svg"
                      alt="holder 2"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* --------- */}

              <div className="mb-9 last:mb-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-2 md:items-start">
                    <UniqueAvatar text="0x5aC1Da91Ec337a133C9E915ecE908e61dD1a2E04" />
                    <div className="flex flex-col">
                      <p className="pb-1 font-bold text-grey-800">
                        Itinerant #30658
                      </p>
                      <p className="flex gap-2 break-words text-center text-xs text-grey-500">
                        <span className="cursor-pointer hover:underline">
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
                  <div className="relative flex items-center gap-2">
                    <p className="text-xs font-semibold text-grey-800">5.5 %</p>
                    {/* <CircularProgressBar className="flex-1" /> */}
                    <Image
                      src="/assets/icons/circularProgressBar.svg"
                      alt="holder 3"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* ---------- */}
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-3 md:col-span-8 md:row-start-2">
        <HoldersTransfersTab tabNames={["transfers", "holders", "contract"]} />
      </div>
    </div>
  )
}

export default TokenPage
