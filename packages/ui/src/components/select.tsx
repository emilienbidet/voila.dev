"use client";

import { Select as BaseSelect } from "@base-ui-components/react/select";
import type { ComponentProps } from "react";
import { cx } from "..";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "../icons";

function Root(props: ComponentProps<typeof BaseSelect.Root>) {
	return <BaseSelect.Root {...props} />;
}

function Trigger({
	className,
	size = "default",
	...props
}: ComponentProps<typeof BaseSelect.Trigger> & {
	size?: "sm" | "default";
}) {
	return (
		<BaseSelect.Trigger
			className={cx(
				"border-input data-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:line-clamp-1 *:flex *:items-center *:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

function Value(props: ComponentProps<typeof BaseSelect.Value>) {
	return <BaseSelect.Value {...props} />;
}

function Icon({
	className,
	children,
	...props
}: ComponentProps<typeof BaseSelect.Icon>) {
	return (
		<BaseSelect.Icon
			className={cx("flex items-center justify-center", className)}
			{...props}
		>
			{children || <ChevronDownIcon className="size-4 opacity-50" />}
		</BaseSelect.Icon>
	);
}

function Portal(props: ComponentProps<typeof BaseSelect.Portal>) {
	return <BaseSelect.Portal {...props} />;
}

function Backdrop({
	className,
	...props
}: ComponentProps<typeof BaseSelect.Backdrop>) {
	return <BaseSelect.Backdrop className={cx(className)} {...props} />;
}

function Positioner({
	className,
	...props
}: ComponentProps<typeof BaseSelect.Positioner>) {
	return <BaseSelect.Positioner className={cx("z-50", className)} {...props} />;
}

function Popup({
	className,
	...props
}: ComponentProps<typeof BaseSelect.Popup>) {
	return (
		<BaseSelect.Popup
			className={cx(
				"bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative max-h-(--available-height) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
				className,
			)}
			{...props}
		/>
	);
}

function List({ className, ...props }: ComponentProps<typeof BaseSelect.List>) {
	return <BaseSelect.List className={cx("p-1", className)} {...props} />;
}

function Item({ className, ...props }: ComponentProps<typeof BaseSelect.Item>) {
	return (
		<BaseSelect.Item
			className={cx(
				"focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative grid w-full cursor-default grid-cols-[1rem_1fr] items-center gap-2 rounded-sm py-1.5 pr-2 pl-2 text-sm outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

function ItemText({
	className,
	...props
}: ComponentProps<typeof BaseSelect.ItemText>) {
	return (
		<BaseSelect.ItemText className={cx("col-start-2", className)} {...props} />
	);
}

function ItemIndicator({
	className,
	keepMounted = true,
	...props
}: ComponentProps<typeof BaseSelect.ItemIndicator> & {
	keepMounted?: boolean;
}) {
	return (
		<BaseSelect.ItemIndicator
			keepMounted={keepMounted}
			className={cx(
				"col-start-1 flex size-4 items-center justify-center opacity-0 [&[data-selected]]:opacity-100 [&:not([hidden])]:opacity-100",
				className,
			)}
			{...props}
		>
			<CheckIcon className="size-4" />
		</BaseSelect.ItemIndicator>
	);
}

function Group({
	className,
	...props
}: ComponentProps<typeof BaseSelect.Group>) {
	return <BaseSelect.Group className={cx(className)} {...props} />;
}

function GroupLabel({
	className,
	...props
}: ComponentProps<typeof BaseSelect.GroupLabel>) {
	return (
		<BaseSelect.GroupLabel
			className={cx("text-muted-foreground px-2 py-1.5 text-xs", className)}
			{...props}
		/>
	);
}

function Separator({
	className,
	...props
}: ComponentProps<typeof BaseSelect.Separator>) {
	return (
		<BaseSelect.Separator
			className={cx("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

function ScrollUpArrow({
	className,
	...props
}: ComponentProps<typeof BaseSelect.ScrollUpArrow>) {
	return (
		<BaseSelect.ScrollUpArrow
			className={cx(
				"flex cursor-default items-center justify-center py-1",
				className,
			)}
			{...props}
		>
			<ChevronUpIcon className="size-4" />
		</BaseSelect.ScrollUpArrow>
	);
}

function ScrollDownArrow({
	className,
	...props
}: ComponentProps<typeof BaseSelect.ScrollDownArrow>) {
	return (
		<BaseSelect.ScrollDownArrow
			className={cx(
				"flex cursor-default items-center justify-center py-1",
				className,
			)}
			{...props}
		>
			<ChevronDownIcon className="size-4" />
		</BaseSelect.ScrollDownArrow>
	);
}

function Arrow({
	className,
	...props
}: ComponentProps<typeof BaseSelect.Arrow>) {
	return <BaseSelect.Arrow className={cx(className)} {...props} />;
}

export const Select = {
	Root,
	Trigger,
	Value,
	Icon,
	Portal,
	Backdrop,
	Positioner,
	Popup,
	List,
	Item,
	ItemText,
	ItemIndicator,
	Group,
	GroupLabel,
	Separator,
	ScrollUpArrow,
	ScrollDownArrow,
	Arrow,
};
