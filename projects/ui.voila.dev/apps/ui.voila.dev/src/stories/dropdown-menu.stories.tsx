import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@voila.dev/ui/components/button";
import { DropdownMenu } from "@voila.dev/ui/components/dropdown-menu";
import {
	ChevronDownIcon,
	DownloadIcon,
	LogOutIcon,
	PlusIcon,
	SettingsIcon,
	UserIcon,
} from "@voila.dev/ui/icons";

const meta = {
	title: "UI/DropdownMenu",
	component: DropdownMenu.Root,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DropdownMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						Open Menu <ChevronDownIcon />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.Item>
						<UserIcon />
						Profile
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<SettingsIcon />
						Settings
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
						<LogOutIcon />
						Logout
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};

export const WithGroups: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						Open Menu <ChevronDownIcon />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>Account</DropdownMenu.Label>
						<DropdownMenu.Item>
							<UserIcon />
							Profile
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<SettingsIcon />
							Settings
						</DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
						<DropdownMenu.Label>Actions</DropdownMenu.Label>
						<DropdownMenu.Item>
							<PlusIcon />
							New Item
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<DownloadIcon />
							Download
						</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};

export const WithCheckboxes: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						View Options <ChevronDownIcon />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.CheckboxItem checked>
						Show Status Bar
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.CheckboxItem checked>
						Show Activity Bar
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.CheckboxItem>Show Minimap</DropdownMenu.CheckboxItem>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};

export const WithRadioGroup: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						Theme <ChevronDownIcon />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.RadioGroup value="light">
						<DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem value="system">
							System
						</DropdownMenu.RadioItem>
					</DropdownMenu.RadioGroup>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};

export const WithSubmenu: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						More Options <ChevronDownIcon />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.Item>
						<UserIcon />
						Profile
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<SettingsIcon />
						Settings
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger>
							<PlusIcon />
							More Tools
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Positioner>
							<DropdownMenu.SubContent>
								<DropdownMenu.Item>
									<DownloadIcon />
									Export
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<LogOutIcon />
									Import
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Positioner>
					</DropdownMenu.Sub>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};

export const Destructive: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						Actions <ChevronDownIcon />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.Item>
						<UserIcon />
						Edit Profile
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<SettingsIcon />
						Preferences
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item variant="destructive">
						<LogOutIcon />
						Delete Account
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};

export const WithShortcuts: Story = {
	render: () => (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				render={
					<Button variant="outline">
						File <ChevronDownIcon />
					</Button>
				}
			/>
			<DropdownMenu.Positioner>
				<DropdownMenu.Content>
					<DropdownMenu.Item>
						<PlusIcon />
						New File
						<DropdownMenu.Shortcut>⌘N</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<DownloadIcon />
						Open File
						<DropdownMenu.Shortcut>⌘O</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
						<SettingsIcon />
						Preferences
						<DropdownMenu.Shortcut>⌘,</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Positioner>
		</DropdownMenu.Root>
	),
};
