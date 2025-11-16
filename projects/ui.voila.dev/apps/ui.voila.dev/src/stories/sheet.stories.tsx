import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { Sheet } from "@voila.dev/ui/components/sheet";
import * as React from "react";

const meta = {
	title: "UI/Sheet",
	component: Sheet.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Sheet.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Sheet.Root>
			<Sheet.Trigger>
				<Button>Open Sheet</Button>
			</Sheet.Trigger>
			<Sheet.Content>
				<Sheet.Header>
					<Sheet.Title>Edit Profile</Sheet.Title>
					<Sheet.Description>
						Make changes to your profile here. Click save when you're done.
					</Sheet.Description>
				</Sheet.Header>
				<Sheet.Body>
					<p className="text-sm text-muted-foreground">
						Your profile information goes here.
					</p>
				</Sheet.Body>
				<Sheet.Footer>
					<Sheet.Close
						render={
							<Button type="button" variant="outline">
								Cancel
							</Button>
						}
					/>
					<Button>Save changes</Button>
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet.Root>
	),
};

export const LeftSide: Story = {
	render: () => (
		<Sheet.Root>
			<Sheet.Trigger>
				<Button>Open Left Sheet</Button>
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<Sheet.Header>
					<Sheet.Title>Navigation</Sheet.Title>
					<Sheet.Description>Browse through the menu items.</Sheet.Description>
				</Sheet.Header>
				<Sheet.Body>
					<nav className="space-y-2">
						<button
							type="button"
							className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-accent"
						>
							Home
						</button>
						<button
							type="button"
							className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-accent"
						>
							About
						</button>
						<button
							type="button"
							className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-accent"
						>
							Contact
						</button>
					</nav>
				</Sheet.Body>
			</Sheet.Content>
		</Sheet.Root>
	),
};

export const TopSide: Story = {
	render: () => (
		<Sheet.Root>
			<Sheet.Trigger>
				<Button>Open Top Sheet</Button>
			</Sheet.Trigger>
			<Sheet.Content side="top">
				<Sheet.Header>
					<Sheet.Title>Notifications</Sheet.Title>
					<Sheet.Description>You have 3 new notifications.</Sheet.Description>
				</Sheet.Header>
				<Sheet.Body>
					<div className="space-y-2">
						<div className="rounded-md border p-3 text-sm">
							New message from John
						</div>
						<div className="rounded-md border p-3 text-sm">
							Your order has been shipped
						</div>
						<div className="rounded-md border p-3 text-sm">
							Payment received
						</div>
					</div>
				</Sheet.Body>
			</Sheet.Content>
		</Sheet.Root>
	),
};

export const BottomSide: Story = {
	render: () => (
		<Sheet.Root>
			<Sheet.Trigger>
				<Button>Open Bottom Sheet</Button>
			</Sheet.Trigger>
			<Sheet.Content side="bottom">
				<Sheet.Header>
					<Sheet.Title>Share</Sheet.Title>
					<Sheet.Description>Share this content with others.</Sheet.Description>
				</Sheet.Header>
				<Sheet.Body>
					<div className="flex gap-4">
						<Button variant="outline" size="icon">
							<span className="sr-only">Twitter</span>
							<span>🐦</span>
						</Button>
						<Button variant="outline" size="icon">
							<span className="sr-only">Facebook</span>
							<span>📘</span>
						</Button>
						<Button variant="outline" size="icon">
							<span className="sr-only">LinkedIn</span>
							<span>💼</span>
						</Button>
					</div>
				</Sheet.Body>
			</Sheet.Content>
		</Sheet.Root>
	),
};

export const Controlled: Story = {
	render: () => {
		const [open, setOpen] = React.useState(false);

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Controlled Sheet</Button>
				<Sheet.Root open={open} onOpenChange={setOpen}>
					<Sheet.Content>
						<Sheet.Header>
							<Sheet.Title>Controlled Sheet</Sheet.Title>
							<Sheet.Description>
								This sheet's state is controlled externally. You can open and
								close it programmatically.
							</Sheet.Description>
						</Sheet.Header>
						<Sheet.Body>
							<p className="text-sm text-muted-foreground">
								The sheet is {open ? "open" : "closed"}.
							</p>
						</Sheet.Body>
						<Sheet.Footer>
							<Sheet.Close
								render={
									<Button type="button" variant="outline">
										Cancel
									</Button>
								}
							/>
							<Button onClick={() => setOpen(false)}>Save</Button>
						</Sheet.Footer>
					</Sheet.Content>
				</Sheet.Root>
			</>
		);
	},
};
