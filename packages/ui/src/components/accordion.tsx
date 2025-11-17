"use client";

import { Accordion as AccordionPrimitive } from "@base-ui-components/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { cx } from "..";

function Root({ ...props }: ComponentProps<typeof AccordionPrimitive.Root>) {
	return <AccordionPrimitive.Root keepMounted {...props} />;
}

function Item({
	className,
	...props
}: ComponentProps<typeof AccordionPrimitive.Item>) {
	return (
		<AccordionPrimitive.Item
			className={cx("border-b last:border-b-0", className)}
			{...props}
		/>
	);
}

function Header({
	className,
	...props
}: ComponentProps<typeof AccordionPrimitive.Header>) {
	return (
		<AccordionPrimitive.Header className={cx("flex", className)} {...props} />
	);
}

function Trigger({
	className,
	children,
	...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) {
	return (
		<AccordionPrimitive.Trigger
			className={cx(
				"flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium",
				"hover:underline",
				"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none",
				"disabled:pointer-events-none disabled:opacity-50",
				"transition-all",
				"[&[data-panel-open]>svg]:rotate-180",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	);
}

function HeaderTrigger({
	className,
	children,
	...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) {
	return (
		<Header>
			<Trigger className={className} {...props}>
				{children}
			</Trigger>
		</Header>
	);
}

function Panel({
	className,
	children,
	...props
}: ComponentProps<typeof AccordionPrimitive.Panel>) {
	return (
		<AccordionPrimitive.Panel
			className="overflow-hidden text-sm h-(--accordion-panel-height) data-starting-style:h-0 data-ending-style:h-0 transition-height duration-300 ease-out"
			{...props}
		>
			<div className={cx("pt-0 pb-4", className)}>{children}</div>
		</AccordionPrimitive.Panel>
	);
}

export const Accordion = {
	Root,
	Item,
	Header,
	Trigger,
	HeaderTrigger,
	Panel,
};
