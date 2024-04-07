import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-base font-semibold tracking-widest rounded-md shadow-md border-[3px] border-solid ",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black border-slate-200 border-2 border-b-[4px] active:border-b-2 hover:bg-slate-100 text-slate-500",
        primary:
          "bg-red hover:text-red hover:bg-white border-red uppercase font-medium hover:font-semibold text-white",
        secondary:
          "bg-softBlue text-white hover:bg-white hover:text-softBlue border-softBlue",
        outline: "bg-white text-gray hover:border-gray hover:bg-white",
      },
      size: {
        default: "py-4 px-7",
        sm: "py-4 px-7",
        lg: "py-4 px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
