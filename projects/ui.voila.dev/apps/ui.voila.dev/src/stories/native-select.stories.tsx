import type { Meta, StoryObj } from "@storybook/react-vite";
import { NativeSelect } from "@voila.dev/ui/components/native-select";

const meta = {
	title: "UI/NativeSelect",
	component: NativeSelect.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof NativeSelect.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<NativeSelect.Root defaultValue="option1">
			<NativeSelect.Option value="option1">Option 1</NativeSelect.Option>
			<NativeSelect.Option value="option2">Option 2</NativeSelect.Option>
			<NativeSelect.Option value="option3">Option 3</NativeSelect.Option>
		</NativeSelect.Root>
	),
};

export const WithPlaceholder: Story = {
	render: () => (
		<NativeSelect.Root>
			<NativeSelect.Option value="" disabled>
				Select an option...
			</NativeSelect.Option>
			<NativeSelect.Option value="option1">Option 1</NativeSelect.Option>
			<NativeSelect.Option value="option2">Option 2</NativeSelect.Option>
			<NativeSelect.Option value="option3">Option 3</NativeSelect.Option>
		</NativeSelect.Root>
	),
};

export const WithOptGroup: Story = {
	render: () => (
		<NativeSelect.Root defaultValue="fruit1">
			<NativeSelect.OptGroup label="Fruits">
				<NativeSelect.Option value="fruit1">Apple</NativeSelect.Option>
				<NativeSelect.Option value="fruit2">Banana</NativeSelect.Option>
				<NativeSelect.Option value="fruit3">Orange</NativeSelect.Option>
			</NativeSelect.OptGroup>
			<NativeSelect.OptGroup label="Vegetables">
				<NativeSelect.Option value="veg1">Carrot</NativeSelect.Option>
				<NativeSelect.Option value="veg2">Broccoli</NativeSelect.Option>
				<NativeSelect.Option value="veg3">Spinach</NativeSelect.Option>
			</NativeSelect.OptGroup>
		</NativeSelect.Root>
	),
};

export const Disabled: Story = {
	render: () => (
		<NativeSelect.Root disabled defaultValue="option1">
			<NativeSelect.Option value="option1">Option 1</NativeSelect.Option>
			<NativeSelect.Option value="option2">Option 2</NativeSelect.Option>
			<NativeSelect.Option value="option3">Option 3</NativeSelect.Option>
		</NativeSelect.Root>
	),
};

export const Invalid: Story = {
	render: () => (
		<NativeSelect.Root
			defaultValue="option1"
			aria-invalid="true"
			aria-describedby="error-message"
		>
			<NativeSelect.Option value="option1">Option 1</NativeSelect.Option>
			<NativeSelect.Option value="option2">Option 2</NativeSelect.Option>
			<NativeSelect.Option value="option3">Option 3</NativeSelect.Option>
		</NativeSelect.Root>
	),
};

export const Multiple: Story = {
	render: () => (
		<NativeSelect.Root multiple defaultValue={["option1", "option2"]}>
			<NativeSelect.Option value="option1">Option 1</NativeSelect.Option>
			<NativeSelect.Option value="option2">Option 2</NativeSelect.Option>
			<NativeSelect.Option value="option3">Option 3</NativeSelect.Option>
			<NativeSelect.Option value="option4">Option 4</NativeSelect.Option>
		</NativeSelect.Root>
	),
};
