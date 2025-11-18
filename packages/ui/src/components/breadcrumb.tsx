import { useRender } from "@base-ui-components/react/use-render";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import type { ComponentProps } from "react";

import { cx } from "../index";

function Root({ ...props }: ComponentProps<"nav">) {
	return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function List({ className, ...props }: ComponentProps<"ol">) {
	return (
		<ol
			data-slot="breadcrumb-list"
			className={cx(
				"flex flex-wrap items-center gap-1.5 text-sm",
				"text-muted-foreground wrap-break-word",
				"sm:gap-2.5",
				className,
			)}
			{...props}
		/>
	);
}

function Item({ className, ...props }: ComponentProps<"li">) {
	return (
		<li
			data-slot="breadcrumb-item"
			className={cx("inline-flex items-center gap-1.5", className)}
			{...props}
		/>
	);
}

function Link({
	className,
	// biome-ignore lint/a11y/useAnchorContent: Render prop pattern, content provided by consumer
	// biome-ignore lint/a11y/useValidAnchor: Render prop pattern, href provided by consumer
	render = <a />,
	...props
}: ComponentProps<"a"> & {
	render?: useRender.RenderProp;
}) {
	return useRender({
		render,
		props: {
			"data-slot": "breadcrumb-link",
			className: cx("transition-colors hover:text-foreground", className),
			...props,
		},
	});
}

function Page({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			data-slot="breadcrumb-page"
			aria-current="page"
			className={cx("font-normal text-foreground", className)}
			{...props}
		/>
	);
}

function Separator({ children, className, ...props }: ComponentProps<"li">) {
	return (
		<li
			data-slot="breadcrumb-separator"
			role="presentation"
			aria-hidden="true"
			className={cx("[&>svg]:size-3.5", className)}
			{...props}
		>
			{children ?? <ChevronRight />}
		</li>
	);
}

function Ellipsis({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			data-slot="breadcrumb-ellipsis"
			role="presentation"
			aria-hidden="true"
			className={cx("flex size-9 items-center justify-center", className)}
			{...props}
		>
			<MoreHorizontal className="size-4" />
			<span className="sr-only">More</span>
		</span>
	);
}

export const Breadcrumb = {
	Root,
	List,
	Item,
	Link,
	Page,
	Separator,
	Ellipsis,
};
