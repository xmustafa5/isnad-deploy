import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex w-[252px] justify-center items-center text-text-whaite gap-2 flex-shrink-0 rounded-md backdrop-blur-[16px] border typography-body-14-medium ",
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
        variant: "default",
        mode:"default",
        className: "active:bg-[linear-gradient(0deg,var(--opacity-secondary-10,rgba(8,24,47,0.10))_0%,var(--opacity-secondary-10,rgba(8,24,47,0.10))_100%),var(--bg-primary,#C57340)] hover:bg-[linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1))]  disabled:opacity-60"
      },
      {
        variant: "default",
        mode: "outline",
        className:"text-text-whaite hover:bg-button-primary-light active:bg-[#724F41] disabled:border-text-gray3"
      },
      {
        variant: "default",
        mode: "text",
        className: "text-primary-60 hover:bg-button-primary-light active:bg-[rgba(197,_115,_64,_0.24)] disabled:border-transparent disabled:bg-transparent disabled:text-text-whaite"
      },
      {variant: "error",
        mode: "default",
        className: "hover:bg-[#F46052] active:bg-[#DB4639] disabled:bg-[#273A55] border-transparent"
      },
      {
        variant: "error",
        mode: "outline",
        className: "bg-transparent text-text-error hover:bg-[rgba(243,79,63,0.11)] active:bg-[rgba(243,78,63,0.20)] disabled:-transparent disabled:border-text-gray3 disabled:text-text-gray3 text-text-error",
      },
      {
        variant: "error",
        mode: "text",
        className: "text-text-error hover:bg-[rgba(243,78,63,0.11)] active:bg-[rgba(243,78,63,0.20)] disabled:bg-transparent  disabled:text-text-gray3 ",
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
