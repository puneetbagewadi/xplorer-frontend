"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperSlider() {
  return (
    <>
      <Swiper
        autoplay={true}
        direction={"vertical"}
        pagination={{
          clickable: true,
          el: ".swiper-pagination"
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
        navigation={{
          nextEl: ".swiper-button-front",
          prevEl: ".swiper-button-back"
        }}
      >
        <SwiperSlide>
          <div className="flex flex-start items-center gap-3">
            <Image
              src="/assets/icons/arrowCircleGray.svg"
              alt="arrow"
              width={50}
              height={50}
              className="rounded-full !h-14 !w-14"
            />
            <p className="text-sm text-left">
              Manta’s native token, i.e., $MANTA, has seen a ~200% increase in
              value since its launch in 2022.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-start items-center gap-3">
            <Image
              src="/assets/icons/blockCube.svg"
              alt="arrow"
              width={50}
              height={50}
              className="rounded-full !h-14 !w-14"
            />
            <p className="text-sm text-left">
              Manta’s confidential transactions are ~100 times smaller than
              standard Ethereum transactions.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-start items-center gap-3">
            <Image
              src="/assets/icons/blockCube.svg"
              alt="arrow"
              width={50}
              height={50}
              className="rounded-full !h-14 !w-14"
            />
            <p className="text-sm text-left">
              Manta’s TVL currently stands at over $700 million, even in its
              early stages.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-pagination !top-auto cursor-pointer"></div>
    </>
  );
}
