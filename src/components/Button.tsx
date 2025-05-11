import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex w-[252px] justify-center items-center text-text-whaite gap-2 flex-shrink-0 rounded-md backdrop-blur-[16px] border",
  {
    variants: {
      variant: {
        default:
          "bg-primary-60 border-primary-60 ",
        error:
          "bg-text-error border-stroke-error ",
        gray:
          "border-opacity-white-10",
        buttons:
          "",
      },
      mode: {
        default:
          "",
        outline:
          "bg-transparent text-primary-60",
        text:
          "bg-transparent border-transparent ",
      },
      size: {
        m: "h-[48px] py-3",
        lg: "h-[56px] py-4",
        s: "h-[40px] py-3",
      },
    },
    compoundVariants: [
      {
        variant: "error",
        mode: "outline",
        className: "bg-transparent text-text-error",
      },
      {
        variant: "error",
        mode: "text",
        className: "text-text-error",
      },
      {
        variant: "default",
        mode: "text",
        className: "text-primary-60",
      },
    ],
    defaultVariants: {
      variant: "default",
      mode: "default",
      size: "m",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, mode, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, mode, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
