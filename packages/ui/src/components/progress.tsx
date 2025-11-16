"use client";

import { Progress as ProgressPrimitive } from "@base-ui-components/react/progress";
import type { ComponentProps } from "react";
import { cx } from "..";

function Root({
	className,
	children,
	...props
}: ComponentProps<typeof ProgressPrimitive.Root>) {
	return (
		<ProgressPrimitive.Root
			className={cx("relative w-full", className)}
			{...props}
		>
			{children ? (
				children
			) : (
				<Track>
					<Indicator />
				</Track>
			)}
		</ProgressPrimitive.Root>
	);
}

function Track({
	className,
	...props
}: ComponentProps<typeof ProgressPrimitive.Track>) {
	return (
		<ProgressPrimitive.Track
			className={cx(
				"bg-primary/20 w-full h-2 overflow-hidden rounded-full",
				className,
			)}
			{...props}
		/>
	);
}

function Indicator({
	className,
	...props
}: ComponentProps<typeof ProgressPrimitive.Indicator>) {
	return (
		<ProgressPrimitive.Indicator
			className={cx(
				"bg-primary h-full w-full flex-1 transition-all",
				className,
			)}
			{...props}
		/>
	);
}

function Label({
	className,
	...props
}: ComponentProps<typeof ProgressPrimitive.Label>) {
	return (
		<ProgressPrimitive.Label
			className={cx("text-sm text-muted-foreground", className)}
			{...props}
		/>
	);
}

function Value({
	className,
	...props
}: ComponentProps<typeof ProgressPrimitive.Value>) {
	return (
		<ProgressPrimitive.Value
			className={cx("text-sm text-muted-foreground", className)}
			{...props}
		/>
	);
}

export const Progress = {
	Root,
	Track,
	Indicator,
	Label,
	Value,
};
