import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog";
import { X } from "lucide-react";
import type { ComponentProps } from "react";

import { cx } from "../index";

function Root({ ...props }: ComponentProps<typeof DialogPrimitive.Root>) {
	return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function Trigger({ ...props }: ComponentProps<typeof DialogPrimitive.Trigger>) {
	return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function Portal({ ...props }: ComponentProps<typeof DialogPrimitive.Portal>) {
	return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function Close({ ...props }: ComponentProps<typeof DialogPrimitive.Close>) {
	return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function Overlay({
	className,
	...props
}: ComponentProps<typeof DialogPrimitive.Backdrop>) {
	return (
		<DialogPrimitive.Backdrop
			data-slot="dialog-overlay"
			className={cx(
				"fixed inset-0 z-50 bg-black/50",
				"data-open:animate-in data-closed:animate-out",
				"data-closed:fade-out-0 data-open:fade-in-0",
				"data-closed:animation-duration-[200ms]",
				className,
			)}
			{...props}
		/>
	);
}

function Content({
	className,
	children,
	showCloseButton = true,
	...props
}: ComponentProps<typeof DialogPrimitive.Popup> & {
	showCloseButton?: boolean;
}) {
	return (
		<Portal data-slot="dialog-portal">
			<Overlay />
			<DialogPrimitive.Popup
				data-slot="dialog-content"
				className={cx(
					"fixed top-[50%] left-[50%] z-50 grid w-full gap-4 rounded-lg border bg-background p-6 shadow-lg",
					"translate-x-[-50%] translate-y-[-50%]",
					"max-w-[calc(100%-2rem)] sm:max-w-lg",
					"data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
					"data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
					"duration-200",
					className,
				)}
				{...props}
			>
				{children}
				{showCloseButton && (
					<DialogPrimitive.Close
						data-slot="dialog-close"
						className={cx(
							"absolute top-4 right-4 rounded-xs opacity-70",
							"ring-offset-background transition-opacity",
							"hover:opacity-100",
							"focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-hidden",
							"data-open:bg-accent data-open:text-muted-foreground",
							"disabled:pointer-events-none",
							"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
						)}
					>
						<X />
						<span className="sr-only">Close</span>
					</DialogPrimitive.Close>
				)}
			</DialogPrimitive.Popup>
		</Portal>
	);
}

function Header({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-header"
			className={cx("flex flex-col gap-2 text-center sm:text-left", className)}
			{...props}
		/>
	);
}

function Footer({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-footer"
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
}: ComponentProps<typeof DialogPrimitive.Title>) {
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={cx("text-lg font-semibold leading-none", className)}
			{...props}
		/>
	);
}

function Description({
	className,
	...props
}: ComponentProps<typeof DialogPrimitive.Description>) {
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={cx("text-sm text-muted-foreground", className)}
			{...props}
		/>
	);
}

export const Dialog = {
	Root,
	Trigger,
	Portal,
	Close,
	Overlay,
	Content,
	Header,
	Footer,
	Title,
	Description,
};
