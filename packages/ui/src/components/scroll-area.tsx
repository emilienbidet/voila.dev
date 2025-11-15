"use client";

import { ScrollArea as BaseScrollArea } from "@base-ui-components/react/scroll-area";
import type { ComponentProps } from "react";
import { cx } from "..";

function Root({
	className,
	...props
}: ComponentProps<typeof BaseScrollArea.Root>) {
	return (
		<BaseScrollArea.Root className={cx("relative", className)} {...props} />
	);
}

function Viewport({
	className,
	...props
}: ComponentProps<typeof BaseScrollArea.Viewport>) {
	return (
		<BaseScrollArea.Viewport
			className={cx(
				"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
				className,
			)}
			{...props}
		/>
	);
}

function Content({
	className,
	...props
}: ComponentProps<typeof BaseScrollArea.Content>) {
	return (
		<BaseScrollArea.Content
			className={cx("w-fit min-w-full", className)}
			{...props}
		/>
	);
}

function Scrollbar({
	className,
	orientation = "vertical",
	...props
}: ComponentProps<typeof BaseScrollArea.Scrollbar>) {
	return (
		<BaseScrollArea.Scrollbar
			orientation={orientation}
			className={cx(
				"flex touch-none p-px transition-colors select-none",
				orientation === "vertical" &&
					"h-full w-2.5 border-l border-l-transparent",
				orientation === "horizontal" &&
					"h-2.5 flex-col border-t border-t-transparent",
				className,
			)}
			{...props}
		/>
	);
}

function Thumb({
	className,
	...props
}: ComponentProps<typeof BaseScrollArea.Thumb>) {
	return (
		<BaseScrollArea.Thumb
			className={cx("bg-border relative flex-1 rounded-full", className)}
			{...props}
		/>
	);
}

function Corner({
	className,
	...props
}: ComponentProps<typeof BaseScrollArea.Corner>) {
	return <BaseScrollArea.Corner className={cx(className)} {...props} />;
}

export const ScrollArea = { Root, Viewport, Content, Scrollbar, Thumb, Corner };
