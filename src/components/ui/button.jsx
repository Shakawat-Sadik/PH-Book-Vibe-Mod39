import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "cursor-pointer bg-primary text-primary-foreground [a]:hover:bg-primary/80 hover:-translate-y-px ",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:-translate-y-px",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3 hover:-translate-y-0.5",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5 hover:-translate-y-1",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:-translate-y-1.5",
        xl: "h-12 gap-2 px-4 text-xl has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 hover:-translate-y-2",
        "2xl": "h-16 gap-3 px-6 text-2xl has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4 hover:-translate-y-3",
        "3xl": "h-20 gap-4 px-8 text-3xl has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5 hover:-translate-y-4",
        "4xl": "h-24 gap-5 px-10 text-4xl has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6 hover:-translate-y-5",
        "5xl": "h-32 gap-6 px-14 text-5xl has-data-[icon=inline-end]:pr-8 has-data-[icon=inline-start]:pl-8 hover:-translate-y-6",
        "6xl": "h-40 gap-8 px-20 text-6xl has-data-[icon=inline-end]:pr-10 has-data-[icon=inline-start]:pl-10 hover:-translate-y-8",
        "7xl": "h-48 gap-10 px-24 text-7xl has-data-[icon=inline-end]:pr-12 has-data-[icon=inline-start]:pl-12 hover:-translate-y-10",
        "8xl": "h-64 gap-12 px-32 text-8xl has-data-[icon=inline-end]:pr-16 has-data-[icon=inline-start]:pl-16 hover:-translate-y-12",
        "9xl": "h-96 gap-16 px-48 text-9xl has-data-[icon=inline-end]:pr-24 has-data-[icon=inline-start]:pl-24 hover:-translate-y-16",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
        "icon-xl": "size-12",
        "icon-2xl": "size-16",
        "icon-3xl": "size-20",
        "icon-4xl": "size-24",
        "icon-5xl": "size-32",
        "icon-6xl": "size-40",
        "icon-7xl": "size-48",
        "icon-8xl": "size-64",
        "icon-9xl": "size-96",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
