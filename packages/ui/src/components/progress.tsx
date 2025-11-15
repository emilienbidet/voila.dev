"use client";

import { Progress as BaseProgress } from "@base-ui-components/react/progress";
import type { ComponentProps } from "react";
import { cx } from "..";

function Root({ className, ...props }: ComponentProps<typeof BaseProgress.Root>) {
	return <BaseProgress.Root className={cx(className)} {...props} />;
}

function Track({ className, ...props }: ComponentProps<typeof BaseProgress.Track>) {
	return <BaseProgress.Track className={cx("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className)} {...props} />;
}

function Indicator({ className, ...props }: ComponentProps<typeof BaseProgress.Indicator>) {
	return <BaseProgress.Indicator className={cx("bg-primary h-full w-full flex-1 transition-all", className)} {...props} />;
}

function Value({ className, ...props }: ComponentProps<typeof BaseProgress.Value>) {
	return <BaseProgress.Value className={cx(className)} {...props} />;
}

function Label({ className, ...props }: ComponentProps<typeof BaseProgress.Label>) {
	return <BaseProgress.Label className={cx(className)} {...props} />;
}

export const Progress = { Root, Track, Indicator, Value, Label };
