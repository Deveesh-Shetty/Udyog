import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { HTMLAttributes, forwardRef } from "react"

export const buttonVariants = cva(
  "px-2 inline-flex gap-2 items-center justify-center font-medium py-2 min-w-[12rem] rounded-md focus:outline-none focus:ring-2 disabled:opacity-50 transition-all",
  {
    variants: {
      variant: {
        default:
          "dark:bg-slate-800 bg-slate-200 hover:bg-slate-100 hover:dark:bg-slate-700 focus:dark:bg-slate-700",
        outline:
          "dark:bg-slate-800 bg-slate-200 hover:bg-slate-100 hover:dark:bg-slate-700  border-2 border-slate-500 hover:dark:ring-2 hover:outline-offset-4",
        ghost:
          "bg-transparent dark:bg-transparent border border-slate-500 hover:bg-slate-200 hover:dark:bg-slate-200 hover:dark:text-slate-800",
        link: "hover:underline underline-offset-4 hover:dark:text-[var(--accent-light)]",
      },
      size: {
        default: "",
        sm: "min-w-[8rem]",
        lg: "min-w-[20rem]",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, children, isLoading, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className, size }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Icons.loader className="animate-spin" /> : null}
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button
