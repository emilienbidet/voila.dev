import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";
import type { ComponentProps } from "react";
import { cx } from "..";

function Provider({
	delay = 0,
	...props
}: ComponentProps<typeof TooltipPrimitive.Provider>) {
	return <TooltipPrimitive.Provider delay={delay} {...props} />;
}

function Root({ ...props }: ComponentProps<typeof TooltipPrimitive.Root>) {
	return (
		<Provider>
			<TooltipPrimitive.Root {...props} />
		</Provider>
	);
}

function Trigger({
	...props
}: ComponentProps<typeof TooltipPrimitive.Trigger>) {
	return <TooltipPrimitive.Trigger {...props} />;
}

function Positioner({
	className,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Positioner>) {
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Positioner
				sideOffset={8}
				className={cx("z-50", className)}
				{...props}
			/>
		</TooltipPrimitive.Portal>
	);
}

function Arrow({
	className,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Arrow>) {
	return (
		<TooltipPrimitive.Arrow
			className={cx(
				"bg-primary fill-primary z-50 size-2.5 rotate-45 rounded-[2px]",
				"data-[side=bottom]:-translate-y-1/2 data-[side=bottom]:top-px",
				"data-[side=top]:translate-y-1/2 data-[side=top]:bottom-px",
				"data-[side=left]:translate-x-1/2 data-[side=left]:right-px",
				"data-[side=right]:-translate-x-1/2 data-[side=right]:left-px",
				className,
			)}
			{...props}
		/>
	);
}

function Content({
	className,
	children,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Popup>) {
	return (
		<TooltipPrimitive.Popup
			className={cx(
				"bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
				className,
			)}
			{...props}
		>
			{children}
			<Arrow />
		</TooltipPrimitive.Popup>
	);
}

export const Tooltip = {
	Root,
	Trigger,
	Content,
	Arrow,
	Provider,
	Positioner,
};
