import { Meter as BaseMeter } from "@base-ui-components/react/meter";
import type { ComponentProps } from "react";
import { cx } from "../index";

function Root({ className, ...props }: ComponentProps<typeof BaseMeter.Root>) {
	return <BaseMeter.Root className={cx(className)} {...props} />;
}

function Track({
	className,
	...props
}: ComponentProps<typeof BaseMeter.Track>) {
	return (
		<BaseMeter.Track
			className={cx(
				"bg-muted relative h-2 w-full overflow-hidden rounded-full",
				className,
			)}
			{...props}
		/>
	);
}

function Indicator({
	className,
	...props
}: ComponentProps<typeof BaseMeter.Indicator>) {
	return (
		<BaseMeter.Indicator
			className={cx(
				"bg-primary h-full w-full flex-1 transition-all",
				className,
			)}
			{...props}
		/>
	);
}

function Value({
	className,
	...props
}: ComponentProps<typeof BaseMeter.Value>) {
	return <BaseMeter.Value className={cx(className)} {...props} />;
}

function Label({
	className,
	...props
}: ComponentProps<typeof BaseMeter.Label>) {
	return <BaseMeter.Label className={cx(className)} {...props} />;
}

export const Meter = { Root, Track, Indicator, Value, Label };
