"use client";

import { Popover as PopoverPrimitive } from "@base-ui-components/react/popover";
import type { ComponentProps } from "react";
import { cx } from "..";

function Root(props: ComponentProps<typeof PopoverPrimitive.Root>) {
	return <PopoverPrimitive.Root {...props} />;
}

function Trigger(props: ComponentProps<typeof PopoverPrimitive.Trigger>) {
	return <PopoverPrimitive.Trigger {...props} />;
}

function Positioner({
	sideOffset = 4,
	portal,
	...props
}: ComponentProps<typeof PopoverPrimitive.Positioner> & {
	portal?: ComponentProps<typeof PopoverPrimitive.Portal>;
}) {
	return (
		<PopoverPrimitive.Portal {...portal}>
			<PopoverPrimitive.Positioner sideOffset={sideOffset} {...props} />
		</PopoverPrimitive.Portal>
	);
}

function Content({
	className,
	...props
}: ComponentProps<typeof PopoverPrimitive.Popup>) {
	return (
		<PopoverPrimitive.Popup
			className={cx(
				// Base styles
				"bg-popover text-popover-foreground",
				// Animations
				"data-open:animate-in data-closed:animate-out",
				"data-closed:fade-out-0 data-open:fade-in-0",
				"data-closed:zoom-out-95 data-open:zoom-in-95",
				"data-[side=bottom]:slide-in-from-top-2",
				"data-[side=left]:slide-in-from-right-2",
				"data-[side=right]:slide-in-from-left-2",
				"data-[side=top]:slide-in-from-bottom-2",
				// Layout
				"z-50 w-72",
				"origin-(--radix-popover-content-transform-origin)",
				// Visual styles
				"rounded-md border p-4 shadow-md outline-hidden",
				className,
			)}
			{...props}
		/>
	);
}

function Close(props: ComponentProps<typeof PopoverPrimitive.Close>) {
	return <PopoverPrimitive.Close {...props} />;
}

function Title({
	className,
	...props
}: ComponentProps<typeof PopoverPrimitive.Title>) {
	return (
		<PopoverPrimitive.Title
			className={cx("font-semibold", className)}
			{...props}
		/>
	);
}

function Description({
	className,
	...props
}: ComponentProps<typeof PopoverPrimitive.Description>) {
	return (
		<PopoverPrimitive.Description
			className={cx("text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

export const Popover = {
	Root,
	Trigger,
	Positioner,
	Content,
	Close,
	Title,
	Description,
};
