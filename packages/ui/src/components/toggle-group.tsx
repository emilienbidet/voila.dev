"use client";

import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui-components/react/toggle-group";
import React, { createContext } from "react";
import { cx, type VariantProps } from "..";
import { Toggle, variants as toggleVariants } from "./toggle";

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
	size: "default",
	variant: "default",
});

function Root({ className, variant, size, children, ...props }: React.ComponentProps<typeof ToggleGroupPrimitive> & VariantProps<typeof toggleVariants>) {
	return (
		<ToggleGroupPrimitive
			data-slot="toggle-group"
			data-variant={variant}
			data-size={size}
			className={cx("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs", className)}
			{...props}
		>
			<ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
		</ToggleGroupPrimitive>
	);
}

function Item({ className, children, variant, size, ...props }: React.ComponentProps<typeof Toggle> & VariantProps<typeof toggleVariants>) {
	const context = React.useContext(ToggleGroupContext);

	return (
		<Toggle
			data-variant={context.variant || variant}
			data-size={context.size || size}
			className={cx(
				toggleVariants({
					variant: context.variant || variant,
					size: context.size || size,
				}),
				"min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
				className,
			)}
			{...props}
		>
			{children}
		</Toggle>
	);
}

export const ToggleGroup = { Root, Item };
