"use client";

import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui-components/react/checkbox-group";
import type { ComponentProps } from "react";
import { cx } from "..";

export function CheckboxGroup({
	className,
	...props
}: ComponentProps<typeof BaseCheckboxGroup>) {
	return (
		<BaseCheckboxGroup className={cx("grid gap-4", className)} {...props} />
	);
}
