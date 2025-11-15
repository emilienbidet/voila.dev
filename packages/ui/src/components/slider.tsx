"use client";

import { Slider as BaseSlider } from "@base-ui-components/react/slider";
import type { ComponentProps } from "react";
import { cx } from "..";

function Root({ className, ...props }: ComponentProps<typeof BaseSlider.Root>) {
	return (
		<BaseSlider.Root
			className={cx("data-disabled:opacity-50", className)}
			{...props}
		/>
	);
}

function Control({
	className,
	...props
}: ComponentProps<typeof BaseSlider.Control>) {
	return (
		<BaseSlider.Control
			className={cx(
				"flex w-full touch-none items-center select-none py-3",
				"data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
				className,
			)}
			{...props}
		/>
	);
}

function Track({
	className,
	...props
}: ComponentProps<typeof BaseSlider.Track>) {
	return (
		<BaseSlider.Track
			className={cx(
				"bg-muted relative grow rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
				className,
			)}
			{...props}
		/>
	);
}

function Indicator({
	className,
	...props
}: ComponentProps<typeof BaseSlider.Indicator>) {
	return (
		<BaseSlider.Indicator
			className={cx(
				"bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
				className,
			)}
			{...props}
		/>
	);
}

function Thumb({
	className,
	...props
}: ComponentProps<typeof BaseSlider.Thumb>) {
	return (
		<BaseSlider.Thumb
			className={cx(
				"ring-ring/50 block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
				className,
			)}
			{...props}
		/>
	);
}

function Value({
	className,
	...props
}: ComponentProps<typeof BaseSlider.Value>) {
	return <BaseSlider.Value className={cx(className)} {...props} />;
}

export const Slider = { Root, Control, Track, Indicator, Thumb, Value };
