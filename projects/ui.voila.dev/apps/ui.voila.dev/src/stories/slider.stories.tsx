import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@voila.dev/ui/components/slider";

const meta = {
	title: "UI/Slider",
	component: Slider,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => <Slider defaultValue={25} className="w-64" />,
};

export const Range: Story = {
	render: () => <Slider defaultValue={[20, 80]} className="w-64" />,
};

export const WithSteps: Story = {
	render: () => (
		<Slider defaultValue={25} step={5} min={0} max={100} className="w-64" />
	),
};

export const Disabled: Story = {
	render: () => <Slider defaultValue={25} disabled className="w-64" />,
};

export const Vertical: Story = {
	render: () => (
		<Slider defaultValue={25} orientation="vertical" className="h-64" />
	),
};

export const CustomRange: Story = {
	render: () => (
		<Slider defaultValue={25} min={10} max={90} step={5} className="w-64" />
	),
};
