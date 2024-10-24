import React from "react";
import PageNavigation from "@/components/PageNavigation";
import BlockDetails from "../BlockDetails";
interface Params {
  txHash: string;
}
const page = ({ params }: { params: Params }) => {

  return (
    <div>
      <PageNavigation
        title={"Block details"}
        navigationList={[{ name: "home", url: "/" }]}
      />
      <BlockDetails/>
    </div>
  );
};

export default page;
