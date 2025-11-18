import { useRender } from "@base-ui-components/react/use-render";
import { cx } from "../index";

function Root({
	render,
	className,
	...props
}: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			"data-slot": "card",
			className: cx(
				"bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
				className,
			),
			...props,
		},
	});
}

function Header({
	render,
	className,
	...props
}: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			className: cx(
				"@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
				className,
			),
			...props,
		},
	});
}

function Title({
	render,
	className,
	...props
}: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			className: cx("leading-none font-semibold", className),
			...props,
		},
	});
}

function Description({
	render,
	className,
	...props
}: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			className: cx("text-muted-foreground text-sm", className),
			...props,
		},
	});
}

function Action({
	render,
	className,
	...props
}: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			"data-slot": "card-action",
			className: cx(
				"col-start-2 row-span-2 row-start-1 self-start justify-self-end",
				className,
			),
			...props,
		},
	});
}

function Content({
	render,
	className,
	...props
}: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			className: cx("px-6", className),
			...props,
		},
	});
}

function Footer({
	render,
	className,
	...props
}: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			className: cx("flex items-center px-6 [.border-t]:pt-6", className),
			...props,
		},
	});
}

export const Card = {
	Root,
	Header,
	Title,
	Description,
	Action,
	Content,
	Footer,
};
