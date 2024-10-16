import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransferRow from "./TransferRow";
import HolderRow from "./HolderRow";
import ContractRow from "./ContractRow";

const HoldersTab = () => {
  return (
    <>
      <Tabs defaultValue="transfers" className="w-full ">
        <TabsList className="border-b !bg-transparent border-gray-300 !rounded-none w-full !justify-start">
          <TabsTrigger value="transfers">Transfers</TabsTrigger>
          <TabsTrigger value="holders">Holders</TabsTrigger>
          <TabsTrigger value="contract">Contract</TabsTrigger>
        </TabsList>
        <TabsContent value="transfers">
          <TransferRow />
        </TabsContent>
        <TabsContent value="holders">
          <HolderRow />
        </TabsContent>
        <TabsContent value="contract">
          <ContractRow />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default HoldersTab;
