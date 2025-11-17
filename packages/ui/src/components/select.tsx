"use client";

import { Select as SelectPrimitive } from "@base-ui-components/react/select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cx } from "..";

function Root<Value, Multiple extends boolean | undefined = false>(
	props: SelectPrimitive.Root.Props<Value, Multiple>,
) {
	return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function Group({ ...props }: SelectPrimitive.Group.Props) {
	return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function Value({
	placeholder,
	...props
}: SelectPrimitive.Value.Props & {
	placeholder?: string;
}) {
	if (!placeholder) {
		return <SelectPrimitive.Value data-slot="select-value" {...props} />;
	}

	return (
		<SelectPrimitive.Value
			render={(_, { value }) => {
				if (value) {
					return <SelectPrimitive.Value data-slot="select-value" {...props} />;
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
}: SelectPrimitive.Trigger.Props & {
	size?: "sm" | "default";
}) {
	return (
		<SelectPrimitive.Trigger
			data-slot="select-trigger"
			data-size={size}
			className={cx(
				"flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs",
				"border-input data-placeholder:text-muted-foreground",
				"[&_svg:not([class*='text-'])]:text-muted-foreground",
				"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none",
				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
				"dark:bg-input/30 dark:hover:bg-input/50",
				"transition-[color,box-shadow]",
				"disabled:cursor-not-allowed disabled:opacity-50",
				"data-[size=default]:h-9 data-[size=sm]:h-8",
				"*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
				"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			{children}
			<SelectPrimitive.Icon
				render={<ChevronDownIcon className="size-4 opacity-50" />}
			/>
		</SelectPrimitive.Trigger>
	);
}

function Positioner(props: SelectPrimitive.Positioner.Props) {
	return (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Positioner
				data-slot="select-positioner"
				alignItemWithTrigger={false}
				sideOffset={5}
				{...props}
			/>
		</SelectPrimitive.Portal>
	);
}

function Content({
	className,
	children,
	...props
}: SelectPrimitive.Popup.Props) {
	return (
		<>
			<ScrollUpButton />
			<SelectPrimitive.Popup
				data-slot="select-content"
				className={cx(
					"relative z-50 max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin)",
					"overflow-x-hidden overflow-y-auto rounded-md border shadow-md p-1",
					"bg-popover text-popover-foreground",
					"data-open:animate-in data-closed:animate-out",
					"data-closed:fade-out-0 data-open:fade-in-0",
					"data-closed:zoom-out-95 data-open:zoom-in-95",
					"data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
					"data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
					className,
				)}
				{...props}
			>
				{children}
			</SelectPrimitive.Popup>
			<ScrollDownButton />
		</>
	);
}

function Label({ className, ...props }: SelectPrimitive.GroupLabel.Props) {
	return (
		<SelectPrimitive.GroupLabel
			data-slot="select-label"
			className={cx("text-muted-foreground px-2 py-1.5 text-xs", className)}
			{...props}
		/>
	);
}

function Item({ className, children, ...props }: SelectPrimitive.Item.Props) {
	return (
		<SelectPrimitive.Item
			data-slot="select-item"
			className={cx(
				"relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none",
				"focus:bg-accent focus:text-accent-foreground",
				"[&_svg:not([class*='text-'])]:text-muted-foreground",
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				"*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
				className,
			)}
			{...props}
		>
			<span className="absolute right-2 flex size-3.5 items-center justify-center">
				<SelectPrimitive.ItemIndicator>
					<CheckIcon className="size-4" />
				</SelectPrimitive.ItemIndicator>
			</span>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	);
}

function Separator({ className, ...props }: SelectPrimitive.Separator.Props) {
	return (
		<SelectPrimitive.Separator
			data-slot="select-separator"
			className={cx("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
			{...props}
		/>
	);
}

function ScrollUpButton({
	className,
	...props
}: SelectPrimitive.ScrollUpArrow.Props) {
	return (
		<SelectPrimitive.ScrollUpArrow
			data-slot="select-scroll-up-button"
			className={cx(
				"w-full h-6 flex items-center justify-center text-center cursor-default",
				"bg-popover z-51 text-md border",
				"data-[direction=up]:border-b-0 data-[direction=down]:border-t-0",
				"data-[direction=up]:rounded-t-md data-[direction=down]:rounded-b-md",
				"before:content-[''] before:absolute before:w-full before:h-full before:left-0",
				"data-[direction=up]:before:top-full data-[direction=down]:bottom-0 data-[direction=down]:before:-bottom-full",
				className,
			)}
			{...props}
		>
			<ChevronUpIcon className="size-4" />
		</SelectPrimitive.ScrollUpArrow>
	);
}

function ScrollDownButton({
	className,
	...props
}: SelectPrimitive.ScrollDownArrow.Props) {
	return (
		<SelectPrimitive.ScrollDownArrow
			data-slot="select-scroll-down-button"
			className={cx(
				"w-full h-6 flex items-center justify-center text-center cursor-default",
				"bg-popover z-51 text-md border",
				"data-[direction=up]:border-b-0 data-[direction=down]:border-t-0",
				"data-[direction=up]:rounded-t-md data-[direction=down]:rounded-b-md",
				"before:content-[''] before:absolute before:w-full before:h-full before:left-0",
				"data-[direction=up]:before:top-full data-[direction=down]:bottom-0 data-[direction=down]:before:-bottom-full",
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
	Positioner,
	Content,
	Label,
	Item,
	Separator,
	ScrollUpButton,
	ScrollDownButton,
};

// Individual exports for convenience
export {
	Root as SelectRoot,
	Group as SelectGroup,
	Value as SelectValue,
	Trigger as SelectTrigger,
	Positioner as SelectPositioner,
	Content as SelectContent,
	Label as SelectLabel,
	Item as SelectItem,
	Separator as SelectSeparator,
	ScrollUpButton as SelectScrollUpButton,
	ScrollDownButton as SelectScrollDownButton,
};
