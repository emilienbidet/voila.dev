"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import * as React from "react";

import { cx } from "../index";

function Root({
	className,
	containerClassName,
	...props
}: React.ComponentProps<typeof OTPInput> & {
	containerClassName?: string;
}) {
	return (
		<OTPInput
			data-slot="input-otp"
			containerClassName={cx(
				"flex items-center gap-2 has-disabled:opacity-50",
				containerClassName,
			)}
			className={cx("disabled:cursor-not-allowed", className)}
			{...props}
		/>
	);
}

function Group({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="input-otp-group"
			className={cx("flex items-center", className)}
			{...props}
		/>
	);
}

function Slot({
	index,
	className,
	...props
}: React.ComponentProps<"div"> & {
	index: number;
}) {
	const inputOTPContext = React.useContext(OTPInputContext);
	const slot = inputOTPContext?.slots?.[index];
	const { char, hasFakeCaret, isActive } = slot ?? {};

	return (
		<div
			data-slot="input-otp-slot"
			data-active={isActive}
			className={cx(
				"relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-xs",
				"dark:bg-input/30",
				"first:rounded-l-md first:border-l last:rounded-r-md",
				"outline-none transition-all",
				"data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:ring-[3px]",
				"aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive",
				"data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40",
				className,
			)}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					<div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
				</div>
			)}
		</div>
	);
}

function Separator({ ...props }: React.ComponentProps<"div">) {
	return (
		<div data-slot="input-otp-separator" {...props}>
			<MinusIcon />
		</div>
	);
}

export const InputOTP = {
	Root,
	Group,
	Slot,
	Separator,
};
