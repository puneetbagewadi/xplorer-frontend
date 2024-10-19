import { shortenAddress } from "@/lib/utils";
import { ConnectKitButton } from "connectkit";
import React from "react";

const ConnectWalletButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        return (
          <button
            onClick={show}
            className="bg-button-cta px-5 py-2 text-white text-sm rounded-full leading-6"
          >
            {isConnected ? shortenAddress(address as string) : "Connect Wallet"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default ConnectWalletButton;
