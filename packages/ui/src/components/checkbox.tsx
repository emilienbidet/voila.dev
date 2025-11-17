import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox";
import { CheckIcon } from "lucide-react";
import type * as React from "react";

import { cx } from "..";

export function Checkbox({
	className,
	...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cx(
				"peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs",
				"bg-background dark:bg-input/30",
				"data-checked:bg-primary data-checked:text-primary-foreground",
				"data-checked:border-primary dark:data-checked:bg-primary",
				"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
				"aria-invalid:border-destructive",
				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
				"outline-none transition-shadow",
				"disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				data-slot="checkbox-indicator"
				className="flex items-center justify-center text-current transition-none"
			>
				<CheckIcon className="size-3.5" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}
