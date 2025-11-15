import { Checkbox } from "@voila.dev/ui/components/checkbox";
import { Label } from "@voila.dev/ui/components/label";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "UI/Label",
	component: Label,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => <Label>Label text</Label>,
};

export const WithCheckbox: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Checkbox.Root id="terms" defaultChecked>
				<Checkbox.Indicator />
			</Checkbox.Root>
			<Label htmlFor="terms">Accept terms and conditions</Label>
		</div>
	),
};

export const DisabledWithCheckbox: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Checkbox.Root id="terms-disabled" disabled>
				<Checkbox.Indicator />
			</Checkbox.Root>
			<Label htmlFor="terms-disabled">Accept terms and conditions</Label>
		</div>
	),
};

export const Required: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Checkbox.Root id="newsletter" required defaultChecked>
				<Checkbox.Indicator />
			</Checkbox.Root>
			<Label htmlFor="newsletter" required>
				Subscribe to newsletter
			</Label>
		</div>
	),
};
