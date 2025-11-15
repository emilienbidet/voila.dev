import { useRender } from "@base-ui-components/react/use-render";
import { cx } from "..";

export function Textarea({
	render,
	className,
	...props
}: useRender.ComponentProps<"textarea">) {
	return useRender({
		defaultTagName: "textarea",
		render,
		props: {
			className: cx(
				// Base styles
				"flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none",
				// Typography
				"placeholder:text-muted-foreground md:text-sm",
				// Dark mode background
				"dark:bg-input/30",
				// Focus styles
				"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
				// Invalid/error styles
				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
				// Disabled styles
				"disabled:cursor-not-allowed disabled:opacity-50",
				// Transitions
				"transition-[color,box-shadow]",
				className,
			),
			...props,
		},
	});
}
