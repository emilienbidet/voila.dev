"use client";

import { Radio as BaseRadio } from "@base-ui-components/react/radio";
import type { ComponentProps } from "react";
import { CircleIcon } from "../icons";
import { cx } from "../index";

function Root({ className, ...props }: ComponentProps<typeof BaseRadio.Root>) {
	return (
		<BaseRadio.Root
			className={cx(
				// Layout & sizing
				"aspect-square size-4 shrink-0",
				// Border & shape
				"border rounded-full shadow-xs",
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
				className,
			)}
			{...props}
		/>
	);
}

function Indicator({
	className,
	...props
}: ComponentProps<typeof BaseRadio.Indicator>) {
	return (
		<BaseRadio.Indicator
			className={cx("relative flex items-center justify-center", className)}
			{...props}
		>
			<CircleIcon
				className={cx(
					"absolute top-1/2 left-1/2 size-2",
					"-translate-x-1/2 -translate-y-1/2",
					"fill-primary",
				)}
			/>
		</BaseRadio.Indicator>
	);
}

export function Radio(props: ComponentProps<typeof Root>) {
	return (
		<Root {...props}>
			<Indicator />
		</Root>
	);
}
