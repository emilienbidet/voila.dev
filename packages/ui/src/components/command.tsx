"use client";

import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";
import type * as React from "react";

import { cx } from "..";
import { Dialog as DialogComponent } from "./dialog";

function Root({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive>) {
	return (
		<CommandPrimitive
			data-slot="command"
			className={cx(
				"flex h-full w-full flex-col overflow-hidden rounded-md",
				"bg-popover text-popover-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function Dialog({
	title = "Command Palette",
	description = "Search for a command to run...",
	children,
	className,
	showCloseButton = true,
	...props
}: React.ComponentProps<typeof DialogComponent.Root> & {
	title?: string;
	description?: string;
	className?: string;
	showCloseButton?: boolean;
}) {
	return (
		<DialogComponent.Root {...props}>
			<DialogComponent.Header className="sr-only">
				<DialogComponent.Title>{title}</DialogComponent.Title>
				<DialogComponent.Description>{description}</DialogComponent.Description>
			</DialogComponent.Header>
			<DialogComponent.Content
				className={cx("overflow-hidden p-0", className)}
				showCloseButton={showCloseButton}
			>
				<Root
					className={cx(
						// "**:[[cmdk-group-heading]]:text-muted-foreground",
						// "**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:font-medium",
						// "**:[[cmdk-group]]:px-2",
						// "[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0",
						// "[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5",
						// "**:[[cmdk-input]]:h-12",
						// "**:data-[slot=command-input-wrapper]:h-12",
						// "**:[[cmdk-item]]:px-2 **:[[cmdk-item]]:py-3",
						// "[&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
					)}
				>
					{children}
				</Root>
			</DialogComponent.Content>
		</DialogComponent.Root>
	);
}

function Input({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
	return (
		<div
			data-slot="command-input-wrapper"
			className="flex h-9 items-center gap-2 border-b px-3"
		>
			<SearchIcon className="size-4 shrink-0 opacity-50" />
			<CommandPrimitive.Input
				data-slot="command-input"
				className={cx(
					"flex h-10 w-full rounded-md bg-transparent py-3 text-sm",
					"placeholder:text-muted-foreground",
					"outline-hidden",
					"disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				{...props}
			/>
		</div>
	);
}

function List({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
	return (
		<CommandPrimitive.List
			data-slot="command-list"
			className={cx(
				"max-h-[300px] overflow-x-hidden overflow-y-auto scroll-py-1",
				className,
			)}
			{...props}
		/>
	);
}

function Empty({
	...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
	return (
		<CommandPrimitive.Empty
			data-slot="command-empty"
			className="py-6 text-center text-sm"
			{...props}
		/>
	);
}

function Group({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
	return (
		<CommandPrimitive.Group
			data-slot="command-group"
			className={cx(
				"overflow-hidden p-1 text-foreground",
				"**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5",
				"**:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium",
				"**:[[cmdk-group-heading]]:text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function Separator({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
	return (
		<CommandPrimitive.Separator
			data-slot="command-separator"
			className={cx("bg-border -mx-1 h-px", className)}
			{...props}
		/>
	);
}

function Item({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
	return (
		<CommandPrimitive.Item
			data-slot="command-item"
			className={cx(
				"relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm",
				"outline-hidden",
				"data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground",
				"data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
				"[&_svg]:pointer-events-none [&_svg]:shrink-0",
				"[&_svg:not([class*='size-'])]:size-4",
				"[&_svg:not([class*='text-'])]:text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function Shortcut({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="command-shortcut"
			className={cx(
				"ml-auto text-xs tracking-widest text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

export const Command = {
	Root,
	Dialog,
	Input,
	List,
	Empty,
	Group,
	Separator,
	Item,
	Shortcut,
};
