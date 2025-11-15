import { Button } from "@voila.dev/ui/components/button";
import { Popover } from "@voila.dev/ui/components/popover";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "UI/Popover",
	component: Popover.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Popover.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger>
				<Button>Open Popover</Button>
			</Popover.Trigger>
			<Popover.Content>
				<Popover.Title>Notifications</Popover.Title>
				<Popover.Description>
					You are all caught up. Good job!
				</Popover.Description>
			</Popover.Content>
		</Popover.Root>
	),
};

export const WithArrow: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger>
				<Button>Open Popover</Button>
			</Popover.Trigger>
			<Popover.Content>
				<Popover.Arrow />
				<Popover.Title>Notifications</Popover.Title>
				<Popover.Description>
					You are all caught up. Good job!
				</Popover.Description>
			</Popover.Content>
		</Popover.Root>
	),
};

export const WithCloseButton: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger>
				<Button>Open Popover</Button>
			</Popover.Trigger>
			<Popover.Content>
				<Popover.Title>Edit Profile</Popover.Title>
				<Popover.Description>
					Make changes to your profile here.
				</Popover.Description>
				<div className="mt-4 flex justify-end gap-2">
					<Popover.Close>
						<Button variant="outline" size="sm">
							Cancel
						</Button>
					</Popover.Close>
					<Button size="sm">Save</Button>
				</div>
			</Popover.Content>
		</Popover.Root>
	),
};

export const DifferentSides: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-8 p-8">
			<Popover.Root>
				<Popover.Trigger>
					<Button>Top</Button>
				</Popover.Trigger>
				<Popover.Content side="top">
					<Popover.Title>Top Popover</Popover.Title>
					<Popover.Description>
						This popover appears on top.
					</Popover.Description>
				</Popover.Content>
			</Popover.Root>

			<div className="flex gap-8">
				<Popover.Root>
					<Popover.Trigger>
						<Button>Left</Button>
					</Popover.Trigger>
					<Popover.Content side="left">
						<Popover.Title>Left Popover</Popover.Title>
						<Popover.Description>
							This popover appears on the left.
						</Popover.Description>
					</Popover.Content>
				</Popover.Root>

				<Popover.Root>
					<Popover.Trigger>
						<Button>Right</Button>
					</Popover.Trigger>
					<Popover.Content side="right">
						<Popover.Title>Right Popover</Popover.Title>
						<Popover.Description>
							This popover appears on the right.
						</Popover.Description>
					</Popover.Content>
				</Popover.Root>
			</div>

			<Popover.Root>
				<Popover.Trigger>
					<Button>Bottom</Button>
				</Popover.Trigger>
				<Popover.Content side="bottom">
					<Popover.Title>Bottom Popover</Popover.Title>
					<Popover.Description>
						This popover appears on the bottom.
					</Popover.Description>
				</Popover.Content>
			</Popover.Root>
		</div>
	),
};
