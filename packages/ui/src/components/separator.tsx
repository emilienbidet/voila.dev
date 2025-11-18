"use client";

import { Separator as SeparatorPrimitive } from "@base-ui-components/react/separator";
import type { ComponentProps } from "react";
import { cva, cx, type VariantProps } from "../index";

const separatorVariants = cva({
	base: "shrink-0 data-[orientation=horizontal]:border-t data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:border-e",
	variants: {
		variant: {
			default: "border-solid",
			dashed: "border-dashed",
			dotted: "border-dotted",
			double:
				"border-double p-px data-[orientation=horizontal]:border-y data-[orientation=vertical]:border-x",
		},
	},
});

export function Separator({
	className,
	...props
}: ComponentProps<typeof SeparatorPrimitive> &
	VariantProps<typeof separatorVariants>) {
	return (
		<SeparatorPrimitive
			className={cx(separatorVariants({ variant: props.variant }), className)}
			{...props}
		/>
	);
}
