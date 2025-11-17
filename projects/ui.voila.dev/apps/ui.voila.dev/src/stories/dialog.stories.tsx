import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { Dialog } from "@voila.dev/ui/components/dialog";

const meta = {
	title: "UI/Dialog",
	component: Dialog.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Dialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Dialog.Root>
			<Dialog.Trigger>
				<Button>Open Dialog</Button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Edit Profile</Dialog.Title>
					<Dialog.Description>
						Make changes to your profile here. Click save when you're done.
					</Dialog.Description>
				</Dialog.Header>
				<Dialog.Footer>
					<Dialog.Close>
						<Button variant="outline">Cancel</Button>
					</Dialog.Close>
					<Button>Save changes</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	),
};

export const WithoutCloseButton: Story = {
	render: () => (
		<Dialog.Root>
			<Dialog.Trigger>
				<Button>Open Dialog</Button>
			</Dialog.Trigger>
			<Dialog.Content showCloseButton={false}>
				<Dialog.Header>
					<Dialog.Title>Custom Dialog</Dialog.Title>
					<Dialog.Description>
						This dialog doesn't have a close button in the top-right corner.
					</Dialog.Description>
				</Dialog.Header>
				<Dialog.Footer>
					<Dialog.Close>
						<Button variant="outline">Cancel</Button>
					</Dialog.Close>
					<Button>Confirm</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	),
};
