import useClipboard from "@/hooks/use-copyToClipboard";
import Copy from "@/assets/icons/copy.svg";
import React from "react";
import { cn } from "../utils";
import { Badge } from "@/components/ui/badge";

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
        "hover:no-underline align-text-top inline-flex relative",
        className
      )}
    >
      <Copy className="w-4 h-4" />
      {isCopied && (
        <div className=" absolute left-[-15px] top-[-30px]">
          <Badge variant={"secondary"}>Copied!</Badge>
        </div>
      )}
    </button>
  );
};

export default CopyToClipboard;
