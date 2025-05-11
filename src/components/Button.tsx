import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex w-[252px] justify-center items-center gap-2 flex-shrink-0 rounded-md",
  {
    variants: {
      variant: {
        default:
          "bg-primary-60 bord",
        error:
          "bg-text-error",
        gray:
          "",
        buttons:
          "",
      },
      mode: {
        default:
          " ",
        outline:
          "",
        text:
          "",

      },
      size: {
        default: "h-[56px] py-4",
        lg: "h-[48px] py-3",
        s: "h-[40px] py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      mode: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
