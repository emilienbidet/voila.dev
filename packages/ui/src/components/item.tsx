import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import type * as React from "react";

import { cva, cx, type VariantProps } from "..";
import { Separator } from "./separator";

function Group({ className, ...props }: React.ComponentProps<"ul">) {
	return (
		<ul
			data-slot="item-group"
			className={cx("group/item-group flex flex-col", className)}
			{...props}
		/>
	);
}

function SeparatorComponent({
	className,
	...props
}: React.ComponentProps<typeof Separator>) {
	return (
		<Separator
			data-slot="item-separator"
			orientation="horizontal"
			className={cx("my-0", className)}
			{...props}
		/>
	);
}

const itemVariants = cva({
	base: [
		"group/item flex items-center flex-wrap",
		"border border-transparent rounded-md",
		"text-sm outline-none",
		"transition-colors duration-100",
		"[a]:hover:bg-accent/50 [a]:transition-colors",
		"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
	].join(" "),
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border-border",
			muted: "bg-muted/50",
		},
		size: {
			default: "p-4 gap-4",
			sm: "py-3 px-4 gap-2.5",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

function Root({
	className,
	variant = "default",
	size = "default",
	render,
	...props
}: React.ComponentProps<"div"> &
	VariantProps<typeof itemVariants> & { render?: useRender.RenderProp }) {
	return useRender({
		defaultTagName: "div",
		render,
		props: mergeProps(
			{
				"data-slot": "item",
				"data-variant": variant,
				"data-size": size,
				className: cx(itemVariants({ variant, size }), className),
			},
			props,
		),
	});
}

const itemMediaVariants = cva({
	base: [
		"flex shrink-0 items-center justify-center gap-2",
		"group-has-[[data-slot=item-description]]/item:self-start",
		"group-has-[[data-slot=item-description]]/item:translate-y-0.5",
		"[&_svg]:pointer-events-none",
	].join(" "),
	variants: {
		variant: {
			default: "bg-transparent",
			icon: [
				"size-8 border rounded-sm bg-muted",
				"[&_svg:not([class*='size-'])]:size-4",
			].join(" "),
			image: [
				"size-10 rounded-sm overflow-hidden",
				"[&_img]:size-full [&_img]:object-cover",
			].join(" "),
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

function Media({
	className,
	variant = "default",
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
	return (
		<div
			data-slot="item-media"
			data-variant={variant}
			className={cx(itemMediaVariants({ variant }), className)}
			{...props}
		/>
	);
}

function Content({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="item-content"
			className={cx(
				"flex flex-1 flex-col gap-1",
				"[&+[data-slot=item-content]]:flex-none",
				className,
			)}
			{...props}
		/>
	);
}

function Title({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="item-title"
			className={cx(
				"flex w-fit items-center gap-2",
				"text-sm leading-snug font-medium",
				className,
			)}
			{...props}
		/>
	);
}

function Description({ className, ...props }: React.ComponentProps<"p">) {
	return (
		<p
			data-slot="item-description"
			className={cx(
				"text-muted-foreground line-clamp-2",
				"text-sm leading-normal font-normal text-balance",
				"[&>a]:underline [&>a]:underline-offset-4",
				"[&>a:hover]:text-primary",
				className,
			)}
			{...props}
		/>
	);
}

function Actions({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="item-actions"
			className={cx("flex items-center gap-2", className)}
			{...props}
		/>
	);
}

function Header({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="item-header"
			className={cx(
				"flex basis-full items-center justify-between gap-2",
				className,
			)}
			{...props}
		/>
	);
}

function Footer({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="item-footer"
			className={cx(
				"flex basis-full items-center justify-between gap-2",
				className,
			)}
			{...props}
		/>
	);
}

export const Item = {
	Root,
	Media,
	Content,
	Actions,
	Group,
	Separator: SeparatorComponent,
	Title,
	Description,
	Header,
	Footer,
};
