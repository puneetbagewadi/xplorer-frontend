import Link from "next/link";
import Image from "next/image";
import { SOCIALS } from "@/constants";
import { Button } from "../ui/button";
import { Circle, InfoIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="p-10 bg-button-cta">
      <div className="flex justify-between gap-6 items-start text-gray-400">
        {/* <!-- Left section --> */}
        <div className="w-2/3 flex flex-col gap-3">
          <p>Made with ❤️ for</p>
          <Image
            src="/assets/icons/manta.svg"
            alt="Manta Network Logo"
            height={60}
            width={80}
          />

          <p className="text-gray-400 w-2/3 mt-8 text-sm">
            Partisia is the first EVM-equivalent ZK-application platform that is
            scalable and secure through Celestia DA and Polygon zkEVM.
          </p>

          <div className="flex mt-4 space-x-4">
            {/* <!-- Icons for web, gaming, and tools --> */}
            {SOCIALS.map((item) => (
              <Link
                key={item.src}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
              >
                <Image src={item.src} alt={item.alt} height={25} width={25} />
              </Link>
            ))}
          </div>
          <div className="lg:flex lg:justify-between lg:items-start mt-10 max-w-[80%]">
            <div>
              <h4 className="font-semibold text-white">Explorer</h4>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>Home</li>
                <li>Pulse</li>
                <li>Explore</li>
                <li>Tools (Coming Soon)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">For Developers</h4>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>Docs</li>
              </ul>
            </div>
            <div className="mb-4 text-white">
              <p className="mb-3 font-semibold">Add Network</p>
              <Button className="bg-grey-800 flex  gap-3">
                <Image
                  src="/assets/icons/metamask.png"
                  className="bg-white rounded-full p-1"
                  alt="metamask"
                  height={25}
                  width={25}
                />
                Add Manta Network
              </Button>
            </div>
          </div>
        </div>
        {/* <!-- Middle section --> */}

        {/* <!-- Right section --> */}
        <div className="lg:flex lg:flex-col lg:items-start w-1/3">
          <div className="mb-4 pl-8">
            <p className="font-semibold text-grey-300 text-sm mb-2">
              Block Indexing
            </p>
            <div className="flex items-center bg-grey-50-10 p-2 rounded-md">
              <Circle className="h-5 w-5 text-white mr-2" strokeWidth={4} />
              <span className="text-white text-sm">100% Completed</span>
              <InfoIcon className="h-3 w-3 ml-4" />
            </div>
          </div>
          <div className=" border-gray-600 p-4 pl-8">
            <p className="font-semibold mb-2 text-grey-500">Built by</p>
            <h4 className="text-2xl font-bold text-white">XYZ</h4>
            <p className="text-gray-400 mt-2">
              XYZ is an explorer-as-a-service building & managing personalized
              blockchain explorers for blockchain&apos;s foundation/team.
            </p>
            <div className="flex mt-4 space-x-4">
              {SOCIALS.map((item) => (
                <Link
                  key={item.src}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  <Image src={item.src} alt={item.alt} height={25} width={25} />
                </Link>
              ))}
            </div>
            <p className="text-gray-400 mt-6">
              © 2024 XYZ | Powered by PurpleHat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
