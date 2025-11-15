"use client";

import { AlertDialog as BaseAlertDialog } from "@base-ui-components/react/alert-dialog";
import type { ComponentProps } from "react";
import { cx } from "..";
import { Button } from "./button";

function Root(props: ComponentProps<typeof BaseAlertDialog.Root>) {
	return <BaseAlertDialog.Root {...props} />;
}

function Trigger(props: ComponentProps<typeof BaseAlertDialog.Trigger>) {
	return <BaseAlertDialog.Trigger {...props} />;
}

function Portal(props: ComponentProps<typeof BaseAlertDialog.Portal>) {
	return <BaseAlertDialog.Portal {...props} />;
}

function Backdrop({ className, ...props }: ComponentProps<typeof BaseAlertDialog.Backdrop>) {
	return (
		<BaseAlertDialog.Backdrop
			className={cx(
				"data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 z-50 bg-black/50 duration-200",
				className,
			)}
			{...props}
		/>
	);
}

function Popup({ className, ...props }: ComponentProps<typeof BaseAlertDialog.Popup>) {
	return (
		<BaseAlertDialog.Popup
			className={cx(
				"bg-background data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
				className,
			)}
			{...props}
		/>
	);
}

function Header({ className, ...props }: ComponentProps<"div">) {
	return <div className={cx("flex flex-col gap-2 text-center sm:text-left", className)} {...props} />;
}

function Footer({ className, ...props }: ComponentProps<"div">) {
	return <div className={cx("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} />;
}

function Title({ className, ...props }: ComponentProps<typeof BaseAlertDialog.Title>) {
	return <BaseAlertDialog.Title className={cx("text-lg font-semibold", className)} {...props} />;
}

function Description({ className, ...props }: ComponentProps<typeof BaseAlertDialog.Description>) {
	return <BaseAlertDialog.Description className={cx("text-muted-foreground text-sm", className)} {...props} />;
}

function Action(props: ComponentProps<typeof Button>) {
	return <BaseAlertDialog.Close render={<Button {...props} />} />;
}

function Cancel(props: ComponentProps<typeof Button>) {
	return <BaseAlertDialog.Close render={<Button variant="outline" {...props} />} />;
}

function Content({ children, ...props }: ComponentProps<typeof Portal>) {
	return (
		<Portal {...props}>
			<Backdrop />
			<Popup>{children}</Popup>
		</Portal>
	);
}

export const AlertDialog = {
	Root,
	Trigger,
	Portal,
	Backdrop,
	Popup,
	Header,
	Footer,
	Title,
	Description,
	Action,
	Cancel,
	Content,
};
