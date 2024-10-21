import useClipboard from "@/hooks/use-copyToClipboard";
import Copy from "@/assets/icons/copy.svg";
import React from "react";
import { cn } from "../utils";

const CopyToClipboard = ({
  copyText,
  className
}: {
  copyText: any;
  className?: string;
}) => {
  const { copyToClipboard, isCopied, error } = useClipboard();

  return (
    <button
      onClick={() => copyToClipboard(copyText)}
      disabled={isCopied}
      className={cn(
        isCopied ? "text-success-600" : "",
        "hover:no-underline",
        className
      )}
    >
      {isCopied ? "Copied!" : <Copy />}
    </button>
  );
};

export default CopyToClipboard;
