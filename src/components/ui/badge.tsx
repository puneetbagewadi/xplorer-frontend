import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center font-m_plus_2  rounded-md border py-2.5 px-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-black text-white font-normal  px-2 py-1",
        secondary:
          "w-fit rounded-lg bg-grey-200 px-2 py-1 text-text-500 font-normal",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        success:"inline-flex w-fit items-center text-success-600 border-0 font-normal justify-center gap-x-1 rounded-lg px-2 py-1 bg-success-50 mb-0.5",
        lightOrange:"inline-flex w-fit items-center text-[#de9804] border-0 font-normal justify-center gap-x-1 rounded-lg px-2 py-1 bg-[#fcf6ea] mb-0.5"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className,"")} {...props} />
  )
}

export { Badge, badgeVariants }
