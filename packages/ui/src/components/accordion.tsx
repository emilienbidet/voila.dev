"use client";

import { Accordion as BaseAccordion } from "@base-ui-components/react/accordion";
import type { ComponentProps } from "react";
import { cx } from "..";
import { ChevronDownIcon } from "../icons";

function Root(props: ComponentProps<typeof BaseAccordion.Root>) {
	return <BaseAccordion.Root {...props} />;
}

function Item({
	className,
	...props
}: ComponentProps<typeof BaseAccordion.Item>) {
	return (
		<BaseAccordion.Item
			className={cx("border-b last:border-b-0 group", className)}
			{...props}
		/>
	);
}

function Header({
	className,
	...props
}: ComponentProps<typeof BaseAccordion.Header>) {
	return <BaseAccordion.Header className={cx("flex", className)} {...props} />;
}

function Trigger({
	className,
	...props
}: ComponentProps<typeof BaseAccordion.Trigger>) {
	return (
		<BaseAccordion.Trigger
			className={cx(
				"focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
				className,
			)}
			{...props}
		/>
	);
}

function Chevron({
	className,
	...props
}: ComponentProps<typeof ChevronDownIcon>) {
	return (
		<ChevronDownIcon
			className={cx(
				"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 group-data-open:rotate-180",
				className,
			)}
			{...props}
		/>
	);
}

function HeaderTrigger({
	children,
	...props
}: ComponentProps<typeof Header> & { children: React.ReactNode }) {
	return (
		<Header {...props}>
			<Trigger>
				{children}
				<Chevron />
			</Trigger>
		</Header>
	);
}

function Panel({
	className,
	children,
	...props
}: ComponentProps<typeof BaseAccordion.Panel>) {
	return (
		<BaseAccordion.Panel
			className={cx(
				"overflow-hidden text-sm",
				"h-(--accordion-panel-height) data-starting-style:h-0 data-ending-style:h-0",
				"transition-height duration-300 ease-out",
				className,
			)}
			{...props}
		>
			<div className="pb-4">{children}</div>
		</BaseAccordion.Panel>
	);
}

export const Accordion = {
	Root,
	Item,
	Header,
	Trigger,
	Chevron,
	HeaderTrigger,
	Panel,
};
