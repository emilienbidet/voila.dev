import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleGroup } from "@voila.dev/ui/components/toggle-group";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "@voila.dev/ui/icons";

const meta = {
	title: "UI/ToggleGroup",
	component: ToggleGroup.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ToggleGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ToggleGroup.Root>
			<ToggleGroup.Item value="yellow">Yellow</ToggleGroup.Item>
			<ToggleGroup.Item value="green">Green</ToggleGroup.Item>
			<ToggleGroup.Item value="blue">Blue</ToggleGroup.Item>
		</ToggleGroup.Root>
	),
};

export const Outline: Story = {
	render: () => (
		<ToggleGroup.Root variant="outline">
			<ToggleGroup.Item value="yellow">Yellow</ToggleGroup.Item>
			<ToggleGroup.Item value="green">Green</ToggleGroup.Item>
			<ToggleGroup.Item value="blue">Blue</ToggleGroup.Item>
		</ToggleGroup.Root>
	),
};

export const Multiple: Story = {
	render: () => (
		<ToggleGroup.Root variant="outline" multiple>
			<ToggleGroup.Item value="bold">
				<BoldIcon />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="italic">
				<ItalicIcon />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="underline">
				<UnderlineIcon />
			</ToggleGroup.Item>
		</ToggleGroup.Root>
	),
};
