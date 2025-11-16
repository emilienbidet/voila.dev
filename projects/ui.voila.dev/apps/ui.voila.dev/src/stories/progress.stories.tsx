import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@voila.dev/ui/components/progress";

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

export const WithValue: Story = {
	render: () => (
		<div className="w-64 flex flex-col gap-4">
			<Progress.Root value={66} className="flex items-center gap-4">
				<Progress.Track>
					<Progress.Indicator />
				</Progress.Track>
				<Progress.Value />
			</Progress.Root>

			<Progress.Root value={66} className="flex items-center gap-4">
				<Progress.Value />
				<Progress.Track>
					<Progress.Indicator />
				</Progress.Track>
			</Progress.Root>

			<Progress.Root value={66} className="flex items-center gap-4">
				<Progress.Track>
					<Progress.Indicator />
				</Progress.Track>
				<Progress.Value>{(_, progress) => `$${progress}`}</Progress.Value>
			</Progress.Root>
		</div>
	),
};

export const WithLabel: Story = {
	render: () => (
		<div className="w-64 flex flex-col gap-6">
			<Progress.Root value={66}>
				<Progress.Label>Progress with label</Progress.Label>
				<Progress.Track className="mt-2">
					<Progress.Indicator />
				</Progress.Track>
			</Progress.Root>

			<Progress.Root value={66} className="flex items-center gap-4">
				<Progress.Label>Progress</Progress.Label>
				<Progress.Track>
					<Progress.Indicator />
				</Progress.Track>
			</Progress.Root>

			<Progress.Root value={66}>
				<div className="flex items-center justify-between gap-2">
					<Progress.Label>Progress with label and value</Progress.Label>
					<Progress.Value />
				</div>
				<Progress.Track className="mt-2">
					<Progress.Indicator />
				</Progress.Track>
			</Progress.Root>

			<Progress.Root value={66}>
				<Progress.Label>Progress with label and value</Progress.Label>
				<div className="flex items-center gap-4">
					<Progress.Track>
						<Progress.Indicator />
					</Progress.Track>
					<Progress.Value />
				</div>
			</Progress.Root>
		</div>
	),
};

export const Color: Story = {
	render: () => (
		<div className="w-64 space-y-6">
			<Progress.Root value={66}>
				<Progress.Track>
					<Progress.Indicator className="bg-blue-500" />
				</Progress.Track>
			</Progress.Root>
			<Progress.Root value={66}>
				<Progress.Track>
					<Progress.Indicator className="bg-green-500" />
				</Progress.Track>
			</Progress.Root>
			<Progress.Root value={66}>
				<Progress.Track>
					<Progress.Indicator className="bg-red-500" />
				</Progress.Track>
			</Progress.Root>
		</div>
	),
};

export const Shape: Story = {
	render: () => (
		<div className="w-64 space-y-6">
			<Progress.Root value={66}>
				<Progress.Track className="rounded-full">
					<Progress.Indicator />
				</Progress.Track>
			</Progress.Root>
			<Progress.Root value={66}>
				<Progress.Track className="rounded-md">
					<Progress.Indicator />
				</Progress.Track>
			</Progress.Root>
			<Progress.Root value={66}>
				<Progress.Track className="rounded-none">
					<Progress.Indicator />
				</Progress.Track>
			</Progress.Root>
		</div>
	),
};
