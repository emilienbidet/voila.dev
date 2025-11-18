"use client";

import { Toast as BaseToast } from "@base-ui-components/react/toast";
import type { ComponentProps } from "react";
import {
	CircleCheckIcon,
	InfoIcon,
	Loader2Icon,
	OctagonXIcon,
	TriangleAlertIcon,
	X,
} from "../icons";
import { cx } from "../index";
import { Button } from "./button";

export type ToastType =
	| "success"
	| "error"
	| "warning"
	| "info"
	| "loading"
	| string;

type BaseToastManager = ReturnType<typeof BaseToast.useToastManager>;

type ToastAddOptions = Parameters<BaseToastManager["add"]>[0] & {
	type?: ToastType;
};

type ToastUpdateOptions = Parameters<BaseToastManager["update"]>[1] & {
	type?: ToastType;
};

type ToastPromiseOptions<Value> = Parameters<BaseToastManager["promise"]>[1];

interface TypedToastManager {
	toasts: BaseToastManager["toasts"];
	add: (options: ToastAddOptions) => string;
	close: BaseToastManager["close"];
	update: (toastId: string, options: ToastUpdateOptions) => void;
	promise: <Value>(
		promise: Promise<Value>,
		options: ToastPromiseOptions<Value>,
	) => Promise<Value>;
	success: (options: Omit<ToastAddOptions, "type">) => string;
	error: (options: Omit<ToastAddOptions, "type">) => string;
	warning: (options: Omit<ToastAddOptions, "type">) => string;
	info: (options: Omit<ToastAddOptions, "type">) => string;
}

function useToastManager(): TypedToastManager {
	const manager = BaseToast.useToastManager();

	return {
		...manager,
		add: (options) => manager.add(options),
		update: (toastId, options) => manager.update(toastId, options),
		success: (options) => manager.add({ ...options, type: "success" }),
		error: (options) => manager.add({ ...options, type: "error" }),
		warning: (options) => manager.add({ ...options, type: "warning" }),
		info: (options) => manager.add({ ...options, type: "info" }),
	};
}

function Provider({
	children,
	...props
}: ComponentProps<typeof BaseToast.Provider>) {
	return (
		<BaseToast.Provider {...props}>
			{children}
			<Toaster />
		</BaseToast.Provider>
	);
}

function Portal(props: ComponentProps<typeof BaseToast.Portal>) {
	return <BaseToast.Portal {...props} />;
}

function Viewport({
	className,
	...props
}: ComponentProps<typeof BaseToast.Viewport>) {
	return (
		<BaseToast.Viewport
			className={cx(
				"fixed z-[100] flex flex-col gap-2",
				"top-auto right-4 bottom-4 left-auto w-[250px]",
				"sm:right-6 sm:bottom-6 sm:w-[300px]",
				className,
			)}
			{...props}
		/>
	);
}

function getToastIcon(type: ToastType | undefined) {
	switch (type) {
		case "success":
			return <CircleCheckIcon className="size-4" />;
		case "error":
			return <OctagonXIcon className="size-4" />;
		case "warning":
			return <TriangleAlertIcon className="size-4" />;
		case "info":
			return <InfoIcon className="size-4" />;
		case "loading":
			return <Loader2Icon className="size-4 animate-spin" />;
		default:
			return null;
	}
}

function Root({
	className,
	toast,
	children,
	...props
}: ComponentProps<typeof BaseToast.Root>) {
	const hasIcon =
		toast.type &&
		["success", "error", "warning", "info", "loading"].includes(toast.type);

	return (
		<BaseToast.Root
			toast={toast}
			className={cx(
				"[--gap:0.75rem] [--peek:0.75rem]",
				"[--scale:calc(max(0,1-(var(--toast-index)*0.1)))]",
				"[--shrink:calc(1-var(--scale))]",
				"[--height:var(--toast-frontmost-height,var(--toast-height))]",
				"[--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))]",
				"absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 w-full origin-bottom",
				"transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))]",
				"rounded-lg border bg-background p-4 shadow-lg select-none",
				"after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
				"data-ending-style:opacity-0",
				"data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)))]",
				"data-limited:opacity-0",
				"data-starting-style:transform-[translateY(150%)]",
				"[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:transform-[translateY(150%)]",
				"data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))]",
				"data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))]",
				"data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
				"data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
				"data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
				"data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
				"data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))]",
				"data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))]",
				"h-(--height) data-expanded:h-(--toast-height)",
				"[transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]",
				// Type-specific styling
				toast.type === "success" &&
					"border-toast-success-border bg-toast-success-bg text-toast-success-foreground",
				toast.type === "error" &&
					"border-toast-error-border bg-toast-error-bg text-toast-error-foreground",
				toast.type === "warning" &&
					"border-toast-warning-border bg-toast-warning-bg text-toast-warning-foreground",
				toast.type === "info" &&
					"border-toast-info-border bg-toast-info-bg text-toast-info-foreground",
				toast.type === "loading" &&
					"border-toast-loading-border bg-toast-loading-bg text-toast-loading-foreground",
				hasIcon && "grid grid-cols-[auto_1fr] gap-3",
				className,
			)}
			{...props}
		>
			{hasIcon && (
				<div className="shrink-0 mt-0.5">{getToastIcon(toast.type)}</div>
			)}
			{children}
		</BaseToast.Root>
	);
}

function Content({
	className,
	...props
}: ComponentProps<typeof BaseToast.Content>) {
	return (
		<BaseToast.Content
			className={cx(
				"overflow-hidden transition-opacity duration-250",
				"data-behind:pointer-events-none data-behind:opacity-0",
				"data-expanded:pointer-events-auto data-expanded:opacity-100",
				className,
			)}
			{...props}
		/>
	);
}

function Title({
	className,
	...props
}: ComponentProps<typeof BaseToast.Title>) {
	return (
		<BaseToast.Title
			className={cx("text-sm font-medium leading-5 m-0", className)}
			{...props}
		/>
	);
}

function Description({
	className,
	...props
}: ComponentProps<typeof BaseToast.Description>) {
	return (
		<BaseToast.Description
			className={cx(
				"text-sm leading-5 text-muted-foreground m-0 mt-1",
				className,
			)}
			{...props}
		/>
	);
}

function Action(
	props: Omit<ComponentProps<typeof BaseToast.Action>, "render">,
) {
	return (
		<BaseToast.Action
			className={cx("mt-2", props.className)}
			render={<Button {...(props as ComponentProps<typeof Button>)} />}
		/>
	);
}

function Close({
	className,
	...props
}: ComponentProps<typeof BaseToast.Close>) {
	return (
		<BaseToast.Close
			className={cx(
				"absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded border-none bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground transition-colors",
				className,
			)}
			aria-label="Close"
			{...props}
		>
			<X className="h-4 w-4" />
		</BaseToast.Close>
	);
}

function Toaster() {
	const { toasts } = useToastManager();

	return (
		<Portal>
			<Viewport>
				{toasts.map((toast) => (
					<Root key={toast.id} toast={toast}>
						<Content>
							<Title />
							<Description />
							{toast.actionProps && <Action />}
							<Close />
						</Content>
					</Root>
				))}
			</Viewport>
		</Portal>
	);
}

export const Toast = {
	Provider,
	useToastManager,
};
