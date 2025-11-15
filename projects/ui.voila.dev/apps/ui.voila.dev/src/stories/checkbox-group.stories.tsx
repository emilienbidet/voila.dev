import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@voila.dev/ui/components/checkbox";
import { CheckboxGroup } from "@voila.dev/ui/components/checkbox-group";

const meta = {
	title: "UI/CheckboxGroup",
	component: CheckboxGroup,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<CheckboxGroup>
			<Checkbox.Root name="option-1">
				<Checkbox.Indicator />
			</Checkbox.Root>
			<Checkbox.Root name="option-2">
				<Checkbox.Indicator />
			</Checkbox.Root>
			<Checkbox.Root name="option-3">
				<Checkbox.Indicator />
			</Checkbox.Root>
		</CheckboxGroup>
	),
};
