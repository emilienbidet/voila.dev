import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "@voila.dev/ui/components/label";
import { Radio } from "@voila.dev/ui/components/radio";
import { RadioGroup } from "@voila.dev/ui/components/radio-group";

const meta = {
	title: "UI/Radio",
	component: Radio,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

export const Checked: Story = {
	render: () => (
		<RadioGroup.Root
			defaultValue="option-1"
			className="flex items-center gap-2"
		>
			<Radio value="option-1" />
			<Label>Option 1</Label>
		</RadioGroup.Root>
	),
};

export const Unchecked: Story = {
	render: () => (
		<RadioGroup.Root className="flex gap-2">
			<Radio value="option-1" />
			<Label>Option 1</Label>
		</RadioGroup.Root>
	),
};

export const Disabled: Story = {
	render: () => (
		<RadioGroup.Root defaultValue="option-1" className="grid gap-4">
			<div className="flex items-center gap-2">
				<Radio value="option-1" disabled />
				<Label>Option 1 (disabled, checked)</Label>
			</div>
			<div className="flex items-center gap-2">
				<Radio value="option-2" disabled />
				<Label>Option 2 (disabled, unchecked)</Label>
			</div>
		</RadioGroup.Root>
	),
};

export const Invalid: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Radio value="option-1" aria-invalid="true" />
			<Label>Option 1 (invalid)</Label>
		</div>
	),
};
