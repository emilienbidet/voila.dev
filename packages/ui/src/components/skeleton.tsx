import type { ComponentProps } from "react";
import { cx } from "..";

export function Skeleton({ className, ...props }: ComponentProps<"div">) {
	return <div className={cx("bg-accent animate-pulse rounded-md", className)} {...props} />;
}
