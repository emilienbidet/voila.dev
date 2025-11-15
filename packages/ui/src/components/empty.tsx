import { useRender } from "@base-ui-components/react/use-render";
import { cva, cx, type VariantProps } from "..";

function Root({ render, className, ...props }: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			"data-slot": "empty",
			className: cx("flex flex-col items-center justify-center gap-6", className),
			...props,
		},
	});
}

function Header({ render, className, ...props }: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			className: cx("flex flex-col items-center gap-4 text-center max-w-sm", className),
			...props,
		},
	});
}

const mediaVariants = cva({
	base: "flex items-center justify-center",
	variants: {
		variant: {
			default: "",
			icon: "text-muted-foreground size-12 shrink-0",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

function Media({ render, variant, className, ...props }: useRender.ComponentProps<"div"> & VariantProps<typeof mediaVariants>) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			className: cx(mediaVariants({ variant }), className),
			...props,
		},
	});
}

function Title({ render, className, ...props }: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			className: cx("text-lg font-semibold leading-none", className),
			...props,
		},
	});
}

function Description({ render, className, ...props }: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			className: cx("text-muted-foreground text-sm", className),
			...props,
		},
	});
}

function Content({ render, className, ...props }: useRender.ComponentProps<"div">) {
	return useRender({
		defaultTagName: "div",
		render,
		props: {
			className: cx("flex items-center gap-2", className),
			...props,
		},
	});
}

export const Empty = { Root, Header, Media, Title, Description, Content };
