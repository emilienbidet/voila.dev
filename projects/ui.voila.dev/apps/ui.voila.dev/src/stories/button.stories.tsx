import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { DownloadIcon, PlusIcon } from "@voila.dev/ui/icons";

const meta = {
	title: "UI/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		variant: {
			control: "select",
			options: [
				"primary",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			],
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
		children: "Primary",
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Destructive",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "Ghost",
	},
};

export const Link: Story = {
	args: {
		variant: "link",
		children: "Link",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Disabled",
	},
};

export const WithIcon: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Button variant="primary">
				<PlusIcon />
				Add Item
			</Button>
			<Button variant="outline">
				<DownloadIcon />
				Download
			</Button>
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Button size="sm">Small</Button>
			<Button size="default">Default</Button>
			<Button size="lg">Large</Button>
		</div>
	),
};

export const IconButtons: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Button size="icon-sm">
				<PlusIcon />
			</Button>
			<Button size="icon">
				<PlusIcon />
			</Button>
			<Button size="icon-lg">
				<PlusIcon />
			</Button>
		</div>
	),
};
