"use client";

import { Toggle as BaseToggle } from "@base-ui-components/react/toggle";
import type { ComponentProps } from "react";
import { cva, cx, type VariantProps } from "../index";

export const variants = cva({
	base: [
		"group",
		// Layout
		"inline-flex items-center justify-center gap-2",
		// Sizing
		"rounded-md text-sm font-medium whitespace-nowrap",
		// Hover states
		"hover:bg-muted hover:text-muted-foreground",
		// Disabled states
		"disabled:pointer-events-none disabled:opacity-50",
		// Pressed states
		"data-[pressed]:bg-accent data-[pressed]:text-accent-foreground",
		// SVG styles
		"[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
		// Focus states
		"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none",
		// Transitions
		"transition-[color,box-shadow]",
		// Validation states
		"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	],
	variants: {
		variant: {
			default: "bg-transparent",
			outline:
				"border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
		},
		size: {
			default: "h-9 px-2 min-w-9",
			sm: "h-8 px-1.5 min-w-8",
			lg: "h-10 px-2.5 min-w-10",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export function Toggle({
	className,
	variant,
	size,
	...props
}: ComponentProps<typeof BaseToggle> & VariantProps<typeof variants>) {
	return (
		<BaseToggle
			className={cx(variants({ variant, size }), className)}
			{...props}
		/>
	);
}
