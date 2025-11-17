import { PreviewCard as PreviewCardPrimitive } from "@base-ui-components/react/preview-card";
import type { ComponentProps } from "react";

import { cx } from "..";

function Root({ ...props }: ComponentProps<typeof PreviewCardPrimitive.Root>) {
	return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function Trigger({
	...props
}: ComponentProps<typeof PreviewCardPrimitive.Trigger>) {
	return (
		<PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
	);
}

function Positioner({
	sideOffset = 4,
	...props
}: ComponentProps<typeof PreviewCardPrimitive.Positioner>) {
	return (
		<PreviewCardPrimitive.Portal data-slot="hover-card-portal">
			<PreviewCardPrimitive.Positioner
				data-slot="hover-card-positioner"
				sideOffset={sideOffset}
				{...props}
			/>
		</PreviewCardPrimitive.Portal>
	);
}

function Content({
	className,
	...props
}: ComponentProps<typeof PreviewCardPrimitive.Popup>) {
	return (
		<PreviewCardPrimitive.Popup
			data-slot="hover-card-content"
			className={cx(
				"z-50 w-64 origin-(--transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden",
				"data-open:animate-in data-closed:animate-out",
				"data-closed:fade-out-0 data-open:fade-in-0",
				"data-closed:zoom-out-95 data-open:zoom-in-95",
				"data-[side=bottom]:slide-in-from-top-2",
				"data-[side=left]:slide-in-from-right-2",
				"data-[side=right]:slide-in-from-left-2",
				"data-[side=top]:slide-in-from-bottom-2",
				className,
			)}
			{...props}
		/>
	);
}

export const HoverCard = {
	Root,
	Trigger,
	Positioner,
	Content,
};
