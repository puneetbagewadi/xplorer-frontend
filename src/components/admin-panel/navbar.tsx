import { SheetMenu } from "@/components/admin-panel/sheet-menu";
import { ConnectKitButton } from "connectkit";
import NetworkSelector from "../network-selector";
import ConnectWalletButton from "../ConnectWallet";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
          <NetworkSelector />
        </div>
        <div className="flex flex-1 items-center justify-end">
          {/* <ModeToggle />
          <UserNav /> */}
          {/* <ConnectKitButton.Custom>
            {({
              isConnected,
              isConnecting,
              show,
              hide,
              address,
              ensName,
              chain
            }) => {
              return (
                <button
                  onClick={show}
                  className="bg-button-cta px-5 py-2 text-white text-sm rounded-full leading-6"
                >
                  {isConnected ? address : "Connect Wallet"}
                </button>
              );
            }}
          </ConnectKitButton.Custom> */}
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
}
