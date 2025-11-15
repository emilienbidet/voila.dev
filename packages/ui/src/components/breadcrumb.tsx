import { ChevronRight, MoreHorizontal } from "lucide-react";
import type { ComponentProps } from "react";
import { cx } from "..";

function Root(props: ComponentProps<"nav">) {
	return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function List({ className, ...props }: ComponentProps<"ol">) {
	return (
		<ol
			data-slot="breadcrumb-list"
			className={cx("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm wrap-break-word sm:gap-2.5", className)}
			{...props}
		/>
	);
}

function Item({ className, ...props }: ComponentProps<"li">) {
	return <li data-slot="breadcrumb-item" className={cx("inline-flex items-center gap-1.5", className)} {...props} />;
}

function Link({ className, ...props }: ComponentProps<"a">) {
	return <a data-slot="breadcrumb-link" className={cx("hover:text-foreground transition-colors", className)} {...props} />;
}

function Page({ className, ...props }: ComponentProps<"span">) {
	return <span data-slot="breadcrumb-page" aria-current="page" className={cx("text-foreground font-normal", className)} {...props} />;
}

function Separator({ children, className, ...props }: ComponentProps<"li">) {
	return (
		<li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className={cx("[&>svg]:size-3.5", className)} {...props}>
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

export const Breadcrumb = { Root, List, Item, Link, Page, Separator, Ellipsis };
