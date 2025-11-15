import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@voila.dev/ui/components/badge";
import { BadgeCheckIcon } from "@voila.dev/ui/icons";

const meta = {
	title: "UI/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "secondary", "destructive", "outline"],
		},
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "default",
		children: "Badge",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Badge",
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Badge",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Badge",
	},
};

export const WithIcon: Story = {
	render: () => (
		<Badge
			variant="secondary"
			className="bg-blue-500 text-white dark:bg-blue-600"
		>
			<BadgeCheckIcon />
			Verified
		</Badge>
	),
};
