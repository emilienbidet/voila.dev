import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "@voila.dev/ui/components/carousel";

const meta = {
	title: "UI/Carousel",
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Carousel.Root className="w-full max-w-sm">
			<Carousel.Content>
				{Array.from({ length: 5 }, (_, i) => (
					<Carousel.Item key={i}>
						<div className="flex aspect-square items-center justify-center rounded-md bg-muted">
							<span className="text-4xl font-semibold">{i + 1}</span>
						</div>
					</Carousel.Item>
				))}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	),
};

export const Vertical: Story = {
	render: () => (
		<Carousel.Root
			orientation="vertical"
			className="mx-auto w-64"
			opts={{ align: "start" }}
		>
			<Carousel.Content className="h-[300px]">
				{Array.from({ length: 5 }, (_, i) => (
					<Carousel.Item key={i}>
						<div className="flex h-full items-center justify-center rounded-md bg-muted">
							<span className="text-4xl font-semibold">{i + 1}</span>
						</div>
					</Carousel.Item>
				))}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	),
};
