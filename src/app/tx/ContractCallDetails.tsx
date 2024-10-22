import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";
import { shortenAddress } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function ContractCallDetails() {
  return (
    <div className=" space-y-6">
      <div
        className="bg-secondary-200 relative w-full rounded-2xl  md:p-6 border border-grey-200 bg-white !px-4 py-6 shadow-sm"
        role="presentation"
      >
        <div>
          <p className="paragraph2_regular mb-2 text-text-500">Contract</p>
          <div className="relative flex flex-col gap-y-8">
            <div className="flex items-center justify-between">
              <p className="paragraph2_regular text-text-500">Initiated by</p>
              <div className="flex items-center gap-x-1">
                <div className="flex gap-1.5">
                  <Image
                    src="/assets/icons/eth.svg"
                    alt="icon"
                    width={14}
                    height={14}
                  />
                  <Link
                    href={"/"}
                    className="text-center text-xs  paragraph2_regular text-text-800  hover:underline"
                  >
                    {shortenAddress(
                      "0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec"
                    )}
                  </Link>
                  <CopyToClipboard
                    copyText={"0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec"}
                  />
                </div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-grey-200" />
            <div className="absolute left-1/2 top-[24%] -translate-x-1/2 lg:top-[30%]">
              <div
                role="presentation"
                className="relative  rounded-full p-2 h-9 w-9 cursor-default border border-grey-200 bg-gray-100"
              >
                <img
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 z-10"
                  src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/arrow_down_black.svg"
                  alt="arrow"
                />
              </div>
            </div>
            <div className="flex items-start justify-between">
              <p className="paragraph2_regular text-text-500">On Application</p>
              <div className="flex max-w-[40%] items-start gap-x-1 lg:w-auto">
                <div className="flex gap-1.5">
                  <Image
                    src="/assets/icons/eth.svg"
                    alt="icon"
                    width={14}
                    height={14}
                  />
                  <Link
                    href={"/"}
                    className="text-center text-xs  paragraph2_regular text-text-800  hover:underline"
                  >
                    {shortenAddress(
                      "0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec"
                    )}
                  </Link>
                  <CopyToClipboard
                    copyText={"0xf8aC0baF3B528368334A3c8DeDdfa7F135f9e1Ec"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Accordion
        type="multiple"
        className="w-full  rounded-2xl bg-white space-y-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="w-full text-left">
              <div className="flex w-full items-center justify-between">
                <p className="paragraph2_regular  text-slate-500">
                  Amount paid for the transaction
                </p>
              </div>
              <p className="paragraph2_regular text-slate-500">
                <span className=" font-m_plus_2 text-2xl font-bold text-slate-800">
                  &lt;$0.01
                </span>{" "}
                0.000002 ETH
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div
              className=" border border-t-grey-200 border-b-0 border-l-0 border-r-0"
              style={{ height: "auto" }}
            >
              <div className="p-6 pb-4">
                <div className="flex justify-between pb-4">
                  <p className="paragraph2_regular pb-[18px] text-slate-800">
                    Amount paid to application
                  </p>
                  <div className="text-right">
                    <p className="paragraph2_bold pb-[2px] text-slate-800">
                      $0
                    </p>
                    <p className="supportText_regular text-slate-500">0 ETH</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="paragraph2_regular pb-1 text-slate-800">
                      Transaction fee
                    </p>
                    <div className="block cursor-pointer" role="presentation">
                      <p className="paragraph2_regular text-sky-500">
                        How is it calculated?
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="paragraph2_bold pb-[2px] text-slate-800">
                      &lt;$0.01
                    </p>
                    <p className="supportText_regular text-slate-500">
                      0.000002 ETH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="multiple"
        className="w-full rounded-2xl bg-white space-y-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex justify-between ">
              <p className="paragraph2_regular text-text-500">
                Where is this transaction now?
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className=" p-6 pl-8" style={{ height: "auto" }}>
              <div className="flex flex-col">
                <div className="relative left-[-2px] flex items-start  border-l-2 border-dashed  pb-8 border-success-600">
                  <div className="absolute -left-2.5 bg-white">
                    <Image
                      alt="paperPlaneGrey"
                      loading="lazy"
                      width={20}
                      height={20}
                      className="mt-0"
                      src="/assets/icons/bxs_paper_plane_green.svg"
                    />
                  </div>
                  <div className="pl-5">
                    <p className="paragraph2_bold pb-1 text-text-800">
                      Transaction initiated
                    </p>
                    <p className="paragraph2_regular text-text-500">
                      Transaction is processed and included in block
                    </p>
                  </div>
                </div>
                <div className="relative left-[-2px] flex items-start pb-2 border-success-600">
                  <div className="absolute -left-2.5 bg-white">
                    <Image
                      alt="checkShieldGrey"
                      loading="lazy"
                      width={20}
                      height={20}
                      className="mt-1"
                      src="/assets/icons/check_shield_green.svg"
                    />
                  </div>
                  <div className="pl-5">
                    <p className="paragraph2_bold pb-1 text-text-800">
                      Confirmed on Manta
                    </p>
                    <p className="paragraph2_regular mb-4 text-text-500">
                      Manta's block is confirmed and finalized on chain
                    </p>
                    <div role="presentation">
                      <div className="rounded-xl bg-gray-100 p-2 md:p-4">
                        <div className="flex w-full items-start gap-4 md:gap-10">
                          <div>
                            <p className="supportText_regular mb-2 text-text-800">
                              Block ID:
                            </p>
                            <p className="supportText_regular text-text-800">
                              Transaction ID:
                            </p>
                          </div>
                          <div>
                            <Link
                              className="hover:underline"
                              target="_blank"
                              href="/block/3530969"
                            >
                              <p className="supportText_regular mb-2 text-text-800">
                                #3530969
                              </p>{" "}
                            </Link>
                            <Link
                              className="hover:underline"
                              target="_blank"
                              href="/tx/0x0490398985e82028c138d1a522d034a4d1d342e71e2c1ac7db5a73d626cf8672"
                            >
                              <p className="supportText_regular break-all text-text-800">
                                0x0490398985e82028c138d1a522d034a4d1d342e71e2c1ac7db5a73d626cf8672
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
