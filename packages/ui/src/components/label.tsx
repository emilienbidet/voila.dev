"use client";

import type { ComponentProps } from "react";
import { cx } from "..";

interface LabelProps extends ComponentProps<"label"> {
	required?: boolean;
}

export function Label({ className, children, required, ...props }: LabelProps) {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: we don't need a control for the label component
		<label
			className={cx(
				"flex items-center gap-2 text-sm leading-none font-medium select-none",
				"group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
				"peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
				className,
			)}
			{...props}
		>
			{children}
			{required && <span className="text-destructive">*</span>}
		</label>
	);
}
