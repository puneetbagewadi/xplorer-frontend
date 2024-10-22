import React from "react";
import TransactionSuccessDetails from "../TransactionSuccessDetails";
import PageNavigation from "@/components/PageNavigation";
import { useRouter } from "next/router";
interface Params {
  txHash: string;
}
const page = ({ params }: { params: Params }) => {
  const slug = params.txHash;

  return (
    <div>
      <PageNavigation
        address={slug}
        title={"Transactions Details"}
        navigationList={[{ name: "home", url: "/" }]}
      />

      <TransactionSuccessDetails />
    </div>
  );
};

export default page;
