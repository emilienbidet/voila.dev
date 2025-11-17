import { ChevronDownIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { cx } from "..";

function Root({ className, ...props }: ComponentProps<"select">) {
	return (
		<div
			className="group/native-select relative w-fit has-[select:disabled]:opacity-50"
			data-slot="native-select-wrapper"
		>
			<select
				data-slot="native-select"
				className={cx(
					"h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent px-3 py-2 pr-9",
					"text-sm shadow-xs",
					"placeholder:text-muted-foreground",
					"selection:bg-primary selection:text-primary-foreground",
					"dark:bg-input/30 dark:hover:bg-input/50",
					"outline-none transition-[color,box-shadow]",
					"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
					"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
					"disabled:pointer-events-none disabled:cursor-not-allowed",
					className,
				)}
				{...props}
			/>
			<ChevronDownIcon
				className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 select-none opacity-50 text-muted-foreground"
				aria-hidden="true"
				data-slot="native-select-icon"
			/>
		</div>
	);
}

function Option({ ...props }: ComponentProps<"option">) {
	return <option data-slot="native-select-option" {...props} />;
}

function OptGroup({ className, ...props }: ComponentProps<"optgroup">) {
	return (
		<optgroup
			data-slot="native-select-optgroup"
			className={cx(className)}
			{...props}
		/>
	);
}

export const NativeSelect = {
	Root,
	Option,
	OptGroup,
};
