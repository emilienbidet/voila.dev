"use client";

import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox";
import type { ComponentProps } from "react";
import { cx } from "..";
import { CheckIcon } from "../icons";

function Root({
	className,
	...props
}: ComponentProps<typeof BaseCheckbox.Root>) {
	return (
		<BaseCheckbox.Root
			className={cx(
				// Base styles
				"peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none",
				// Dark mode background
				"dark:bg-input/30",
				// Checked state
				"data-checked:bg-primary data-checked:text-primary-foreground data-checked:border-primary",
				"dark:data-checked:bg-primary",
				// Focus styles
				"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
				// Invalid/error styles
				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
				// Disabled styles
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
}: ComponentProps<typeof BaseCheckbox.Indicator>) {
	return (
		<BaseCheckbox.Indicator
			className={cx(
				"grid place-content-center text-current transition-none",
				className,
			)}
			{...props}
		>
			<CheckIcon className="size-3.5" />
		</BaseCheckbox.Indicator>
	);
}

export const Checkbox = {
	Root,
	Indicator,
};
