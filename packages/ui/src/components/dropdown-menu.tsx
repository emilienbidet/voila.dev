import { Menu as MenuPrimitive } from "@base-ui-components/react/menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import type * as React from "react";

import { cx } from "..";

function Root({ ...props }: MenuPrimitive.Root.Props) {
	return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function Portal({ ...props }: MenuPrimitive.Portal.Props) {
	return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function Trigger({ ...props }: MenuPrimitive.Trigger.Props) {
	return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function Positioner({
	sideOffset = 4,
	...props
}: MenuPrimitive.Positioner.Props) {
	return (
		<MenuPrimitive.Portal>
			<MenuPrimitive.Positioner
				data-slot="dropdown-menu-positioner"
				sideOffset={sideOffset}
				{...props}
			/>
		</MenuPrimitive.Portal>
	);
}

function Content({ className, ...props }: MenuPrimitive.Popup.Props) {
	return (
		<MenuPrimitive.Popup
			data-slot="dropdown-menu-content"
			className={cx(
				"z-50 min-w-32 max-h-(--available-height) origin-(--transform-origin)",
				"overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
				"bg-popover text-popover-foreground",
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

function Group({ ...props }: MenuPrimitive.Group.Props) {
	return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function Item({
	className,
	inset,
	variant = "default",
	...props
}: MenuPrimitive.Item.Props & {
	inset?: boolean;
	variant?: "default" | "destructive";
}) {
	return (
		<MenuPrimitive.Item
			data-slot="dropdown-menu-item"
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
}: MenuPrimitive.CheckboxItem.Props) {
	return (
		<MenuPrimitive.CheckboxItem
			data-slot="dropdown-menu-checkbox-item"
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
				<MenuPrimitive.CheckboxItemIndicator>
					<CheckIcon className="size-4" />
				</MenuPrimitive.CheckboxItemIndicator>
			</span>
			{children}
		</MenuPrimitive.CheckboxItem>
	);
}

function RadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
	return (
		<MenuPrimitive.RadioGroup
			data-slot="dropdown-menu-radio-group"
			{...props}
		/>
	);
}

function RadioItem({
	className,
	children,
	...props
}: MenuPrimitive.RadioItem.Props) {
	return (
		<MenuPrimitive.RadioItem
			data-slot="dropdown-menu-radio-item"
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
				<MenuPrimitive.RadioItemIndicator>
					<CircleIcon className="size-2 fill-current" />
				</MenuPrimitive.RadioItemIndicator>
			</span>
			{children}
		</MenuPrimitive.RadioItem>
	);
}

function Label({
	className,
	inset,
	...props
}: MenuPrimitive.GroupLabel.Props & {
	inset?: boolean;
}) {
	return (
		<MenuPrimitive.GroupLabel
			data-slot="dropdown-menu-label"
			data-inset={inset}
			className={cx(
				"px-2 py-1.5 text-sm font-medium",
				"data-inset:pl-8",
				className,
			)}
			{...props}
		/>
	);
}

function Separator({ className, ...props }: MenuPrimitive.Separator.Props) {
	return (
		<MenuPrimitive.Separator
			data-slot="dropdown-menu-separator"
			className={cx("bg-border -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

function Shortcut({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="dropdown-menu-shortcut"
			className={cx(
				"ml-auto text-xs tracking-widest",
				"text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function Sub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
	return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />;
}

function SubTrigger({
	className,
	inset,
	children,
	...props
}: MenuPrimitive.SubmenuTrigger.Props & {
	inset?: boolean;
}) {
	return (
		<MenuPrimitive.SubmenuTrigger
			data-slot="dropdown-menu-sub-trigger"
			data-inset={inset}
			className={cx(
				"flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm",
				"outline-hidden select-none",
				"focus:bg-accent focus:text-accent-foreground",
				"data-open:bg-accent data-open:text-accent-foreground",
				"data-inset:pl-8",
				"data-[variant=destructive]:*:[svg]:text-destructive!",
				"[&_svg:not([class*='text-'])]:text-muted-foreground",
				"[&_svg]:pointer-events-none [&_svg]:shrink-0",
				"[&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto size-4" />
		</MenuPrimitive.SubmenuTrigger>
	);
}

function SubContent({ className, ...props }: MenuPrimitive.Popup.Props) {
	return (
		<MenuPrimitive.Popup
			data-slot="dropdown-menu-sub-content"
			className={cx(
				"z-50 min-w-32 origin-(--transform-origin)",
				"overflow-hidden rounded-md border p-1 shadow-lg",
				"bg-popover text-popover-foreground",
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

export const DropdownMenu = {
	Root,
	Portal,
	Trigger,
	Positioner,
	Content,
	Group,
	Label,
	Item,
	CheckboxItem,
	RadioGroup,
	RadioItem,
	Separator,
	Shortcut,
	Sub,
	SubTrigger,
	SubContent,
};
