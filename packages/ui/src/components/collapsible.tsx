"use client";

import { Collapsible as BaseCollapsible } from "@base-ui-components/react/collapsible";
import type { ComponentProps } from "react";
import { cx } from "..";

function Root(props: ComponentProps<typeof BaseCollapsible.Root>) {
	return <BaseCollapsible.Root {...props} />;
}

function Trigger({
	className,
	...props
}: ComponentProps<typeof BaseCollapsible.Trigger>) {
	return <BaseCollapsible.Trigger className={cx(className)} {...props} />;
}

function Panel({
	className,
	...props
}: ComponentProps<typeof BaseCollapsible.Panel>) {
	return <BaseCollapsible.Panel className={cx(className)} {...props} />;
}

export const Collapsible = { Root, Trigger, Panel };
