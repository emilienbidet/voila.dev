import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { Tooltip } from "@voila.dev/ui/components/tooltip";

const meta = {
	title: "UI/Tooltip",
	component: Tooltip.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Tooltip.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger render={<Button variant="outline">Hover me</Button>} />
				<Tooltip.Positioner>
					<Tooltip.Content>This is a tooltip</Tooltip.Content>
				</Tooltip.Positioner>
			</Tooltip.Root>
		</Tooltip.Provider>
	),
};

export const WithLongText: Story = {
	render: () => (
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger
					render={<Button variant="outline">Hover for long text</Button>}
				/>
				<Tooltip.Positioner>
					<Tooltip.Content>
						This is a longer tooltip message that demonstrates how the tooltip
						handles text wrapping and longer content.
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Tooltip.Root>
		</Tooltip.Provider>
	),
};

export const MultipleTooltips: Story = {
	render: () => (
		<Tooltip.Provider>
			<div className="flex gap-4">
				<Tooltip.Root>
					<Tooltip.Trigger render={<Button variant="outline">Left</Button>} />
					<Tooltip.Positioner>
						<Tooltip.Content>Tooltip on the left</Tooltip.Content>
					</Tooltip.Positioner>
				</Tooltip.Root>
				<Tooltip.Root>
					<Tooltip.Trigger render={<Button variant="outline">Center</Button>} />
					<Tooltip.Positioner>
						<Tooltip.Content>Tooltip in the center</Tooltip.Content>
					</Tooltip.Positioner>
				</Tooltip.Root>
				<Tooltip.Root>
					<Tooltip.Trigger render={<Button variant="outline">Right</Button>} />
					<Tooltip.Positioner>
						<Tooltip.Content>Tooltip on the right</Tooltip.Content>
					</Tooltip.Positioner>
				</Tooltip.Root>
			</div>
		</Tooltip.Provider>
	),
};

export const DifferentSides: Story = {
	render: () => (
		<Tooltip.Provider>
			<div className="flex flex-col items-start gap-4">
				<Tooltip.Root>
					<Tooltip.Trigger render={<Button variant="outline">Top</Button>} />
					<Tooltip.Positioner side="top">
						<Tooltip.Content>Tooltip on top</Tooltip.Content>
					</Tooltip.Positioner>
				</Tooltip.Root>
				<Tooltip.Root>
					<Tooltip.Trigger render={<Button variant="outline">Right</Button>} />
					<Tooltip.Positioner side="right">
						<Tooltip.Content>Tooltip on right</Tooltip.Content>
					</Tooltip.Positioner>
				</Tooltip.Root>
				<Tooltip.Root>
					<Tooltip.Trigger render={<Button variant="outline">Bottom</Button>} />
					<Tooltip.Positioner side="bottom">
						<Tooltip.Content>Tooltip on bottom</Tooltip.Content>
					</Tooltip.Positioner>
				</Tooltip.Root>
				<Tooltip.Root>
					<Tooltip.Trigger render={<Button variant="outline">Left</Button>} />
					<Tooltip.Positioner side="left">
						<Tooltip.Content>Tooltip on left</Tooltip.Content>
					</Tooltip.Positioner>
				</Tooltip.Root>
			</div>
		</Tooltip.Provider>
	),
};
