"use client";

import { RadioGroup as BaseRadioGroup } from "@base-ui-components/react/radio-group";
import type { ComponentProps } from "react";
import { cx } from "..";

export function RadioGroup({ className, ...props }: ComponentProps<typeof BaseRadioGroup>) {
	return <BaseRadioGroup className={cx("grid gap-3", className)} {...props} />;
}
