import { Radio as RadioPrimitive } from "@base-ui-components/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui-components/react/radio-group";
import type { ComponentProps } from "react";
import { cva, cx, type VariantProps } from "..";
import { CircleIcon } from "../icons";

const itemVariants = cva({
	base: [
		// Layout & sizing
		"aspect-square shrink-0 rounded-full border shadow-xs",
		// Colors
		"border-input text-primary dark:bg-input/30",
		// Focus states
		"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
		// Invalid states
		"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
		// Other
		"outline-none transition-[color,box-shadow]",
		// Disabled
		"disabled:cursor-not-allowed disabled:opacity-50",
	],
	variants: {
		size: {
			default: "size-4",
			sm: "size-3",
			lg: "size-5",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

function Root({
	className,
	...props
}: ComponentProps<typeof RadioGroupPrimitive>) {
	return (
		<RadioGroupPrimitive
			data-slot="radio-group"
			className={cx("grid gap-3", className)}
			{...props}
		/>
	);
}

function Item({
	className,
	size = "default",
	...props
}: ComponentProps<typeof RadioPrimitive.Root> &
	VariantProps<typeof itemVariants>) {
	return (
		<RadioPrimitive.Root
			data-slot="radio-group-item"
			className={cx(itemVariants({ size }), className)}
			{...props}
		>
			<RadioPrimitive.Indicator
				data-slot="radio-group-indicator"
				className="relative flex items-center justify-center"
			>
				<CircleIcon
					className={cx(
						"absolute top-1/2 left-1/2 fill-primary",
						"-translate-x-1/2 -translate-y-1/2",
						size === "sm" && "size-1",
						size === "default" && "size-1.5",
						size === "lg" && "size-2",
					)}
				/>
			</RadioPrimitive.Indicator>
		</RadioPrimitive.Root>
	);
}

export const RadioGroup = {
	Root,
	Item,
};
