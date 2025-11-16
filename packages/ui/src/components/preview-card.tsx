"use client";

import { PreviewCard as BasePreviewCard } from "@base-ui-components/react/preview-card";
import type { ComponentProps } from "react";
import { cx } from "..";

function Root(props: ComponentProps<typeof BasePreviewCard.Root>) {
	return <BasePreviewCard.Root data-slot="preview-card" {...props} />;
}

function Trigger({ ...props }: ComponentProps<typeof BasePreviewCard.Trigger>) {
	return (
		<BasePreviewCard.Trigger data-slot="preview-card-trigger" {...props} />
	);
}

function Portal(props: ComponentProps<typeof BasePreviewCard.Portal>) {
	return <BasePreviewCard.Portal {...props} />;
}

function Positioner({
	className,
	...props
}: ComponentProps<typeof BasePreviewCard.Positioner>) {
	return <BasePreviewCard.Positioner className={className} {...props} />;
}

function Popup({
	className,
	...props
}: ComponentProps<typeof BasePreviewCard.Popup>) {
	return (
		<BasePreviewCard.Popup
			data-slot="preview-card-content"
			className={cx(
				"bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--transform-origin) rounded-md border p-4 shadow-md outline-hidden",
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
	children,
	...props
}: ComponentProps<typeof BasePreviewCard.Popup> & {
	align?: ComponentProps<typeof BasePreviewCard.Positioner>["align"];
	side?: ComponentProps<typeof BasePreviewCard.Positioner>["side"];
	sideOffset?: ComponentProps<typeof BasePreviewCard.Positioner>["sideOffset"];
}) {
	return (
		<Portal>
			<Positioner align={align} side={side} sideOffset={sideOffset}>
				<Popup className={className} {...props}>
					{children}
				</Popup>
			</Positioner>
		</Portal>
	);
}

export const PreviewCard = {
	Root,
	Trigger,
	Content,
};
