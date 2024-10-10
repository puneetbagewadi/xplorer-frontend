import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function NetworkSelector() {
  return (
    <Select defaultValue="mainnet">
      <SelectTrigger className="!bg-grey-800 w-[100px] lg:w-[150px] !text-white rounded-lg">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="mainnet">Mainnet</SelectItem>
          <SelectItem value="testnet">Testnet</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
