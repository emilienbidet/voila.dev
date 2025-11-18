import type { ComponentProps } from "react";
import { Loader2Icon } from "../icons";
import { cx } from "../index";

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
