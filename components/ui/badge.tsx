import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success: "border-transparent bg-green-500 text-white hover:bg-green-600",
        warning: "border-transparent bg-amber-500 text-white hover:bg-amber-600",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
        pending: "border-transparent bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300",
        "in-progress": "border-transparent bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
        submitted: "border-transparent bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
        "in-review": "border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300",
        failed: "border-transparent bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
        expired: "border-transparent bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300",
      },
      size: {
        default: "px-2.5 py-0.5",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
        notification: "h-5 w-5 text-xs p-0 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  count?: number
}

function Badge({ className, variant, size, count, children, ...props }: BadgeProps) {
  // สำหรับ notification badge แสดงตัวเลขสวยงาม
  if (size === "notification" && count !== undefined) {
    const displayCount = count > 99 ? "99+" : count.toString()
    return (
      <div className={cn(badgeVariants({ variant, size }), "min-w-[20px]", className)} {...props}>
        {displayCount}
      </div>
    )
  }

  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
