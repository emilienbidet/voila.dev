import { ScrollArea as ScrollAreaPrimitive } from "@base-ui-components/react/scroll-area";
import type { ComponentProps } from "react";
import { cx } from "../index";

function Root({
	className,
	...props
}: ComponentProps<typeof ScrollAreaPrimitive.Root>) {
	return (
		<ScrollAreaPrimitive.Root
			data-slot="scroll-area"
			className={cx("relative", className)}
			{...props}
		/>
	);
}

function Viewport({
	className,
	...props
}: ComponentProps<typeof ScrollAreaPrimitive.Viewport>) {
	return (
		<ScrollAreaPrimitive.Viewport
			data-slot="scroll-area-viewport"
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
}: ComponentProps<typeof ScrollAreaPrimitive.Content>) {
	return (
		<ScrollAreaPrimitive.Content
			data-slot="scroll-area-content"
			className={className}
			{...props}
		/>
	);
}

function Scrollbar({
	className,
	orientation = "vertical",
	...props
}: ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) {
	return (
		<ScrollAreaPrimitive.Scrollbar
			data-slot="scroll-area-scrollbar"
			orientation={orientation}
			className={cx(
				"flex touch-none p-px transition-[colors,opacity] select-none opacity-0 data-hovering:opacity-100 data-scrolling:opacity-100 duration-150 delay-300 data-hovering:duration-75 data-scrolling:duration-75 data-hovering:delay-0 data-scrolling:delay-0",
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
}: ComponentProps<typeof ScrollAreaPrimitive.Thumb>) {
	return (
		<ScrollAreaPrimitive.Thumb
			data-slot="scroll-area-thumb"
			className={cx("bg-border relative flex-1 rounded-full", className)}
			{...props}
		/>
	);
}

function Corner({
	className,
	...props
}: ComponentProps<typeof ScrollAreaPrimitive.Corner>) {
	return (
		<ScrollAreaPrimitive.Corner
			data-slot="scroll-area-corner"
			className={className}
			{...props}
		/>
	);
}

export const ScrollArea = {
	Root,
	Viewport,
	Content,
	Scrollbar,
	Thumb,
	Corner,
};
