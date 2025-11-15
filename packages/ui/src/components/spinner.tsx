import type { ComponentProps } from "react";
import { cx } from "..";
import { Loader2Icon } from "../icons";

export function Spinner({ className, ...props }: ComponentProps<"svg">) {
	return (
		<Loader2Icon
			role="status"
			aria-label="Loading"
			className={cx("size-4 animate-spin", className)}
			{...props}
		/>
	);
}
