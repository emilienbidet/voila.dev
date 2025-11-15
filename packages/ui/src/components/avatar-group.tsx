"use client";

import type { ComponentProps } from "react";
import { cx } from "..";

export function AvatarGroup({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cx(
				"flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
				className,
			)}
			{...props}
		/>
	);
}
