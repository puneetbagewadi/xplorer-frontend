import { InfoIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import SwiperSlider from "../swiper/swiper-slider";
import { SlidePrevButton, SlideNextButton } from "../swiper/custom-navigation";

const index = () => {
  return (
    <div className="grid auto-cols-fr grid-flow-row grid-cols-1 gap-8 pb-4 pt-20 lg:grid-cols-2 lg:pt-4">
      {/* left content */}
      <div className="sticky left-0 top-24 z-9 lg:h-[calc(100vh-80px)]">
        <p className="mt-10 text-textDark-500">Hey there!</p>
        <h1 className=" mb-8 text-[28px] text-text-800">
          What are you looking for?
        </h1>
        <div className="relative mt-2 rounded-2xl shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="search"
            name="search"
            type="text"
            placeholder="Search for address, transaction, token etc..."
            className="block w-full !shadow-none !rounded-2xl !h-auto !border-1 !border-grey-300 p-4 pl-10 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white"
          />
        </div>
      </div>
      {/* Right content */}
      <div className="grid auto-cols-fr grid-flow-row gap-2 md:mt-10 md:gap-2">
        <div className="mb-2 flex items-center gap-x-2 md:mb-[14px]">
          <Image
            src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/insights_icon.svg"
            alt="insights"
            width={20}
            height={20}
          />
          <p className="paragraph2_regular text-text-500">
            Some Interesting insights for you!
          </p>
        </div>
        <div
          className="relative px-6 md:p-6 flex h-full w-full justify-between overflow-hidden rounded-3xl bg-primaryGradient py-6 pr-0 shadow-down "
          role="presentation"
        >
          <div className="flex flex-col">
            <p className="pb-4 text-grey-300 text-xs">
              Single transaction costs just around
            </p>
            <p className="pb-8 text-white text-2xl">
              $0.00053
              <p className="text-slate-500 text-base">(0.01 Gwei)</p>
            </p>
            <div className="max-w-[60%] items-start gap-2 md:flex md:max-w-[80%]">
              <p className="relative -left-2 pb-2"></p>
              <p className="text-xs mt-2 text-slate-300 md:mt-0">
                {" "}
                For a single ☕️, you can savor 5660 transactions on Manta,
                While only 4 on Ethereum. 🤯
              </p>
            </div>
          </div>

          <div className="md:self-center">
            <div className="absolute bottom-0 right-0 object-cover md:bottom-4">
              <svg width="124" height="132" viewBox="0 0 124 132" fill="none">
                <path
                  opacity="0.3"
                  d="M127.049 25.3346L127.149 25.2108L98.3879 1.62345L89.328 12.9367L104.191 25.1235C100.504 27.3919 97.576 30.7309 95.7884 34.7064C94.0008 38.682 93.4359 43.1101 94.1671 47.415C95.2457 53.9598 99.6966 59.6164 105.456 62.7832C111.891 66.3286 117.536 66.001 122.555 64.1955L122.447 109.201C122.456 110.406 122.167 111.595 121.608 112.659C121.049 113.723 120.236 114.63 119.244 115.296C118.252 115.962 117.111 116.368 115.925 116.476C114.74 116.583 113.546 116.39 112.452 115.913C111.596 115.542 110.819 115.006 110.166 114.333C109.501 113.659 108.974 112.858 108.615 111.978C108.256 111.097 108.072 110.154 108.073 109.201L108.239 94.6407C108.246 91.7751 107.692 88.9365 106.61 86.2887C105.528 83.641 103.938 81.2365 101.933 79.2143C99.9296 77.1817 97.5503 75.569 94.9309 74.4685C92.3115 73.3679 89.5035 72.8012 86.6676 72.8005H79.4772V14.5601C79.4772 10.6985 77.962 6.99511 75.2651 4.26456C72.5682 1.53401 68.9104 0 65.0964 0H14.7636C10.9496 0 7.29177 1.53401 4.59485 4.26456C1.89793 6.99511 0.382813 10.6985 0.382812 14.5601V116.481C0.382813 120.342 1.89793 124.046 4.59485 126.776C7.29177 129.507 10.9496 131.041 14.7636 131.041H65.0964C68.9104 131.041 72.5682 129.507 75.2651 126.776C77.962 124.046 79.4772 120.342 79.4772 116.481V87.3606H86.6676C87.6454 87.3606 88.5874 87.5572 89.479 87.9285C91.1903 88.687 92.5544 90.0733 93.2971 91.8088C93.6701 92.705 93.8609 93.6682 93.858 94.6407L93.6854 109.201C93.6854 112.157 94.2534 115.018 95.3823 117.704C96.4681 120.317 98.0284 122.654 99.9914 124.627C101.987 126.67 104.365 128.289 106.986 129.39C109.607 130.491 112.419 131.052 115.257 131.041C118.176 131.041 120.994 130.473 123.655 129.323C126.229 128.231 128.544 126.651 130.493 124.656C132.506 122.632 134.102 120.224 135.19 117.571C136.277 114.918 136.834 112.073 136.828 109.201L137 43.6803C136.993 40.023 136.078 36.4261 134.339 33.2204C132.6 30.0147 130.093 27.303 127.049 25.3346ZM65.0964 36.4003H14.7636V14.5601H65.0964V36.4003ZM115.429 50.9604C113.522 50.9604 111.693 50.1934 110.345 48.8281C108.996 47.4628 108.239 45.6111 108.239 43.6803C108.239 41.7495 108.996 39.8978 110.345 38.5326C111.693 37.1673 113.522 36.4003 115.429 36.4003C117.336 36.4003 119.165 37.1673 120.514 38.5326C121.862 39.8978 122.62 41.7495 122.62 43.6803C122.62 45.6111 121.862 47.4628 120.514 48.8281C119.165 50.1934 117.336 50.9604 115.429 50.9604Z"
                  fill="#4D535C"
                ></path>
                <mask
                  id="mask0_253_6947"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="137"
                  height="132"
                >
                  <path
                    d="M127.018 25.3346L127.119 25.2109L98.2773 1.62345L89.1923 12.9367L104.096 25.1235C100.399 27.3919 97.4632 30.731 95.6706 34.7065C93.878 38.682 93.3116 43.1101 94.0449 47.4151C95.1264 53.9598 99.5896 59.6164 105.365 62.7833C111.818 66.3287 117.479 66.0011 122.511 64.1956L122.403 109.201C122.412 110.406 122.123 111.595 121.562 112.659C121.001 113.724 120.187 114.63 119.192 115.296C118.197 115.963 117.053 116.368 115.864 116.476C114.674 116.583 113.477 116.39 112.381 115.913C111.522 115.542 110.743 115.006 110.088 114.333C109.421 113.659 108.893 112.859 108.533 111.978C108.173 111.097 107.988 110.154 107.99 109.201L108.156 94.6408C108.163 91.7753 107.608 88.9366 106.522 86.2888C105.437 83.6411 103.843 81.2366 101.832 79.2144C99.8233 77.1818 97.4374 75.5691 94.8107 74.4686C92.1841 73.368 89.3683 72.8013 86.5244 72.8006H79.3141V14.5601C79.3141 10.6985 77.7947 6.99512 75.0903 4.26456C72.3859 1.53401 68.7179 0 64.8933 0H14.4207C10.5961 0 6.92815 1.53401 4.22374 4.26456C1.51932 6.99512 0 10.6985 0 14.5601V116.481C0 120.343 1.51932 124.046 4.22374 126.777C6.92815 129.507 10.5961 131.041 14.4207 131.041H64.8933C68.7179 131.041 72.3859 129.507 75.0903 126.777C77.7947 124.046 79.3141 120.343 79.3141 116.481V87.3608H86.5244C87.505 87.3608 88.4496 87.5573 89.3437 87.9286C91.0597 88.6871 92.4276 90.0735 93.1724 91.8089C93.5464 92.7051 93.7377 93.6683 93.7348 94.6408L93.5618 109.201C93.5618 112.157 94.1314 115.018 95.2634 117.704C96.3522 120.318 97.9168 122.655 99.8852 124.627C101.887 126.67 104.271 128.289 106.9 129.39C109.528 130.491 112.347 131.053 115.193 131.041C118.12 131.041 120.947 130.473 123.615 129.323C126.196 128.231 128.518 126.651 130.472 124.657C132.49 122.633 134.091 120.224 135.181 117.571C136.272 114.918 136.83 112.073 136.824 109.201L136.997 43.6804C136.99 40.023 136.072 36.4262 134.329 33.2204C132.585 30.0147 130.071 27.303 127.018 25.3346ZM64.8933 36.4003H14.4207V14.5601H64.8933V36.4003ZM115.366 50.9604C113.454 50.9604 111.62 50.1934 110.267 48.8282C108.915 47.4629 108.156 45.6112 108.156 43.6804C108.156 41.7496 108.915 39.8979 110.267 38.5326C111.62 37.1673 113.454 36.4003 115.366 36.4003C117.278 36.4003 119.112 37.1673 120.464 38.5326C121.817 39.8979 122.576 41.7496 122.576 43.6804C122.576 45.6112 121.817 47.4629 120.464 48.8282C119.112 50.1934 117.278 50.9604 115.366 50.9604Z"
                    fill="#1E293B"
                  ></path>
                </mask>
                <g id="myRectGroup" mask="url(#mask0_253_6947)">
                  <rect
                    x="-1.48828"
                    y="120"
                    width="139.976"
                    height="100%"
                    fill="white"
                    transform-origin="68.49971890449524px 200px"
                  ></rect>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* ----------- */}

        <div className="flex gap-3">
          <div className="flex flex-col p-6 bg-primaryGradient flex-1 rounded-3xl text-white justify-between">
            <span className="text-grey-300 text-xs">Native Token</span>
            <Image
              src="/assets/icons/eth.svg"
              alt="eth"
              width={100}
              height={100}
            />

            <div>
              <p className="text-grey-300 text-base font-bold">ETH</p>
              <p className="text-white text-2xl font-bold">$2,451.34</p>
            </div>
          </div>

          <div className="flex flex-col bg-primaryGradient flex-1 rounded-3xl">
            <div className="flex justify-between bg-white p-6 rounded-t-3xl">
              <p className="flex flex-col gap-4">
                <span className="flex items-center">
                  Deposits
                  <InfoIcon className="h-3 w-3 ml-2" />
                </span>

                <span className="font-bold  text-2xl">17,200</span>
              </p>
              <Image
                src="/assets/icons/bigArrowDown.svg"
                alt="deposit"
                width={50}
                height={50}
              />
            </div>
            <div className="flex justify-between p-6 text-white">
              <p className="flex flex-col gap-4">
                <span className="flex items-center">
                  Witdrawals
                  <InfoIcon className="h-3 w-3 ml-2" />
                </span>

                <span className="font-bold text-2xl">56,491</span>
              </p>
              <Image
                src="/assets/icons/bigArrowUp.svg"
                alt="withdrawal"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* ----------- */}

        <div className="bg-secondary-200 relative w-full rounded-2xl px-6 py-2 md:p-6 h-full !p-6 bg-white">
          <div className="relative mb-4 flex items-center justify-between">
            <p className="text-xs text-text-500">Total transactions on chain</p>
            <div className="absolute right-0">
              <Image
                alt="more options"
                width={24}
                height={24}
                src="/assets/icons/chevronRight.svg"
              />
            </div>
          </div>
          <p className="font-bold text-2xl text-grey-800 ">67,905,888</p>
          <div className="h-24"></div>
          <p className="text-sm mt-4 text-text-500">
            On average 8.31 Transactions are processed every second
          </p>
        </div>

        {/* ----------- */}

        <div className="bg-white relative w-full rounded-2xl px-6 md:p-6 py-6 pb-2 shadow-down md:pb-0 h-40 overflow-hidden">
          <div className="mb-1 flex items-center gap-0.5 md:mb-5">
            <Image
              src="/assets/icons/bulb.svg"
              alt="bulb"
              width={15}
              height={15}
            />
            <p className="text-xs text-text-500">Did you know?</p>
          </div>
          <div className="h-20 relative">
            <SwiperSlider />
          </div>
          <div className="absolute top-3 right-3">
            <SlidePrevButton />
            <SlideNextButton />
          </div>
        </div>

        {/* ----------- */}
        <div className="flex gap-2 flex-col sm:flex-row">
          <div
            className="relative w-full rounded-2xl px-6 md:p-6 h-full bg-primaryGradient py-6 shadow-down"
            role="presentation"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-300">Ongoing transactions</p>
              <Image
                alt="more options"
                width="24"
                height="24"
                src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/chevron_right_grey.svg"
              />
            </div>
            <div className="flex justify-between">
              <div className="pt-4">
                <Image
                  alt="right-top icon"
                  width="54"
                  height="54"
                  className="mb-4"
                  src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/chains/manta/ongoing_tx_icon.svg"
                />
                <div className="flex w-full items-center gap-2 text-center">
                  <p className="text-center font-bold mb-2 text-white hover:underline">
                    0x0d4...fa9f
                  </p>
                  <Image
                    alt="copy"
                    width="12"
                    height="12"
                    decoding="async"
                    data-nimg="1"
                    className="cursor-pointer "
                    src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/copy_grey_filled.svg"
                  />
                </div>
                <div className="mb-3 flex items-center gap-x-1">
                  <Image
                    alt="subdirectory"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/subdirectory_right.svg"
                  />
                  <p className="text-sm text-slate-300">a few seconds ago</p>
                </div>
                <div className="flex gap-x-1">
                  <Image
                    alt="gas pump"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/gas_pump.svg"
                  />
                  <p className="text-sm text-slate-300">
                    &lt;$0.01 (0.000000835 Gwei)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative w-full rounded-2xl px-6 md:p-6 h-full bg-primaryGradient py-6 shadow-down"
            role="presentation"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-300">Latest block</p>
              <Image
                alt="more options"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/chevron_right_grey.svg"
              />
            </div>
            <div className="flex justify-between">
              <div className="pt-4">
                <Image
                  alt="right-top icon"
                  width="54"
                  height="54"
                  className="mb-4"
                  src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/chains/manta/latest_block_image.svg"
                />
                <div className="flex w-full items-center gap-2 text-center">
                  <p className="text-center font-bold mb-2 text-white hover:underline">
                    3466896
                  </p>
                  <Image
                    alt="copy"
                    width="12"
                    height="12"
                    decoding="async"
                    data-nimg="1"
                    className="cursor-pointer "
                    src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/copy_grey_filled.svg"
                  />
                </div>
                <div className="mb-3 flex items-center gap-x-1">
                  <Image
                    alt="subdirectory"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/subdirectory_right.svg"
                  />
                  <p className="text-sm text-slate-300">24 transactions</p>
                </div>
                <div className="flex gap-x-1">
                  <Image
                    alt="gas pump"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/gas_pump.svg"
                  />
                  <p className="text-sm text-slate-300">$0.01 (6946.3 Gwei)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----------- */}

        <div
          className="bg-secondary-200 relative w-full rounded-2xl px-6 md:p-6  h-full bg-white py-6"
          role="presentation"
        >
          <div className="relative items-center md:flex">
            <div className="mb-4 w-full border-b border-grey-200 pb-4 md:mb-0 md:w-[40%] md:border-none">
              <div className="mb-4 flex items-center gap-1">
                <p className="text-xs text-grey-500">
                  Total contracts built on chain
                </p>
                <Image
                  alt="help icon"
                  width="16"
                  height="16"
                  className="cursor-pointer"
                  src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/help_circle_light.svg"
                />
              </div>
              <div className="flex items-center justify-between gap-2 md:flex-col md:items-start">
                <div>
                  <p className="font-bold text-2xl text-grey-800">206685</p>
                </div>
                <div className="flex items-center gap-1">
                  <div
                    role="presentation"
                    className="inline-flex w-fit items-center justify-center gap-x-1 rounded-lg px-2 py-1 bg-green-50 bg-transparent-green600"
                  >
                    <p className="text-xs capitalize text-green-600">+ 6</p>
                  </div>
                  <p className="text-xs text-text-500"> in last 24 hours</p>
                </div>
              </div>
            </div>
            <div className="absolute left-[33%] hidden h-full w-px bg-grey-200 md:block"></div>
            <div className="relative w-full md:mb-0 md:w-[60%] md:pb-4">
              <div className="flex items-center justify-between">
                <div className="mb-4 flex items-center gap-1">
                  <p className="text-xs text-grey-500">Verified</p>
                  <Image
                    alt="help icon"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    className="cursor-pointer"
                    src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/help_circle_light.svg"
                  />
                </div>
                <Image
                  alt="latest block"
                  width="24"
                  height="24"
                  src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/chevron_right_grey.svg"
                />
              </div>
              <div className="flex items-center justify-between gap-2 md:flex-col md:items-start">
                <p className="font-bold text-grey-800 text-2xl">4735</p>

                <div className="flex items-center gap-1">
                  <div
                    role="presentation"
                    className="inline-flex w-fit items-center justify-center gap-x-1 rounded-lg px-2 py-1 bg-green-50 bg-transparent-green600"
                  >
                    <p className="text-xs capitalize text-green-600  ">+ 4</p>
                  </div>
                  <p className="text-xs text-text-500"> in last 24 hours</p>
                </div>
              </div>
              <div className="right-0 top-1/2 hidden h-[114px] w-[114px] -translate-y-1/2 md:absolute">
                {/* <svg>
                  <defs>
                    <linearGradient id="" gradientTransform="rotate(90)">
                      <stop offset="0" stop-color="#01AEE8"></stop>
                      <stop offset="1" stop-color="#7270F7"></stop>
                    </linearGradient>
                  </defs>
                </svg> */}
                <div data-test-id="CircularProgressbarWithChildren">
                  <div className="relative w-full h-full">
                    {/* <svg
                      className="CircularProgressbar "
                      viewBox="0 0 100 100"
                      data-test-id="CircularProgressbar"
                    >
                      <path
                        className="CircularProgressbar-trail"
                        d="
      M 50,50
      m 0,-39
      a 39,39 0 1 1 0,78
      a 39,39 0 1 1 0,-78
    "
                        stroke-width="22"
                        fill-opacity="0"
                        style="stroke: rgb(226, 232, 240); stroke-dasharray: 245.044px, 245.044px; stroke-dashoffset: 0px;"
                      ></path>
                      <path
                        className="CircularProgressbar-path"
                        d="
      M 50,50
      m 0,-39
      a 39,39 0 1 1 0,78
      a 39,39 0 1 1 0,-78
    "
                        stroke-width="22"
                        fill-opacity="0"
                        style='stroke: url("#"); stroke-dasharray: 245.044px, 245.044px; stroke-dashoffset: 239.408px;'
                      ></path>
                    </svg> */}

                    <strong className="gradientText font-bold ">2.3%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----------- */}

        <div className="flex gap-2 flex-col sm:flex-row">
          <div
            className="bg-secondary-200 relative w-full rounded-2xl p-6 md:p-6 h-full bg-primaryGradient shadow-down "
            role="presentation"
          >
            <div className="flex items-center justify-between pb-4">
              <p className="supportText_regular text-slate-300">
                Total accounts
              </p>
              <Image
                alt="more options"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/chevron_right_grey.svg"
              />
            </div>
            <p className="heading2_bold text-white">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9998 2.66667C8.77184 2.66667 2.6665 8.77201 2.6665 16C2.6665 23.228 8.77184 29.3333 15.9998 29.3333C23.2278 29.3333 29.3332 23.228 29.3332 16C29.3332 8.77201 23.2278 2.66667 15.9998 2.66667ZM15.9998 9.33334C18.3025 9.33334 19.9998 11.0293 19.9998 13.3333C19.9998 15.6373 18.3025 17.3333 15.9998 17.3333C13.6985 17.3333 11.9998 15.6373 11.9998 13.3333C11.9998 11.0293 13.6985 9.33334 15.9998 9.33334ZM9.19184 22.3627C10.3878 20.6027 12.3825 19.4293 14.6665 19.4293H17.3332C19.6185 19.4293 21.6118 20.6027 22.8078 22.3627C21.1038 24.1867 18.6865 25.3333 15.9998 25.3333C13.3132 25.3333 10.8958 24.1867 9.19184 22.3627Z"
                  fill="url(#paint0_linear_3363_52887)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_3363_52887"
                    x1="4.57126"
                    y1="2.44224"
                    x2="29.7799"
                    y2="27.6824"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#01AEE8"></stop>
                    <stop offset="1" stop-color="#7270F7"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <span className="heading2_bold inline-block pt-2 text-white">
                1.67M{" "}
              </span>
            </p>
            <p className="paragraph2_regular pb-8 text-white md:pb-4">
              interacted on chain today
            </p>
            <div className="absolute bottom-6 flex items-center gap-[6px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 16.6667H12.5V18.3333H7.5V16.6667ZM14.0883 11.4267C14.9467 10.4217 15.8333 9.38249 15.8333 7.49999C15.8333 4.28416 13.2158 1.66666 10 1.66666C6.78416 1.66666 4.16666 4.28416 4.16666 7.49999C4.16666 9.40416 5.05583 10.44 5.9175 11.4417C6.21583 11.79 6.525 12.1508 6.82083 12.5658C6.94083 12.7375 7.1375 13.3958 7.31333 14.1667H6.65333V15.8333H13.3467V14.1667H12.6883C12.8658 13.3942 13.0633 12.7342 13.1825 12.5625C13.4758 12.1433 13.7875 11.7792 14.0883 11.4267Z"
                  fill="#01AEE8"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_1545_755"
                    x1="5"
                    y1="1.52639"
                    x2="19.8101"
                    y2="11.9064"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#01AEE8"></stop>
                    <stop offset="1" stop-color="#7270F7"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <p className="supportText_regular text-slate-500">
                That’s almost a small town
              </p>
            </div>
          </div>

          <div
            className="relative w-full rounded-2xl p-6 md:p-6 h-full bg-white shadow-down"
            role="presentation"
          >
            <div className="flex items-center justify-between pb-4">
              <p className="supportText_regular text-slate-500">
                Most valued accounts
              </p>
              <Image
                alt="more options"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/chevron_right_grey.svg"
              />
            </div>
            <div className="pb-5 ">
              <div className="flex items-center justify-start gap-x-4">
                <p className="heading2_bold text-slate-300">#1</p>
                <div>
                  <div className="flex w-full items-center gap-2 text-center">
                    <a href="/address/0xF977814e90dA44bFA03b6295A0616a897441aceC">
                      <p className="text-center paragraph2_bold  text-slate-800 hover:underline">
                        0xF977...41aceC
                      </p>
                    </a>
                    <Image
                      alt="copy"
                      width="12"
                      height="12"
                      decoding="async"
                      data-nimg="1"
                      className="cursor-pointer "
                      src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/copy_grey_filled.svg"
                    />
                  </div>
                  <p className="supportText_regular text-slate-500">
                    29,357.93 ETH
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-5 ">
              <div className="flex items-center justify-start gap-x-4">
                <p className="heading2_bold text-slate-300">#2</p>
                <div>
                  <div className="flex w-full items-center gap-2 text-center">
                    <a href="/address/0xC882b111A75C0c657fC507C04FbFcD2cC984F071">
                      <p className="text-center paragraph2_bold  text-slate-800 hover:underline">
                        0xC882...84F071
                      </p>
                    </a>
                    <Image
                      alt="copy"
                      width="12"
                      height="12"
                      decoding="async"
                      data-nimg="1"
                      className="cursor-pointer "
                      src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/copy_grey_filled.svg"
                    />
                  </div>
                  <p className="supportText_regular text-slate-500">
                    4,518.19 ETH
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-5 ">
              <div className="flex items-center justify-start gap-x-4">
                <p className="heading2_bold text-slate-300">#3</p>
                <div>
                  <div className="flex w-full items-center gap-2 text-center">
                    <a href="/address/0x0D0707963952f2fBA59dD06f2b425ace40b492Fe">
                      <p className="text-center paragraph2_bold  text-slate-800 hover:underline">
                        0x0D07...b492Fe
                      </p>
                    </a>
                    <Image
                      alt="copy"
                      width="12"
                      height="12"
                      decoding="async"
                      data-nimg="1"
                      className="cursor-pointer "
                      src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/copy_grey_filled.svg"
                    />
                  </div>
                  <p className="supportText_regular text-slate-500">
                    472.8 ETH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----------- */}
      </div>
    </div>
  );
};

export default index;
