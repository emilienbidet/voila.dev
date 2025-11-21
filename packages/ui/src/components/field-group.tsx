"use client";

import { cx } from "../index";
import { Separator as SeparatorComponent } from "./separator";

function Root({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cx(
				"group/field-group @container/field-group flex w-full flex-col gap-7",
				"data-[slot=checkbox-group]:gap-3",
				"*:data-[slot=field-group]:gap-4",
				className,
			)}
			{...props}
		/>
	);
}

function SetComponent({
	className,
	...props
}: React.ComponentProps<"fieldset">) {
	return (
		<fieldset
			className={cx(
				"flex flex-col gap-6",
				"has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
				className,
			)}
			{...props}
		/>
	);
}

function Legend({
	className,
	variant = "legend",
	...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
	return (
		<legend
			data-variant={variant}
			className={cx(
				"mb-3 font-medium",
				"data-[variant=legend]:text-base",
				"data-[variant=label]:text-sm",
				className,
			)}
			{...props}
		/>
	);
}

function Description({ className, ...props }: React.ComponentProps<"p">) {
	return (
		<p
			className={cx(
				"text-muted-foreground text-sm leading-normal font-normal",
				"last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
				"[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
				className,
			)}
			{...props}
		/>
	);
}

function Separator({
	children,
	className,
	...props
}: React.ComponentProps<"div"> & {
	children?: React.ReactNode;
}) {
	return (
		<div
			data-content={!!children}
			className={cx(
				"relative -my-2 h-5 text-sm",
				"group-data-[variant=outline]/field-group:-mb-2",
				className,
			)}
			{...props}
		>
			<SeparatorComponent className="absolute inset-0 top-1/2" />
			{children && (
				<span
					className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
					data-slot="field-separator-content"
				>
					{children}
				</span>
			)}
		</div>
	);
}

function Group({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cx(
				"group/field-group @container/field-group flex w-full flex-col gap-7",
				"data-[slot=checkbox-group]:gap-3",
				"*:data-[slot=field-group]:gap-4",
				className,
			)}
			{...props}
		/>
	);
}

export const FieldGroup = {
	Root,
	Set: SetComponent,
	Legend,
	Description,
	Separator,
	Group,
};
