"use client";
import React from "react";
import ArrowBack from "@/assets/icons/arrow_back.svg";
import Link from "next/link";
import Image from "next/image";
import { shortenAddress } from "@/lib/utils";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";

interface NavigationType {
  name: string;
  url: string;
  iconUrl?: string;
}
interface PageNavigation {
  title: string;
  navigationList: NavigationType[];
  address?: string;
}
const PageNavigation = ({ title, navigationList, address }: PageNavigation) => {
  return (
    <div className="flex gap-2 mb-6">
      <Link href={"/"}>
        <ArrowBack />
      </Link>

      <h1 className="text-base font-bold text-gray-800 flex   items-start   flex-col">
        <span className="mb-1">{title}</span>
        <nav className="flex" aria-label="breadcrumb">
          <ul className="flex items-center space-x-2">
            {navigationList.map((item) => (
              <li>
                <Link
                  className="paragraph2_regular block text-link-500 capitalize font-normal"
                  href={item.url}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {address && (
              <li>
                <div className="flex items-center">
                  <span className="h-1 w-1 rounded-full bg-gray-400" />
                  <span className="paragraph2_regular ml-2 block truncate text-text-500">
                    <div className="flex w-full items-center gap-2 text-center">
                      <div className="flex gap-1.5">
                        <Link
                          href={"/"}
                          className="text-center  text-xs  hover:underline"
                        >
                          {shortenAddress(
                            "0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec"
                          )}
                        </Link>
                        <CopyToClipboard
                          copyText={
                            "0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec"
                          }
                        />
                      </div>
                    </div>
                  </span>
                </div>
              </li>
            )}
          </ul>
        </nav>
      </h1>
    </div>
  );
};

export default PageNavigation;
