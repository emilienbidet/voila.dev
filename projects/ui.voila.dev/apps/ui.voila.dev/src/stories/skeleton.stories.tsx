import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "@voila.dev/ui/components/skeleton";

const meta = {
	title: "UI/Skeleton",
	component: Skeleton,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
	render: () => (
		<div className="flex flex-col gap-3">
			<Skeleton className="h-[125px] w-[250px] rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	),
};

export const Avatar: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Skeleton className="h-12 w-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	),
};

export const Text: Story = {
	render: () => (
		<div className="flex flex-col gap-2">
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[200px]" />
			<Skeleton className="h-4 w-[150px]" />
		</div>
	),
};
