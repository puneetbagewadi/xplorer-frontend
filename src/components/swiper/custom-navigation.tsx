"use client";
import React from "react";
import Image from "next/image";

export const SlideNextButton = () => {
  return (
    <button className="swiper-button-front">
      <Image
        src="/assets/icons/chevronRight.svg"
        alt="next"
        width={30}
        height={30}
        className="border border-grey-200 rounded-full"
      />
    </button>
  );
};

export const SlidePrevButton = () => {
  return (
    <button className="swiper-button-back">
      <Image
        src="/assets/icons/chevronRight.svg"
        alt="next"
        width={30}
        height={30}
        className="rotate-180 border border-grey-200 rounded-full"
      />
    </button>
  );
};
