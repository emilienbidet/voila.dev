import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { Popover } from "@voila.dev/ui/components/popover";

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
			<Popover.Trigger render={<Button>Open Popover</Button>}></Popover.Trigger>
			<Popover.Positioner>
				<Popover.Content>
					<Popover.Title>Notifications</Popover.Title>
					<Popover.Description>
						You are all caught up. Good job!
					</Popover.Description>
				</Popover.Content>
			</Popover.Positioner>
		</Popover.Root>
	),
};

export const WithCloseButton: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger render={<Button>Open Popover</Button>}></Popover.Trigger>
			<Popover.Positioner>
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
			</Popover.Positioner>
		</Popover.Root>
	),
};
