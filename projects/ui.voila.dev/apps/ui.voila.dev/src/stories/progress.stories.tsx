import { Progress } from "@voila.dev/ui/components/progress";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";

const meta = {
	title: "UI/Progress",
	component: Progress.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Progress.Root>;

export default meta;
type Story = StoryObj<typeof Progress.Root>;

export const Default: Story = {
	render: () => (
		<Progress.Root value={45} className="w-64">
			<Progress.Track>
				<Progress.Indicator />
			</Progress.Track>
		</Progress.Root>
	),
};

export const WithLabelAndValue: Story = {
	render: () => (
		<Progress.Root value={45} className="grid w-64 grid-cols-2 gap-y-2 text-sm">
			<Progress.Label className="font-medium text-foreground">
				Export data
			</Progress.Label>
			<Progress.Value className="col-start-2 text-right text-foreground" />
			<Progress.Track className="col-span-full">
				<Progress.Indicator />
			</Progress.Track>
		</Progress.Root>
	),
};

export const Empty: Story = {
	render: () => (
		<Progress.Root value={0} className="w-64">
			<Progress.Track>
				<Progress.Indicator />
			</Progress.Track>
		</Progress.Root>
	),
};

export const Half: Story = {
	render: () => (
		<Progress.Root value={50} className="w-64">
			<Progress.Track>
				<Progress.Indicator />
			</Progress.Track>
		</Progress.Root>
	),
};

export const Full: Story = {
	render: () => (
		<Progress.Root value={100} className="w-64">
			<Progress.Track>
				<Progress.Indicator />
			</Progress.Track>
		</Progress.Root>
	),
};

export const Animated: Story = {
	render: () => {
		const [value, setValue] = useState(20);

		useEffect(() => {
			const interval = setInterval(() => {
				setValue((current) => {
					const change = Math.round((Math.random() - 0.5) * 50);
					return Math.max(0, Math.min(100, current + change));
				});
			}, 2000);
			return () => clearInterval(interval);
		}, []);

		return (
			<Progress.Root value={value} className="grid w-64 grid-cols-2 gap-y-2">
				<Progress.Label className="text-sm font-medium text-foreground">
					Export data
				</Progress.Label>
				<Progress.Value className="col-start-2 text-right text-sm text-foreground" />
				<Progress.Track className="col-span-full">
					<Progress.Indicator />
				</Progress.Track>
			</Progress.Root>
		);
	},
};
