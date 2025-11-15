"use client";

import { Separator as BaseSeparator } from "@base-ui-components/react/separator";
import type { ComponentProps } from "react";
import { cx } from "..";

export function Separator({ className, orientation = "horizontal", ...props }: ComponentProps<typeof BaseSeparator>) {
	return (
		<BaseSeparator
			orientation={orientation}
			className={cx(
				"bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
				className,
			)}
			{...props}
		/>
	);
}
