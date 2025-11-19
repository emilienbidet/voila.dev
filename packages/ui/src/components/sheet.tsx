"use client";

import { Dialog as BaseDialog } from "@base-ui-components/react/dialog";
import type { ComponentProps } from "react";
import { X } from "../icons";
import { cx } from "../index";

function Root(props: ComponentProps<typeof BaseDialog.Root>) {
	return <BaseDialog.Root {...props} />;
}

function Trigger(props: ComponentProps<typeof BaseDialog.Trigger>) {
	return <BaseDialog.Trigger {...props} />;
}

function Close(props: ComponentProps<typeof BaseDialog.Close>) {
	return <BaseDialog.Close {...props} />;
}

function Portal(props: ComponentProps<typeof BaseDialog.Portal>) {
	return <BaseDialog.Portal {...props} />;
}

function Overlay({
	className,
	...props
}: ComponentProps<typeof BaseDialog.Backdrop>) {
	return (
		<BaseDialog.Backdrop
			className={cx(
				"data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:duration-300 data-open:duration-500 fixed inset-0 z-50 bg-black/50",
				className,
			)}
			{...props}
		/>
	);
}

function Content({
	className,
	children,
	side = "right",
	...props
}: ComponentProps<typeof BaseDialog.Popup> & {
	side?: "top" | "right" | "bottom" | "left";
}) {
	return (
		<Portal>
			<Overlay />
			<BaseDialog.Popup
				className={cx(
					"bg-background data-open:animate-in data-closed:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-closed:duration-300 data-open:duration-500",
					side === "right" &&
						"data-closed:slide-out-to-right data-open:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
					side === "left" &&
						"data-closed:slide-out-to-left data-open:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
					side === "top" &&
						"data-closed:slide-out-to-top data-open:slide-in-from-top inset-x-0 top-0 h-auto border-b",
					side === "bottom" &&
						"data-closed:slide-out-to-bottom data-open:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
					className,
				)}
				{...props}
			>
				{children}
				<Close
					className={cx(
						"ring-offset-background focus:ring-ring data-popup-open:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
					)}
				>
					<X />
					<span className="sr-only">Close</span>
				</Close>
			</BaseDialog.Popup>
		</Portal>
	);
}

function Header({ className, ...props }: ComponentProps<"div">) {
	return (
		<div className={cx("flex flex-col gap-1.5 p-4", className)} {...props} />
	);
}

function Body({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cx("flex-1 overflow-y-auto px-4 py-2", className)}
			{...props}
		/>
	);
}

function Footer({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cx("mt-auto flex flex-col gap-2 p-4", className)}
			{...props}
		/>
	);
}

function Title({
	className,
	...props
}: ComponentProps<typeof BaseDialog.Title>) {
	return (
		<BaseDialog.Title
			className={cx("text-foreground font-semibold", className)}
			{...props}
		/>
	);
}

function Description({
	className,
	...props
}: ComponentProps<typeof BaseDialog.Description>) {
	return (
		<BaseDialog.Description
			className={cx("text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

export const Sheet = {
	Root,
	Trigger,
	Close,
	Portal,
	Overlay,
	Content,
	Header,
	Body,
	Footer,
	Title,
	Description,
};
