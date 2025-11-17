import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContextMenu } from "@voila.dev/ui/components/context-menu";
import {
	DownloadIcon,
	LogOutIcon,
	PlusIcon,
	SettingsIcon,
	UserIcon,
} from "@voila.dev/ui/icons";

const meta = {
	title: "UI/ContextMenu",
	component: ContextMenu.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ContextMenu.Root>;

export default meta;
type Story = StoryObj<typeof ContextMenu.Root>;

export const Default: Story = {
	render: () => (
		<ContextMenu.Root>
			<ContextMenu.Trigger>
				<div className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed">
					Right-click here
				</div>
			</ContextMenu.Trigger>
			<ContextMenu.Positioner>
				<ContextMenu.Content>
					<ContextMenu.Item>
						<UserIcon />
						Profile
					</ContextMenu.Item>
					<ContextMenu.Item>
						<SettingsIcon />
						Settings
					</ContextMenu.Item>
					<ContextMenu.Separator />
					<ContextMenu.Item>
						<LogOutIcon />
						Logout
					</ContextMenu.Item>
				</ContextMenu.Content>
			</ContextMenu.Positioner>
		</ContextMenu.Root>
	),
};

export const WithGroups: Story = {
	render: () => (
		<ContextMenu.Root>
			<ContextMenu.Trigger>
				<div className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed">
					Right-click here
				</div>
			</ContextMenu.Trigger>
			<ContextMenu.Positioner>
				<ContextMenu.Content>
					<ContextMenu.Group>
						<ContextMenu.Label>Account</ContextMenu.Label>
						<ContextMenu.Item>
							<UserIcon />
							Profile
						</ContextMenu.Item>
						<ContextMenu.Item>
							<SettingsIcon />
							Settings
						</ContextMenu.Item>
					</ContextMenu.Group>
					<ContextMenu.Separator />
					<ContextMenu.Group>
						<ContextMenu.Label>Actions</ContextMenu.Label>
						<ContextMenu.Item>
							<PlusIcon />
							New Item
						</ContextMenu.Item>
						<ContextMenu.Item>
							<DownloadIcon />
							Download
						</ContextMenu.Item>
					</ContextMenu.Group>
				</ContextMenu.Content>
			</ContextMenu.Positioner>
		</ContextMenu.Root>
	),
};

export const WithCheckboxes: Story = {
	render: () => (
		<ContextMenu.Root>
			<ContextMenu.Trigger>
				<div className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed">
					Right-click here
				</div>
			</ContextMenu.Trigger>
			<ContextMenu.Positioner>
				<ContextMenu.Content>
					<ContextMenu.CheckboxItem checked>
						Show Status Bar
					</ContextMenu.CheckboxItem>
					<ContextMenu.CheckboxItem checked>
						Show Activity Bar
					</ContextMenu.CheckboxItem>
					<ContextMenu.CheckboxItem>Show Minimap</ContextMenu.CheckboxItem>
				</ContextMenu.Content>
			</ContextMenu.Positioner>
		</ContextMenu.Root>
	),
};

export const WithRadioGroup: Story = {
	render: () => (
		<ContextMenu.Root>
			<ContextMenu.Trigger>
				<div className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed">
					Right-click here
				</div>
			</ContextMenu.Trigger>
			<ContextMenu.Positioner>
				<ContextMenu.Content>
					<ContextMenu.RadioGroup value="light">
						<ContextMenu.RadioItem value="light">Light</ContextMenu.RadioItem>
						<ContextMenu.RadioItem value="dark">Dark</ContextMenu.RadioItem>
						<ContextMenu.RadioItem value="system">System</ContextMenu.RadioItem>
					</ContextMenu.RadioGroup>
				</ContextMenu.Content>
			</ContextMenu.Positioner>
		</ContextMenu.Root>
	),
};

export const WithSubmenu: Story = {
	render: () => (
		<ContextMenu.Root>
			<ContextMenu.Trigger>
				<div className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed">
					Right-click here
				</div>
			</ContextMenu.Trigger>
			<ContextMenu.Positioner>
				<ContextMenu.Content>
					<ContextMenu.Item>
						<UserIcon />
						Profile
					</ContextMenu.Item>
					<ContextMenu.Item>
						<SettingsIcon />
						Settings
					</ContextMenu.Item>
					<ContextMenu.Separator />
					<ContextMenu.Sub>
						<ContextMenu.SubTrigger>
							<PlusIcon />
							More Tools
						</ContextMenu.SubTrigger>
						<ContextMenu.Positioner>
							<ContextMenu.SubContent>
								<ContextMenu.Item>
									<DownloadIcon />
									Export
								</ContextMenu.Item>
								<ContextMenu.Item>
									<LogOutIcon />
									Import
								</ContextMenu.Item>
							</ContextMenu.SubContent>
						</ContextMenu.Positioner>
					</ContextMenu.Sub>
				</ContextMenu.Content>
			</ContextMenu.Positioner>
		</ContextMenu.Root>
	),
};

export const Destructive: Story = {
	render: () => (
		<ContextMenu.Root>
			<ContextMenu.Trigger>
				<div className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed">
					Right-click here
				</div>
			</ContextMenu.Trigger>
			<ContextMenu.Positioner>
				<ContextMenu.Content>
					<ContextMenu.Item>
						<UserIcon />
						Edit Profile
					</ContextMenu.Item>
					<ContextMenu.Item>
						<SettingsIcon />
						Preferences
					</ContextMenu.Item>
					<ContextMenu.Separator />
					<ContextMenu.Item variant="destructive">
						<LogOutIcon />
						Delete Account
					</ContextMenu.Item>
				</ContextMenu.Content>
			</ContextMenu.Positioner>
		</ContextMenu.Root>
	),
};

export const WithShortcuts: Story = {
	render: () => (
		<ContextMenu.Root>
			<ContextMenu.Trigger>
				<div className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed">
					Right-click here
				</div>
			</ContextMenu.Trigger>
			<ContextMenu.Positioner>
				<ContextMenu.Content>
					<ContextMenu.Item>
						<PlusIcon />
						New File
						<ContextMenu.Shortcut>⌘N</ContextMenu.Shortcut>
					</ContextMenu.Item>
					<ContextMenu.Item>
						<DownloadIcon />
						Open File
						<ContextMenu.Shortcut>⌘O</ContextMenu.Shortcut>
					</ContextMenu.Item>
					<ContextMenu.Separator />
					<ContextMenu.Item>
						<SettingsIcon />
						Preferences
						<ContextMenu.Shortcut>⌘,</ContextMenu.Shortcut>
					</ContextMenu.Item>
				</ContextMenu.Content>
			</ContextMenu.Positioner>
		</ContextMenu.Root>
	),
};
