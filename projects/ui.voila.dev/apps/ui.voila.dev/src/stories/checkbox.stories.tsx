import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@voila.dev/ui/components/checkbox";
import { Label } from "@voila.dev/ui/components/label";

const meta = {
	title: "UI/Checkbox",
	component: Checkbox.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Checkbox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
	render: () => (
		<Checkbox.Root defaultChecked>
			<Checkbox.Indicator />
		</Checkbox.Root>
	),
};

export const Unchecked: Story = {
	render: () => (
		<Checkbox.Root>
			<Checkbox.Indicator />
		</Checkbox.Root>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="grid gap-4">
			<Checkbox.Root disabled>
				<Checkbox.Indicator />
			</Checkbox.Root>
			<Checkbox.Root disabled defaultChecked>
				<Checkbox.Indicator />
			</Checkbox.Root>
		</div>
	),
};

export const Invalid: Story = {
	render: () => (
		<Checkbox.Root aria-invalid="true">
			<Checkbox.Indicator />
		</Checkbox.Root>
	),
};

export const WithLabel: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Checkbox.Root id="terms" defaultChecked>
				<Checkbox.Indicator />
			</Checkbox.Root>
			<Label htmlFor="terms">Accept terms and conditions</Label>
		</div>
	),
};

export const WithLabelDisabled: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Checkbox.Root id="terms-disabled" disabled>
				<Checkbox.Indicator />
			</Checkbox.Root>
			<Label htmlFor="terms-disabled">Accept terms and conditions</Label>
		</div>
	),
};

export const WithLabelUnchecked: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Checkbox.Root id="subscribe">
				<Checkbox.Indicator />
			</Checkbox.Root>
			<Label htmlFor="subscribe">Subscribe to newsletter</Label>
		</div>
	),
};
