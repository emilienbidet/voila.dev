import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "@voila.dev/ui/components/scroll-area";

const meta = {
	title: "UI/ScrollArea",
	component: ScrollArea.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ScrollArea.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
	render: () => (
		<ScrollArea.Root className="h-72 w-80 rounded-md border">
			<ScrollArea.Viewport>
				<ScrollArea.Content className="p-4">
					<div className="space-y-4">
						<h4 className="text-sm font-medium leading-none">Tags</h4>
						{Array.from({ length: 50 }, (_, i) => (
							<div key={i} className="text-sm">
								Tag {i + 1}
							</div>
						))}
					</div>
				</ScrollArea.Content>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar>
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner />
		</ScrollArea.Root>
	),
};

export const Horizontal: Story = {
	render: () => (
		<ScrollArea.Root className="w-96 rounded-md border">
			<ScrollArea.Viewport>
				<ScrollArea.Content className="p-4">
					<div className="flex gap-4">
						{Array.from({ length: 20 }, (_, i) => (
							<div
								key={i}
								className="bg-muted text-muted-foreground text-nowrap rounded-md px-3 py-1 text-sm"
							>
								Item {i + 1}
							</div>
						))}
					</div>
				</ScrollArea.Content>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar orientation="horizontal">
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner />
		</ScrollArea.Root>
	),
};

export const Both: Story = {
	render: () => (
		<ScrollArea.Root className="h-72 w-96 rounded-md border">
			<ScrollArea.Viewport>
				<ScrollArea.Content className="p-4">
					<div className="space-y-4">
						<h4 className="text-sm font-medium leading-none">
							Scrollable Content
						</h4>
						<div className="space-y-2">
							{Array.from({ length: 20 }, (_, i) => (
								<div key={i} className="flex gap-4">
									{Array.from({ length: 10 }, (_, j) => (
										<div
											key={j}
											className="bg-muted text-muted-foreground text-nowrap rounded-md px-3 py-1 text-sm"
										>
											Item {i + 1}-{j + 1}
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</ScrollArea.Content>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar>
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Scrollbar orientation="horizontal">
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner />
		</ScrollArea.Root>
	),
};
