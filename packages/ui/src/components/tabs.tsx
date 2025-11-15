"use client";

import { Tabs as BaseTabs } from "@base-ui-components/react/tabs";
import type { ComponentProps } from "react";
import { cx } from "..";

function Root({ className, ...props }: ComponentProps<typeof BaseTabs.Root>) {
	return (
		<BaseTabs.Root
			className={cx("flex flex-col gap-2", className)}
			{...props}
		/>
	);
}

function List({ className, ...props }: ComponentProps<typeof BaseTabs.List>) {
	return (
		<BaseTabs.List
			className={cx(
				"relative z-0",
				"bg-muted inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
				className,
			)}
			{...props}
		/>
	);
}

function Tab({ className, ...props }: ComponentProps<typeof BaseTabs.Tab>) {
	return (
		<BaseTabs.Tab
			className={cx(
				"flex h-8 items-center justify-center",
				"border-0 px-2 py-1",
				"text-sm font-medium",
				"break-keep whitespace-nowrap text-muted-foreground hover:text-foreground data-selected:text-foreground transition-colors",
				"outline-none",
				"before:inset-x-0 before:inset-y-1 before:rounded-sm",
				"focus-visible:relative focus-visible:before:absolute focus-visible:before:outline-2",
				className,
			)}
			{...props}
		/>
	);
}

function Indicator({
	className,
	...props
}: ComponentProps<typeof BaseTabs.Indicator>) {
	return (
		<BaseTabs.Indicator
			className={cx(
				"absolute top-1/2 left-0 z-[-1]",
				"shadow-sm",
				"h-6 w-(--active-tab-width)",
				"translate-x-(--active-tab-left) -translate-y-1/2",
				"rounded-sm bg-background",
				"transition-all duration-200 ease-in-out",
				className,
			)}
			{...props}
		/>
	);
}

function Panel({ className, ...props }: ComponentProps<typeof BaseTabs.Panel>) {
	return (
		<BaseTabs.Panel
			className={cx("flex-1 outline-none", className)}
			{...props}
		/>
	);
}

export const Tabs = { Root, List, Tab, Indicator, Panel };
