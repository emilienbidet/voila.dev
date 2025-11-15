"use client";

import { Avatar as BaseAvatar } from "@base-ui-components/react/avatar";
import type { ComponentProps } from "react";
import { cx } from "..";

function Root({ className, ...props }: ComponentProps<typeof BaseAvatar.Root>) {
	return <BaseAvatar.Root data-slot="avatar" className={cx("relative flex size-8 shrink-0 overflow-hidden rounded-full", className)} {...props} />;
}

function Image({ className, ...props }: ComponentProps<typeof BaseAvatar.Image>) {
	return <BaseAvatar.Image data-slot="avatar-image" className={cx("aspect-square size-full", className)} {...props} />;
}

function Fallback({ className, ...props }: ComponentProps<typeof BaseAvatar.Fallback>) {
	return (
		<BaseAvatar.Fallback data-slot="avatar-fallback" className={cx("bg-muted flex size-full items-center justify-center rounded-full", className)} {...props} />
	);
}

export const Avatar = { Root, Image, Fallback };
