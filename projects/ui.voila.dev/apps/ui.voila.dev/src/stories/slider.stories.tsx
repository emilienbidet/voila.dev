import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@voila.dev/ui/components/slider";

const meta = {
	title: "UI/Slider",
	component: Slider.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Slider.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Slider.Root defaultValue={25} className="w-64">
			<Slider.Control>
				<Slider.Track>
					<Slider.Indicator />
					<Slider.Thumb />
				</Slider.Track>
			</Slider.Control>
		</Slider.Root>
	),
};

export const Range: Story = {
	render: () => (
		<Slider.Root defaultValue={[20, 80]} className="w-64">
			<Slider.Control>
				<Slider.Track>
					<Slider.Indicator />
					<Slider.Thumb index={0} />
					<Slider.Thumb index={1} />
				</Slider.Track>
			</Slider.Control>
		</Slider.Root>
	),
};

export const WithValue: Story = {
	render: () => (
		<Slider.Root defaultValue={50} className="w-64">
			<Slider.Control>
				<Slider.Track>
					<Slider.Indicator />
					<Slider.Thumb />
				</Slider.Track>
			</Slider.Control>
			<Slider.Value className="text-sm font-medium text-foreground" />
		</Slider.Root>
	),
};

export const WithSteps: Story = {
	render: () => (
		<Slider.Root defaultValue={25} step={5} min={0} max={100} className="w-64">
			<Slider.Control>
				<Slider.Track>
					<Slider.Indicator />
					<Slider.Thumb />
				</Slider.Track>
			</Slider.Control>
		</Slider.Root>
	),
};

export const Disabled: Story = {
	render: () => (
		<Slider.Root defaultValue={25} disabled className="w-64">
			<Slider.Control>
				<Slider.Track>
					<Slider.Indicator />
					<Slider.Thumb />
				</Slider.Track>
			</Slider.Control>
		</Slider.Root>
	),
};

export const Vertical: Story = {
	render: () => (
		<Slider.Root defaultValue={25} orientation="vertical" className="h-64">
			<Slider.Control>
				<Slider.Track>
					<Slider.Indicator />
					<Slider.Thumb />
				</Slider.Track>
			</Slider.Control>
		</Slider.Root>
	),
};

export const CustomRange: Story = {
	render: () => (
		<Slider.Root defaultValue={25} min={10} max={90} step={5} className="w-64">
			<Slider.Control>
				<Slider.Track>
					<Slider.Indicator />
					<Slider.Thumb />
				</Slider.Track>
			</Slider.Control>
		</Slider.Root>
	),
};
