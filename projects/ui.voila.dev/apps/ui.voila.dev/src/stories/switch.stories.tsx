import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@voila.dev/ui/components/switch";

const meta = {
	title: "UI/Switch",
	component: Switch,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => <Switch />,
};

export const Checked: Story = {
	render: () => <Switch defaultChecked />,
};

export const Unchecked: Story = {
	render: () => <Switch defaultChecked={false} />,
};

export const Disabled: Story = {
	render: () => (
		<div className="grid gap-4">
			<Switch disabled />
			<Switch disabled defaultChecked />
		</div>
	),
};
