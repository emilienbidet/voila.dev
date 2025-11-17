import { ContextMenu as ContextMenuPrimitive } from "@base-ui-components/react/context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import type * as React from "react";

import { cx } from "..";

function Root({ ...props }: ContextMenuPrimitive.Root.Props) {
	return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function Trigger({ ...props }: ContextMenuPrimitive.Trigger.Props) {
	return (
		<ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
	);
}

function Group({ ...props }: ContextMenuPrimitive.Group.Props) {
	return (
		<ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
	);
}

function Portal({ ...props }: ContextMenuPrimitive.Portal.Props) {
	return (
		<ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
	);
}

function Sub({ ...props }: ContextMenuPrimitive.SubmenuRoot.Props) {
	return (
		<ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
	);
}

function RadioGroup({ ...props }: ContextMenuPrimitive.RadioGroup.Props) {
	return (
		<ContextMenuPrimitive.RadioGroup
			data-slot="context-menu-radio-group"
			{...props}
		/>
	);
}

function Positioner({ ...props }: ContextMenuPrimitive.Positioner.Props) {
	return (
		<Portal>
			<ContextMenuPrimitive.Positioner
				data-slot="context-menu-positioner"
				{...props}
			/>
		</Portal>
	);
}

function Content({ className, ...props }: ContextMenuPrimitive.Popup.Props) {
	return (
		<ContextMenuPrimitive.Popup
			data-slot="context-menu-content"
			className={cx(
				"z-50 min-w-32 max-h-(--radix-context-menu-content-available-height)",
				"origin-(--radix-context-menu-content-transform-origin)",
				"overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
				"bg-popover text-popover-foreground",
				"data-[state=open]:animate-in data-[state=closed]:animate-out",
				"data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
				"data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
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

function Item({
	className,
	inset,
	variant = "default",
	...props
}: ContextMenuPrimitive.Item.Props & {
	inset?: boolean;
	variant?: "default" | "destructive";
}) {
	return (
		<ContextMenuPrimitive.Item
			data-slot="context-menu-item"
			data-inset={inset}
			data-variant={variant}
			className={cx(
				"relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm",
				"outline-hidden select-none",
				"focus:bg-accent focus:text-accent-foreground",
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				"data-inset:pl-8",
				"data-[variant=destructive]:text-destructive",
				"data-[variant=destructive]:focus:bg-destructive/10",
				"dark:data-[variant=destructive]:focus:bg-destructive/20",
				"data-[variant=destructive]:focus:text-destructive",
				"data-[variant=destructive]:*:[svg]:text-destructive!",
				"[&_svg:not([class*='text-'])]:text-muted-foreground",
				"[&_svg]:pointer-events-none [&_svg]:shrink-0",
				"[&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

function CheckboxItem({
	className,
	children,
	checked,
	...props
}: ContextMenuPrimitive.CheckboxItem.Props) {
	return (
		<ContextMenuPrimitive.CheckboxItem
			data-slot="context-menu-checkbox-item"
			className={cx(
				"relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm",
				"outline-hidden select-none",
				"focus:bg-accent focus:text-accent-foreground",
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				"[&_svg]:pointer-events-none [&_svg]:shrink-0",
				"[&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			checked={checked}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<ContextMenuPrimitive.CheckboxItemIndicator>
					<CheckIcon className="size-4" />
				</ContextMenuPrimitive.CheckboxItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.CheckboxItem>
	);
}

function RadioItem({
	className,
	children,
	...props
}: ContextMenuPrimitive.RadioItem.Props) {
	return (
		<ContextMenuPrimitive.RadioItem
			data-slot="context-menu-radio-item"
			className={cx(
				"relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm",
				"outline-hidden select-none",
				"focus:bg-accent focus:text-accent-foreground",
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				"[&_svg]:pointer-events-none [&_svg]:shrink-0",
				"[&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<ContextMenuPrimitive.RadioItemIndicator>
					<CircleIcon className="size-2 fill-current" />
				</ContextMenuPrimitive.RadioItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.RadioItem>
	);
}

function Label({
	className,
	inset,
	...props
}: ContextMenuPrimitive.GroupLabel.Props & {
	inset?: boolean;
}) {
	return (
		<ContextMenuPrimitive.GroupLabel
			data-slot="context-menu-group-label"
			data-inset={inset}
			className={cx(
				"px-2 py-1.5 text-sm font-medium",
				"text-foreground",
				"data-inset:pl-8",
				className,
			)}
			{...props}
		/>
	);
}

function Separator({
	className,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
	return (
		<ContextMenuPrimitive.Separator
			data-slot="context-menu-separator"
			className={cx("bg-border -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

function Shortcut({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="context-menu-shortcut"
			className={cx(
				"ml-auto text-xs tracking-widest",
				"text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function SubTrigger({
	className,
	inset,
	children,
	...props
}: ContextMenuPrimitive.SubmenuTrigger.Props & {
	inset?: boolean;
}) {
	return (
		<ContextMenuPrimitive.SubmenuTrigger
			data-slot="context-menu-sub-trigger"
			data-inset={inset}
			className={cx(
				"flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm",
				"outline-hidden select-none",
				"focus:bg-accent focus:text-accent-foreground",
				"data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
				"data-inset:pl-8",
				"[&_svg]:pointer-events-none [&_svg]:shrink-0",
				"[&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto size-4" />
		</ContextMenuPrimitive.SubmenuTrigger>
	);
}

function SubContent({ className, ...props }: ContextMenuPrimitive.Popup.Props) {
	return (
		<ContextMenuPrimitive.Popup
			data-slot="context-menu-sub-content"
			className={cx(
				"z-50 min-w-32 origin-(--radix-context-menu-content-transform-origin)",
				"overflow-hidden rounded-md border p-1 shadow-lg",
				"bg-popover text-popover-foreground",
				"data-[state=open]:animate-in data-[state=closed]:animate-out",
				"data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
				"data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
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

export const ContextMenu = {
	Root,
	Trigger,
	Content,
	Item,
	CheckboxItem,
	RadioItem,
	Label,
	Separator,
	Shortcut,
	Group,
	Portal,
	Sub,
	SubContent,
	SubTrigger,
	RadioGroup,
	Positioner,
};
