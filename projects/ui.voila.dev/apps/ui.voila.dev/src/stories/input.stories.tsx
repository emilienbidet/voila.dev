import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@voila.dev/ui/components/input";

const meta = {
	title: "UI/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: "Enter text...",
	},
};

export const WithValue: Story = {
	args: {
		value: "Hello world",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		value: "Disabled input",
	},
};

export const Invalid: Story = {
	args: {
		"aria-invalid": "true",
		value: "Invalid value",
		placeholder: "Enter text...",
	},
};
