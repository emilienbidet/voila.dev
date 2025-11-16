"use client";

import { Select as SelectPrimitive } from "@base-ui-components/react/select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { cx } from "..";

function Root({ ...props }: ComponentProps<typeof SelectPrimitive.Root>) {
	return <SelectPrimitive.Root {...props} />;
}

function Group({ ...props }: ComponentProps<typeof SelectPrimitive.Group>) {
	return <SelectPrimitive.Group {...props} />;
}

function Value({
	placeholder,
	...props
}: ComponentProps<typeof SelectPrimitive.Value> & {
	placeholder?: string;
}) {
	if (!placeholder) {
		return <SelectPrimitive.Value {...props} />;
	}

	return (
		<SelectPrimitive.Value
			render={(_, { value }) => {
				if (value) {
					return <SelectPrimitive.Value {...props} />;
				}

				// Placeholder
				return (
					<span data-slot="select-value" className="text-muted-foreground">
						{placeholder}
					</span>
				);
			}}
			{...props}
		/>
	);
}

function Trigger({
	className,
	size = "default",
	children,
	...props
}: ComponentProps<typeof SelectPrimitive.Trigger> & {
	size?: "sm" | "default";
}) {
	return (
		<SelectPrimitive.Trigger
			className={cx(
				// Layout
				"flex w-fit items-center justify-between gap-2",
				// Sizing
				"px-3 py-2 text-sm whitespace-nowrap",
				"data-[size=default]:h-9 data-[size=sm]:h-8",
				// Colors & Background
				"border-input bg-transparent",
				"dark:bg-input/30 dark:hover:bg-input/50",
				// Border & Shadow
				"rounded-md border shadow-xs",
				// Typography
				"data-placeholder:text-muted-foreground",
				"[&_svg:not([class*='text-'])]:text-muted-foreground",
				// Focus states
				"outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
				// Invalid states
				"aria-invalid:border-destructive",
				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
				// Disabled states
				"data-disabled:cursor-not-allowed data-disabled:opacity-50",
				// Transitions
				"transition-[color,box-shadow]",
				// Value slot styling
				"*:data-[slot=select-value]:line-clamp-1",
				"*:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
				// Icon styling
				"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			{children}
		</SelectPrimitive.Trigger>
	);
}

function Icon({
	className,
	...props
}: ComponentProps<typeof SelectPrimitive.Icon>) {
	return (
		<SelectPrimitive.Icon
			render={
				<ChevronDownIcon className={cx("size-4 opacity-50", className)} />
			}
			{...props}
		/>
	);
}

function Portal({ ...props }: ComponentProps<typeof SelectPrimitive.Portal>) {
	return <SelectPrimitive.Portal {...props} />;
}

function Positioner({
	...props
}: ComponentProps<typeof SelectPrimitive.Positioner>) {
	return (
		<SelectPrimitive.Positioner
			alignItemWithTrigger={false}
			sideOffset={5}
			{...props}
		/>
	);
}

function Popup({
	className,
	children,
	...props
}: ComponentProps<typeof SelectPrimitive.Popup>) {
	return (
		<SelectPrimitive.Popup
			className={cx(
				// Layout
				"relative z-50 p-1",
				// Sizing
				"max-h-(--available-height) min-w-(--anchor-width)",
				// Colors
				"bg-popover text-popover-foreground",
				// Border & Shadow
				"rounded-md border shadow-md",
				// Overflow
				"overflow-x-hidden overflow-y-auto",
				// Transform origin
				"origin-(--transform-origin)",
				// Animations - Enter
				"data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
				// Animations - Exit
				"data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
				// Slide animations by side
				"data-[side=bottom]:slide-in-from-top-2",
				"data-[side=left]:slide-in-from-right-2",
				"data-[side=right]:slide-in-from-left-2",
				"data-[side=top]:slide-in-from-bottom-2",
				className,
			)}
			{...props}
		>
			{children}
		</SelectPrimitive.Popup>
	);
}

function Content({
	className,
	children,
	...props
}: ComponentProps<typeof SelectPrimitive.Popup>) {
	return (
		<>
			<ScrollUpArrow />
			<Popup className={className} {...props}>
				{children}
			</Popup>
			<ScrollDownArrow />
		</>
	);
}

function List({ ...props }: ComponentProps<typeof SelectPrimitive.List>) {
	return <SelectPrimitive.List data-slot="select-list" {...props} />;
}

function Label({
	className,
	...props
}: ComponentProps<typeof SelectPrimitive.GroupLabel>) {
	return (
		<SelectPrimitive.GroupLabel
			className={cx("text-muted-foreground px-2 py-1.5 text-xs", className)}
			{...props}
		/>
	);
}

function GroupLabel({
	className,
	...props
}: ComponentProps<typeof SelectPrimitive.GroupLabel>) {
	return (
		<SelectPrimitive.GroupLabel
			className={cx("text-muted-foreground px-2 py-1.5 text-xs", className)}
			{...props}
		/>
	);
}

function Item({
	className,
	children,
	...props
}: ComponentProps<typeof SelectPrimitive.Item>) {
	return (
		<SelectPrimitive.Item
			className={cx(
				// Layout
				"relative flex w-full items-center gap-2",
				// Sizing & Spacing
				"py-1.5 pr-8 pl-2 text-sm",
				// Border & Shape
				"rounded-sm",
				// Colors
				"focus:bg-accent focus:text-accent-foreground",
				"[&_svg:not([class*='text-'])]:text-muted-foreground",
				// Cursor & Selection
				"cursor-default select-none outline-hidden",
				// Disabled states
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				// Icon styling
				"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				// Span styling
				"*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
				className,
			)}
			{...props}
		>
			{children}
		</SelectPrimitive.Item>
	);
}

function ItemIndicator({
	className,
	...props
}: ComponentProps<typeof SelectPrimitive.ItemIndicator>) {
	return (
		<SelectPrimitive.ItemIndicator className={className} {...props}>
			<CheckIcon className="size-4" />
		</SelectPrimitive.ItemIndicator>
	);
}

function ItemText({
	...props
}: ComponentProps<typeof SelectPrimitive.ItemText>) {
	return <SelectPrimitive.ItemText data-slot="select-item-text" {...props} />;
}

function Separator({
	className,
	...props
}: ComponentProps<typeof SelectPrimitive.Separator>) {
	return (
		<SelectPrimitive.Separator
			className={cx("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

function ScrollUpArrow({
	className,
	...props
}: ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
	return (
		<SelectPrimitive.ScrollUpArrow
			className={cx(
				// Layout
				"relative z-51 flex h-6 w-full items-center justify-center",
				// Colors & Background
				"bg-popover",
				// Border
				"border",
				"data-[direction=up]:border-b-0 data-[direction=down]:border-t-0",
				// Border radius
				"data-[direction=up]:rounded-t-md data-[direction=down]:rounded-b-md",
				// Typography
				"text-center text-md cursor-default",
				// Pseudo-element
				"before:absolute before:left-0 before:h-full before:w-full before:content-['']",
				"data-[direction=up]:before:top-full",
				"data-[direction=down]:bottom-0 data-[direction=down]:before:-bottom-full",
				className,
			)}
			{...props}
		>
			<ChevronUpIcon className="size-4" />
		</SelectPrimitive.ScrollUpArrow>
	);
}

function ScrollDownArrow({
	className,
	...props
}: ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
	return (
		<SelectPrimitive.ScrollDownArrow
			className={cx(
				// Layout
				"relative z-51 flex h-6 w-full items-center justify-center",
				// Colors & Background
				"bg-popover",
				// Border
				"border",
				"data-[direction=up]:border-b-0 data-[direction=down]:border-t-0",
				// Border radius
				"data-[direction=up]:rounded-t-md data-[direction=down]:rounded-b-md",
				// Typography
				"text-center text-md cursor-default",
				// Pseudo-element
				"before:absolute before:left-0 before:h-full before:w-full before:content-['']",
				"data-[direction=up]:before:top-full",
				"data-[direction=down]:bottom-0 data-[direction=down]:before:-bottom-full",
				className,
			)}
			{...props}
		>
			<ChevronDownIcon className="size-4" />
		</SelectPrimitive.ScrollDownArrow>
	);
}

export const Select = {
	Root,
	Group,
	Value,
	Trigger,
	Icon,
	Portal,
	Positioner,
	Popup,
	Content,
	List,
	Label,
	GroupLabel,
	Item,
	ItemIndicator,
	ItemText,
	Separator,
	ScrollUpArrow,
	ScrollDownArrow,
};
