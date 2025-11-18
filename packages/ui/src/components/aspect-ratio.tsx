import type { ComponentProps } from "react";
import { cx } from "../index";

interface Props extends ComponentProps<"div"> {
	ratio: "16/9" | "3/2" | "4/3" | "1/1";
}

export function AspectRatio({ ratio, className, children, ...props }: Props) {
	const [width, height] = ratio.split("/").map(Number);
	const numericRatio = width / height;

	return (
		<div
			className="relative w-full"
			style={{ paddingBottom: `${(1 / numericRatio) * 100}%` }}
		>
			<div className={cx("absolute inset-0", className)} {...props}>
				{children}
			</div>
		</div>
	);
}
