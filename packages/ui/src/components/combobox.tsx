"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import type * as React from "react";

import { cx } from "..";
import { Button } from "./button";
import { Command } from "./command";
import { Popover } from "./popover";

function Root({ ...props }: React.ComponentProps<typeof Popover.Root>) {
	return <Popover.Root {...props} />;
}

function Trigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof Popover.Trigger> & {
	className?: string;
}) {
	return (
		<Popover.Trigger
			render={
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={props["aria-expanded"]}
					className={cx("w-full justify-between", className)}
				/>
			}
			{...props}
		>
			{children}
		</Popover.Trigger>
	);
}

function Content({
	className,
	children,
	portal,
	...props
}: React.ComponentProps<typeof Popover.Content> & {
	portal?: React.ComponentProps<typeof Popover.Positioner>["portal"];
}) {
	return (
		<Popover.Positioner portal={portal ?? { keepMounted: true }}>
			<Popover.Content
				className={cx("w-[--radix-popover-trigger-width] p-0", className)}
				{...props}
			>
				{children}
			</Popover.Content>
		</Popover.Positioner>
	);
}

function CommandRoot({
	className,
	...props
}: React.ComponentProps<typeof Command.Root>) {
	return <Command.Root className={className} {...props} />;
}

function Input({
	className,
	...props
}: React.ComponentProps<typeof Command.Input>) {
	return <Command.Input className={cx("h-9", className)} {...props} />;
}

function List({
	className,
	...props
}: React.ComponentProps<typeof Command.List>) {
	return <Command.List className={className} {...props} />;
}

function Empty({ ...props }: React.ComponentProps<typeof Command.Empty>) {
	return <Command.Empty {...props} />;
}

function Group({
	className,
	...props
}: React.ComponentProps<typeof Command.Group>) {
	return <Command.Group className={className} {...props} />;
}

function Item({
	className,
	children,
	...props
}: React.ComponentProps<typeof Command.Item>) {
	return (
		<Command.Item
			className={cx(
				"relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm",
				"outline-hidden",
				"data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground",
				"data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
				className,
			)}
			{...props}
		>
			{children}
		</Command.Item>
	);
}

function ItemIndicator({
	className,
	selected,
	...props
}: React.ComponentProps<typeof Check> & {
	selected?: boolean;
}) {
	return (
		<Check
			className={cx(
				"ml-auto size-4",
				selected ? "opacity-100" : "opacity-0",
				className,
			)}
			{...props}
		/>
	);
}

function Icon({
	className,
	...props
}: React.ComponentProps<typeof ChevronsUpDown>) {
	return (
		<ChevronsUpDown className={cx("size-4 opacity-50", className)} {...props} />
	);
}

export const Combobox = {
	Root,
	Trigger,
	Content,
	Command: CommandRoot,
	Input,
	List,
	Empty,
	Group,
	Item,
	ItemIndicator,
	Icon,
};
