import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import InfoHelpCircle from "@/assets/icons/help_circle.svg";
interface TooltipButton {
  message: string;
}
const InfoTooltip = ({ message }: TooltipButton) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <InfoHelpCircle />
      </TooltipTrigger>
      <TooltipContent>
        <p>{message}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default InfoTooltip;
