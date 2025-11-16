import type * as React from "react";

import { cx } from "..";

export function Label({ className, ...props }: React.ComponentProps<"label">) {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: This label doesn't need a control
		<label
			data-slot="label"
			className={cx(
				"flex items-center gap-2 text-sm leading-none font-medium select-none",
				"group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
				"peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
				className,
			)}
			{...props}
		/>
	);
}
