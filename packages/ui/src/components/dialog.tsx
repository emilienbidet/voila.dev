"use client";

import { Dialog as BaseDialog } from "@base-ui-components/react/dialog";
import type { ComponentProps } from "react";
import { cx } from "..";
import { XIcon } from "../icons";

function Root(props: ComponentProps<typeof BaseDialog.Root>) {
	return <BaseDialog.Root {...props} />;
}

function Trigger(props: ComponentProps<typeof BaseDialog.Trigger>) {
	return <BaseDialog.Trigger {...props} />;
}

function Portal(props: ComponentProps<typeof BaseDialog.Portal>) {
	return <BaseDialog.Portal {...props} />;
}

function Close(props: ComponentProps<typeof BaseDialog.Close>) {
	return <BaseDialog.Close {...props} />;
}

function Overlay({
	className,
	...props
}: ComponentProps<typeof BaseDialog.Backdrop>) {
	return (
		<BaseDialog.Backdrop
			className={cx(
				"data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 duration-200 fixed inset-0 z-50 bg-black/50",
				className,
			)}
			{...props}
		/>
	);
}

function Popup({
	className,
	...props
}: ComponentProps<typeof BaseDialog.Popup>) {
	return (
		<BaseDialog.Popup
			className={cx(
				"bg-background data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
				className,
			)}
			{...props}
		/>
	);
}

function Header({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cx("flex flex-col gap-2 text-center sm:text-left", className)}
			{...props}
		/>
	);
}

function Footer({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cx(
				"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				className,
			)}
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
			className={cx("text-lg font-semibold leading-none", className)}
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

function Content({
	className,
	children,
	showCloseButton = true,
	...props
}: ComponentProps<typeof BaseDialog.Popup> & {
	showCloseButton?: boolean;
}) {
	return (
		<Portal>
			<Overlay />
			<Popup className={className} {...props}>
				{children}
				{showCloseButton && (
					<Close
						className={cx(
							"ring-offset-background focus:ring-ring data-popup-open:bg-accent data-popup-open:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
						)}
					>
						<XIcon />
						<span className="sr-only">Close</span>
					</Close>
				)}
			</Popup>
		</Portal>
	);
}

export const Dialog = {
	Root,
	Trigger,
	Portal,
	Close,
	Overlay,
	Popup,
	Header,
	Footer,
	Title,
	Description,
	Content,
};
