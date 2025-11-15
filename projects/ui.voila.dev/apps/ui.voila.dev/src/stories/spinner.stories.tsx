import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { Spinner } from "@voila.dev/ui/components/spinner";

const meta = {
	title: "UI/Spinner",
	component: Spinner,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => <Spinner />,
};

export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Spinner className="size-4" />
			<Spinner className="size-6" />
			<Spinner className="size-8" />
			<Spinner className="size-12" />
		</div>
	),
};

export const Colors: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Spinner className="text-primary" />
			<Spinner className="text-secondary" />
			<Spinner className="text-muted-foreground" />
			<Spinner className="text-destructive" />
		</div>
	),
};

export const Inline: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Spinner />
			<span>Loading...</span>
		</div>
	),
};

export const ButtonWithSpinner: Story = {
	name: "Button",
	render: () => (
		<div className="flex items-center gap-4">
			<Button disabled>
				<Spinner className="size-4" />
				Loading
			</Button>
			<Button disabled variant="outline">
				<Spinner className="size-4" />
				Loading
			</Button>
		</div>
	),
};
