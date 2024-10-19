import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenAddress(address: string, chars = 4) {
  try {
    const parsed = address;
    const addressLength = address.length;
    return address
      ? `${parsed.substring(0, chars)}...${parsed.substring(
          Math.abs(addressLength - chars)
        )}`
      : "";
  } catch (error) {
    console.log("Invalid address parameter error", error);
    return "";
  }
}
