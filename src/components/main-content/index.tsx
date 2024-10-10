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
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="email"
            name="email"
            type="email"
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
      </div>
    </div>
  );
};

export default index;
