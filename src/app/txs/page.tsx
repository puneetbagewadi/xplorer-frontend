"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { AllTransactions } from "./AllTransactions";
import { DepositTxn } from "./DepositTxn";
import { WithdrawalTransactions } from "./WithdrawalTransactions";
import PageNavigation from "@/components/PageNavigation";
// import { useGetLatestTransactionsQuery } from "@/lib/features/appApiSlice";

const TxPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // const { data, error, isLoading } = useGetLatestTransactionsQuery();

  const tabFilters = [
    { id: 1, name: "All", value: "txs" },
    { id: 2, name: "Deposits (L1 → L2)", value: "deposit" },
    { id: 3, name: "Withdrawals (L2 → L1)", value: "withdrawal" }
  ];
  // Default tab from the query params or "deposit" if not present
  const currentTab = searchParams.get("tab") || "deposit";

  
  const handleTabChange = (newTab: string) => {
    console.log("newTab", newTab);

    const params = new URLSearchParams(window.location.search);
    params.set("tab", newTab);
    router.push(`/txs?${params.toString()}`);
  };

  const filter = searchParams.get("filter");

  return (
    <div className="w-full mx-auto">
      <PageNavigation
        title={"Transactions"}
        navigationList={[{ name: "home", url: "/" }]}
      />

      {/* Tabs Component */}
      <Tabs
        defaultValue={currentTab}
        onValueChange={(value) => (
          console.log("value", value), handleTabChange(value)
        )}
        className="mt-6"
      >
        <TabsList className="flex space-x-4 bg-transparent justify-start border-b border-gray-200 !h-auto !p-0">
          {tabFilters.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="px-4 py-2 rounded-none !ring-0 !shadow-none   data-[state=active]:border-b-2 !bg-transparent data-[state=active]:border-sky-blue capitalize"
            >
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content based on active tab */}
        <TabsContent value="deposit" className="mt-8">
          <DepositTxn />
        </TabsContent>
        <TabsContent value="withdrawal" className="mt-8">
          <WithdrawalTransactions />
        </TabsContent>
        <TabsContent value="txs" className="mt-8">
          <AllTransactions />
          {filter && (
            <p className="mt-4 text-gray-600">Filter applied: {filter}</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TxPage;
