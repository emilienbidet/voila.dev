import { Input } from "@voila.dev/ui/components/input";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "UI/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		placeholder: {
			control: "text",
			defaultValue: "Enter text...",
		},
		value: {
			control: "text",
			defaultValue: "",
		},
		disabled: {
			control: "boolean",
			defaultValue: false,
		},
		required: {
			control: "boolean",
			defaultValue: false,
		},
		"aria-invalid": {
			control: "select",
			options: ["true", "false"],
		},
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
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
		value: "Hello world",
	},
};

export const Invalid: Story = {
	args: {
		"aria-invalid": "true",
		value: "Invalid value",
	},
};
