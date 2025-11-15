import { useRender } from "@base-ui-components/react/use-render";
import type { ComponentProps } from "react";
import { cx } from "..";

export function Kbd({ render, className, ...props }: useRender.ComponentProps<"kbd">) {
	return useRender({
		defaultTagName: "kbd",
		render,
		props: {
			className: cx(
				"pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",
				className,
			),
			...props,
		},
	});
}

export function KbdGroup({ className, ...props }: ComponentProps<"div">) {
	return <div className={cx("inline-flex items-center gap-1", className)} {...props} />;
}
