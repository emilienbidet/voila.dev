import {
	ChevronLeftIcon,
	ChevronRightIcon,
	MoreHorizontalIcon,
} from "lucide-react";
import type { ComponentProps } from "react";

import { cva, cx, type VariantProps } from "..";

const linkVariants = cva({
	base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
	variants: {
		variant: {
			outline:
				"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
			ghost:
				"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
		},
		size: {
			default: "h-9 px-4 py-2",
			icon: "size-9",
		},
	},
	defaultVariants: {
		variant: "ghost",
		size: "icon",
	},
});

function Root({ className, ...props }: ComponentProps<"nav">) {
	return (
		<nav
			aria-label="pagination"
			data-slot="pagination"
			className={cx("mx-auto flex w-full justify-center", className)}
			{...props}
		/>
	);
}

function Content({ className, ...props }: ComponentProps<"ul">) {
	return (
		<ul
			data-slot="pagination-content"
			className={cx("flex flex-row items-center gap-1", className)}
			{...props}
		/>
	);
}

function Item({ ...props }: ComponentProps<"li">) {
	return <li data-slot="pagination-item" {...props} />;
}

type LinkProps = {
	isActive?: boolean;
} & VariantProps<typeof linkVariants> &
	ComponentProps<"a">;

function Link({ className, isActive, size = "icon", ...props }: LinkProps) {
	return (
		<a
			aria-current={isActive ? "page" : undefined}
			data-slot="pagination-link"
			data-active={isActive}
			className={cx(
				linkVariants({
					variant: isActive ? "outline" : "ghost",
					size,
				}),
				className,
			)}
			{...props}
		/>
	);
}

function Previous({ className, ...props }: ComponentProps<typeof Link>) {
	return (
		<Link
			aria-label="Go to previous page"
			size="default"
			className={cx("gap-1 px-2.5 sm:pl-2.5", className)}
			{...props}
		>
			<ChevronLeftIcon />
			<span className="hidden sm:block">Previous</span>
		</Link>
	);
}

function Next({ className, ...props }: ComponentProps<typeof Link>) {
	return (
		<Link
			aria-label="Go to next page"
			size="default"
			className={cx("gap-1 px-2.5 sm:pr-2.5", className)}
			{...props}
		>
			<span className="hidden sm:block">Next</span>
			<ChevronRightIcon />
		</Link>
	);
}

function Ellipsis({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			aria-hidden
			data-slot="pagination-ellipsis"
			className={cx("flex size-9 items-center justify-center", className)}
			{...props}
		>
			<MoreHorizontalIcon className="size-4" />
			<span className="sr-only">More pages</span>
		</span>
	);
}

export const Pagination = {
	Root,
	Content,
	Item,
	Link,
	Previous,
	Next,
	Ellipsis,
};
