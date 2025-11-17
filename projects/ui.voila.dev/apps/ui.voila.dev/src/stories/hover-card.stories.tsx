import type { Meta, StoryObj } from "@storybook/react-vite";
import { HoverCard } from "@voila.dev/ui/components/hover-card";

const meta = {
	title: "UI/HoverCard",
	component: HoverCard.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof HoverCard.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<HoverCard.Root>
			<p>
				Hover over{" "}
				<HoverCard.Trigger className="font-medium underline">
					this text
				</HoverCard.Trigger>{" "}
				to see the hover card.
			</p>
			<HoverCard.Positioner>
				<HoverCard.Content>
					<p>This is a hover card with some content.</p>
				</HoverCard.Content>
			</HoverCard.Positioner>
		</HoverCard.Root>
	),
};
