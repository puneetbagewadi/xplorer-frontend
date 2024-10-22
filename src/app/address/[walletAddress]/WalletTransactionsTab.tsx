import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TokenTransferRow from "./TokenTransferRow";
import WalletRow from "./WalletRow";
import Activity from "./Activity";

interface TabNames {
  tabNames: string[];
}

const HoldersTransfersTab = ({ tabNames }: TabNames) => {
  return (
    <>
      <Tabs defaultValue={tabNames[0]} className="relative mr-auto w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0 text-sm">
          {tabNames.map((tab) => {
            return (
              <TabsTrigger
                key={tab}
                value={tab}
                className="capitalize font-normal relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-2 pt-2 text-muted-foreground shadow-none transition-all duration-100 focus-visible:ring-0 data-[state=active]:border-b-active-border data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:font-bold data-[state=active]:text-[1rem]"
              >
                {tab}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent value={tabNames[0]}>
          <WalletRow />
        </TabsContent>
        <TabsContent value={tabNames[1]}>
          <Activity />
        </TabsContent>
        <TabsContent value={tabNames[2]}>
          <TokenTransferRow />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default HoldersTransfersTab;
