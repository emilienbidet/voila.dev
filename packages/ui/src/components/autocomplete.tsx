import { Autocomplete as AutocompletePrimitive } from "@base-ui-components/react/autocomplete";
import { XIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { cx } from "../index";
import { Button } from "./button";
import { Input as InputComponent } from "./input";

function Root({ ...props }: ComponentProps<typeof AutocompletePrimitive.Root>) {
	return <AutocompletePrimitive.Root {...props} />;
}

function Input({
	className,
	...props
}: ComponentProps<typeof AutocompletePrimitive.Input>) {
	return (
		<AutocompletePrimitive.Input
			data-slot="autocomplete-input"
			render={<InputComponent />}
			className={cx(className)}
			{...props}
		/>
	);
}

function Popup({
	className,
	...props
}: ComponentProps<typeof AutocompletePrimitive.Popup>) {
	return (
		<AutocompletePrimitive.Popup
			data-slot="autocomplete-popup"
			className={cx(
				"w-(--anchor-width) max-h-[min(var(--available-height),23rem)] max-w-(--available-width)",
				"overflow-y-auto scroll-pt-2 scroll-pb-2 overscroll-contain",
				"rounded-md bg-popover text-popover-foreground shadow-md",
				"outline-1 outline-border dark:shadow-none",
				className,
			)}
			{...props}
		/>
	);
}

function Positioner({
	...props
}: ComponentProps<typeof AutocompletePrimitive.Positioner>) {
	return (
		<AutocompletePrimitive.Portal>
			<AutocompletePrimitive.Positioner
				data-slot="autocomplete-positioner"
				{...props}
			/>
		</AutocompletePrimitive.Portal>
	);
}

function Body({
	sideOffset = 6,
	className,
	children,
	...positionerProps
}: ComponentProps<typeof AutocompletePrimitive.Positioner> & {
	className?: string;
}) {
	return (
		<Positioner sideOffset={sideOffset} {...positionerProps}>
			<Popup className={className}>{children}</Popup>
		</Positioner>
	);
}

function List({
	className,
	...props
}: ComponentProps<typeof AutocompletePrimitive.List>) {
	return (
		<AutocompletePrimitive.List
			data-slot="autocomplete-list"
			className={cx("not-empty:p-1.5", className)}
			{...props}
		/>
	);
}

function Empty({
	className,
	...props
}: ComponentProps<typeof AutocompletePrimitive.Empty>) {
	return (
		<AutocompletePrimitive.Empty
			data-slot="autocomplete-empty"
			className={cx(
				"flex items-center justify-center text-muted-foreground text-sm",
				"not-empty:py-3",
				className,
			)}
			{...props}
		/>
	);
}

function Item({
	className,
	...props
}: ComponentProps<typeof AutocompletePrimitive.Item>) {
	return (
		<AutocompletePrimitive.Item
			data-slot="autocomplete-item"
			className={cx(
				"py-1.5 px-3 text-sm rounded-md",
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function Group({
	className,
	...props
}: ComponentProps<typeof AutocompletePrimitive.Group>) {
	return (
		<AutocompletePrimitive.Group
			data-slot="autocomplete-group"
			className={cx("block pb-2", className)}
			{...props}
		/>
	);
}

function GroupLabel({
	className,
	...props
}: ComponentProps<typeof AutocompletePrimitive.GroupLabel>) {
	return (
		<AutocompletePrimitive.GroupLabel
			data-slot="autocomplete-group-label"
			className={cx(
				"bg-popover pl-3 py-2 text-sm text-muted-foreground font-medium",
				className,
			)}
			{...props}
		/>
	);
}

function Collection({
	...props
}: ComponentProps<typeof AutocompletePrimitive.Collection>) {
	return (
		<AutocompletePrimitive.Collection
			data-slot="autocomplete-collection"
			{...props}
		/>
	);
}

function Status({
	className,
	...props
}: ComponentProps<typeof AutocompletePrimitive.Status>) {
	return (
		<AutocompletePrimitive.Status
			data-slot="autocomplete-status"
			className={cx(
				"px-4.5 text-sm text-muted-foreground my-3",
				"empty:m-0 empty:p-0",
				className,
			)}
			{...props}
		/>
	);
}

function Clear({
	className,
	children,
	...props
}: ComponentProps<typeof AutocompletePrimitive.Clear>) {
	return (
		<AutocompletePrimitive.Clear
			data-slot="autocomplete-clear"
			className={cx(className)}
			{...props}
		>
			{children ?? <XIcon className="w-4 h-4 text-muted-foreground" />}
		</AutocompletePrimitive.Clear>
	);
}

function Row({
	className,
	...props
}: ComponentProps<typeof AutocompletePrimitive.Row>) {
	return (
		<AutocompletePrimitive.Row
			data-slot="autocomplete-row"
			className={cx(className)}
			{...props}
		/>
	);
}

function Trigger({
	className,
	...props
}: ComponentProps<typeof AutocompletePrimitive.Trigger>) {
	return (
		<AutocompletePrimitive.Trigger
			data-slot="autocomplete-trigger"
			className={cx(className)}
			render={<Button variant="outline" />}
			{...props}
		/>
	);
}

export const Autocomplete = {
	Root,
	Input,
	Popup,
	Positioner,
	Body,
	List,
	Empty,
	Item,
	Group,
	GroupLabel,
	Collection,
	Status,
	Clear,
	Row,
	Trigger,
};
