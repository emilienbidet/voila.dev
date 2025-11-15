import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { Toast } from "@voila.dev/ui/components/toast";
import { useState } from "react";

const meta = {
	title: "UI/Toast",
	component: Toast.Provider,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Toast.Provider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		function ToastButton() {
			const toast = Toast.useToastManager();
			const [count, setCount] = useState(0);

			return (
				<Button
					type="button"
					onClick={() => {
						setCount((prev) => prev + 1);
						toast.add({
							title: `Toast ${count + 1} created`,
							description: "This is a toast notification.",
						});
					}}
				>
					Create toast
				</Button>
			);
		}

		return (
			<Toast.Provider>
				<ToastButton />
			</Toast.Provider>
		);
	},
};

export const Types: Story = {
	render: () => {
		function TypeButtons() {
			const toast = Toast.useToastManager();

			return (
				<div className="flex flex-col gap-2">
					<Button
						type="button"
						onClick={() => {
							toast.success({
								title: "Success!",
								description: "Your action was completed successfully.",
							});
						}}
					>
						Show success toast
					</Button>
					<Button
						type="button"
						onClick={() => {
							toast.error({
								title: "Error occurred",
								description: "Something went wrong. Please try again.",
							});
						}}
					>
						Show error toast
					</Button>
					<Button
						type="button"
						onClick={() => {
							toast.warning({
								title: "Warning",
								description: "Please review this action before proceeding.",
							});
						}}
					>
						Show warning toast
					</Button>
					<Button
						type="button"
						onClick={() => {
							toast.info({
								title: "Information",
								description: "Here's some useful information for you.",
							});
						}}
					>
						Show info toast
					</Button>
				</div>
			);
		}

		return (
			<Toast.Provider>
				<TypeButtons />
			</Toast.Provider>
		);
	},
};

export const WithPromise: Story = {
	render: () => {
		function PromiseButton() {
			const toast = Toast.useToastManager();

			return (
				<Button
					type="button"
					onClick={() => {
						toast.promise(
							new Promise<string>((resolve, reject) => {
								const shouldSucceed = Math.random() > 0.3;
								setTimeout(() => {
									if (shouldSucceed) {
										resolve("operation completed");
									} else {
										reject(new Error("operation failed"));
									}
								}, 2000);
							}),
							{
								loading: {
									title: "Loading data...",
									description: "Please wait while we process your request.",
								},
								success: {
									title: "Operation completed",
									description: "Your operation was completed successfully.",
								},
								error: {
									title: "Operation failed",
									description: "Your operation failed. Please try again.",
								},
							},
						);
					}}
				>
					Run promise
				</Button>
			);
		}

		return (
			<Toast.Provider>
				<PromiseButton />
			</Toast.Provider>
		);
	},
};

export const WithAction: Story = {
	render: () => {
		function ActionButton() {
			const toast = Toast.useToastManager();

			return (
				<Button
					type="button"
					onClick={() => {
						const id = toast.add({
							title: "Action performed",
							description: "You can undo this action.",
							type: "success",
							actionProps: {
								children: "Undo",
								onClick() {
									toast.close(id);
									toast.add({
										title: "Action undone",
									});
								},
							},
						});
					}}
				>
					Perform action
				</Button>
			);
		}

		return (
			<Toast.Provider>
				<ActionButton />
			</Toast.Provider>
		);
	},
};

const TEXTS = [
	"Short message.",
	"A bit longer message that spans two lines.",
	"This is a longer description that intentionally takes more vertical space to demonstrate stacking with varying heights.",
	"An even longer description that should span multiple lines so we can verify the clamped collapsed height and smooth expansion animation when hovering or focusing the viewport.",
];

export const VaryingHeights: Story = {
	render: () => {
		function VaryingHeightsButton() {
			const toast = Toast.useToastManager();
			const [count, setCount] = useState(0);

			return (
				<Button
					type="button"
					onClick={() => {
						setCount((prev) => prev + 1);
						const description = TEXTS[Math.floor(Math.random() * TEXTS.length)];
						toast.add({
							title: `Toast ${count + 1} created`,
							description,
						});
					}}
				>
					Create varying height toast
				</Button>
			);
		}

		return (
			<Toast.Provider>
				<VaryingHeightsButton />
			</Toast.Provider>
		);
	},
};
