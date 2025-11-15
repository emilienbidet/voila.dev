"use client";

import { Popover as BasePopover } from "@base-ui-components/react/popover";
import type { ComponentProps } from "react";
import { cx } from "..";

function Root(props: ComponentProps<typeof BasePopover.Root>) {
	return <BasePopover.Root data-slot="popover" {...props} />;
}

function Trigger({ ...props }: ComponentProps<typeof BasePopover.Trigger>) {
	return <BasePopover.Trigger data-slot="popover-trigger" {...props} />;
}

function Portal(props: ComponentProps<typeof BasePopover.Portal>) {
	return <BasePopover.Portal {...props} />;
}

function Positioner({
	className,
	...props
}: ComponentProps<typeof BasePopover.Positioner>) {
	return <BasePopover.Positioner className={className} {...props} />;
}

function Popup({
	className,
	...props
}: ComponentProps<typeof BasePopover.Popup>) {
	return (
		<BasePopover.Popup
			data-slot="popover-content"
			className={cx(
				"bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--transform-origin) rounded-md border p-4 shadow-md outline-hidden",
				className,
			)}
			{...props}
		/>
	);
}

function Content({
	className,
	align = "center",
	side = "bottom",
	sideOffset = 4,
	...props
}: ComponentProps<typeof BasePopover.Popup> & {
	align?: ComponentProps<typeof BasePopover.Positioner>["align"];
	side?: ComponentProps<typeof BasePopover.Positioner>["side"];
	sideOffset?: ComponentProps<typeof BasePopover.Positioner>["sideOffset"];
}) {
	return (
		<Portal>
			<Positioner align={align} side={side} sideOffset={sideOffset}>
				<Popup className={className} {...props} />
			</Positioner>
		</Portal>
	);
}

function Arrow({
	className,
	...props
}: ComponentProps<typeof BasePopover.Arrow>) {
	return <BasePopover.Arrow className={className} {...props} />;
}

function Title({
	className,
	...props
}: ComponentProps<typeof BasePopover.Title>) {
	return (
		<BasePopover.Title
			className={cx("text-sm font-medium", className)}
			{...props}
		/>
	);
}

function Description({
	className,
	...props
}: ComponentProps<typeof BasePopover.Description>) {
	return (
		<BasePopover.Description
			className={cx("text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

function Close(props: ComponentProps<typeof BasePopover.Close>) {
	return <BasePopover.Close {...props} />;
}

export const Popover = {
	Root,
	Trigger,
	Portal,
	Positioner,
	Popup,
	Content,
	Arrow,
	Title,
	Description,
	Close,
};
