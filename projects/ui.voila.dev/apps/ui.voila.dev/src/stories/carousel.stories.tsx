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
		<Carousel.Root className="max-w-sm">
			<Carousel.Content>
				{Array.from({ length: 10 }, (_, index) => `slide-${index}`).map(
					(slideId, index) => (
						<Carousel.Item key={slideId}>
							<div className="flex aspect-square items-center justify-center rounded-md bg-muted p-6">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</div>
						</Carousel.Item>
					),
				)}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	),
};

export const Vertical: Story = {
	render: () => (
		<Carousel.Root
			opts={{ align: "start" }}
			className="max-w-sm"
			orientation="vertical"
		>
			<Carousel.Content className="max-h-[300px]">
				{Array.from({ length: 10 }, (_, index) => `slide-${index}`).map(
					(slideId, index) => (
						<Carousel.Item key={slideId}>
							<div className="flex aspect-square items-center justify-center rounded-md bg-muted p-6">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</div>
						</Carousel.Item>
					),
				)}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	),
};
