import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { Dialog } from "@voila.dev/ui/components/dialog";
import { Input } from "@voila.dev/ui/components/input";
import { Label } from "@voila.dev/ui/components/label";
import * as React from "react";

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

export const Simple: Story = {
	render: () => (
		<Dialog.Root>
			<Dialog.Trigger>
				<Button variant="outline">Show Notification</Button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Notifications</Dialog.Title>
					<Dialog.Description>
						You are all caught up. Good job!
					</Dialog.Description>
				</Dialog.Header>
				<Dialog.Footer>
					<Dialog.Close>
						<Button>Close</Button>
					</Dialog.Close>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	),
};

export const Controlled: Story = {
	render: () => {
		const [open, setOpen] = React.useState(false);

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Controlled Dialog</Button>
				<Dialog.Root open={open} onOpenChange={setOpen}>
					<Dialog.Content>
						<Dialog.Header>
							<Dialog.Title>Controlled Dialog</Dialog.Title>
							<Dialog.Description>
								This dialog's state is controlled externally. You can open and
								close it programmatically.
							</Dialog.Description>
						</Dialog.Header>
						<Dialog.Footer>
							<Dialog.Close>
								<Button variant="outline">Cancel</Button>
							</Dialog.Close>
							<Button onClick={() => setOpen(false)}>Save</Button>
						</Dialog.Footer>
					</Dialog.Content>
				</Dialog.Root>
			</>
		);
	},
};

export const WithForm: Story = {
	render: () => (
		<Dialog.Root>
			<Dialog.Trigger>
				<Button>Create Account</Button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Create Account</Dialog.Title>
					<Dialog.Description>
						Enter your information to create a new account.
					</Dialog.Description>
				</Dialog.Header>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						alert("Account created!");
					}}
				>
					<div>
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder="john@example.com" />
					</div>
					<div>
						<Label htmlFor="password">Password</Label>
						<Input id="password" type="password" placeholder="••••••••" />
					</div>
					<Dialog.Footer>
						<Dialog.Close>
							<Button type="button" variant="outline">
								Cancel
							</Button>
						</Dialog.Close>
						<Button type="submit">Create Account</Button>
					</Dialog.Footer>
				</form>
			</Dialog.Content>
		</Dialog.Root>
	),
};
