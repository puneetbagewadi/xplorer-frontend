import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Image from "next/image";
import CopyToClipboard from "@/lib/helpers/CopyToClipboard";
import { Textarea } from "@/components/ui/textarea";
import MonacoSolidityEditor from "./MonacoSolidityEditor";
import ConnectWalletButton from "@/components/ConnectWallet";

const sampleCode = `// Copyright (C) 2022 CabbageSwap

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
  `;
const jsonData = {
  libraries: {},
  optimizer: {
    runs: 200
  }
};
const abiData = [
  {
    stateMutability: "view",
    name: "name",
    type: "function",
    outputs: [
      {
        type: "string"
      }
    ]
  },
  {
    inputs: [
      {
        name: "guy",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    name: "approve",
    type: "function",
    outputs: [
      {
        type: "bool"
      }
    ]
  },
  {
    stateMutability: "view",
    name: "totalSupply",
    type: "function",
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    inputs: [
      {
        name: "src",
        type: "address"
      },
      {
        name: "dst",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    name: "transferFrom",
    type: "function",
    outputs: [
      {
        type: "bool"
      }
    ]
  },
  {
    inputs: [
      {
        name: "wad",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    name: "withdraw",
    type: "function"
  },
  {
    stateMutability: "view",
    name: "decimals",
    type: "function",
    outputs: [
      {
        type: "uint8"
      }
    ]
  },
  {
    inputs: [
      {
        type: "address"
      }
    ],
    stateMutability: "view",
    name: "balanceOf",
    type: "function",
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    stateMutability: "view",
    name: "symbol",
    type: "function",
    outputs: [
      {
        type: "string"
      }
    ]
  },
  {
    inputs: [
      {
        name: "dst",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    name: "transfer",
    type: "function",
    outputs: [
      {
        type: "bool"
      }
    ]
  },
  {
    stateMutability: "payable",
    name: "deposit",
    type: "function"
  },
  {
    inputs: [
      {
        type: "address"
      },
      {
        type: "address"
      }
    ],
    stateMutability: "view",
    name: "allowance",
    type: "function",
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    stateMutability: "payable",
    type: "fallback"
  },
  {
    inputs: [
      {
        indexed: true,
        name: "src",
        type: "address"
      },
      {
        indexed: true,
        name: "guy",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    inputs: [
      {
        indexed: true,
        name: "src",
        type: "address"
      },
      {
        indexed: true,
        name: "dst",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        indexed: true,
        name: "dst",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    inputs: [
      {
        indexed: true,
        name: "src",
        type: "address"
      },
      {
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Withdrawal",
    type: "event"
  }
];
const contractCreationCode =
  "0x60806040526040805190810160405280600d81526020017f57726170706564204574686572000000000000000000000000000000000000008152506000908051906020019061004f9291906100ca565b506040805190810160405280600481526020017f57455448000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b9291906100ca565b506012600260006101000a81548160ff021916908360ff1602179055503480156100c457600080fd5b5061016f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061010b57805160ff1916838001178555610139565b82800160010185558215610139579182015b8281111561013857825182559160200191906001019061011d565b5b509050610146919061014a565b5090565b61016c91905b80821115610168576000816000905550600101610150565b5090565b90565b610c848061017e6000396000f3006080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100b9578063095ea7b31461014957806318160ddd146101ae57806323b872dd146101d95780632e1a7d4d1461025e578063313ce5671461028b57806370a08231146102bc57806395d89b4114610313578063a9059cbb146103a3578063d0e30db014610408578063dd62ed3e14610412575b6100b7610489565b005b3480156100c557600080fd5b506100ce610526565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561010e5780820151818401526020810190506100f3565b50505050905090810190601f16801561013b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015557600080fd5b50610194600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105c4565b604051808215151515815260200191505060405180910390f35b3480156101ba57600080fd5b506101c36106b6565b6040518082815260200191505060405180910390f35b3480156101e557600080fd5b50610244600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106d5565b604051808215151515815260200191505060405180910390f35b34801561026a57600080fd5b5061028960048036038101908080359060200190929190505050610a22565b005b34801561029757600080fd5b506102a0610b55565b604051808260ff1660ff16815260200191505060405180910390f35b3480156102c857600080fd5b506102fd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b68565b6040518082815260200191505060405180910390f35b34801561031f57600080fd5b50610328610b80565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561036857808201518184015260208101905061034d565b50505050905090810190601f1680156103955780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103af57600080fd5b506103ee600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c1e565b604051808215151515815260200191505060405180910390f35b610410610489565b005b34801561041e57600080fd5b50610473600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c33565b6040518082815260200191505060405180910390f35b34600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040518082815260200191505060405180910390a2565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105bc5780601f10610591576101008083540402835291602001916105bc565b820191906000526020600020905b81548152906001019060200180831161059f57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b600081600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561072557600080fd5b3373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141580156107fd57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414155b156109185781600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561088d57600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b81600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610a7057600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610b03573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65826040518082815260200191505060405180910390a250565b600260009054906101000a900460ff1681565b60036020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c165780601f10610beb57610100808354040283529160200191610c16565b820191906000526020600020905b815481529060010190602001808311610bf957829003601f168201915b505050505081565b6000610c2b3384846106d5565b905092915050565b60046020528160005260406000206020528060005260406000206000915091505054815600a165627a7a72305820d9e74be490de99693a86965e4c22ba5b98c683f2ab8b3d7341547a174649c6840029";

const ContractRow = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between mt-5">
          <Button className="rounded-full">Code</Button>
          {/* <Button className="rounded-full">Connect Wallet</Button> */}
          <ConnectWalletButton />
        </div>

        <div className="bg-secondary-200 relative w-full rounded-2xl md:p-6 mb-2.5 rounded-4xl border border-grey-200 bg-grey-200 !px-4 py-6">
          <div className="mb-5 flex items-center gap-2">
            <p className="paragraph1_bold text-text-800">WETH</p>
            <Image
              alt=""
              width="20"
              height="20"
              src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/verified_shield.svg"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-32">
            <div className="flex flex-col gap-5 flex-1">
              <div className="flex justify-between">
                <p className="font-normal text-sm col-span-4 text-text-500">
                  Verified at
                </p>
                <p className="font-normal text-sm col-span-8 text-left text-text-800 ">
                  Sep 11, 2023 10:43 AM
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-normal text-sm col-span-4 text-text-500">
                  EVM Version
                </p>
                <p className="font-normal text-sm col-span-8 text-left text-text-800 ">
                  default
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-normal text-sm col-span-4 text-text-500">
                  Contract file path
                </p>
                <p className="font-normal text-sm col-span-8 text-left text-text-800 ">
                  contracts/utils/WETH.sol
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 flex-1">
              <div className="flex justify-between">
                <p className="font-normal text-sm col-span-4 text-text-500">
                  Compiler version
                </p>
                <p className="font-normal text-sm col-span-8 text-left text-text-800 ">
                  v0.4.26+commit.4563c3fc
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-normal text-sm col-span-4 text-text-500">
                  Optimization enabled
                </p>
                <p className="font-normal text-sm col-span-8 text-left text-text-800 ">
                  false
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-normal text-sm col-span-4 text-text-500">
                  Optimization
                </p>
                <p className="font-normal text-sm col-span-8 text-left text-text-800 ">
                  runs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Source Code */}
        <Accordion type="single" collapsible className="bg-white rounded-2xl">
          <AccordionItem value="source_code" className="!border-b-0">
            <AccordionTrigger className="p-6 text-text-500 text-[16px] hover:!no-underline">
              <div className="flex flex-col items-start text-left gap-2">
                <p className="font-bold text-text-800">Contract Source Code</p>
                <p className="text-sm font-normal text-text-500">
                  The contract&apos;s behavior in Solidity, compiled to bytecode
                  for execution on the EVM, and publicly accessible for
                  transparency and verification.
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="relative rounded-xl">
                <MonacoSolidityEditor initialCode={sampleCode} />
                <div className="absolute right-4 top-4 z-10  p-1">
                  <CopyToClipboard copyText={"compiler settings"} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Compiler settings */}
        <Accordion type="single" collapsible className="bg-white rounded-2xl">
          <AccordionItem value="compiler_settings" className="!border-b-0">
            <AccordionTrigger className="p-6 text-text-500 text-[16px] hover:!no-underline">
              <div className="flex flex-col items-start">
                <p className="font-bold text-text-800">Compiler Settings</p>
                <p className="text-sm text-text-500 mt-3 font-normal">
                  A contractor argument is the address of the Ethereum account
                  that deployed the smart contract.
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="relative rounded-xl">
                <div className="">
                  <Textarea
                    rows={6}
                    readOnly
                    className="font-normal focus:ring-transparent w-full focus:outline-none text-text-500 text-sm focus-visible:!ring-0"
                    value={JSON.stringify(jsonData, null, 2)}
                  />
                </div>
                <div className="absolute right-4 top-4 z-10  p-1">
                  <CopyToClipboard copyText={"compiler settings"} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Contract ABI */}
        <Accordion type="single" collapsible className="bg-white rounded-2xl">
          <AccordionItem value="abi" className="!border-b-0">
            <AccordionTrigger className="p-6 text-text-500 text-[16px] hover:!no-underline">
              <div className="flex flex-col items-start">
                <p className="font-bold text-text-800">Contract ABI</p>
                <p className="text-sm text-text-500 mt-3 font-normal">
                  The Application Binary Interface (ABI) is a standard way to
                  interact with smart contracts.
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="relative rounded-xl">
                <div className="">
                  <Textarea
                    rows={6}
                    readOnly
                    className="font-normal focus:ring-transparent w-full focus:outline-none text-text-500 text-sm focus-visible:!ring-0"
                    value={JSON.stringify(abiData, null, 2)}
                  />
                </div>
                <div className="absolute right-4 top-4 z-10  p-1">
                  <CopyToClipboard copyText={"compiler settings"} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Contract creation Code */}
        <Accordion type="single" collapsible className="bg-white rounded-2xl">
          <AccordionItem value="creation_code" className="!border-b-0">
            <AccordionTrigger className="p-6 text-text-500 text-[16px] hover:!no-underline">
              <p className="font-bold text-text-800">Contract creation code</p>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="relative rounded-xl">
                <div className="">
                  <Textarea
                    rows={6}
                    readOnly
                    className="font-normal focus:ring-transparent w-full focus:outline-none text-text-500 text-sm focus-visible:!ring-0"
                    value={contractCreationCode}
                  />
                </div>
                <div className="absolute right-4 top-4 z-10  p-1">
                  <CopyToClipboard copyText={"compiler settings"} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* deployed byteCode */}
        <Accordion type="single" collapsible className="bg-white rounded-2xl">
          <AccordionItem value="bytecode" className="!border-b-0">
            <AccordionTrigger className="p-6 text-text-500 text-[16px] hover:!no-underline">
              <p className="font-bold text-text-800">Deployed Bytecode</p>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="relative rounded-xl">
                <div className="">
                  <Textarea
                    rows={6}
                    readOnly
                    className="font-normal focus:ring-transparent w-full focus:outline-none text-text-500 text-sm focus-visible:!ring-0"
                    value={contractCreationCode}
                  />
                </div>
                <div className="absolute right-4 top-4 z-10  p-1">
                  <CopyToClipboard copyText={"compiler settings"} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default ContractRow;
