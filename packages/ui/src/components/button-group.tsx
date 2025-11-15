import { useRender } from "@base-ui-components/react/use-render";
import { cva, cx, type VariantProps } from "..";

const variants = cva({
	base: "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
	variants: {
		orientation: {
			horizontal:
				"[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
			vertical:
				"flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
		},
	},
	defaultVariants: {
		orientation: "horizontal",
	},
});

function Root({
	render,
	className,
	orientation,
	...props
}: useRender.ComponentProps<"fieldset"> & VariantProps<typeof variants>) {
	return useRender({
		defaultTagName: "fieldset",
		render,
		props: {
			"data-slot": "button-group",
			"data-orientation": orientation,
			className: cx(variants({ orientation }), className),
			...props,
		},
	});
}

function Text({
	render,
	className,
	...props
}: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			className: cx(
				"bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
				className,
			),
			...props,
		},
	});
}

function Separator({
	render,
	className,
	orientation = "vertical",
	...props
}: useRender.ComponentProps<"div"> & {
	orientation?: "vertical" | "horizontal";
}) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			"data-slot": "button-group-separator",
			"data-orientation": orientation,
			className: cx(
				"bg-input relative m-0! self-stretch",
				orientation === "vertical" && "w-px",
				orientation === "horizontal" && "h-px w-full",
				className,
			),
			...props,
		},
	});
}

export const ButtonGroup = { Root, Text, Separator };
