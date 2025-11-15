import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { ButtonGroup } from "@voila.dev/ui/components/button-group";
import { ArrowLeftIcon, ArrowRightIcon } from "@voila.dev/ui/icons";

const meta = {
	title: "UI/ButtonGroup",
	component: ButtonGroup.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ButtonGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
	render: () => (
		<ButtonGroup.Root>
			<Button variant="outline">Left</Button>
			<Button variant="outline">Middle</Button>
			<Button variant="outline">Right</Button>
		</ButtonGroup.Root>
	),
};

export const WithText: Story = {
	render: () => (
		<ButtonGroup.Root>
			<ButtonGroup.Text>View</ButtonGroup.Text>
			<Button variant="outline">List</Button>
			<Button variant="outline">Grid</Button>
		</ButtonGroup.Root>
	),
};

export const WithSeparator: Story = {
	render: () => (
		<ButtonGroup.Root>
			<Button>Edit</Button>
			<ButtonGroup.Separator />
			<Button>Share</Button>
			<ButtonGroup.Separator />
			<Button>Export</Button>
		</ButtonGroup.Root>
	),
};

export const Vertical: Story = {
	render: () => (
		<ButtonGroup.Root orientation="vertical">
			<Button variant="outline">Top</Button>
			<Button variant="outline">Center</Button>
			<Button variant="outline">Bottom</Button>
		</ButtonGroup.Root>
	),
};

export const Nested: Story = {
	render: () => (
		<ButtonGroup.Root>
			<ButtonGroup.Root>
				<Button variant="outline" size="sm">
					1
				</Button>
				<Button variant="outline" size="sm">
					2
				</Button>
				<Button variant="outline" size="sm">
					3
				</Button>
				<Button variant="outline" size="sm">
					4
				</Button>
				<Button variant="outline" size="sm">
					5
				</Button>
			</ButtonGroup.Root>
			<ButtonGroup.Root>
				<Button variant="outline" size="icon-sm" aria-label="Previous">
					<ArrowLeftIcon />
				</Button>
				<Button variant="outline" size="icon-sm" aria-label="Next">
					<ArrowRightIcon />
				</Button>
			</ButtonGroup.Root>
		</ButtonGroup.Root>
	),
};
