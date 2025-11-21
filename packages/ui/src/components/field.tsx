"use client";

import { useMemo } from "react";

import { cva, cx, type VariantProps } from "../index";
import { Label as LabelComponent } from "./label";

const fieldVariants = cva({
	base: "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
	variants: {
		orientation: {
			vertical: "flex-col [&>*]:w-full [&>.sr-only]:w-auto",
			horizontal:
				"flex-row items-center " +
				"[&>[data-slot=field-label]]:flex-auto " +
				"has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
			responsive:
				"flex-col [&>*]:w-full [&>.sr-only]:w-auto " +
				"@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto " +
				"@md/field-group:[&>[data-slot=field-label]]:flex-auto " +
				"@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		},
	},
	defaultVariants: {
		orientation: "vertical",
	},
});

function Root({
	className,
	orientation = "vertical",
	...props
}: React.ComponentProps<"fieldset"> & VariantProps<typeof fieldVariants>) {
	return (
		<fieldset
			data-orientation={orientation}
			className={cx(fieldVariants({ orientation }), className)}
			{...props}
		/>
	);
}

function Label({
	className,
	...props
}: React.ComponentProps<typeof LabelComponent>) {
	return (
		<LabelComponent
			className={cx(
				"group/field-label peer/field-label flex w-fit gap-2 leading-snug",
				"group-data-[disabled=true]/field:opacity-50",
				"has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
				"has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border",
				"*:data-[slot=field]:p-4",
				"has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary",
				"dark:has-data-[state=checked]:bg-primary/10",
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
				"group-has-data-[orientation=horizontal]/field:text-balance",
				"last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
				"[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
				className,
			)}
			{...props}
		/>
	);
}

function Content({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cx(
				"group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
				className,
			)}
			{...props}
		/>
	);
}

function Title({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cx(
				"flex w-fit items-center gap-2 text-sm leading-snug font-medium",
				"group-data-[disabled=true]/field:opacity-50",
				className,
			)}
			{...props}
		/>
	);
}

function ErrorMessage({
	className,
	children,
	errors,
	...props
}: React.ComponentProps<"div"> & {
	errors?: Array<{ message?: string } | undefined>;
}) {
	const content = useMemo(() => {
		if (children) {
			return children;
		}

		if (!errors) {
			return null;
		}

		if (errors?.length === 1 && errors[0]?.message) {
			return errors[0].message;
		}

		return (
			<ul className="ml-4 flex list-disc flex-col gap-1">
				{errors.map(
					(error, index) =>
						error?.message && <li key={index}>{error.message}</li>,
				)}
			</ul>
		);
	}, [children, errors]);

	if (!content) {
		return null;
	}

	return (
		<div
			role="alert"
			data-slot="field-error"
			className={cx("text-destructive text-sm font-normal", className)}
			{...props}
		>
			{content}
		</div>
	);
}

export const Field = {
	Root,
	Label,
	Description,
	Content,
	Title,
	Error: ErrorMessage,
};
