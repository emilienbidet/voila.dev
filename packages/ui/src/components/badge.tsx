import { useRender } from "@base-ui-components/react/use-render";
import type * as React from "react";

import { cva, cx, type VariantProps } from "..";

const variants = cva({
	base:
		"inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium " +
		"w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden " +
		"[&>svg]:size-3 [&>svg]:pointer-events-none " +
		"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] " +
		"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive " +
		"transition-[color,box-shadow]",
	variants: {
		variant: {
			default:
				"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
			secondary:
				"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
			destructive:
				"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 " +
				"focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
			outline:
				"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export function Badge({
	className,
	variant,
	render = <span />,
	...props
}: React.ComponentProps<"span"> &
	VariantProps<typeof variants> & { render?: useRender.RenderProp }) {
	return useRender({
		render,
		props: {
			"data-slot": "badge",
			className: cx(variants({ variant }), className),
			...props,
		},
	});
}
